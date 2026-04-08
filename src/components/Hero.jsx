import { Link } from 'react-scroll'
import { Link as RouterLink } from 'react-router-dom'
import { FiGithub, FiLinkedin, FiFileText } from 'react-icons/fi'
import FloatingCode from './FloatingCode'

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center relative overflow-hidden px-6">
      {/* Grille de fond animée */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(#a855f7 1px, transparent 1px), linear-gradient(90deg, #a855f7 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          animation: 'gridMove 8s linear infinite',
        }}
      />

      {/* Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* Code snippets flottants */}
      <FloatingCode />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="max-w-3xl" style={{ animation: 'fadeInUp 0.8s ease-out forwards' }}>
          <p className="font-mono text-orange-400 text-sm mb-4 tracking-widest uppercase">Bonjour, je suis</p>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 leading-tight">
            Yanisse
            <br />
            <span className="text-violet-400">Ismaili</span>
          </h1>

          {/* Titre animé façon terminal */}
          <h2 className="text-xl md:text-2xl text-gray-400 font-medium mb-6 flex items-center gap-2">
            <span className="font-mono text-cyan-400">&gt;</span>
            Développeur <span className="text-white ml-1">Full Stack</span>
            <span className="inline-block w-0.5 h-6 bg-cyan-400 ml-1" style={{ animation: 'blink 1s step-end infinite' }} />
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl">
            Je conçois et développe des applications web modernes, performantes et accessibles.
            Passionné par les interfaces élégantes et le code propre.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-12">
            <Link to="projects" smooth duration={500} offset={-80}>
              <button className="btn-primary flex items-center gap-2">
                Voir mes projets
              </button>
            </Link>
            <Link to="contact" smooth duration={500} offset={-80}>
              <button className="btn-outline">
                Me contacter
              </button>
            </Link>
          </div>

          <div className="flex items-center gap-6">
            <a href="https://github.com/YanisseIsmaili" target="_blank" rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors duration-200" aria-label="GitHub">
              <FiGithub size={22} />
            </a>
            <a href="https://www.linkedin.com/in/yanisse-ismaili/" target="_blank" rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors duration-200" aria-label="LinkedIn">
              <FiLinkedin size={22} />
            </a>
            <span className="text-gray-700">|</span>
            <RouterLink to="/cv"
              className="text-gray-500 hover:text-orange-400 transition-colors duration-200 flex items-center gap-1.5 text-sm">
              <FiFileText size={16} />
              Voir mon CV
            </RouterLink>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600">
        <span className="text-xs uppercase tracking-widest font-mono">Scroll</span>
        <div className="w-0.5 h-10 bg-gradient-to-b from-gray-600 to-transparent" />
      </div>
    </section>
  )
}
