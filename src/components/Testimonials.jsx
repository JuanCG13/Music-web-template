export default function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-surface">
      <div className="container mx-auto px-6 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <span className="material-symbols-outlined text-primary text-5xl md:text-6xl mb-8 md:mb-10 opacity-30">
            format_quote
          </span>
          <p className="text-2xl sm:text-3xl md:text-5xl font-medium font-body leading-tight mb-10 md:mb-12">
            "The depth Julian brings to every project is unmatched. He doesn't just
            produce tracks; he builds worlds. Our last album reached heights I never
            thought possible thanks to his curation."
          </p>
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden grayscale flex-shrink-0">
              <img
                alt="Close up portrait of a professional female vocalist with thoughtful expression"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDV0HvPFBqta-wS28FAfYIjONK12sTh28911TSzrq3KyUofrssrFFkfiF6309GL8uFtDHhAStCRSaKe96TrLf6_TKeZ-6CPkAFeKWJXVhaCiNDeI7LLMXOy_EwJnrOoT3f-viYR6YN_dG1DQ-YVJu5TxeHtShNNfikrJYcmSLZn9_5pWJhGf7oODNGKLEOh1DJe0OzZlT2h9tMElROrTvMTjqbBqBkveiP39l7-ltnjI_AUr_788fA3P9YyJz0mMntMVyF2QC3Wi-c"
              />
            </div>
            <div>
              <h4 className="text-lg md:text-xl font-bold">Elena Thorne</h4>
              <p className="text-on-surface-variant text-xs sm:text-sm uppercase tracking-widest">
                Avant-Pop Artist
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
