import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/routing';

export async function generateMetadata() {
  return {
    title: 'Términos y Condiciones | HEED',
    description: 'Términos y condiciones de uso de los servicios de HEED.',
  };
}

export default async function TermsPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const isSpanish = locale === 'es';

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-gradient-to-br from-dark-800 to-dark-900 py-12 sm:py-16 md:py-20 pt-28 sm:pt-32 md:pt-36">
        <div className="container-custom">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4">
            {isSpanish ? 'Términos y Condiciones' : 'Terms and Conditions'}
          </h1>
          <p className="text-dark-300 text-sm sm:text-base">
            {isSpanish ? 'Última actualización: Enero 2025' : 'Last updated: January 2025'}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-sm sm:prose-base lg:prose-lg prose-headings:text-xl prose-headings:sm:text-2xl">
            {isSpanish ? (
              <>
                <h2 className="text-2xl font-bold text-dark-900 mb-4">1. Aceptación de los Términos</h2>
                <p className="text-dark-600 mb-6">
                  Al acceder y utilizar el sitio web de HEED (www.heed.mx) y contratar nuestros servicios, usted acepta estar sujeto a estos Términos y Condiciones. Si no está de acuerdo con alguna parte de estos términos, le solicitamos no utilizar nuestros servicios.
                </p>

                <h2 className="text-2xl font-bold text-dark-900 mb-4">2. Descripción de los Servicios</h2>
                <p className="text-dark-600 mb-4">HEED ofrece los siguientes servicios:</p>
                <ul className="list-disc pl-6 text-dark-600 mb-6 space-y-2">
                  <li><strong>Soluciones en la Nube:</strong> Implementación de ERPs (Microsoft Dynamics 365 Business Central) y CRMs (Microsoft Dynamics 365 Sales)</li>
                  <li><strong>Licencias Microsoft:</strong> Venta y gestión de licencias como Indirect Reseller autorizado</li>
                  <li><strong>Servicios RMM:</strong> Monitoreo y gestión remota de infraestructura TI con NinjaOne</li>
                  <li><strong>Soporte Técnico:</strong> Asistencia técnica y consultoría especializada</li>
                </ul>

                <h2 className="text-2xl font-bold text-dark-900 mb-4">3. Obligaciones del Cliente</h2>
                <p className="text-dark-600 mb-4">El cliente se compromete a:</p>
                <ul className="list-disc pl-6 text-dark-600 mb-6 space-y-2">
                  <li>Proporcionar información veraz y actualizada</li>
                  <li>Realizar los pagos acordados en tiempo y forma</li>
                  <li>Facilitar el acceso necesario para la prestación de servicios</li>
                  <li>No utilizar los servicios para fines ilícitos</li>
                  <li>Mantener la confidencialidad de las credenciales de acceso</li>
                </ul>

                <h2 className="text-2xl font-bold text-dark-900 mb-4">4. Obligaciones de HEED</h2>
                <p className="text-dark-600 mb-4">HEED se compromete a:</p>
                <ul className="list-disc pl-6 text-dark-600 mb-6 space-y-2">
                  <li>Prestar los servicios con profesionalismo y diligencia</li>
                  <li>Mantener la confidencialidad de la información del cliente</li>
                  <li>Proporcionar soporte técnico según los niveles de servicio acordados</li>
                  <li>Mantener las certificaciones y autorizaciones necesarias</li>
                </ul>

                <h2 className="text-2xl font-bold text-dark-900 mb-4">5. Precios y Pagos</h2>
                <p className="text-dark-600 mb-6">
                  Los precios de los servicios se establecen en cotizaciones individuales. Los pagos deberán realizarse según los términos acordados en cada contrato. HEED se reserva el derecho de suspender los servicios en caso de falta de pago.
                </p>

                <h2 className="text-2xl font-bold text-dark-900 mb-4">6. Propiedad Intelectual</h2>
                <p className="text-dark-600 mb-6">
                  Todos los contenidos del sitio web, incluyendo logos, textos, gráficos y software, son propiedad de HEED o de sus licenciantes (Microsoft, NinjaOne). Queda prohibida su reproducción sin autorización expresa.
                </p>

                <h2 className="text-2xl font-bold text-dark-900 mb-4">7. Limitación de Responsabilidad</h2>
                <p className="text-dark-600 mb-6">
                  HEED no será responsable por daños indirectos, incidentales o consecuentes derivados del uso de los servicios. Nuestra responsabilidad máxima se limitará al monto pagado por el cliente en los últimos 12 meses.
                </p>

                <h2 className="text-2xl font-bold text-dark-900 mb-4">8. Confidencialidad</h2>
                <p className="text-dark-600 mb-6">
                  Ambas partes se comprometen a mantener la confidencialidad de la información compartida durante la relación comercial. Esta obligación permanecerá vigente incluso después de terminada la relación.
                </p>

                <h2 className="text-2xl font-bold text-dark-900 mb-4">9. Terminación</h2>
                <p className="text-dark-600 mb-6">
                  Cualquiera de las partes puede terminar la relación comercial con previo aviso de 30 días. En caso de incumplimiento grave, la terminación puede ser inmediata. El cliente deberá pagar los servicios prestados hasta la fecha de terminación.
                </p>

                <h2 className="text-2xl font-bold text-dark-900 mb-4">10. Ley Aplicable y Jurisdicción</h2>
                <p className="text-dark-600 mb-6">
                  Estos términos se rigen por las leyes de los Estados Unidos Mexicanos. Cualquier controversia será sometida a los tribunales competentes de la Ciudad de México.
                </p>

                <h2 className="text-2xl font-bold text-dark-900 mb-4">11. Modificaciones</h2>
                <p className="text-dark-600 mb-6">
                  HEED se reserva el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor a partir de su publicación en el sitio web.
                </p>

                <h2 className="text-2xl font-bold text-dark-900 mb-4">12. Contacto</h2>
                <p className="text-dark-600 mb-6">
                  Para cualquier consulta sobre estos términos:<br />
                  <strong>Email:</strong> <a href="mailto:legal@heed.mx" className="text-primary-600 hover:underline">legal@heed.mx</a><br />
                  <strong>Teléfono:</strong> +52 (55) 1234-5678
                </p>
              </>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-dark-900 mb-4">1. Acceptance of Terms</h2>
                <p className="text-dark-600 mb-6">
                  By accessing and using the HEED website (www.heed.mx) and contracting our services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our services.
                </p>

                <h2 className="text-2xl font-bold text-dark-900 mb-4">2. Description of Services</h2>
                <p className="text-dark-600 mb-4">HEED offers the following services:</p>
                <ul className="list-disc pl-6 text-dark-600 mb-6 space-y-2">
                  <li><strong>Cloud Solutions:</strong> Implementation of ERPs (Microsoft Dynamics 365 Business Central) and CRMs (Microsoft Dynamics 365 Sales)</li>
                  <li><strong>Microsoft Licenses:</strong> Sale and management of licenses as an authorized Indirect Reseller</li>
                  <li><strong>RMM Services:</strong> Remote monitoring and management of IT infrastructure with NinjaOne</li>
                  <li><strong>Technical Support:</strong> Technical assistance and specialized consulting</li>
                </ul>

                <h2 className="text-2xl font-bold text-dark-900 mb-4">3. Client Obligations</h2>
                <p className="text-dark-600 mb-4">The client agrees to:</p>
                <ul className="list-disc pl-6 text-dark-600 mb-6 space-y-2">
                  <li>Provide accurate and up-to-date information</li>
                  <li>Make agreed payments on time</li>
                  <li>Facilitate necessary access for service provision</li>
                  <li>Not use the services for unlawful purposes</li>
                  <li>Maintain confidentiality of access credentials</li>
                </ul>

                <h2 className="text-2xl font-bold text-dark-900 mb-4">4. HEED Obligations</h2>
                <p className="text-dark-600 mb-4">HEED commits to:</p>
                <ul className="list-disc pl-6 text-dark-600 mb-6 space-y-2">
                  <li>Provide services with professionalism and diligence</li>
                  <li>Maintain confidentiality of client information</li>
                  <li>Provide technical support according to agreed service levels</li>
                  <li>Maintain necessary certifications and authorizations</li>
                </ul>

                <h2 className="text-2xl font-bold text-dark-900 mb-4">5. Prices and Payments</h2>
                <p className="text-dark-600 mb-6">
                  Service prices are established in individual quotes. Payments must be made according to the terms agreed in each contract. HEED reserves the right to suspend services in case of non-payment.
                </p>

                <h2 className="text-2xl font-bold text-dark-900 mb-4">6. Intellectual Property</h2>
                <p className="text-dark-600 mb-6">
                  All website content, including logos, texts, graphics, and software, are property of HEED or its licensors (Microsoft, NinjaOne). Reproduction without express authorization is prohibited.
                </p>

                <h2 className="text-2xl font-bold text-dark-900 mb-4">7. Limitation of Liability</h2>
                <p className="text-dark-600 mb-6">
                  HEED shall not be liable for indirect, incidental, or consequential damages arising from the use of services. Our maximum liability shall be limited to the amount paid by the client in the last 12 months.
                </p>

                <h2 className="text-2xl font-bold text-dark-900 mb-4">8. Confidentiality</h2>
                <p className="text-dark-600 mb-6">
                  Both parties agree to maintain the confidentiality of information shared during the business relationship. This obligation shall remain in effect even after the relationship ends.
                </p>

                <h2 className="text-2xl font-bold text-dark-900 mb-4">9. Termination</h2>
                <p className="text-dark-600 mb-6">
                  Either party may terminate the business relationship with 30 days prior notice. In case of serious breach, termination may be immediate. The client must pay for services rendered until the termination date.
                </p>

                <h2 className="text-2xl font-bold text-dark-900 mb-4">10. Applicable Law and Jurisdiction</h2>
                <p className="text-dark-600 mb-6">
                  These terms are governed by the laws of the United Mexican States. Any dispute shall be submitted to the competent courts of Mexico City.
                </p>

                <h2 className="text-2xl font-bold text-dark-900 mb-4">11. Modifications</h2>
                <p className="text-dark-600 mb-6">
                  HEED reserves the right to modify these terms at any time. Changes will take effect upon publication on the website.
                </p>

                <h2 className="text-2xl font-bold text-dark-900 mb-4">12. Contact</h2>
                <p className="text-dark-600 mb-6">
                  For any questions about these terms:<br />
                  <strong>Email:</strong> <a href="mailto:legal@heed.mx" className="text-primary-600 hover:underline">legal@heed.mx</a><br />
                  <strong>Phone:</strong> +52 (55) 1234-5678
                </p>
              </>
            )}
          </div>

          <div className="max-w-4xl mx-auto mt-12 text-center">
            <Link href="/" className="btn-primary">
              {isSpanish ? 'Volver al inicio' : 'Back to home'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
