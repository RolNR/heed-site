import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { buildAutoReplyHtml } from '@/lib/email-template';

const resend = new Resend(process.env.RESEND_API_KEY);

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

    // 1. Send to Web3Forms (internal notification)
    const web3Response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
        subject: `Nuevo contacto HEED: ${name} - ${serviceLabel}`,
        from_name: 'HEED Website',
        Nombre: name,
        Email: email,
        'Teléfono': phone || 'No proporcionado',
        Empresa: company,
        Empleados: employees || 'No especificado',
        Servicio: serviceLabel,
        Mensaje: message || 'Sin mensaje adicional',
      }),
    });

    const web3Result = await web3Response.json();

    if (!web3Result.success) {
      return NextResponse.json(
        { success: false, message: 'Error al enviar el formulario' },
        { status: 500 },
      );
    }

    // 2. Send auto-reply via Resend
    try {
      await resend.emails.send({
        from: 'HEED <contacto@heed.mx>',
        to: [email],
        subject: `Gracias por contactarnos, ${name} — HEED`,
        html: buildAutoReplyHtml({ name, service: serviceLabel, company }),
      });
    } catch (emailError) {
      // Log but don't fail the request — the form was already submitted
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
