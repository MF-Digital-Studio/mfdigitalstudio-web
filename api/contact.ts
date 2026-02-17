import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function esc(s: string) {
    return String(s)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

export default async function handler(req: any, res: any) {
    if (req.method !== "POST") {
        return res.status(405).json({ ok: false, error: "Method not allowed" });
    }

    try {
        const { name, email, phone, service, message, website } = req.body || {};

        // Honeypot: botlar doldurur, gerçek kullanıcı boş bırakır
        if (website) return res.status(200).json({ ok: true });

        if (!name || !email || !phone || !service || !message) {
            return res.status(400).json({ ok: false, error: "Eksik alan var." });
        }

        const to = process.env.MAIL_TO || "info@mfdigitalstudio.com";
        const from = process.env.MAIL_FROM || "onboarding@resend.dev";

        const subject = `Yeni İletişim Formu: ${name} (${service})`;

        const html = `
      <div style="font-family:ui-sans-serif,system-ui;line-height:1.6">
        <h2>Yeni İletişim Formu</h2>
        <p><b>Ad Soyad:</b> ${esc(name)}</p>
        <p><b>E-posta:</b> ${esc(email)}</p>
        <p><b>Telefon:</b> ${esc(phone)}</p>
        <p><b>Hizmet:</b> ${esc(service)}</p>
        <hr/>
        <p><b>Mesaj:</b></p>
        <p>${esc(message).replaceAll("\n", "<br/>")}</p>
      </div>
    `;

        const result = await resend.emails.send({
            from,
            to,
            replyTo: email, // info@ gelen mailde reply direkt müşteriye gitsin
            subject,
            html,
        });

        return res.status(200).json({ ok: true, id: result.data?.id });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ ok: false, error: "Mail gönderilemedi." });
    }
}
