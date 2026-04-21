# María Paz Cubells Gómez — Portafolio

Sitio web en español para **María Paz Cubells Gómez**, guitarrista clásica
paraguaya, con una estética rústica-elegante moderna que dialoga con la
tradición de Agustín Barrios Mangoré (San Juan Bautista de las Misiones).

## Stack

- [Vite](https://vitejs.dev/) (React plugin)
- [React 18](https://react.dev/)
- [Tailwind CSS 3](https://tailwindcss.com/) con paleta cálida custom
- Google Fonts: **Fraunces** (serif moderno), **Cormorant Garamond** (itálicas), **Manrope** (cuerpo)
- Material Symbols Outlined (íconos)

## Scripts

```bash
npm install       # instala dependencias
npm run dev       # servidor local (http://localhost:5173)
npm run build     # build de producción en /dist
npm run preview   # previsualizar el build
```

## Deploy

El build genera estáticos en `dist/` y corre en cualquier host estático:
Vercel, Netlify, Cloudflare Pages, GitHub Pages, etc.

`vite.config.js` usa `base: './'` para que funcione en cualquier subruta.

## Estructura

```
src/
├── main.jsx
├── App.jsx
├── index.css                 # Tailwind base + tokens rústicos
└── components/
    ├── Navbar.jsx            # navegación + menú móvil
    ├── Hero.jsx              # presentación con ilustración SVG de guitarra
    ├── Biografia.jsx         # vida y formación
    ├── Trayectoria.jsx       # línea de tiempo de hitos
    ├── Mangore.jsx           # vínculo con San Juan Bautista y Mangoré
    ├── Repertorio.jsx        # obras y actividades
    ├── Contacto.jsx          # formulario con estado local
    └── Footer.jsx
```

## Paleta

Madera, oro pálido, terracota, pergamino — construida sobre fondo cálido
(`#1a130d`) con acentos de cuero y dorado antiguo.

## Responsive

Mobile-first. Probado en `sm` (≥640px), `md` (≥768px), `lg` (≥1024px). El
navbar colapsa en menú hamburguesa debajo de `md`.
