import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { buildAutoReplyHtml, buildNotificationHtml } from '@/lib/email-template';

const resend = new Resend(process.env.RESEND_API_KEY);

const NOTIFICATION_EMAIL = 'contacto@heed.mx';

const SERVICE_LABELS: Record<string, string> = {
  rmm: 'Servicios RMM / Monitoreo',
  cloud: 'Soluciones en la Nube (ERP/CRM)',
  licenses: 'Licencias Microsoft',
  all: 'Consulta general',
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, employees, service, message } = body;

    if (!name || !email || !company || !service) {
      return NextResponse.json(
        { success: false, message: 'Faltan campos requeridos' },
        { status: 400 },
      );
    }

    const serviceLabel = SERVICE_LABELS[service] || service;

    // 1. Send notification email to HEED
    await resend.emails.send({
      from: 'HEED Website <contacto@heed.mx>',
      to: [NOTIFICATION_EMAIL],
      replyTo: email,
      subject: `Nuevo contacto HEED: ${name} - ${serviceLabel}`,
      html: buildNotificationHtml({
        name,
        email,
        phone: phone || 'No proporcionado',
        company,
        employees: employees || 'No especificado',
        service: serviceLabel,
        message,
      }),
    });

    // 2. Send auto-reply to the client
    try {
      await resend.emails.send({
        from: 'HEED <contacto@heed.mx>',
        to: [email],
        subject: `Gracias por contactarnos, ${name} — HEED`,
        html: buildAutoReplyHtml({ name, service: serviceLabel, company }),
      });
    } catch (emailError) {
      // Log but don't fail the request — the notification was already sent
      console.error('Error sending auto-reply email:', emailError);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact API error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { success: false, message: 'Error interno del servidor', error: errorMessage },
      { status: 500 },
    );
  }
}
