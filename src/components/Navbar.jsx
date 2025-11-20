import { useState, useEffect } from 'react'
import { Menu as MenuIcon, X, MapPin, Phone, UtensilsCrossed } from 'lucide-react'

const NAV_ITEMS = [
  { label: 'Menu', href: '#menu' },
  { label: 'About', href: '#about' },
  { label: 'Location', href: '#location' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'bg-black/70 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 group">
            <div className="h-8 w-8 rounded-sm bg-[#ff0054] shadow-[0_0_30px_#ff0054aa]"></div>
            <span className="text-white font-black tracking-widest text-sm sm:text-base">
              OHMAMI
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <a key={item.href} href={item.href} className="text-white/80 hover:text-white text-sm font-medium transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#order" className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-black font-bold bg-[#f5ff7d] hover:shadow-[0_0_35px_#f5ff7daa] transition-shadow">
              <UtensilsCrossed size={16} /> Order Now
            </a>
          </nav>

          <button onClick={() => setOpen(!open)} aria-label="Toggle menu" className="md:hidden text-white">
            {open ? <X /> : <MenuIcon />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-3">
              {NAV_ITEMS.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-white/90 py-2">
                  {item.label}
                </a>
              ))}
              <a href="#order" onClick={() => setOpen(false)} className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md text-black font-bold bg-[#f5ff7d] hover:shadow-[0_0_35px_#f5ff7daa] transition-shadow">
                <UtensilsCrossed size={16} /> Order Now
              </a>
              <div className="flex items-center gap-4 pt-2 text-white/70 text-sm">
                <span className="inline-flex items-center gap-1"><MapPin size={16}/> Thessaloniki</span>
                <span className="inline-flex items-center gap-1"><Phone size={16}/> +30 210 000 0000</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
