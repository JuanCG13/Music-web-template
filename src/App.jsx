import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import FeaturedMusic from './components/FeaturedMusic.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Testimonials from './components/Testimonials.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedMusic />
        <About />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
