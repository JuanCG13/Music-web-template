export default function Footer() {
  return (
    <footer className="bg-neutral-950 w-full border-t border-neutral-800/20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 px-6 sm:px-12 py-10 w-full max-w-screen-2xl mx-auto">
        <div className="text-center md:text-left">
          <span className="text-lg font-bold text-neutral-100 font-headline">
            SonicCurator
          </span>
          <p className="text-neutral-500 text-sm mt-2 font-body tracking-wide">
            © {new Date().getFullYear()} SonicCurator. All rights reserved.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 font-body text-sm tracking-wide">
          <a className="text-neutral-500 hover:text-blue-400 transition-colors" href="#">
            Privacy Policy
          </a>
          <a className="text-neutral-500 hover:text-blue-400 transition-colors" href="#">
            Terms of Service
          </a>
          <a className="text-neutral-500 hover:text-blue-400 transition-colors" href="#">
            Press Kit
          </a>
        </div>
        <div className="flex gap-4 text-neutral-500">
          <button aria-label="RSS feed" className="hover:text-blue-400 transition-colors">
            <span className="material-symbols-outlined text-lg">rss_feed</span>
          </button>
          <button aria-label="Share" className="hover:text-blue-400 transition-colors">
            <span className="material-symbols-outlined text-lg">share</span>
          </button>
        </div>
      </div>
    </footer>
  )
}
