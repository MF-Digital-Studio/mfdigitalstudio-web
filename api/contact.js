import nodemailer from "nodemailer";
import { z } from "zod";

const ContactSchema = z.object({
    fullName: z.string().min(2).max(80),
    email: z.string().email().max(120),
    phone: z.string().max(40).optional().or(z.literal("")),
    service: z.string().min(2).max(80),
    message: z.string().min(10).max(2000),
    website: z.string().max(200).optional().or(z.literal("")),
});

export default async function handler(req, res) {
    if (req.method === "OPTIONS") return res.status(204).end();
    if (req.method !== "POST") return res.status(405).json({ ok: false, error: "METHOD_NOT_ALLOWED" });

    const body = typeof req.body === "string" ? safeJson(req.body) : req.body;

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
                pass: process.env.SMTP_PASS,
            },
        });

        await transporter.sendMail({
            from: process.env.MAIL_FROM || `MF Digital Studio <${process.env.SMTP_USER}>`,
            to: process.env.MAIL_TO || process.env.SMTP_USER,
            replyTo: email,
            subject: `[MF] Yeni Form: ${service}`,
            text: `Ad Soyad: ${fullName}
E-posta: ${email}
Telefon: ${phone || "-"}
Hizmet: ${service}

Mesaj:
${message}
`,
        });

        return res.status(200).json({ ok: true });
    } catch (err) {
        console.error("MAIL_SEND_ERROR", err);
        return res.status(500).json({ ok: false, error: "MAIL_SEND_ERROR", message: err?.message || "Unknown error" });
    }
}

function safeJson(s) {
    try { return JSON.parse(s); } catch { return {}; }
}
