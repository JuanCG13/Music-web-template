export default function Hero() {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center pt-28 sm:pt-32 pb-20 overflow-hidden paper-texture">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_25%_30%,rgba(139,94,60,0.38),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_85%,rgba(201,97,30,0.22),transparent_55%)]" />
        <div className="absolute inset-0 bg-wood-grain opacity-40" />
      </div>

      <div className="container mx-auto px-6 sm:px-8 relative z-10">
        <div className="max-w-5xl mx-auto lg:mx-0">
          <div className="divider-flourish mb-8 sm:mb-10 max-w-xs sm:max-w-sm">
            <span className="italic-serif text-base sm:text-lg text-primary whitespace-nowrap">
              Desde la tierra de Mangoré
            </span>
          </div>

          <h1 className="font-headline text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[8.5rem] font-semibold leading-[0.95] sm:leading-[0.92] tracking-tight mb-8 md:mb-10 text-parchment">
            María Paz{' '}
            <span className="italic-serif text-primary font-normal">
              Cubells
            </span>{' '}
            Gómez
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-on-surface-variant max-w-2xl font-body leading-relaxed mb-10 md:mb-12">
            Guitarrista clásica paraguaya. Heredera de la tradición que nació en{' '}
            <span className="text-primary">San Juan Bautista de las Misiones</span>,
            cuna de Agustín Barrios Mangoré, uno de los guitarristas más grandes de
            la historia.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-5">
            <a
              href="#trayectoria"
              className="bg-primary-container text-on-primary-container px-7 sm:px-8 py-4 sm:py-5 rounded-full font-medium hover:bg-primary hover:text-on-primary transition-colors flex items-center justify-center gap-3 text-sm sm:text-base"
            >
              Conocer su trayectoria
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </a>
            <a
              href="#repertorio"
              className="border border-outline/40 text-parchment px-7 sm:px-8 py-4 sm:py-5 rounded-full font-medium hover:bg-surface-container-high transition-colors text-center text-sm sm:text-base"
            >
              Escuchar repertorio
            </a>
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute -bottom-6 sm:-bottom-10 -right-4 sm:-right-10 opacity-[0.045] select-none pointer-events-none"
      >
        <span className="font-headline italic font-semibold leading-none text-[8rem] sm:text-[12rem] md:text-[16rem] lg:text-[20rem] block">
          Mangoré
        </span>
      </div>
    </section>
  )
}
