export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest w-full border-t border-outline-variant/30">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 px-6 sm:px-12 py-12 w-full max-w-screen-2xl mx-auto">
        <div className="text-center md:text-left">
          <span className="font-headline text-xl font-semibold text-parchment">
            María Paz Cubells Gómez
          </span>
          <p className="italic-serif text-primary text-sm mt-1">
            Guitarra clásica · Paraguay
          </p>
          <p className="text-on-surface-variant text-sm mt-3 font-body tracking-wide">
            © {new Date().getFullYear()} Todos los derechos reservados.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-5 sm:gap-8 font-body text-sm tracking-wide">
          <a className="text-on-surface-variant hover:text-primary transition-colors" href="#biografia">
            Biografía
          </a>
          <a className="text-on-surface-variant hover:text-primary transition-colors" href="#trayectoria">
            Trayectoria
          </a>
          <a className="text-on-surface-variant hover:text-primary transition-colors" href="#repertorio">
            Repertorio
          </a>
          <a className="text-on-surface-variant hover:text-primary transition-colors" href="#contacto">
            Contacto
          </a>
        </div>

        <div className="flex items-center gap-3 text-on-surface-variant italic-serif text-sm">
          <span className="material-symbols-outlined text-primary text-base">
            music_note
          </span>
          Desde la tierra de Mangoré
        </div>
      </div>
    </footer>
  )
}
