import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    service: 'Music Production',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const update = (field) => (event) =>
    setForm((prev) => ({ ...prev, [field]: event.target.value }))

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3500)
    setForm({ name: '', email: '', service: 'Music Production', message: '' })
  }

  return (
    <section className="py-20 md:py-32 bg-surface-container-low" id="contact">
      <div className="container mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-8 md:mb-10">
              Let's Create <br />
              <span className="text-primary">Together</span>
            </h2>
            <p className="text-lg md:text-xl text-on-surface-variant mb-10 md:mb-12 max-w-md font-body">
              Ready to elevate your sound? Get in touch for collaboration, bookings, or
              production inquiries.
            </p>
            <div className="space-y-6 md:space-y-8 mb-10 md:mb-12">
              <a
                href="mailto:hello@soniccurator.studio"
                className="flex items-center gap-4 sm:gap-6 group"
              >
                <div className="w-12 h-12 border border-outline-variant/30 flex items-center justify-center rounded-lg group-hover:bg-primary group-hover:text-black transition-all flex-shrink-0">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <span className="text-base sm:text-lg md:text-xl font-medium font-headline break-all">
                  hello@soniccurator.studio
                </span>
              </a>
              <div className="flex items-center gap-4 sm:gap-6 group">
                <div className="w-12 h-12 border border-outline-variant/30 flex items-center justify-center rounded-lg group-hover:bg-primary group-hover:text-black transition-all flex-shrink-0">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <span className="text-base sm:text-lg md:text-xl font-medium font-headline">
                  Berlin / Los Angeles
                </span>
              </div>
            </div>
            <div className="flex gap-4 md:gap-6">
              <a
                aria-label="Instagram"
                className="w-12 h-12 bg-surface-container-high rounded-full flex items-center justify-center hover:bg-primary-container transition-colors group"
                href="#"
              >
                <svg
                  className="w-5 h-5 fill-on-surface group-hover:fill-on-primary-container"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                aria-label="YouTube"
                className="w-12 h-12 bg-surface-container-high rounded-full flex items-center justify-center hover:bg-primary-container transition-colors group"
                href="#"
              >
                <svg
                  className="w-5 h-5 fill-on-surface group-hover:fill-on-primary-container"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z" />
                </svg>
              </a>
              <a
                aria-label="Twitter"
                className="w-12 h-12 bg-surface-container-high rounded-full flex items-center justify-center hover:bg-primary-container transition-colors group"
                href="#"
              >
                <svg
                  className="w-5 h-5 fill-on-surface group-hover:fill-on-primary-container"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="bg-surface-container-high p-6 sm:p-8 md:p-12 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold uppercase tracking-widest text-on-surface-variant mb-2">
                    Name
                  </label>
                  <input
                    required
                    value={form.name}
                    onChange={update('name')}
                    className="w-full bg-surface-container-lowest border-none focus:ring-2 focus:ring-primary text-on-surface px-4 py-4 rounded-lg outline-none"
                    placeholder="John Doe"
                    type="text"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-semibold uppercase tracking-widest text-on-surface-variant mb-2">
                    Email
                  </label>
                  <input
                    required
                    value={form.email}
                    onChange={update('email')}
                    className="w-full bg-surface-container-lowest border-none focus:ring-2 focus:ring-primary text-on-surface px-4 py-4 rounded-lg outline-none"
                    placeholder="john@example.com"
                    type="email"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-semibold uppercase tracking-widest text-on-surface-variant mb-2">
                  Service
                </label>
                <select
                  value={form.service}
                  onChange={update('service')}
                  className="w-full bg-surface-container-lowest border-none focus:ring-2 focus:ring-primary text-on-surface px-4 py-4 rounded-lg outline-none"
                >
                  <option>Music Production</option>
                  <option>Composition</option>
                  <option>Live Performance</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-semibold uppercase tracking-widest text-on-surface-variant mb-2">
                  Message
                </label>
                <textarea
                  required
                  value={form.message}
                  onChange={update('message')}
                  className="w-full bg-surface-container-lowest border-none focus:ring-2 focus:ring-primary text-on-surface px-4 py-4 rounded-lg outline-none resize-y"
                  placeholder="Tell me about your project..."
                  rows={4}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary-container text-on-primary-container py-4 sm:py-5 rounded-full text-base sm:text-lg font-bold hover:scale-[1.02] transition-transform"
              >
                {submitted ? 'Thanks! We\'ll be in touch.' : 'Send Inquiry'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
