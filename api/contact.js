// api/contact.js (Vercel Function - ESM)
import nodemailer from "nodemailer";
import { z } from "zod";

const ContactSchema = z.object({
    // Frontend bazen "name" gönderiyor; aşağıda fullName'e map'liyoruz
    fullName: z.string().min(2).max(80),
    email: z.string().email().max(120),
    phone: z.string().max(40).optional().or(z.literal("")),
    service: z.string().min(1).max(80),
    message: z.string().min(3).max(2000),
    website: z.string().max(200).optional().or(z.literal("")), // honeypot
});

export default async function handler(req, res) {
    if (req.method === "OPTIONS") return res.status(204).end();
    if (req.method !== "POST") {
        return res.status(405).json({ ok: false, error: "METHOD_NOT_ALLOWED" });
    }

    const body = typeof req.body === "string" ? safeJson(req.body) : (req.body || {});

    // Honeypot doluysa mail atma ama ok dön
    if (body.website) return res.status(200).json({ ok: true });

    // Uyumluluk: frontend "name" gönderiyorsa fullName'e aktar
    if (!body.fullName && body.name) body.fullName = body.name;

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

    // Env kontrol
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
        return res.status(500).json({
            ok: false,
            error: "MISSING_SMTP_ENV",
            message: "SMTP_USER / SMTP_PASS tanımlı değil.",
        });
    }

    const serviceText = serviceLabel(service);
    const subject = `Yeni Talep: ${serviceText} (${fullName})`;

    // Çok sade düz metin (fallback)
    const text = `
Yeni talep geldi

Ad Soyad: ${fullName}
E-posta: ${email}
Telefon: ${phone || "-"}
Hizmet: ${serviceText}

Mesaj:
${message}
`.trim();

    // Çok sade HTML (neredeyse düz metin)
    const html = `
<div>
  <h2>Yeni Talep</h2>
  <p><b>Ad Soyad:</b> ${escapeHtml(fullName)}<br/>
     <b>E-posta:</b> <a href="mailto:${encodeURIComponent(email)}">${escapeHtml(email)}</a><br/>
     <b>Telefon:</b> ${escapeHtml(phone || "-")}<br/>
     <b>Hizmet:</b> ${escapeHtml(serviceText)}</p>
  <hr/>
  <p><b>Mesaj:</b></p>
  <pre style="white-space:pre-wrap;font-family:inherit;">${escapeHtml(message)}</pre>
</div>
`.trim();

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

        await transporter.sendMail({
            from: process.env.MAIL_FROM || `MF Digital Studio <${process.env.SMTP_USER}>`,
            to: process.env.MAIL_TO || process.env.SMTP_USER,
            replyTo: email, // Gmail'de direkt "Yanıtla" dediğinizde kullanıcıya gider
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

// ---------- helpers ----------

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
