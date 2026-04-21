import { whatsappLink } from './WhatsAppButton.jsx'

export default function Contacto() {
  return (
    <section
      className="py-20 sm:py-24 md:py-32 bg-surface-container-low paper-texture"
      id="contacto"
    >
      <div className="container mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-center">
          <div>
            <span className="italic-serif text-primary tracking-widest uppercase text-xs sm:text-sm mb-3 sm:mb-4 block">
              — Contacto
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight mb-8 sm:mb-10 text-parchment leading-tight">
              Conversemos{' '}
              <span className="italic-serif text-primary font-normal">
                sobre música
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-on-surface-variant mb-10 sm:mb-12 max-w-md font-body leading-relaxed">
              Para conciertos, colaboraciones, clases, o simplemente para compartir
              una pieza que te emocione. La vía más rápida es un mensaje directo.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-5 group">
                <div className="w-12 h-12 border border-outline/40 flex items-center justify-center rounded-lg group-hover:bg-primary group-hover:border-primary group-hover:text-on-primary transition-all flex-shrink-0 text-primary">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-on-surface-variant mb-1">
                    WhatsApp
                  </p>
                  <span className="text-base sm:text-lg font-medium font-headline text-parchment">
                    +595 976 534 549
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-5 group">
                <div className="w-12 h-12 border border-outline/40 flex items-center justify-center rounded-lg group-hover:bg-primary group-hover:border-primary group-hover:text-on-primary transition-all flex-shrink-0 text-primary">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-on-surface-variant mb-1">
                    Ubicación
                  </p>
                  <span className="text-base sm:text-lg font-medium font-headline text-parchment">
                    Asunción · Paraguay
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-5 group">
                <div className="w-12 h-12 border border-outline/40 flex items-center justify-center rounded-lg group-hover:bg-primary group-hover:border-primary group-hover:text-on-primary transition-all flex-shrink-0 text-primary">
                  <span className="material-symbols-outlined">language</span>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-on-surface-variant mb-1">
                    Gira 2025
                  </p>
                  <span className="text-base sm:text-lg font-medium font-headline text-parchment">
                    Paraguay · Colombia
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-12">
              <a
                aria-label="Instagram"
                className="w-12 h-12 bg-surface-container-high rounded-full flex items-center justify-center hover:bg-primary-container transition-colors group border border-outline-variant/30"
                href="#"
              >
                <svg
                  className="w-5 h-5 fill-parchment group-hover:fill-on-primary-container"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                aria-label="YouTube"
                className="w-12 h-12 bg-surface-container-high rounded-full flex items-center justify-center hover:bg-primary-container transition-colors group border border-outline-variant/30"
                href="#"
              >
                <svg
                  className="w-5 h-5 fill-parchment group-hover:fill-on-primary-container"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z" />
                </svg>
              </a>
              <a
                aria-label="Spotify"
                className="w-12 h-12 bg-surface-container-high rounded-full flex items-center justify-center hover:bg-primary-container transition-colors group border border-outline-variant/30"
                href="#"
              >
                <span className="material-symbols-outlined text-parchment group-hover:text-on-primary-container text-xl">
                  library_music
                </span>
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary-container/30 to-tertiary/15 blur-3xl -z-0" />

            <div className="relative bg-gradient-to-br from-surface-container-high to-surface-container-highest border border-outline-variant/40 rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl">
              <div className="absolute -top-4 left-8 bg-[#25D366] text-white px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase font-headline shadow-lg">
                Vía directa
              </div>

              <div className="flex items-start gap-4 sm:gap-5 mb-6 sm:mb-8">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#25D366]/20">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-7 h-7 fill-white"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.861 9.861 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.88 11.88 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.48-8.413" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-headline text-xl sm:text-2xl md:text-3xl font-semibold text-parchment mb-1 sm:mb-2">
                    Escribí por WhatsApp
                  </h3>
                  <p className="italic-serif text-primary text-sm sm:text-base">
                    Respuesta rápida y conversación real.
                  </p>
                </div>
              </div>

              <div className="divider-flourish mb-6 sm:mb-8" />

              <p className="text-on-surface-variant font-body leading-relaxed mb-8 sm:mb-10 text-sm sm:text-base md:text-lg">
                Contame sobre tu propuesta, fecha tentativa, sala o proyecto. Si es
                una colaboración musical, mejor con una referencia del repertorio que
                tenés en mente.
              </p>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#1ebe5a] text-white py-4 sm:py-5 rounded-full text-base sm:text-lg font-semibold transition-colors font-headline shadow-lg shadow-[#25D366]/20"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6 fill-white"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.861 9.861 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.88 11.88 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.48-8.413" />
                </svg>
                Abrir chat en WhatsApp
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>

              <p className="text-center text-xs text-on-surface-variant mt-6 tracking-wide">
                +595 976 534 549 · Asunción, Paraguay
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
