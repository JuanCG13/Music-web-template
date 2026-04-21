import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Biografia from './components/Biografia.jsx'
import Trayectoria from './components/Trayectoria.jsx'
import Mangore from './components/Mangore.jsx'
import Repertorio from './components/Repertorio.jsx'
import Contacto from './components/Contacto.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Biografia />
        <Trayectoria />
        <Mangore />
        <Repertorio />
        <Contacto />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
