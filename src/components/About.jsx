import { FiCalendar, FiMapPin, FiCode } from 'react-icons/fi'
import FadeIn from './FadeIn'

const stats = [
  { icon: FiCalendar, label: "En formation", value: "Mastère 1" },
  { icon: FiMapPin, label: "Localisation", value: "France" },
  { icon: FiCode, label: "Spécialité", value: "Full Stack" },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Photo */}
          <FadeIn direction="right">
            <div className="relative flex justify-center md:justify-start">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 bg-violet-500 rounded-2xl opacity-20 blur-2xl" />
                <div className="relative w-full h-full bg-card border border-gray-800 rounded-2xl overflow-hidden">
                  <img src="/photo.png" alt="Yanisse Ismaili" className="w-full h-full object-cover object-top" />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-surface border border-gray-700 rounded-xl px-4 py-2">
                  <span className="text-sm font-mono text-cyan-400">const dev = "passionné"</span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Content */}
          <FadeIn direction="left" delay={0.15}>
            <p className="text-orange-400 font-mono text-sm uppercase tracking-widest mb-3">À propos</p>
            <h2 className="section-title">Qui suis-je ?</h2>

            <p className="text-gray-400 leading-relaxed mb-4">
              Étudiant en Mastère 1 en développement informatique, je suis passionné par la création
              d'applications web modernes. J'aime travailler aussi bien sur le frontend que le backend,
              en cherchant toujours à produire un code propre et maintenable.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Curieux et autodidacte, j'apprends en permanence de nouvelles technologies et je m'engage
              dans chaque projet avec rigueur et créativité.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {stats.map(({ icon: Icon, label, value }, i) => (
                <FadeIn key={label} delay={0.25 + i * 0.1}>
                  <div className="card text-center p-4">
                    <Icon className="mx-auto mb-2 text-orange-400" size={20} />
                    <p className="text-white font-semibold text-sm">{value}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{label}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
