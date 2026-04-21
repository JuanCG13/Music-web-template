import { useState, useEffect } from 'react'

const links = [
  { href: '#music', label: 'Music' },
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#music')

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const handleClick = (href) => {
    setActive(href)
    setOpen(false)
  }

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav">
      <div className="flex justify-between items-center px-6 sm:px-8 py-4 max-w-screen-2xl mx-auto">
        <a
          className="text-2xl font-bold tracking-tighter text-neutral-100 font-headline"
          href="#"
          onClick={() => handleClick('#')}
        >
          SonicCurator
        </a>

        <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => handleClick(link.href)}
              className={
                active === link.href
                  ? 'text-blue-500 font-bold border-b-2 border-blue-500 pb-1 font-headline tracking-tight'
                  : 'text-neutral-400 font-medium hover:text-neutral-100 transition-colors font-headline tracking-tight'
              }
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex bg-primary-container text-on-primary-container px-5 md:px-6 py-2 rounded-full font-bold hover:scale-105 transition-transform duration-200"
          >
            Book Now
          </a>

          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-on-surface"
          >
            <span className="material-symbols-outlined">
              {open ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-6 pt-2 flex flex-col gap-4 bg-neutral-900/95 backdrop-blur-xl">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => handleClick(link.href)}
              className={
                active === link.href
                  ? 'text-blue-500 font-bold font-headline tracking-tight py-2'
                  : 'text-neutral-300 font-medium hover:text-neutral-100 font-headline tracking-tight py-2'
              }
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="sm:hidden bg-primary-container text-on-primary-container px-6 py-3 rounded-full font-bold text-center"
          >
            Book Now
          </a>
        </div>
      </div>
    </nav>
  )
}
