export default function About() {
  return (
    <section className="py-20 md:py-32 bg-surface" id="about">
      <div className="container mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="relative z-10 overflow-hidden rounded-xl">
              <img
                alt="Modern minimalist home studio setup with a wooden desk, monitor speakers, and a large window"
                className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCAGqOAG8YJzRebaOkztV_sz4KBy9cNsGnt4RM8USggOaNUOHE3gOaGnQd2Xn9YlIHadqgH6w8tnkweRlbm589kPoPT4iaOxyyuD84lFJNIrciXY-jaus3PrT3hOcT438gXatX2uGA8-ajpG2-X68lBQgCkTQs22PT9-CIiDhC6Lag-oCdfVP7iCg0yFJOa6NrDIYOY2f_3tKjaeiTnCVYA79fOkTjuZpDm3hE_nHHvOnc9UUIPZjZ75FwaGAwBZo1MnuDuNP_j4U"
              />
            </div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary-container/20 blur-3xl -z-0" />
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-blue-500/10 blur-3xl -z-0" />
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-primary tracking-widest uppercase mb-4 block font-semibold text-xs sm:text-sm">
              The Architect of Sound
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-8">
              Crafting Emotive Textures.
            </h2>
            <div className="space-y-6 text-on-surface-variant text-base md:text-lg leading-relaxed font-body">
              <p>
                SonicCurator is the creative alias of Julian Vance, an award-winning
                producer and sound designer with over a decade of experience in the
                global music industry.
              </p>
              <p>
                By merging analog warmth with digital precision, Julian creates
                auditory experiences that resonate deeply. His work has been featured
                in top-tier cinematic scores and chart-topping electronic releases
                alike.
              </p>
              <p>
                From the first beat to the final master, every project is treated as a
                unique piece of sonic architecture, designed to move, inspire, and
                define the modern soundscape.
              </p>
            </div>
            <div className="mt-10 md:mt-12 grid grid-cols-2 gap-8 border-t border-outline-variant/20 pt-8">
              <div>
                <span className="block text-2xl md:text-3xl font-bold text-on-surface font-headline">
                  150+
                </span>
                <span className="text-xs md:text-sm uppercase tracking-widest text-on-surface-variant">
                  Projects Completed
                </span>
              </div>
              <div>
                <span className="block text-2xl md:text-3xl font-bold text-on-surface font-headline">
                  12
                </span>
                <span className="text-xs md:text-sm uppercase tracking-widest text-on-surface-variant">
                  Industry Awards
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
