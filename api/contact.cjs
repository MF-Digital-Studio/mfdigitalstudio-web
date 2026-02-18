const nodemailer = require("nodemailer");
const { z } = require("zod");

const ContactSchema = z.object({
    fullName: z.string().min(2).max(80),
    email: z.string().email().max(120),
    phone: z.string().max(40).optional().or(z.literal("")),
    service: z.string().min(2).max(80),
    message: z.string().min(10).max(2000),
    website: z.string().max(200).optional().or(z.literal("")), // honeypot
});

module.exports = async function handler(req, res) {
    // Vercel Functions için CORS gerekmez (same-origin çağıracağız)
    if (req.method === "OPTIONS") return res.status(204).end();
    if (req.method !== "POST") return res.status(405).json({ ok: false, error: "METHOD_NOT_ALLOWED" });

    // Body parse (Vercel otomatik parse eder ama garantiye alalım)
    const body = typeof req.body === "string" ? safeJson(req.body) : req.body;

    // Honeypot doluysa “ok” dön ama mail atma
    if (body?.website) return res.status(200).json({ ok: true });

    const parsed = ContactSchema.safeParse(body);
    if (!parsed.success) {
        return res.status(400).json({
            ok: false,
            error: "VALIDATION_ERROR",
            details: parsed.error.issues.map((i) => ({ path: i.path.join("."), message: i.message })),
        });
    }

    const { fullName, email, phone, service, message } = parsed.data;

    try {
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || "smtp.gmail.com",
            port: Number(process.env.SMTP_PORT || 465),
            secure: (process.env.SMTP_SECURE || "true") === "true",
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS, // App Password
            },
        });

        const subject = `[MF] Yeni Form: ${service}`;
        const text = `Ad Soyad: ${fullName}
E-posta: ${email}
Telefon: ${phone || "-"}
Hizmet: ${service}

Mesaj:
${message}
`;

        await transporter.sendMail({
            from: process.env.MAIL_FROM || `MF Digital Studio <${process.env.SMTP_USER}>`,
            to: process.env.MAIL_TO || process.env.SMTP_USER,
            replyTo: email,
            subject,
            text,
            html: `<h2>Yeni Form</h2>
<p><b>Ad Soyad:</b> ${escapeHtml(fullName)}</p>
<p><b>E-posta:</b> ${escapeHtml(email)}</p>
<p><b>Telefon:</b> ${escapeHtml(phone || "-")}</p>
<p><b>Hizmet:</b> ${escapeHtml(service)}</p>
<hr/>
<pre style="white-space:pre-wrap;background:#f6f6f6;padding:12px;border-radius:8px">${escapeHtml(message)}</pre>`,
        });

        return res.status(200).json({ ok: true });
    } catch (err) {
        console.error("MAIL_SEND_ERROR", err);
        return res.status(500).json({ ok: false, error: "MAIL_SEND_ERROR" });
    }
};

function safeJson(s) {
    try { return JSON.parse(s); } catch { return {}; }
}
function escapeHtml(str) {
    return String(str)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}
