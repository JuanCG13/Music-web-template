const piezas = [
  {
    autor: 'Agustín Barrios Mangoré',
    titulo: 'Un sueño en la floresta',
    periodo: 'Paraguay · 1918',
    descripcion:
      'Pieza emblemática del repertorio paraguayo, tributo a la floresta guaraní. El trémolo llevado a su máxima expresión.',
    tono: 'from-[#8b5e3c]/70 to-[#3d2817]/90',
    youtube: 'https://www.youtube.com/watch?v=54JvUQv_ut8',
    interprete: 'Interpretado por Cécile Rabemananjara',
  },
  {
    autor: 'Agustín Barrios Mangoré',
    titulo: 'La catedral',
    periodo: 'Paraguay · 1921',
    descripcion:
      'Tres movimientos: el preludio saudade, el andante religioso y el allegro solemne. Obra cumbre de la guitarra clásica.',
    tono: 'from-[#6b4423]/80 to-[#2a1a0a]/95',
    youtube: 'https://www.youtube.com/watch?v=eQHlxB5n8g0',
    interprete: 'Interpretado por Ana Vidovic',
  },
  {
    autor: 'Heitor Villa-Lobos',
    titulo: 'Preludio N.º 1',
    periodo: 'Brasil · 1940',
    descripcion:
      'En mi menor. Uno de los cinco preludios para guitarra del compositor brasileño — corpus fundamental del repertorio latinoamericano.',
    tono: 'from-[#c9611e]/50 to-[#3d2817]/95',
    youtube: 'https://www.youtube.com/watch?v=Pmry5uquwDI',
    interprete: 'Interpretado por Marcin Dylla',
  },
  {
    autor: 'Leo Brouwer',
    titulo: 'Estudio sencillo N.º 6',
    periodo: 'Cuba · Siglo XX',
    descripcion:
      'Exploración técnica y tímbrica de un referente cubano contemporáneo. Pedagogía y musicalidad en una misma pieza.',
    tono: 'from-[#8b5e3c]/60 to-[#221810]/95',
    youtube: 'https://www.youtube.com/watch?v=9QWrn99mnXo',
    interprete: 'Interpretación en vivo',
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
    <section className="py-20 sm:py-24 md:py-32 bg-surface paper-texture" id="repertorio">
      <div className="container mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-12 sm:mb-16 md:mb-20">
          <span className="italic-serif text-primary tracking-widest uppercase text-xs sm:text-sm mb-3 sm:mb-4 block">
            — Repertorio y presencia
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-5 sm:mb-6 text-parchment leading-tight">
            Obras que{' '}
            <span className="italic-serif text-primary font-normal">habitan</span>{' '}
            sus dedos.
          </h2>
          <p className="text-on-surface-variant text-base sm:text-lg font-body">
            Un recorrido por el repertorio paraguayo y latinoamericano de la guitarra
            clásica, desde Mangoré hasta los compositores contemporáneos. Podés
            escuchar cada obra en versiones de referencia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-16 sm:mb-20">
          {piezas.map((pieza) => (
            <a
              key={pieza.titulo}
              href={pieza.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-xl border border-outline-variant/30 bg-surface-container-low hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 flex flex-col focus:outline-none focus:ring-2 focus:ring-primary/60"
              aria-label={`Escuchar ${pieza.titulo} en YouTube`}
            >
              <div
                className={`h-48 sm:h-56 md:h-64 bg-gradient-to-br ${pieza.tono} relative flex items-end p-5 sm:p-6 md:p-8`}
              >
                <div className="absolute inset-0 bg-wood-grain opacity-40" />
                <div className="absolute top-4 right-4 sm:top-5 sm:right-5 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/35 backdrop-blur-sm flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all">
                  <span className="material-symbols-outlined filled text-parchment group-hover:text-on-primary text-2xl sm:text-3xl">
                    play_arrow
                  </span>
                </div>
                <div className="relative pr-16">
                  <span className="italic-serif text-bone/80 text-xs sm:text-sm block mb-1 sm:mb-2">
                    {pieza.autor}
                  </span>
                  <h3 className="font-headline text-xl sm:text-2xl md:text-3xl font-semibold text-parchment leading-tight">
                    {pieza.titulo}
                  </h3>
                </div>
              </div>
              <div className="p-5 sm:p-6 md:p-8 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                  <p className="italic-serif text-primary text-sm">
                    {pieza.periodo}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs uppercase tracking-wider text-on-surface-variant group-hover:text-primary transition-colors">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                    YouTube
                  </span>
                </div>
                <p className="text-on-surface-variant font-body leading-relaxed text-sm sm:text-base mb-3 sm:mb-4">
                  {pieza.descripcion}
                </p>
                <p className="text-xs italic-serif text-on-surface-variant/80 mt-auto">
                  {pieza.interprete}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="divider-flourish mb-10 sm:mb-14 max-w-xs sm:max-w-sm mx-auto">
          <span className="italic-serif text-primary whitespace-nowrap text-sm sm:text-base">
            Actividades
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {actividades.map((act, i) => (
            <div
              key={act.titulo}
              className={`bg-surface-container-low border border-outline-variant/30 p-6 sm:p-8 md:p-10 rounded-xl hover:bg-surface-container hover:border-primary/30 transition-all group ${
                i === 2 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 border border-primary/40 text-primary rounded-full flex items-center justify-center mb-5 sm:mb-6 md:mb-8 group-hover:bg-primary group-hover:text-on-primary transition-all">
                <span className="material-symbols-outlined text-xl sm:text-2xl md:text-3xl">
                  {act.icon}
                </span>
              </div>
              <h3 className="font-headline text-xl md:text-2xl font-semibold mb-3 sm:mb-4 text-parchment">
                {act.titulo}
              </h3>
              <p className="text-on-surface-variant leading-relaxed font-body text-sm sm:text-base">
                {act.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
