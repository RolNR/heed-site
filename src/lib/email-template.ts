interface EmailTemplateParams {
  name: string;
  service: string;
  company: string;
}

interface NotificationEmailParams {
  name: string;
  email: string;
  phone: string;
  company: string;
  employees: string;
  service: string;
  message: string;
}

export function buildNotificationHtml({ name, email, phone, company, employees, service, message }: NotificationEmailParams): string {
  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nuevo contacto - HEED</title>
</head>
<body style="margin:0;padding:0;background-color:#f1f5f9;font-family:Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f1f5f9;">
    <tr>
      <td align="center" style="padding:40px 16px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

          <!-- Header -->
          <tr>
            <td align="center" style="background-color:#0d9488;padding:24px;">
              <h1 style="margin:0;font-size:20px;color:#ffffff;font-weight:700;">Nuevo contacto desde heed.mx</h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background-color:#ffffff;padding:32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:8px 0;font-size:14px;color:#64748b;width:110px;vertical-align:top;font-weight:600;">Nombre:</td>
                  <td style="padding:8px 0;font-size:14px;color:#0f172a;">${name}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0;font-size:14px;color:#64748b;width:110px;vertical-align:top;font-weight:600;">Email:</td>
                  <td style="padding:8px 0;font-size:14px;color:#0f172a;"><a href="mailto:${email}" style="color:#0d9488;text-decoration:none;">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding:8px 0;font-size:14px;color:#64748b;width:110px;vertical-align:top;font-weight:600;">Tel&eacute;fono:</td>
                  <td style="padding:8px 0;font-size:14px;color:#0f172a;">${phone}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0;font-size:14px;color:#64748b;width:110px;vertical-align:top;font-weight:600;">Empresa:</td>
                  <td style="padding:8px 0;font-size:14px;color:#0f172a;">${company}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0;font-size:14px;color:#64748b;width:110px;vertical-align:top;font-weight:600;">Empleados:</td>
                  <td style="padding:8px 0;font-size:14px;color:#0f172a;">${employees}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0;font-size:14px;color:#64748b;width:110px;vertical-align:top;font-weight:600;">Servicio:</td>
                  <td style="padding:8px 0;font-size:14px;color:#0f172a;font-weight:600;">${service}</td>
                </tr>
                <tr>
                  <td colspan="2" style="padding:16px 0 0;">
                    <p style="margin:0 0 8px;font-size:14px;color:#64748b;font-weight:600;">Mensaje:</p>
                    <div style="background-color:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:16px;font-size:14px;line-height:1.6;color:#334155;">
                      ${message || '<em style="color:#94a3b8;">Sin mensaje adicional</em>'}
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#0f172a;padding:16px 32px;text-align:center;">
              <p style="margin:0;font-size:12px;color:#94a3b8;">
                Enviado desde el formulario de contacto de <a href="https://www.heed.mx" style="color:#5eead4;text-decoration:none;">heed.mx</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function buildAutoReplyHtml({ name, service, company }: EmailTemplateParams): string {
  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Gracias por contactarnos - HEED</title>
</head>
<body style="margin:0;padding:0;background-color:#f1f5f9;font-family:Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f1f5f9;">
    <tr>
      <td align="center" style="padding:40px 16px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

          <!-- Header -->
          <tr>
            <td align="center" style="background-color:#0d9488;padding:36px 24px;">
              <img src="https://www.heed.mx/images/logo-white.png" alt="HEED" width="140" style="display:block;max-width:140px;height:auto;" />
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background-color:#ffffff;padding:40px 32px;">
              <h1 style="margin:0 0 24px;font-size:22px;color:#0f172a;font-weight:700;">
                Hola ${name},
              </h1>
              <p style="margin:0 0 16px;font-size:16px;line-height:1.6;color:#334155;">
                Gracias por contactarnos. Hemos recibido tu mensaje y nuestro equipo se pondr&aacute; en contacto contigo pronto.
              </p>
              <p style="margin:0 0 28px;font-size:16px;line-height:1.6;color:#334155;">
                Normalmente respondemos en menos de 24 horas h&aacute;biles.
              </p>

              <!-- Summary box -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f0fdfa;border:1px solid #ccfbf1;border-radius:8px;">
                <tr>
                  <td style="padding:20px 24px;">
                    <p style="margin:0 0 12px;font-size:14px;font-weight:700;color:#0d9488;text-transform:uppercase;letter-spacing:0.5px;">
                      Resumen de tu solicitud
                    </p>
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding:6px 0;font-size:14px;color:#64748b;width:90px;vertical-align:top;">Servicio:</td>
                        <td style="padding:6px 0;font-size:14px;color:#0f172a;font-weight:600;">${service}</td>
                      </tr>
                      <tr>
                        <td style="padding:6px 0;font-size:14px;color:#64748b;width:90px;vertical-align:top;">Empresa:</td>
                        <td style="padding:6px 0;font-size:14px;color:#0f172a;font-weight:600;">${company}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <p style="margin:28px 0 0;font-size:16px;line-height:1.6;color:#334155;">
                Si tienes alguna pregunta adicional, no dudes en escribirnos a
                <a href="mailto:contacto@heed.mx" style="color:#0d9488;text-decoration:none;font-weight:600;">contacto@heed.mx</a>.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#0f172a;padding:28px 32px;text-align:center;">
              <p style="margin:0 0 4px;font-size:14px;font-weight:700;color:#ffffff;">
                HEED &mdash; Microsoft Partner
              </p>
              <p style="margin:0 0 12px;font-size:12px;color:#94a3b8;">
                Soluciones digitales para PYMEs en M&eacute;xico
              </p>
              <p style="margin:0;font-size:12px;color:#94a3b8;line-height:1.8;">
                <a href="mailto:contacto@heed.mx" style="color:#5eead4;text-decoration:none;">contacto@heed.mx</a>
                &nbsp;&bull;&nbsp;
                <a href="tel:+5215586443982" style="color:#5eead4;text-decoration:none;">+52 1 55 8644 3982</a>
                &nbsp;&bull;&nbsp;
                <a href="https://www.heed.mx" style="color:#5eead4;text-decoration:none;">www.heed.mx</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
