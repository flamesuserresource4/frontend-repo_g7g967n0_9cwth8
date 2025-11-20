import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Menu from './components/Menu'
import About from './components/About'
import Location from './components/Location'
import Gallery from './components/Gallery'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-black text-white selection:bg-[#ff0054] selection:text-white">
      <Navbar />
      <Hero />
      <main>
        <Menu />
        <About />
        <Location />
        <Gallery />
        <Contact />
      </main>
      <footer className="bg-black/80 border-t border-white/10 py-8 text-center text-white/60">
        <p className="text-xs tracking-wider">© {new Date().getFullYear()} Ohmami — Street Food / Thessaloniki</p>
      </footer>

      {/* Smooth scrolling behavior */}
      <style>{`
        html { scroll-behavior: smooth; }
        ::selection { background: #ff0054; color: #fff; }
      `}</style>
    </div>
  )
}

export default App
