export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          alt="Professional music producer in a dark high-end studio with glowing blue neon lights and modular synthesizers"
          className="w-full h-full object-cover opacity-40"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuEoI9QMuVhqNFk2aoNCABkPuckw7s3Abuo-SdPpjbCAJrgHKVIHw3ImcaG3UhJfsK7SJ3Kg0wqZDwAcOkyMv27WFHygiNfWstwx9akYjWs_DZ4TuVdIPSjgIirswk9DUTbS0vrR_TiR5_yRLg1pQ6Fj0jOMSMsAbtIvYgnrjKmWr3t4A2WLaTFoeYw0543DpPHqkSSiX8hATwHL2ZPWeI5OprunsNKZZpcUCs6BR9QfwVn6LtF_UlbcXVs8wk8Ox_4rlTSUvbgaw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent md:hidden" />
      </div>

      <div className="container mx-auto px-6 sm:px-8 relative z-10">
        <div className="max-w-4xl">
          <span className="inline-block text-primary tracking-[0.2em] uppercase mb-6 font-semibold text-xs sm:text-sm">
            Sonic Mastery &amp; Curation
          </span>
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tighter mb-8 md:mb-10 text-on-surface">
            Define <br />Your <span className="text-primary-container">Sound</span>
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <button className="bg-primary-container text-on-primary-container px-8 sm:px-10 py-4 sm:py-5 rounded-full text-base sm:text-lg font-bold hover:scale-105 transition-transform flex items-center justify-center gap-3">
              Listen Now
              <span className="material-symbols-outlined filled">play_arrow</span>
            </button>
            <button className="border border-outline-variant/30 text-on-surface px-8 sm:px-10 py-4 sm:py-5 rounded-full text-base sm:text-lg font-bold hover:bg-surface-container-high transition-colors">
              View Portfolio
            </button>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-10 -right-20 opacity-[0.03] select-none pointer-events-none hidden md:block">
        <span className="text-[20rem] font-bold font-headline leading-none">SONIC</span>
      </div>
    </section>
  )
}
