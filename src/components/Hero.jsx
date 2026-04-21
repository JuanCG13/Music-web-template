export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden paper-texture">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_30%,rgba(139,94,60,0.35),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(201,97,30,0.22),transparent_60%)]" />
        <div className="absolute inset-0 bg-wood-grain opacity-40" />
      </div>

      <div className="container mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="divider-flourish mb-8 max-w-sm">
              <span className="italic-serif text-lg text-primary whitespace-nowrap">
                Desde la tierra de Mangoré
              </span>
            </div>
            <h1 className="font-headline text-[3rem] sm:text-7xl md:text-8xl lg:text-[8.5rem] font-semibold leading-[0.92] tracking-tight mb-8 text-parchment">
              María Paz{' '}
              <span className="italic-serif text-primary font-normal">Cubells</span>{' '}
              Gómez
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-xl font-body leading-relaxed mb-10">
              Guitarrista clásica paraguaya. Heredera de la tradición que nació en{' '}
              <span className="text-primary">San Juan Bautista de las Misiones</span>,
              cuna de Agustín Barrios Mangoré, uno de los guitarristas más grandes de
              la historia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <a
                href="#trayectoria"
                className="bg-primary-container text-on-primary-container px-8 py-4 sm:py-5 rounded-full font-medium hover:bg-primary hover:text-on-primary transition-colors flex items-center justify-center gap-3"
              >
                Conocer su trayectoria
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
              <a
                href="#repertorio"
                className="border border-outline/40 text-parchment px-8 py-4 sm:py-5 rounded-full font-medium hover:bg-surface-container-high transition-colors text-center"
              >
                Escuchar repertorio
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-container/30 to-tertiary/20 blur-3xl" />
              <svg
                viewBox="0 0 240 480"
                className="relative w-full max-h-[560px] mx-auto"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="gbody" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#d9a066" />
                    <stop offset="55%" stopColor="#8b5e3c" />
                    <stop offset="100%" stopColor="#3d2817" />
                  </linearGradient>
                  <radialGradient id="ghole" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#0a0604" />
                    <stop offset="100%" stopColor="#1a130d" />
                  </radialGradient>
                  <linearGradient id="gneck" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#5c3a1f" />
                    <stop offset="100%" stopColor="#3d2817" />
                  </linearGradient>
                </defs>
                {/* Cuerpo */}
                <path
                  d="M120 260 C 60 260 30 320 30 370 C 30 435 75 470 120 470 C 165 470 210 435 210 370 C 210 320 180 260 120 260 Z"
                  fill="url(#gbody)"
                  stroke="#2a1a0a"
                  strokeWidth="1.5"
                />
                <path
                  d="M120 200 C 85 200 70 230 70 260 C 70 290 85 305 120 305 C 155 305 170 290 170 260 C 170 230 155 200 120 200 Z"
                  fill="url(#gbody)"
                  stroke="#2a1a0a"
                  strokeWidth="1.5"
                />
                {/* Boca */}
                <circle cx="120" cy="370" r="34" fill="url(#ghole)" />
                <circle
                  cx="120"
                  cy="370"
                  r="34"
                  fill="none"
                  stroke="#e8c089"
                  strokeWidth="1.5"
                  opacity="0.6"
                />
                <circle
                  cx="120"
                  cy="370"
                  r="38"
                  fill="none"
                  stroke="#8b5e3c"
                  strokeWidth="1"
                  opacity="0.8"
                />
                {/* Puente */}
                <rect
                  x="92"
                  y="412"
                  width="56"
                  height="10"
                  rx="2"
                  fill="#2a1a0a"
                />
                {/* Diapasón */}
                <rect x="110" y="40" width="20" height="220" fill="url(#gneck)" />
                <rect x="110" y="40" width="20" height="220" fill="none" stroke="#2a1a0a" strokeWidth="1" />
                {/* Clavijero */}
                <path
                  d="M104 10 L136 10 L140 40 L100 40 Z"
                  fill="#3d2817"
                  stroke="#2a1a0a"
                  strokeWidth="1"
                />
                {/* Trastes */}
                {[60, 80, 100, 120, 140, 160, 180, 200, 220, 240].map((y) => (
                  <line
                    key={y}
                    x1="110"
                    y1={y}
                    x2="130"
                    y2={y}
                    stroke="#c89865"
                    strokeWidth="0.6"
                    opacity="0.7"
                  />
                ))}
                {/* Cuerdas */}
                {[-6, -3.5, -1, 1, 3.5, 6].map((dx, i) => (
                  <line
                    key={i}
                    x1={120 + dx}
                    y1="40"
                    x2={120 + dx}
                    y2="417"
                    stroke="#f0e4cc"
                    strokeWidth="0.6"
                    opacity="0.55"
                  />
                ))}
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-12 -right-10 opacity-[0.04] select-none pointer-events-none hidden md:block">
        <span className="text-[16rem] font-headline italic font-semibold leading-none">
          Mangoré
        </span>
      </div>
    </section>
  )
}
