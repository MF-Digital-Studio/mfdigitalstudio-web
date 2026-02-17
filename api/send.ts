import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(request: Request) {
    // CORS ayarları (Tarayıcıdan gelen isteği kabul etmek için)
    if (request.method === 'OPTIONS') {
        return new Response(null, {
            status: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
            },
        });
    }

    if (request.method !== 'POST') {
        return new Response(JSON.stringify({ message: 'Method not allowed' }), {
            status: 405,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    try {
        const body = await request.json();
        const { name, email, phone, service, message } = body;

        const { data, error } = await resend.emails.send({
            from: process.env.MAIL_FROM as string,
            to: process.env.MAIL_TO as string,
            subject: `Yeni Proje Talebi: ${name}`,
            html: `
        <h3>MF Digital Studio - Yeni İletişim Formu</h3>
        <p><strong>Ad Soyad:</strong> ${name}</p>
        <p><strong>E-posta:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>Hizmet:</strong> ${service}</p>
        <p><strong>Mesaj:</strong></p>
        <blockquote style="background: #f4f4f4; padding: 10px;">${message}</blockquote>
      `,
        });

        if (error) {
            return new Response(JSON.stringify({ error }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        return new Response(JSON.stringify(data), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}