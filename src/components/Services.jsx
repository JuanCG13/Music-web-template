const services = [
  {
    icon: 'equalizer',
    title: 'Music Production',
    description:
      'Complete track production from initial concept to radio-ready master. Specializing in IDM, Ambient, and Modern Pop.',
  },
  {
    icon: 'piano',
    title: 'Composition',
    description:
      'Original scores and soundscapes for film, advertisements, and interactive media. Bespoke emotional resonance.',
  },
  {
    icon: 'surround_sound',
    title: 'Live Performance',
    description:
      'Immersive live sets featuring live instrumentation and reactive visuals for festivals and private events.',
  },
]

export default function Services() {
  return (
    <section className="py-20 md:py-32 bg-surface-container-low" id="services">
      <div className="container mx-auto px-6 sm:px-8 text-center mb-12 md:mb-20">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Expertise &amp; Services
        </h2>
        <p className="text-on-surface-variant max-w-2xl mx-auto">
          Tailored sonic solutions for artists, brands, and cinematic productions.
        </p>
      </div>
      <div className="container mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-surface-container-high p-8 md:p-10 rounded-xl hover:bg-surface-container-highest transition-colors group"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 bg-primary-container/10 text-primary-container rounded-full flex items-center justify-center mb-6 md:mb-8 group-hover:bg-primary-container group-hover:text-on-primary-container transition-all">
                <span className="material-symbols-outlined text-3xl">{service.icon}</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 font-headline">
                {service.title}
              </h3>
              <p className="text-on-surface-variant leading-relaxed font-body">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
