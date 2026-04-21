/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#1a130d',
        surface: '#1a130d',
        'surface-dim': '#140d08',
        'surface-bright': '#352820',
        'surface-container-lowest': '#0f0a06',
        'surface-container-low': '#221810',
        'surface-container': '#291e15',
        'surface-container-high': '#33261b',
        'surface-container-highest': '#3d2e21',
        'surface-variant': '#33261b',

        primary: '#e8c089',
        'primary-container': '#8b5e3c',
        'on-primary': '#2a1a0a',
        'on-primary-container': '#fdf3e0',

        secondary: '#d9a066',
        'secondary-container': '#6b4423',
        'on-secondary-container': '#fbe7cc',

        tertiary: '#c9611e',
        'tertiary-container': '#7a3a10',
        'on-tertiary-container': '#ffe0cc',

        accent: '#c89865',
        parchment: '#f0e4cc',
        bone: '#e8dcc0',
        sepia: '#6b4423',

        'on-surface': '#f0e4cc',
        'on-surface-variant': '#b8a48d',
        'on-background': '#f0e4cc',

        outline: '#8a7560',
        'outline-variant': '#4a3a2e',

        error: '#e6a98a',
      },
      borderRadius: {
        DEFAULT: '0.125rem',
        lg: '0.25rem',
        xl: '0.5rem',
        full: '0.75rem',
      },
      fontFamily: {
        headline: ['Fraunces', 'Georgia', 'serif'],
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['Manrope', 'system-ui', 'sans-serif'],
        label: ['Manrope', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'wood-grain':
          'repeating-linear-gradient(90deg, rgba(139, 94, 60, 0.05) 0px, rgba(139, 94, 60, 0.05) 1px, transparent 1px, transparent 4px), repeating-linear-gradient(180deg, rgba(139, 94, 60, 0.03) 0px, rgba(139, 94, 60, 0.03) 1px, transparent 1px, transparent 6px)',
        'paper-noise':
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.55 0 0 0 0 0.4 0 0 0 0 0.25 0 0 0 0.35 0'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.5'/></svg>\")",
      },
    },
  },
  plugins: [],
}
