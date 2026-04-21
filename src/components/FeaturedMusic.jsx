export default function FeaturedMusic() {
  return (
    <section className="py-20 md:py-32 bg-surface-container-low" id="music">
      <div className="container mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-12 md:mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Latest Releases</h2>
            <p className="text-on-surface-variant max-w-md">
              Curated sonic landscapes pushing the boundaries of contemporary electronic production.
            </p>
          </div>
          <a
            className="text-primary font-bold inline-flex items-center gap-2 hover:gap-4 transition-all"
            href="#"
          >
            Browse All Tracks <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-8 group relative overflow-hidden bg-surface-container-high rounded-xl">
            <img
              alt="Abstract vibrant 3D render of sound waves and liquid textures in deep blue and ultraviolet colors"
              className="w-full h-80 sm:h-96 md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfYvxTV4k-Ricyfyz49e9w9VgYKVlH6G69D2qfcG7B5MhEpTyuwju08R9uIFCWwPhtDzWg_3t8BWY1dNIDn8o9hryPgmvbabfCq2sngrrK7ZQDhnNyR2gY0Dr4vLpmgg9hTTafuTxmwvH7mtYCwjFxPvSIVNdPP8x3myDe5UheqI4fTzKj-se6pxa7lyg6upD5YZCH1Kf18Va_rxrH13EP_5OlghwkBZon91D-Qlj67w3u_N57wLU3deBbWsMwD5SUSFFrnWbacGA"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Neon Horizons</h3>
              <p className="text-on-surface-variant mb-4 md:mb-6">Full Album • 2024</p>
              <button
                aria-label="Play Neon Horizons"
                className="bg-white text-black p-3 md:p-4 rounded-full hover:scale-110 transition-transform"
              >
                <span className="material-symbols-outlined filled">play_arrow</span>
              </button>
            </div>
          </div>

          <div className="md:col-span-4 group relative overflow-hidden bg-surface-container-high rounded-xl min-h-[260px] md:min-h-0">
            <img
              alt="Stylized portrait of a musician in shadows with high contrast lighting and purple ambient glow"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAL7I1XkBCAP9CAlWEGQu3Y_ruX0qsqYZcSDF7rRkPZbPwEEcNWQIwVVznMVfXwhXvD3tTssuPs2XSpCgU2cAg-ZFGcuqJh2KxjXOZr8qeGd6w45s5AieandLeuU-0Am2aWd1d_-Z_bxkqXoduuo0nk_TYtCWzU_x2AID73Kk2COSq85oZHGPHVY9vBm-jTaKLW-eK7tuQAH1SSAR7oh2h5EKcaGX8cLL46W_2tDZKdYCKIa9f1gOr_eb5kwf2vz3kDZOv29Jks-d0"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
            <div className="relative z-10 flex flex-col justify-end p-6 md:p-8 min-h-[260px] md:h-full">
              <h3 className="text-xl font-bold">Midnight Pulse</h3>
              <p className="text-on-surface-variant text-sm">Single</p>
            </div>
          </div>

          <div className="md:col-span-4 group relative overflow-hidden bg-surface-container-high rounded-xl min-h-[260px] md:min-h-0">
            <img
              alt="Close up of a classic silver studio microphone with soft bokeh lights in background"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDy-OIJAv9T9tqdIjcIbwXVlInGuHT2eZehwC8OlKjC8IackmBJZkH177VGTMVXxJsUIr4Dq570NSWp_reGzA7Rr3RgFq1f6rPvyVYSSzu6v-TxByZZQJKodT3qNldD7Ql8Cww7IDpFfqeffF2p60kR5FUbxsLb4zG-XgGoei1EWHTkv7W72zJxyjDHhqMRIHYJC4ke6zK-qfS2EAz1enydPKCiiVPz7pvwvj-hBG4ZuX3Ng_pz2zMVl1y7wmFbMxV040tDVhaVoH4"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
            <div className="relative z-10 flex flex-col justify-end p-6 md:p-8 min-h-[260px] md:h-full">
              <h3 className="text-xl font-bold">Analog Echoes</h3>
              <p className="text-on-surface-variant text-sm">EP</p>
            </div>
          </div>

          <div className="md:col-span-8 group relative overflow-hidden bg-surface-container-high rounded-xl">
            <img
              alt="Cinematic wide shot of a music festival stage at night with lasers and smoke"
              className="w-full h-64 md:h-[300px] object-cover transition-transform duration-700 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0YPVDf0YHzSEj_KSntoMKWKkl8mwTrLcte2bWiaxIyUNfToJfRoy0kcu7gODrfRFj8swBqs8V1RqIukZL7c4xQt39KiKh-M0WEy3pH7PKpydDLJ5WuepE9gb_0xeDOOvGa6ROFyVOlmst2VNeBxh9gMmfjW4KAf0Oydaiss3liRmsirocs2hjLRotSrSzwcFOhB8sd9lbvuQdmO96vbk7ZSptIf-wX4MzUpUkYmSFg61_Z0nPOSIp6E150gxcZFcHCrAgdjjJVPA"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 flex items-end justify-between">
              <div>
                <h3 className="text-xl md:text-2xl font-bold">Live at The Void</h3>
                <p className="text-on-surface-variant">Concert Film</p>
              </div>
              <span className="material-symbols-outlined text-3xl md:text-4xl text-primary">
                play_circle
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
