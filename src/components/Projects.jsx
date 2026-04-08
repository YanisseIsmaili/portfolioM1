import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { motion } from 'framer-motion'
import FadeIn from './FadeIn'

const projects = [
  {
    title: "MoodFlow",
    description: "Application full-stack de suivi d'humeur. Frontend React avec Tailwind, API REST en NestJS/TypeScript, base de données relationnelle, containerisé avec Docker et déployé sur Railway.",
    tags: ["React", "NestJS", "TypeScript", "Docker", "Railway"],
    github: "https://github.com/YanisseIsmaili/MoodFlow",
    demo: null,
    accent: "#a855f7",
  },
  {
    title: "GitHub Monitor",
    description: "Dashboard de monitoring GitHub en temps réel. Permet de suivre l'activité de repositories, les commits et les statistiques d'un profil GitHub via l'API REST.",
    tags: ["React", "Vite", "Tailwind", "GitHub API"],
    github: "https://github.com/YanisseIsmaili/github-monitor",
    demo: null,
    accent: "#22d3ee",
  },
  {
    title: "Akiroo Game Site",
    description: "Site dédié à un jeu MOBA avec présentation des personnages et de leurs caractéristiques. Interface React dynamique avec gestion des composants par personnage.",
    tags: ["React", "JavaScript", "CSS"],
    github: "https://github.com/YanisseIsmaili/akiroo-game-site",
    demo: null,
    accent: "#f97316",
  },
  {
    title: "Forum",
    description: "Forum web complet développé en Go. Gestion des utilisateurs, des threads et des messages avec authentification, sessions et base de données SQLite.",
    tags: ["Go", "HTML", "CSS", "SQLite"],
    github: "https://github.com/YanisseIsmaili/FORUM",
    demo: null,
    accent: "#34d399",
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

function ProjectCard({ project }) {
  return (
    <motion.div
      variants={cardVariant}
      whileHover={{ y: -8, boxShadow: `0 0 30px ${project.accent}25`, transition: { duration: 0.2 } }}
      className="card flex flex-col h-full group relative overflow-hidden"
      style={{ '--accent': project.accent }}
    >
      {/* Barre colorée en haut de la card */}
      <div className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: project.accent }} />

      <div className="flex items-start justify-between mb-4">
        <div className="w-10 h-10 rounded-lg flex items-center justify-center"
          style={{ background: `${project.accent}20` }}>
          <span className="font-mono text-sm font-bold" style={{ color: project.accent }}>{'{}'}</span>
        </div>
        <div className="flex gap-3">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors" aria-label="GitHub">
              <FiGithub size={18} />
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer"
              className="text-gray-500 hover:text-cyan-400 transition-colors" aria-label="Demo">
              <FiExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      <h3 className="text-white font-semibold text-lg mb-2 group-hover:transition-colors duration-200"
        style={{ '--tw-text-opacity': 1 }}>
        <span className="group-hover:text-[var(--accent)] transition-colors duration-200">{project.title}</span>
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-4">{project.description}</p>

      <div className="flex flex-wrap gap-2">
        {project.tags.map(tag => (
          <span key={tag} className="text-xs font-mono px-2 py-0.5 rounded"
            style={{ color: project.accent, background: `${project.accent}15` }}>
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-orange-400 font-mono text-sm uppercase tracking-widest mb-3">Réalisations</p>
            <h2 className="section-title">Mes projets</h2>
            <p className="section-subtitle">Une sélection de mes travaux récents</p>
          </div>
        </FadeIn>

        <motion.div
          className="grid sm:grid-cols-2 gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {projects.map(project => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>

        <FadeIn delay={0.3}>
          <div className="text-center mt-12">
            <a href="https://github.com/YanisseIsmaili?tab=repositories" target="_blank" rel="noopener noreferrer"
              className="btn-outline inline-flex items-center gap-2">
              <FiGithub size={16} />
              Voir tous mes projets sur GitHub
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
