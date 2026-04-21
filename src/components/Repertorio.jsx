const piezas = [
  {
    autor: 'Agustín Barrios Mangoré',
    titulo: 'Un sueño en la floresta',
    periodo: 'Paraguay · 1918',
    descripcion:
      'Pieza emblemática del repertorio paraguayo, tributo a la floresta guaraní.',
    tono: 'from-[#8b5e3c]/70 to-[#3d2817]/90',
  },
  {
    autor: 'Agustín Barrios Mangoré',
    titulo: 'La catedral',
    periodo: 'Paraguay · 1938',
    descripcion:
      'Tres movimientos: el preludio, la austeridad interior y el allegro final.',
    tono: 'from-[#6b4423]/80 to-[#2a1a0a]/95',
  },
  {
    autor: 'Heitor Villa-Lobos',
    titulo: 'Preludios',
    periodo: 'Brasil · Siglo XX',
    descripcion:
      'Corpus fundamental del repertorio latinoamericano para guitarra clásica.',
    tono: 'from-[#c9611e]/50 to-[#3d2817]/95',
  },
  {
    autor: 'Leo Brouwer',
    titulo: 'Estudios sencillos',
    periodo: 'Cuba · Siglo XX',
    descripcion:
      'Exploración técnica y tímbrica de un referente cubano contemporáneo.',
    tono: 'from-[#8b5e3c]/60 to-[#221810]/95',
  },
]

const actividades = [
  {
    icon: 'piano',
    titulo: 'Conciertos solistas',
    descripcion:
      'Recitales con repertorio latinoamericano y universal, en formato íntimo o de sala.',
  },
  {
    icon: 'group',
    titulo: 'Música de cámara',
    descripcion:
      'Colaboraciones con cantantes, flautistas y agrupaciones de cuerdas en repertorio paraguayo y académico.',
  },
  {
    icon: 'school',
    titulo: 'Docencia',
    descripcion:
      'Clases individuales y clínicas para estudiantes de guitarra clásica, con enfoque en técnica y musicalidad.',
  },
]

export default function Repertorio() {
  return (
    <section className="py-24 md:py-32 bg-surface paper-texture" id="repertorio">
      <div className="container mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-14 md:mb-20">
          <div className="max-w-2xl">
            <span className="italic-serif text-primary tracking-widest uppercase text-xs sm:text-sm mb-4 block">
              — Repertorio y presencia
            </span>
            <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 text-parchment">
              Obras que{' '}
              <span className="italic-serif text-primary font-normal">habitan</span>{' '}
              sus dedos.
            </h2>
            <p className="text-on-surface-variant text-lg font-body">
              Un recorrido abierto por el repertorio paraguayo y latinoamericano de la
              guitarra clásica, desde Mangoré hasta los compositores contemporáneos.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {piezas.map((pieza) => (
            <article
              key={pieza.titulo}
              className="group relative overflow-hidden rounded-xl border border-outline-variant/30 bg-surface-container-low hover:border-primary/40 transition-all"
            >
              <div
                className={`h-56 md:h-64 bg-gradient-to-br ${pieza.tono} relative flex items-end p-6 md:p-8`}
              >
                <div className="absolute inset-0 bg-wood-grain opacity-40" />
                <div className="absolute top-5 right-5">
                  <span className="material-symbols-outlined text-parchment/60 text-3xl group-hover:text-primary transition-colors">
                    play_circle
                  </span>
                </div>
                <div className="relative">
                  <span className="italic-serif text-bone/80 text-sm block mb-2">
                    {pieza.autor}
                  </span>
                  <h3 className="font-headline text-2xl md:text-3xl font-semibold text-parchment leading-tight">
                    {pieza.titulo}
                  </h3>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <p className="italic-serif text-primary text-sm mb-2">
                  {pieza.periodo}
                </p>
                <p className="text-on-surface-variant font-body leading-relaxed">
                  {pieza.descripcion}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="divider-flourish mb-14 max-w-sm mx-auto">
          <span className="italic-serif text-primary whitespace-nowrap">
            Actividades
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {actividades.map((act) => (
            <div
              key={act.titulo}
              className="bg-surface-container-low border border-outline-variant/30 p-8 md:p-10 rounded-xl hover:bg-surface-container hover:border-primary/30 transition-all group"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 border border-primary/40 text-primary rounded-full flex items-center justify-center mb-6 md:mb-8 group-hover:bg-primary group-hover:text-on-primary transition-all">
                <span className="material-symbols-outlined text-2xl md:text-3xl">
                  {act.icon}
                </span>
              </div>
              <h3 className="font-headline text-xl md:text-2xl font-semibold mb-4 text-parchment">
                {act.titulo}
              </h3>
              <p className="text-on-surface-variant leading-relaxed font-body">
                {act.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
