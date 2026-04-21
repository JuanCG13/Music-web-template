export default function Mangore() {
  return (
    <section
      className="py-24 md:py-32 bg-surface-container-lowest relative overflow-hidden paper-texture"
      id="mangore"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(139,94,60,0.25),transparent_55%)]" />
        <div className="absolute inset-0 bg-wood-grain opacity-30" />
      </div>

      <div className="container mx-auto px-6 sm:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="divider-flourish mb-8 max-w-md mx-auto">
            <span className="italic-serif text-primary text-lg whitespace-nowrap">
              San Juan Bautista de las Misiones
            </span>
          </div>

          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-8 text-parchment leading-tight">
            La tierra de{' '}
            <span className="italic-serif text-primary font-normal">Mangoré</span>
          </h2>

          <p className="text-lg md:text-xl text-on-surface-variant font-body leading-relaxed mb-10 max-w-2xl mx-auto">
            En 1885, en San Juan Bautista — un pueblo en el corazón de Misiones, al sur
            del Paraguay — nació Agustín Pío Barrios, conocido en el mundo como{' '}
            <em className="italic-serif text-parchment">Mangoré</em>. El compositor
            paraguayo que elevó la guitarra clásica latinoamericana a los grandes
            escenarios del siglo XX.
          </p>

          <p className="text-base md:text-lg text-on-surface-variant font-body leading-relaxed mb-16 max-w-2xl mx-auto">
            Más de cien años después, esa misma tradición guaraní — el canto, la
            madera, el silencio entre notas — sigue siendo el punto de partida para
            quienes heredan su oficio. María Paz crece dentro de ese linaje: formada en
            el Conservatorio que lleva su nombre, tocando piezas que él mismo escribió,
            llevándolas a públicos de toda Latinoamérica.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface-container-low border border-outline-variant/30 rounded-xl p-8 text-left hover:border-primary/40 transition-colors">
              <span className="material-symbols-outlined text-primary text-3xl mb-4 block">
                location_on
              </span>
              <h3 className="font-headline text-xl font-semibold text-parchment mb-2">
                San Juan Bautista
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Ciudad natal de Mangoré en el departamento de Misiones, al sur del
                Paraguay. Cuna de una tradición guitarrística propia.
              </p>
            </div>

            <div className="bg-surface-container-low border border-outline-variant/30 rounded-xl p-8 text-left hover:border-primary/40 transition-colors">
              <span className="material-symbols-outlined text-primary text-3xl mb-4 block">
                music_note
              </span>
              <h3 className="font-headline text-xl font-semibold text-parchment mb-2">
                Agustín Barrios
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Compositor e intérprete (1885–1944). Considerado uno de los
                guitarristas más importantes de todos los tiempos.
              </p>
            </div>

            <div className="bg-surface-container-low border border-outline-variant/30 rounded-xl p-8 text-left hover:border-primary/40 transition-colors">
              <span className="material-symbols-outlined text-primary text-3xl mb-4 block">
                auto_stories
              </span>
              <h3 className="font-headline text-xl font-semibold text-parchment mb-2">
                Legado vivo
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                El Conservatorio Municipal de Asunción y el circuito impulsado por
                Berta Rojas mantienen y expanden ese legado hasta hoy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
