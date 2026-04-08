import { FiCode, FiDatabase, FiServer, FiTool, FiCpu, FiZap, FiSliders } from 'react-icons/fi'
import {
  SiReact, SiVuedotjs, SiNextdotjs, SiTailwindcss,
  SiNodedotjs, SiExpress, SiPython, SiPhp,
  SiMysql, SiPostgresql, SiMongodb,
  SiGit, SiDocker, SiFigma, SiLinux
} from 'react-icons/si'
import { motion } from 'framer-motion'
import FadeIn from './FadeIn'

const categories = [
  {
    title: "Frontend",
    icon: FiCode,
    color: "text-cyan-400",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Vue.js", icon: SiVuedotjs, color: "#42b883" },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },
  {
    title: "Backend",
    icon: FiServer,
    color: "text-emerald-400",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "#ffffff" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "PHP", icon: SiPhp, color: "#777BB4" },
    ],
  },
  {
    title: "Base de données",
    icon: FiDatabase,
    color: "text-amber-400",
    skills: [
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    ],
  },
  {
    title: "Outils",
    icon: FiTool,
    color: "text-fuchsia-400",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      { name: "Linux", icon: SiLinux, color: "#FCC624" },
    ],
  },
  {
    title: "IA Générative",
    icon: FiCpu,
    color: "text-rose-400",
    skills: [
      { name: "ComfyUI", icon: FiZap, color: "#f43f5e" },
      { name: "Training LoRA", icon: FiSliders, color: "#fb923c" },
      { name: "Stable Diffusion", icon: FiCpu, color: "#a78bfa" },
    ],
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-orange-400 font-mono text-sm uppercase tracking-widest mb-3">Stack technique</p>
            <h2 className="section-title">Mes compétences</h2>
            <p className="section-subtitle">Les technologies que j'utilise au quotidien</p>
          </div>
        </FadeIn>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {categories.map(({ title, icon: Icon, color, skills }) => (
            <motion.div
              key={title}
              variants={cardVariant}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="card group cursor-default"
            >
              <div className="flex items-center gap-3 mb-6">
                <Icon className={color} size={20} />
                <h3 className="font-semibold text-white">{title}</h3>
              </div>
              <ul className="space-y-3">
                {skills.map(({ name, icon: SkillIcon, color: skillColor }) => (
                  <li key={name} className="flex items-center gap-3">
                    <SkillIcon size={18} style={{ color: skillColor }} />
                    <span className="text-gray-300 text-sm">{name}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
