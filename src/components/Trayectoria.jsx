const hitos = [
  {
    year: '2009',
    title: 'Primeras cuerdas',
    description:
      'Comienza su formación musical a los cuatro años, acompañada por su madre. El canto y los coros familiares, bajo la guía de su tío José Gómez, preparan el oído antes que los dedos.',
    icon: 'child_care',
  },
  {
    year: '2015',
    title: 'Conservatorio Agustín Pío Barrios',
    description:
      'A los diez años ingresa al Conservatorio Municipal de Guitarra Clásica de Asunción, templo que lleva el nombre del maestro Agustín Pío Barrios. Inicia su formación técnica con el profesor Rodrigo Benítez.',
    icon: 'school',
  },
  {
    year: '2024',
    title: 'Profesora Superior de Guitarra Clásica',
    description:
      'Obtiene el título de Profesora Superior — el cierre formal de una disciplina cultivada durante dos décadas, y la puerta hacia una carrera profesional propia.',
    icon: 'workspace_premium',
  },
  {
    year: '2024',
    title: 'Primer lugar · Instrumentoteca Toyota',
    description:
      'Se alza con el primer lugar en la audición final de Instrumentoteca — el programa impulsado por Berta Rojas — y recibe uno de los instrumentos de alta gama que acompañan su carrera.',
    icon: 'emoji_events',
    highlight: true,
  },
  {
    year: '2025',
    title: 'Jóvenes guitarristas de Latinoamérica · Bogotá',
    description:
      'Programada en el ciclo "Jóvenes guitarristas de Latinoamérica" del Teatro Colsubsidio, junto a otros intérpretes de la región. Un paso hacia la proyección internacional.',
    icon: 'public',
  },
]

export default function Trayectoria() {
  return (
    <section className="py-24 md:py-32 bg-surface relative paper-texture" id="trayectoria">
      <div className="container mx-auto px-6 sm:px-8">
        <div className="max-w-3xl mb-16 md:mb-20">
          <span className="italic-serif text-primary tracking-widest uppercase text-xs sm:text-sm mb-4 block">
            — Trayectoria
          </span>
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 text-parchment">
            Una vida medida en{' '}
            <span className="italic-serif text-primary font-normal">cuerdas</span>.
          </h2>
          <p className="text-on-surface-variant text-lg font-body">
            Del primer acorde en la infancia al reconocimiento regional. Los hitos que
            marcan su recorrido como intérprete.
          </p>
        </div>

        <ol className="relative border-l border-outline-variant/50 pl-6 md:pl-10 space-y-10 md:space-y-14">
          {hitos.map((hito) => (
            <li key={hito.year + hito.title} className="relative">
              <span
                className={`absolute -left-[34px] md:-left-[50px] top-1 w-10 h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center ${
                  hito.highlight
                    ? 'bg-primary text-on-primary shadow-lg shadow-primary/20'
                    : 'bg-surface-container-high border border-outline-variant/60 text-primary'
                }`}
              >
                <span className="material-symbols-outlined text-xl">{hito.icon}</span>
              </span>

              <div
                className={`rounded-xl p-6 md:p-8 border transition-colors ${
                  hito.highlight
                    ? 'border-primary/40 bg-gradient-to-br from-surface-container-high to-surface-container-highest'
                    : 'border-outline-variant/30 bg-surface-container-low hover:border-outline-variant/60'
                }`}
              >
                <div className="flex items-baseline gap-4 mb-3 flex-wrap">
                  <span className="italic-serif text-primary text-2xl md:text-3xl">
                    {hito.year}
                  </span>
                  <span className="h-px w-8 bg-outline-variant/60" />
                  <h3 className="font-headline text-xl md:text-2xl font-semibold text-parchment">
                    {hito.title}
                  </h3>
                </div>
                <p className="text-on-surface-variant leading-relaxed font-body">
                  {hito.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
