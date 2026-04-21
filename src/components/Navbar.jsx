import { useState, useEffect } from 'react'

const links = [
  { href: '#biografia', label: 'Biografía' },
  { href: '#trayectoria', label: 'Trayectoria' },
  { href: '#mangore', label: 'Mangoré' },
  { href: '#repertorio', label: 'Repertorio' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#biografia')

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const handleClick = (href) => {
    setActive(href)
    setOpen(false)
  }

  return (
    <nav className="fixed top-0 w-full z-50 glass-warm">
      <div className="flex justify-between items-center px-5 sm:px-8 py-3 sm:py-4 max-w-screen-2xl mx-auto gap-3">
        <a
          className="flex items-baseline gap-2 font-headline min-w-0"
          href="#"
          onClick={() => handleClick('#')}
        >
          <span className="text-lg sm:text-xl md:text-2xl font-semibold tracking-tight text-parchment truncate">
            <span className="sm:hidden">M. P. Cubells</span>
            <span className="hidden sm:inline">María Paz Cubells</span>
          </span>
          <span className="hidden md:inline italic-serif text-primary text-sm">
            · guitarra
          </span>
        </a>

        <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => handleClick(link.href)}
              className={
                active === link.href
                  ? 'text-primary font-medium border-b border-primary pb-1 font-headline tracking-tight'
                  : 'text-on-surface-variant font-medium hover:text-parchment transition-colors font-headline tracking-tight'
              }
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#contacto"
            className="hidden lg:inline-flex items-center gap-2 border border-primary/40 text-primary hover:bg-primary hover:text-on-primary px-5 md:px-6 py-2 rounded-full font-medium transition-colors duration-200 text-sm"
          >
            Reservar concierto
          </a>

          <button
            aria-label="Abrir menú"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-parchment"
          >
            <span className="material-symbols-outlined">
              {open ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
          open ? 'max-h-[28rem] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-6 pt-2 flex flex-col gap-3 bg-surface-container-low/95 backdrop-blur-xl border-t border-outline-variant/30">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => handleClick(link.href)}
              className={
                active === link.href
                  ? 'text-primary font-medium font-headline tracking-tight py-2'
                  : 'text-on-surface-variant font-medium hover:text-parchment font-headline tracking-tight py-2'
              }
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="lg:hidden mt-2 border border-primary/40 text-primary px-6 py-3 rounded-full font-medium text-center"
          >
            Reservar concierto
          </a>
        </div>
      </div>
    </nav>
  )
}
