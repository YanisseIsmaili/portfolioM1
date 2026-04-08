import { FiPhone, FiMapPin, FiMail, FiGithub, FiLinkedin, FiPrinter, FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const skills = [
  { cat: "Frontend",        items: ["React", "Vue.js", "Next.js", "Tailwind CSS", "HTML/CSS"] },
  { cat: "Backend",         items: ["Node.js", "NestJS", "Go", "Python", "PHP", "Java"] },
  { cat: "Base de données", items: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"] },
  { cat: "Outils",          items: ["Git", "Docker", "Linux", "Figma", "Unity"] },
  { cat: "IA Générative",   items: ["ComfyUI", "Training LoRA", "Stable Diffusion"] },
  { cat: "Autres",          items: ["C#", "C++", "Blueprint", "Réseaux"] },
]

const experiences = [
  {
    title: "Mentor / Enseignant",
    company: "Ynov Campus — Montpellier",
    period: "2025 — 2026",
    tasks: [
      "Enseignement Bachelor 1 & 2 : dev web, cybersécurité, infrastructure, Linux",
      "Cours pratiques : réseaux, admin système, frontend & backend",
      "Accompagnement individualisé et évaluation des étudiants",
    ],
  },
  {
    title: "Support IT",
    company: "Ynov Campus — Montpellier",
    period: "2024 — 2025",
    tasks: [
      "Support informatique, maintenance des postes et résolution d'incidents",
      "Administration réseau et gestion du parc informatique",
    ],
  },
  {
    title: "Serveur / Barman",
    company: "Restauration",
    period: "2023 — 2024",
    tasks: [
      "Service en salle et au bar, gestion des commandes et relation client",
    ],
  },
]

const formations = [
  { title: "Master 1 Informatique",   school: "Ynov Campus — Montpellier", period: "2025 — 2026", detail: "Full Stack · Architecture logicielle · DevOps" },
  { title: "Bachelor 3 Informatique", school: "Ynov Campus — Montpellier", period: "2024 — 2025", detail: "Projets avancés · Management · Architecture système" },
  { title: "Bachelor 2 Informatique", school: "Ynov Campus — Montpellier", period: "2023 — 2024", detail: "Java · Mobile · IoT · UX Design · PHP · Unity · SQL" },
  { title: "Bachelor 1 Informatique", school: "Ynov Campus — Montpellier", period: "2022 — 2023", detail: "Go · Java · POO · Linux · Réseaux · Windows Server" },
  { title: "Bac Systèmes Numériques", school: "Option Réseaux & Systèmes Communicants", period: "2022", detail: "" },
]

export default function CV() {
  return (
    <div className="min-h-screen bg-dark text-gray-100 font-sans">
      {/* Toolbar */}
      <div className="print:hidden sticky top-0 z-50 bg-dark/90 backdrop-blur border-b border-gray-800 px-6 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
          <FiArrowLeft size={16} /> Retour au portfolio
        </Link>
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 bg-violet-500 hover:bg-violet-400 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors"
        >
          <FiPrinter size={15} /> Exporter en PDF
        </button>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12 print:p-0 print:max-w-none">
        <div className="cv-wrap grid grid-cols-1 md:grid-cols-[280px_1fr] print:grid-cols-[240px_1fr] rounded-2xl overflow-hidden border border-gray-800 print:rounded-none print:border-0">

          {/* SIDEBAR */}
          <aside className="flex flex-col gap-6 p-8 print:p-6" style={{ background: '#160d2e' }}>
            {/* Photo + nom */}
            <div className="flex flex-col items-center text-center">
              <div className="cv-photo w-28 h-28 rounded-full overflow-hidden mb-4" style={{ border: '3px solid #7c3aed' }}>
                <img src="/photo.png" alt="Yanisse Ismaili" className="w-full h-full object-cover object-top" />
              </div>
              <h1 className="text-xl font-extrabold text-white">Yanisse Ismaili</h1>
              <p className="text-violet-400 font-medium text-sm mt-1">Développeur Full Stack</p>
              <p className="text-gray-500 text-xs mt-1 font-mono">Master 1 · Ynov Campus</p>
            </div>

            {/* Contact */}
            <div>
              <SideTitle label="Contact" />
              <ul className="space-y-2 mt-3">
                {[
                  { icon: <FiPhone size={12}/>, text: '07 50 02 47 63' },
                  { icon: <FiMapPin size={12}/>, text: 'Montpellier / Nîmes' },
                  { icon: <FiMail size={12}/>, text: 'ismailiyanisse22@gmail.com' },
                  { icon: <FiGithub size={12}/>, text: 'github.com/YanisseIsmaili' },
                  { icon: <FiLinkedin size={12}/>, text: 'in/yanisse-ismaili' },
                ].map(({ icon, text }) => (
                  <li key={text} className="flex items-start gap-2 text-xs text-gray-300">
                    <span className="text-violet-400 mt-0.5 shrink-0">{icon}</span>
                    <span className="break-all">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Compétences */}
            <div>
              <SideTitle label="Compétences" />
              <div className="space-y-3 mt-3">
                {skills.map(({ cat, items }) => (
                  <div key={cat}>
                    <p className="text-xs text-gray-500 font-mono mb-1">{cat}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {items.map(s => (
                        <span key={s} className="text-xs px-2 py-0.5 rounded-full" style={{ background: 'rgba(124,58,237,0.2)', color: '#c4b5fd' }}>
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Langues */}
            <div>
              <SideTitle label="Langues" />
              <ul className="space-y-1.5 mt-3">
                {[['Français', 'Natif'], ['Anglais', 'B2']].map(([lang, lvl]) => (
                  <li key={lang} className="flex justify-between text-xs text-gray-300">
                    <span>{lang}</span>
                    <span className="text-violet-400">{lvl}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Intérêts */}
            <div>
              <SideTitle label="Intérêts" />
              <ul className="space-y-1 mt-3">
                {['Basketball', 'Jeux vidéo', 'IA & Génération d\'images', 'Développement perso'].map(h => (
                  <li key={h} className="flex items-center gap-2 text-xs text-gray-400">
                    <span className="w-1 h-1 rounded-full bg-violet-500 shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* MAIN */}
          <main className="cv-gap p-8 print:p-6 flex flex-col gap-7" style={{ background: '#0f0e17' }}>

            {/* À propos */}
            <Section label="À propos">
              <p className="text-gray-300 text-sm leading-relaxed">
                Étudiant en Master 1 Informatique à Ynov Campus et mentor auprès des étudiants Bachelor 1 & 2.
                J'enseigne le développement web, la cybersécurité, l'infrastructure et Linux. Passionné par le
                Full Stack et l'IA générative, j'ai développé plusieurs projets allant d'applications web complètes
                (React, NestJS, Docker) à des expériences interactives (Unity, borne d'arcade). Autodidacte,
                rigoureux et créatif.
              </p>
            </Section>

            {/* Expériences */}
            <Section label="Expériences professionnelles">
              <div className="space-y-4">
                {experiences.map(exp => (
                  <div key={exp.title} className="pl-4" style={{ borderLeft: '2px solid #7c3aed' }}>
                    <div className="flex justify-between items-baseline gap-2 mb-0.5">
                      <h3 className="text-white font-semibold text-sm">{exp.title}</h3>
                      <span className="text-xs font-mono shrink-0" style={{ color: '#a78bfa' }}>{exp.period}</span>
                    </div>
                    <p className="text-gray-500 text-xs mb-1.5">{exp.company}</p>
                    {exp.tasks.map(t => (
                      <div key={t} className="flex gap-1.5 text-xs text-gray-400 mb-0.5">
                        <span style={{ color: '#a78bfa' }}>›</span> {t}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </Section>

            {/* Formations */}
            <Section label="Formations">
              <div className="space-y-3">
                {formations.map(f => (
                  <div key={f.title} className="pl-4" style={{ borderLeft: '2px solid #06b6d4' }}>
                    <div className="flex justify-between items-baseline gap-2 mb-0.5">
                      <h3 className="text-white font-semibold text-sm">{f.title}</h3>
                      <span className="text-xs font-mono shrink-0" style={{ color: '#22d3ee' }}>{f.period}</span>
                    </div>
                    <p className="text-gray-500 text-xs">{f.school}</p>
                    {f.detail && <p className="text-gray-400 text-xs mt-0.5">{f.detail}</p>}
                  </div>
                ))}
              </div>
            </Section>

            {/* Projets */}
            <Section label="Projets phares">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: "MoodFlow",         stack: "React · NestJS · Docker",   desc: "App full-stack de suivi d'humeur, déployée sur Railway" },
                  { name: "GitHub Monitor",   stack: "React · Vite · GitHub API", desc: "Dashboard de monitoring d'activité GitHub en temps réel" },
                  { name: "Akiroo Game Site", stack: "React · JavaScript",        desc: "Site MOBA avec présentation dynamique des personnages" },
                  { name: "Forum (Go)",       stack: "Go · SQLite",               desc: "Forum web complet avec auth, sessions et threads" },
                ].map(p => (
                  <div key={p.name} className="rounded-lg p-3" style={{ border: '1px solid #2d2150' }}>
                    <p className="text-white font-semibold text-xs">{p.name}</p>
                    <p className="text-xs font-mono mb-1" style={{ color: '#a78bfa' }}>{p.stack}</p>
                    <p className="text-gray-500 text-xs">{p.desc}</p>
                  </div>
                ))}
              </div>
            </Section>
          </main>
        </div>
      </div>

      <style>{`
        @page { size: A4; margin: 0; }

        @media print {
          * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }

          html, body { margin: 0; padding: 0; background: #0f0e17 !important; }

          /* Force une seule page */
          .cv-wrap { page-break-inside: avoid; }

          /* Réduit les paddings */
          aside  { padding: 14px !important; gap: 10px !important; }
          main   { padding: 14px !important; gap: 12px !important; }

          /* Réduit les espacements internes */
          .cv-section  { margin-bottom: 8px !important; }
          .cv-gap      { gap: 8px !important; }
          .cv-gap-sm   { gap: 4px !important; }

          /* Réduit les tailles de police */
          h1   { font-size: 14px !important; }
          h2   { font-size: 9px !important; }
          h3   { font-size: 9.5px !important; }
          p, li, span, div { font-size: 8px !important; line-height: 1.35 !important; }
          .text-sm  { font-size: 8px !important; }
          .text-xs  { font-size: 7.5px !important; }

          /* Réduit photo */
          .cv-photo { width: 72px !important; height: 72px !important; }

          /* Supprime les marges de titre */
          .cv-section-header { margin-bottom: 4px !important; }
        }
      `}</style>
    </div>
  )
}

function SideTitle({ label }) {
  return (
    <div style={{ borderTop: '1px solid rgba(124,58,237,0.3)', paddingTop: 8 }}>
      <p className="text-xs font-bold uppercase tracking-widest" style={{ color: '#f97316' }}>{label}</p>
    </div>
  )
}

function Section({ label, children }) {
  return (
    <div className="cv-section">
      <div className="cv-section-header flex items-center gap-3 mb-4">
        <div className="flex-1 h-px" style={{ background: '#2d2150' }} />
        <span className="text-xs font-bold uppercase tracking-widest whitespace-nowrap" style={{ color: '#f97316' }}>{label}</span>
        <div className="flex-1 h-px" style={{ background: '#2d2150' }} />
      </div>
      {children}
    </div>
  )
}
