import { useState } from 'react'

export default function Contacto() {
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    motivo: 'Concierto',
    mensaje: '',
  })
  const [enviado, setEnviado] = useState(false)

  const update = (campo) => (event) =>
    setForm((prev) => ({ ...prev, [campo]: event.target.value }))

  const handleSubmit = (event) => {
    event.preventDefault()
    setEnviado(true)
    setTimeout(() => setEnviado(false), 3500)
    setForm({ nombre: '', email: '', motivo: 'Concierto', mensaje: '' })
  }

  return (
    <section
      className="py-24 md:py-32 bg-surface-container-low paper-texture"
      id="contacto"
    >
      <div className="container mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <span className="italic-serif text-primary tracking-widest uppercase text-xs sm:text-sm mb-4 block">
              — Contacto
            </span>
            <h2 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-10 text-parchment leading-tight">
              Conversemos{' '}
              <span className="italic-serif text-primary font-normal">
                sobre música
              </span>
            </h2>
            <p className="text-lg md:text-xl text-on-surface-variant mb-12 max-w-md font-body leading-relaxed">
              Para conciertos, colaboraciones, clases, o simplemente para compartir una
              pieza que te emocione. Escribimos respuesta a cada mensaje.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-5 group">
                <div className="w-12 h-12 border border-outline/40 flex items-center justify-center rounded-lg group-hover:bg-primary group-hover:border-primary group-hover:text-on-primary transition-all flex-shrink-0 text-primary">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-on-surface-variant mb-1">
                    Correo
                  </p>
                  <span className="text-base sm:text-lg font-medium font-headline text-parchment break-all">
                    mariapazcubells@ejemplo.com
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-5 group">
                <div className="w-12 h-12 border border-outline/40 flex items-center justify-center rounded-lg group-hover:bg-primary group-hover:border-primary group-hover:text-on-primary transition-all flex-shrink-0 text-primary">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-on-surface-variant mb-1">
                    Ubicación
                  </p>
                  <span className="text-base sm:text-lg font-medium font-headline text-parchment">
                    Asunción · Paraguay
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-5 group">
                <div className="w-12 h-12 border border-outline/40 flex items-center justify-center rounded-lg group-hover:bg-primary group-hover:border-primary group-hover:text-on-primary transition-all flex-shrink-0 text-primary">
                  <span className="material-symbols-outlined">language</span>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-on-surface-variant mb-1">
                    Gira 2025
                  </p>
                  <span className="text-base sm:text-lg font-medium font-headline text-parchment">
                    Paraguay · Colombia
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                aria-label="Instagram"
                className="w-12 h-12 bg-surface-container-high rounded-full flex items-center justify-center hover:bg-primary-container transition-colors group border border-outline-variant/30"
                href="#"
              >
                <svg
                  className="w-5 h-5 fill-parchment group-hover:fill-on-primary-container"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                aria-label="YouTube"
                className="w-12 h-12 bg-surface-container-high rounded-full flex items-center justify-center hover:bg-primary-container transition-colors group border border-outline-variant/30"
                href="#"
              >
                <svg
                  className="w-5 h-5 fill-parchment group-hover:fill-on-primary-container"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z" />
                </svg>
              </a>
              <a
                aria-label="Spotify"
                className="w-12 h-12 bg-surface-container-high rounded-full flex items-center justify-center hover:bg-primary-container transition-colors group border border-outline-variant/30"
                href="#"
              >
                <span className="material-symbols-outlined text-parchment group-hover:text-on-primary-container text-xl">
                  library_music
                </span>
              </a>
            </div>
          </div>

          <div className="bg-surface-container-high p-6 sm:p-8 md:p-12 rounded-2xl border border-outline-variant/40 relative">
            <div className="absolute -top-4 left-6 md:left-10 bg-primary-container text-on-primary-container px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase font-headline">
              Escribir
            </div>
            <form onSubmit={handleSubmit} className="space-y-6 mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-on-surface-variant mb-2">
                    Nombre
                  </label>
                  <input
                    required
                    value={form.nombre}
                    onChange={update('nombre')}
                    className="w-full bg-surface-container-lowest border border-outline-variant/40 focus:border-primary focus:ring-1 focus:ring-primary text-parchment px-4 py-3.5 rounded-lg outline-none transition-colors"
                    placeholder="Tu nombre"
                    type="text"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-on-surface-variant mb-2">
                    Correo
                  </label>
                  <input
                    required
                    value={form.email}
                    onChange={update('email')}
                    className="w-full bg-surface-container-lowest border border-outline-variant/40 focus:border-primary focus:ring-1 focus:ring-primary text-parchment px-4 py-3.5 rounded-lg outline-none transition-colors"
                    placeholder="tu@correo.com"
                    type="email"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-on-surface-variant mb-2">
                  Motivo
                </label>
                <select
                  value={form.motivo}
                  onChange={update('motivo')}
                  className="w-full bg-surface-container-lowest border border-outline-variant/40 focus:border-primary focus:ring-1 focus:ring-primary text-parchment px-4 py-3.5 rounded-lg outline-none transition-colors"
                >
                  <option>Concierto</option>
                  <option>Música de cámara</option>
                  <option>Clases</option>
                  <option>Entrevista / prensa</option>
                  <option>Otro</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-on-surface-variant mb-2">
                  Mensaje
                </label>
                <textarea
                  required
                  value={form.mensaje}
                  onChange={update('mensaje')}
                  className="w-full bg-surface-container-lowest border border-outline-variant/40 focus:border-primary focus:ring-1 focus:ring-primary text-parchment px-4 py-3.5 rounded-lg outline-none resize-y transition-colors"
                  placeholder="Contame sobre tu propuesta o proyecto..."
                  rows={4}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-on-primary py-4 sm:py-5 rounded-full text-base sm:text-lg font-semibold hover:bg-primary-container hover:text-on-primary-container transition-colors font-headline"
              >
                {enviado ? '✓ Mensaje enviado. Gracias.' : 'Enviar mensaje'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
