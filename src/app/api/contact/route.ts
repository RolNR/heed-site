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

// In-memory sliding-window limiter. Resets on cold start, but Fluid Compute
// reuses warm instances, so this still catches sustained bursts from one IP.
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const requestLog = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (requestLog.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  timestamps.push(now);
  requestLog.set(ip, timestamps);
  return timestamps.length > RATE_LIMIT_MAX;
}

export async function POST(request: Request) {
  try {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'unknown';
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, message: 'Demasiadas solicitudes, intenta de nuevo más tarde' },
        { status: 429 },
      );
    }

    const body = await request.json();
    const { name, email, phone, company, employees, service, message, website } = body;

    // Honeypot: real users never fill this hidden field, bots do.
    // Report success so bots don't learn to skip the field.
    if (website) {
      return NextResponse.json({ success: true });
    }

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
    return NextResponse.json(
      { success: false, message: 'Error interno del servidor' },
      { status: 500 },
    );
  }
}
