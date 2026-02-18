import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import nodemailer from 'nodemailer';
import { z } from 'zod';

const app = express();

// --- Security / headers
app.use(helmet());
app.use(express.json({ limit: '200kb' }));

// --- CORS
const allowedOrigins = (process.env.ALLOWED_ORIGINS || '')
    .split(',')
    .map(s => s.trim())
    .filter(Boolean);

app.use(
    cors({
        origin: function (origin, cb) {
            // allow non-browser tools / server-to-server
            if (!origin) return cb(null, true);
            if (allowedOrigins.includes(origin)) return cb(null, true);
            return cb(new Error('CORS blocked: ' + origin), false);
        },
    })
);

// --- Rate limit (basic anti-spam)
app.use(
    '/api/contact',
    rateLimit({
        windowMs: 10 * 60 * 1000,
        max: 10,
        standardHeaders: true,
        legacyHeaders: false,
    })
);

// --- Validation schema
const ContactSchema = z.object({
    fullName: z.string().min(2).max(80),
    email: z.string().email().max(120),
    phone: z.string().max(40).optional().or(z.literal('')),
    service: z.string().min(2).max(80),
    message: z.string().min(10).max(2000),
    // Honeypot field (must be empty)
    website: z.string().max(200).optional().or(z.literal('')),
});

// --- SMTP transporter
function getTransporter() {
    const port = Number(process.env.SMTP_PORT || 465);
    const secure =
        (process.env.SMTP_SECURE || '').toLowerCase() === 'true' ? true : port === 465;

    return nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port,
        secure,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });
}

app.get('/api/health', (_req, res) => res.json({ ok: true }));

app.post('/api/contact', async (req, res) => {
    // Honeypot: if filled, pretend success
    if (req.body?.website) return res.status(200).json({ ok: true });

    const parsed = ContactSchema.safeParse(req.body);
    if (!parsed.success) {
        return res.status(400).json({
            ok: false,
            error: 'VALIDATION_ERROR',
            details: parsed.error.issues.map(i => ({ path: i.path.join('.'), message: i.message })),
        });
    }

    const { fullName, email, phone, service, message } = parsed.data;

    const subject = `[MF] Yeni İletişim Formu: ${service}`;
    const text = `
Yeni iletişim formu gönderimi:

Ad Soyad: ${fullName}
E-posta: ${email}
Telefon: ${phone || '-'}
Hizmet: ${service}

Mesaj:
${message}

---
Gönderim zamanı: ${new Date().toISOString()}
`;

    const html = `
  <div style="font-family: Arial, sans-serif; line-height: 1.5">
    <h2>Yeni iletişim formu gönderimi</h2>
    <p><strong>Ad Soyad:</strong> ${escapeHtml(fullName)}</p>
    <p><strong>E-posta:</strong> ${escapeHtml(email)}</p>
    <p><strong>Telefon:</strong> ${escapeHtml(phone || '-')}</p>
    <p><strong>Hizmet:</strong> ${escapeHtml(service)}</p>
    <hr />
    <p><strong>Mesaj:</strong></p>
    <pre style="white-space: pre-wrap; background:#f6f6f6; padding:12px; border-radius:8px">${escapeHtml(
        message
    )}</pre>
    <p style="color:#666">Gönderim zamanı: ${new Date().toISOString()}</p>
  </div>
  `;

    try {
        const transporter = getTransporter();

        // Optional: verify transporter once (can be removed after stable)
        // await transporter.verify();

        await transporter.sendMail({
            from: process.env.MAIL_FROM || process.env.SMTP_USER,
            to: process.env.MAIL_TO || process.env.SMTP_USER,
            replyTo: email, // you can reply directly to the sender
            subject,
            text,
            html,
        });

        return res.status(200).json({ ok: true });
    } catch (err) {
        console.error('MAIL_SEND_ERROR', err);
        return res.status(500).json({ ok: false, error: 'MAIL_SEND_ERROR' });
    }
});

function escapeHtml(str) {
    return String(str)
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#039;');
}

const port = Number(process.env.PORT || 8787);
app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));
