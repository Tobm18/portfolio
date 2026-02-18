import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// ALLOWED_ORIGIN est maintenant une variable d'environnement unique (une seule valeur)
const getAllowedOrigin = () => (process.env.ALLOWED_ORIGIN || '').trim();

export async function POST(req: NextRequest) {
  // Vérification de l'origine
  const origin = req.headers.get('origin') || req.headers.get('referer') || '';
  const allowedOrigin = getAllowedOrigin();
  if (!allowedOrigin || !origin.startsWith(allowedOrigin)) {
    return NextResponse.json({ message: 'Requête non autorisée.' }, { status: 403 });
  }

  try {
    const { name, email, subject, message } = await req.json();
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ message: 'Tous les champs sont requis.' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `Portfolio <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO_EMAIL || process.env.SMTP_USER,
      subject: `[Portfolio] ${subject}`,
      replyTo: email,
      text: `Nom: ${name}\nEmail: ${email}\n\n${message}`,
      html: `<p><b>Nom:</b> ${name}</p><p><b>Email:</b> ${email}</p><p>${message.replace(/\n/g, '<br>')}</p>`
    });

    return NextResponse.json({ message: 'Merci pour votre message ! Je vous répondrai bientôt.' });
  } catch (error) {
    return NextResponse.json({ message: "Erreur lors de l'envoi du message.", error: String(error) }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ message: 'Méthode non autorisée.' }, { status: 405 });
}
