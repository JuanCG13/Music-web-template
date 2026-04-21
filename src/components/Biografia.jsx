export default function Biografia() {
  return (
    <section className="py-20 sm:py-24 md:py-32 bg-surface-container-low paper-texture" id="biografia">
      <div className="container mx-auto px-5 sm:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-24 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute -top-6 -left-6 sm:-top-8 sm:-left-8 w-40 sm:w-48 h-40 sm:h-48 bg-primary-container/30 blur-3xl -z-0" />
            <div className="absolute -bottom-8 -right-6 sm:-bottom-12 sm:-right-8 w-52 sm:w-64 h-52 sm:h-64 bg-tertiary/15 blur-3xl -z-0" />

            <div className="relative z-10 bg-gradient-to-br from-surface-container-high to-surface-container-highest p-6 sm:p-8 md:p-10 rounded-xl border border-outline-variant/40 shadow-2xl">
              <div className="flex items-start gap-3 sm:gap-4 mb-6 sm:mb-8">
                <span className="material-symbols-outlined text-primary text-2xl sm:text-3xl mt-1 flex-shrink-0">
                  format_quote
                </span>
                <p className="italic-serif text-lg sm:text-xl md:text-2xl text-parchment leading-snug">
                  "Tocar la guitarra clásica es conversar con la historia. Y la mía
                  empieza con el canto, el coro y una abuela paciente enseñándome a
                  escuchar."
                </p>
              </div>

              <div className="divider-flourish mb-6 sm:mb-8" />

              <dl className="grid grid-cols-2 gap-5 sm:gap-6">
                <div>
                  <dt className="italic-serif text-primary text-xs sm:text-sm tracking-wide">
                    Origen
                  </dt>
                  <dd className="font-headline text-base sm:text-lg text-parchment mt-1">
                    Paraguay
                  </dd>
                </div>
                <div>
                  <dt className="italic-serif text-primary text-xs sm:text-sm tracking-wide">
                    Instrumento
                  </dt>
                  <dd className="font-headline text-base sm:text-lg text-parchment mt-1">
                    Guitarra clásica
                  </dd>
                </div>
                <div>
                  <dt className="italic-serif text-primary text-xs sm:text-sm tracking-wide">
                    Primeros pasos
                  </dt>
                  <dd className="font-headline text-base sm:text-lg text-parchment mt-1">
                    A los 4 años
                  </dd>
                </div>
                <div>
                  <dt className="italic-serif text-primary text-xs sm:text-sm tracking-wide">
                    Título
                  </dt>
                  <dd className="font-headline text-base sm:text-lg text-parchment mt-1">
                    Profesora Superior
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="italic-serif text-primary tracking-widest uppercase text-xs sm:text-sm mb-3 sm:mb-4 block">
              — Biografía
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight mb-8 sm:mb-10 text-parchment leading-tight">
              De la voz al{' '}
              <span className="italic-serif text-primary font-normal">silencio</span>{' '}
              de las cuerdas.
            </h2>
            <div className="space-y-5 sm:space-y-6 text-on-surface-variant text-base md:text-lg leading-relaxed font-body">
              <p>
                María Paz Cubells Gómez pertenece a la nueva generación de guitarristas
                clásicas del Paraguay. Su camino musical empezó muy temprano, con el
                acompañamiento de su madre: primero a través del canto y la experiencia
                coral junto a su tío, el profesor José Gómez, y después con la guitarra
                como refugio y oficio.
              </p>
              <p>
                A los <span className="text-primary">diez años</span> ingresó al{' '}
                <em className="italic-serif text-parchment">
                  Conservatorio Municipal de Guitarra Clásica Agustín Pío Barrios
                </em>
                , donde se formó con el maestro Rodrigo Benítez. En{' '}
                <span className="text-primary">2024</span> obtuvo el título de
                Profesora Superior de Guitarra Clásica — el cierre natural de una
                disciplina que empezó a los cuatro años.
              </p>
              <p>
                Su sonoridad es la de una intérprete que escucha antes de atacar la
                cuerda: serena, cuidada, atenta al legado paraguayo pero abierta al
                repertorio latinoamericano contemporáneo.
              </p>
            </div>

            <div className="mt-10 md:mt-12 grid grid-cols-3 gap-4 sm:gap-6 border-t border-outline-variant/40 pt-6 sm:pt-8">
              <div>
                <span className="block font-headline text-2xl sm:text-3xl md:text-4xl text-primary">
                  16
                </span>
                <span className="text-[10px] sm:text-xs uppercase tracking-widest text-on-surface-variant mt-1 sm:mt-2 block leading-tight">
                  Años de formación
                </span>
              </div>
              <div>
                <span className="block font-headline text-2xl sm:text-3xl md:text-4xl text-primary">
                  1º
                </span>
                <span className="text-[10px] sm:text-xs uppercase tracking-widest text-on-surface-variant mt-1 sm:mt-2 block leading-tight">
                  Instrumentoteca 2024
                </span>
              </div>
              <div>
                <span className="block font-headline text-2xl sm:text-3xl md:text-4xl text-primary">
                  2025
                </span>
                <span className="text-[10px] sm:text-xs uppercase tracking-widest text-on-surface-variant mt-1 sm:mt-2 block leading-tight">
                  Bogotá
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
