import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/routing';

export async function generateMetadata() {
  return {
    title: 'Aviso de Privacidad | HEED',
    description: 'Aviso de privacidad y política de protección de datos personales de HEED.',
  };
}

export default async function PrivacyPage({
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
            {isSpanish ? 'Aviso de Privacidad' : 'Privacy Policy'}
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
                <h2 className="text-2xl font-bold text-dark-900 mb-4">1. Identidad del Responsable</h2>
                <p className="text-dark-600 mb-6">
                  HEED (en adelante &ldquo;la Empresa&rdquo;), con domicilio en Ciudad de México, México, es responsable del tratamiento de sus datos personales conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).
                </p>

                <h2 className="text-2xl font-bold text-dark-900 mb-4">2. Datos Personales que Recabamos</h2>
                <p className="text-dark-600 mb-4">Recopilamos los siguientes datos personales:</p>
                <ul className="list-disc pl-6 text-dark-600 mb-6 space-y-2">
                  <li>Nombre completo</li>
                  <li>Correo electrónico</li>
                  <li>Número telefónico</li>
                  <li>Nombre de la empresa</li>
                  <li>Número de empleados</li>
                  <li>Información sobre servicios de interés</li>
                </ul>

                <h2 className="text-2xl font-bold text-dark-900 mb-4">3. Finalidades del Tratamiento</h2>
                <p className="text-dark-600 mb-4">Sus datos personales serán utilizados para:</p>
                <ul className="list-disc pl-6 text-dark-600 mb-6 space-y-2">
                  <li>Responder a sus solicitudes de información y cotización</li>
                  <li>Proporcionar los servicios contratados</li>
                  <li>Enviar información sobre nuestros productos y servicios</li>
                  <li>Realizar análisis estadísticos y de satisfacción</li>
                  <li>Cumplir con obligaciones legales y contractuales</li>
                </ul>

                <h2 className="text-2xl font-bold text-dark-900 mb-4">4. Transferencia de Datos</h2>
                <p className="text-dark-600 mb-6">
                  No transferimos sus datos personales a terceros sin su consentimiento, excepto en los casos previstos por la ley o cuando sea necesario para la prestación de los servicios contratados con nuestros socios tecnológicos (Microsoft, NinjaOne).
                </p>

                <h2 className="text-2xl font-bold text-dark-900 mb-4">5. Derechos ARCO</h2>
                <p className="text-dark-600 mb-6">
                  Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse (derechos ARCO) al tratamiento de sus datos personales. Para ejercer estos derechos, envíe su solicitud a: <a href="mailto:contacto@heed.mx" className="text-primary-600 hover:underline">contacto@heed.mx</a>
                </p>

                <h2 className="text-2xl font-bold text-dark-900 mb-4">6. Uso de Cookies</h2>
                <p className="text-dark-600 mb-6">
                  Nuestro sitio web utiliza cookies para mejorar su experiencia de navegación. Puede configurar su navegador para rechazar cookies, aunque esto podría afectar algunas funcionalidades del sitio.
                </p>

                <h2 className="text-2xl font-bold text-dark-900 mb-4">7. Modificaciones al Aviso</h2>
                <p className="text-dark-600 mb-6">
                  Nos reservamos el derecho de modificar este aviso de privacidad. Cualquier cambio será publicado en esta página y, en caso de cambios significativos, le notificaremos por correo electrónico.
                </p>

                <h2 className="text-2xl font-bold text-dark-900 mb-4">8. Contacto</h2>
                <p className="text-dark-600 mb-6">
                  Para cualquier duda o comentario sobre este aviso de privacidad, contáctenos en:<br />
                  <strong>Email:</strong> <a href="mailto:contacto@heed.mx" className="text-primary-600 hover:underline">contacto@heed.mx</a><br />
                  <strong>Teléfono:</strong> +52 1 55 8644 3982
                </p>
              </>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-dark-900 mb-4">1. Data Controller Identity</h2>
                <p className="text-dark-600 mb-6">
                  HEED (hereinafter &ldquo;the Company&rdquo;), with address in Mexico City, Mexico, is responsible for the processing of your personal data in accordance with the Federal Law on Protection of Personal Data Held by Private Parties (LFPDPPP).
                </p>

                <h2 className="text-2xl font-bold text-dark-900 mb-4">2. Personal Data We Collect</h2>
                <p className="text-dark-600 mb-4">We collect the following personal data:</p>
                <ul className="list-disc pl-6 text-dark-600 mb-6 space-y-2">
                  <li>Full name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Company name</li>
                  <li>Number of employees</li>
                  <li>Information about services of interest</li>
                </ul>

                <h2 className="text-2xl font-bold text-dark-900 mb-4">3. Purpose of Data Processing</h2>
                <p className="text-dark-600 mb-4">Your personal data will be used to:</p>
                <ul className="list-disc pl-6 text-dark-600 mb-6 space-y-2">
                  <li>Respond to your information and quote requests</li>
                  <li>Provide contracted services</li>
                  <li>Send information about our products and services</li>
                  <li>Perform statistical and satisfaction analysis</li>
                  <li>Comply with legal and contractual obligations</li>
                </ul>

                <h2 className="text-2xl font-bold text-dark-900 mb-4">4. Data Transfer</h2>
                <p className="text-dark-600 mb-6">
                  We do not transfer your personal data to third parties without your consent, except in cases provided by law or when necessary for the provision of services contracted with our technology partners (Microsoft, NinjaOne).
                </p>

                <h2 className="text-2xl font-bold text-dark-900 mb-4">5. ARCO Rights</h2>
                <p className="text-dark-600 mb-6">
                  You have the right to Access, Rectify, Cancel or Oppose (ARCO rights) the processing of your personal data. To exercise these rights, send your request to: <a href="mailto:contacto@heed.mx" className="text-primary-600 hover:underline">contacto@heed.mx</a>
                </p>

                <h2 className="text-2xl font-bold text-dark-900 mb-4">6. Use of Cookies</h2>
                <p className="text-dark-600 mb-6">
                  Our website uses cookies to improve your browsing experience. You can configure your browser to reject cookies, although this may affect some site functionalities.
                </p>

                <h2 className="text-2xl font-bold text-dark-900 mb-4">7. Changes to This Policy</h2>
                <p className="text-dark-600 mb-6">
                  We reserve the right to modify this privacy policy. Any changes will be posted on this page and, in case of significant changes, we will notify you by email.
                </p>

                <h2 className="text-2xl font-bold text-dark-900 mb-4">8. Contact</h2>
                <p className="text-dark-600 mb-6">
                  For any questions or comments about this privacy policy, contact us at:<br />
                  <strong>Email:</strong> <a href="mailto:contacto@heed.mx" className="text-primary-600 hover:underline">contacto@heed.mx</a><br />
                  <strong>Phone:</strong> +52 1 55 8644 3982
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
