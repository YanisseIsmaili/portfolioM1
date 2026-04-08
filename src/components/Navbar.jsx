import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'

const links = [
  { label: 'Accueil', to: 'hero' },
  { label: 'À propos', to: 'about' },
  { label: 'Compétences', to: 'skills' },
  { label: 'Projets', to: 'projects' },
  { label: 'Contact', to: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-dark/90 backdrop-blur-md border-b border-gray-800/50 py-3' : 'py-5'
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <span className="font-mono font-semibold text-lg text-violet-400">&lt;YI /&gt;</span>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                offset={-80}
                className="text-gray-400 hover:text-white cursor-pointer transition-colors duration-200 text-sm font-medium"
                activeClass="text-white"
                spy={true}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-gray-400 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <div className={`w-5 h-0.5 bg-current transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
          <div className={`w-5 h-0.5 bg-current my-1 transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
          <div className={`w-5 h-0.5 bg-current transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-surface border-t border-gray-800 px-6 py-4">
          <ul className="flex flex-col gap-4">
            {links.map(link => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="text-gray-400 hover:text-white cursor-pointer transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
