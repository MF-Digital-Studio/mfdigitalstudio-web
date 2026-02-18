// api/contact.js  (ESM - Vercel Function)
import nodemailer from "nodemailer";
import { z } from "zod";

const ContactSchema = z.object({
    fullName: z.string().min(2, "Ad Soyad gereklidir").max(80, "Ad Soyad çok uzun"),
    email: z.string().email("Geçerli bir e-posta giriniz").max(120, "E-posta çok uzun"),
    phone: z.string().max(40, "Telefon çok uzun").optional().or(z.literal("")),
    service: z.string().min(1, "Hizmet seçiniz").max(80, "Hizmet çok uzun"),
    message: z.string().min(3, "Mesaj çok kısa").max(2000, "Mesaj çok uzun"),
    website: z.string().max(200).optional().or(z.literal("")), // honeypot (botlar doldurur)
});

export default async function handler(req, res) {
    if (req.method === "OPTIONS") return res.status(204).end();
    if (req.method !== "POST") {
        return res.status(405).json({ ok: false, error: "METHOD_NOT_ALLOWED" });
    }

    const body = typeof req.body === "string" ? safeJson(req.body) : req.body;

    // Honeypot doluysa mail atma ama "ok" dön
    if (body?.website) return res.status(200).json({ ok: true });

    // --- Uyumluluk: frontend bazen "name" gönderir ---
    // Eğer body.fullName yoksa, body.name'i fullName'e map'le
    if (!body?.fullName && body?.name) {
        body.fullName = body.name;
    }

    const parsed = ContactSchema.safeParse(body);
    if (!parsed.success) {
        return res.status(400).json({
            ok: false,
            error: "VALIDATION_ERROR",
            details: parsed.error.issues.map((i) => ({
                path: i.path.join("."),
                message: i.message,
            })),
        });
    }

    const { fullName, email, phone, service, message } = parsed.data;

    // SMTP env kontrolleri
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
        return res.status(500).json({
            ok: false,
            error: "MISSING_SMTP_ENV",
            message: "SMTP_USER / SMTP_PASS tanımlı değil.",
        });
    }

    try {
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || "smtp.gmail.com",
            port: Number(process.env.SMTP_PORT || 465),
            secure: (process.env.SMTP_SECURE || "true") === "true",
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS, // Google App Password
            },
        });

        const serviceText = serviceLabel(service);
        const subject = `Yeni Talep • ${serviceText} • ${fullName}`;

        const text = `
Yeni iletişim talebi alındı

Ad Soyad: ${fullName}
E-posta: ${email}
Telefon: ${phone || "-"}
Hizmet: ${serviceText}

Mesaj:
${message}

— MF Digital Studio
`.trim();

        const html = buildHtmlTemplate({
            fullName,
            email,
            phone: phone || "-",
            serviceText,
            message,
            subject,
        });

        await transporter.sendMail({
            from: process.env.MAIL_FROM || `MF Digital Studio <${process.env.SMTP_USER}>`,
            to: process.env.MAIL_TO || process.env.SMTP_USER,
            replyTo: email,
            subject,
            text,
            html,
        });

        return res.status(200).json({ ok: true });
    } catch (err) {
        console.error("MAIL_SEND_ERROR", err);
        return res.status(500).json({
            ok: false,
            error: "MAIL_SEND_ERROR",
            message: err?.message || "Unknown error",
        });
    }
}

// ---------------- helpers ----------------

function safeJson(s) {
    try {
        return JSON.parse(s);
    } catch {
        return {};
    }
}

function serviceLabel(value) {
    const map = {
        "web-design": "Web Tasarım",
        "web-development": "Web Geliştirme",
        ecommerce: "E-Ticaret",
        seo: "SEO & Optimizasyon",
        "qr-menu": "QR Menü",
    };
    return map[value] || value;
}

function escapeHtml(str) {
    return String(str ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function buildHtmlTemplate({ fullName, email, phone, serviceText, message, subject }) {
    const now = new Date().toLocaleString("tr-TR");

    const mailtoReply = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(
        "Re: " + subject
    )}`;
    const telHref = `tel:${String(phone || "").replace(/\s+/g, "")}`;

    return `
<div style="background:#0b1020;padding:24px;font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;color:#e5e7eb">
  <div style="max-width:720px;margin:0 auto">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px">
      <div style="display:flex;align-items:center;gap:12px">
        <div style="width:40px;height:40px;border-radius:10px;background:linear-gradient(135deg,#2563eb,#7c3aed);display:flex;align-items:center;justify-content:center;font-weight:800;color:#fff">
          MF
        </div>
        <div>
          <div style="font-size:14px;color:#9ca3af">MF Digital Studio</div>
          <div style="font-size:18px;font-weight:700;color:#fff">Yeni İletişim Talebi</div>
        </div>
      </div>
      <div style="font-size:12px;color:#9ca3af">${escapeHtml(now)}</div>
    </div>

    <div style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.12);border-radius:14px;padding:18px;margin-bottom:14px">
      <div style="display:inline-block;font-size:12px;color:#c7d2fe;background:rgba(99,102,241,0.18);border:1px solid rgba(99,102,241,0.35);padding:6px 10px;border-radius:999px;margin-bottom:12px">
        Hizmet: <b style="color:#fff">${escapeHtml(serviceText)}</b>
      </div>

      <table style="width:100%;border-collapse:separate;border-spacing:0 10px">
        <tr>
          <td style="width:120px;color:#9ca3af;font-size:13px">Ad Soyad</td>
          <td style="color:#fff;font-size:14px;font-weight:600">${escapeHtml(fullName)}</td>
        </tr>
        <tr>
          <td style="color:#9ca3af;font-size:13px">E-posta</td>
          <td style="font-size:14px">
            <a href="mailto:${encodeURIComponent(email)}" style="color:#60a5fa;text-decoration:none;font-weight:600">
              ${escapeHtml(email)}
            </a>
          </td>
        </tr>
        <tr>
          <td style="color:#9ca3af;font-size:13px">Telefon</td>
          <td style="color:#fff;font-size:14px;font-weight:600">${escapeHtml(phone)}</td>
        </tr>
      </table>
    </div>

    <div style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.12);border-radius:14px;padding:18px;margin-bottom:14px">
      <div style="font-size:13px;color:#9ca3af;margin-bottom:8px">Mesaj</div>
      <div style="white-space:pre-wrap;line-height:1.6;color:#fff;font-size:14px">
        ${escapeHtml(message)}
      </div>
    </div>

    <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:10px">
      <a href="${escapeHtml(mailtoReply)}"
         style="background:linear-gradient(135deg,#2563eb,#7c3aed);color:#fff;text-decoration:none;padding:12px 14px;border-radius:12px;font-weight:700;font-size:14px;display:inline-block">
        Yanıtla
      </a>
      <a href="${escapeHtml(telHref)}"
         style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.14);color:#e5e7eb;text-decoration:none;padding:12px 14px;border-radius:12px;font-weight:700;font-size:14px;display:inline-block">
        Ara
      </a>
    </div>

    <div style="margin-top:18px;font-size:12px;color:#9ca3af">
      Bu e-posta mfdigitalstudio.com iletişim formundan otomatik gönderildi.
    </div>
  </div>
</div>
`.trim();
}
