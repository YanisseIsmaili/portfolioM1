import { useState } from 'react'
import { FiGithub, FiLinkedin, FiMail, FiSend } from 'react-icons/fi'
import FadeIn from './FadeIn'

const socials = [
  { icon: FiGithub,   label: "GitHub",   href: "https://github.com/YanisseIsmaili",               value: "YanisseIsmaili" },
  { icon: FiLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/yanisse-ismaili/",     value: "Yanisse Ismaili" },
  { icon: FiMail,     label: "Email",    href: "mailto:ismailiyanisse22@gmail.com",                value: "ismailiyanisse22@gmail.com" },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    setStatus('sent')
  }

  return (
    <section id="contact" className="py-24 px-6 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-orange-400 font-mono text-sm uppercase tracking-widest mb-3">Travaillons ensemble</p>
            <h2 className="section-title">Me contacter</h2>
            <p className="section-subtitle">Une idée de projet ? N'hésite pas à m'écrire.</p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12">
          <FadeIn direction="right" delay={0.1}>
            <p className="text-gray-400 leading-relaxed">
              Je suis disponible pour des missions freelance, des stages, des alternances ou
              des opportunités à temps plein. Parlons-en !
            </p>

            <div className="space-y-4 mt-8">
              {socials.map(({ icon: Icon, label, href, value }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group">
                  <div className="w-10 h-10 bg-card border border-gray-800 rounded-lg flex items-center justify-center group-hover:border-violet-500/50 transition-colors">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 font-mono">{label}</p>
                    <p className="text-sm text-gray-300">{value}</p>
                  </div>
                </a>
              ))}
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-4">
              {status === 'sent' ? (
                <div className="card text-center py-12">
                  <p className="text-2xl mb-2">✅</p>
                  <p className="text-white font-semibold">Message envoyé !</p>
                  <p className="text-gray-400 text-sm mt-1">Je te répondrai dès que possible.</p>
                </div>
              ) : (
                <>
                  <div>
                    <label htmlFor="name" className="block text-sm text-gray-400 mb-1.5">Nom</label>
                    <input id="name" name="name" type="text" required value={form.name} onChange={handleChange}
                      placeholder="Ton nom"
                      className="w-full bg-card border border-gray-800 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-violet-500 transition-colors text-sm" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm text-gray-400 mb-1.5">Email</label>
                    <input id="email" name="email" type="email" required value={form.email} onChange={handleChange}
                      placeholder="ton@email.com"
                      className="w-full bg-card border border-gray-800 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-violet-500 transition-colors text-sm" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm text-gray-400 mb-1.5">Message</label>
                    <textarea id="message" name="message" rows={5} required value={form.message} onChange={handleChange}
                      placeholder="Décris ton projet ou ta demande..."
                      className="w-full bg-card border border-gray-800 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-violet-500 transition-colors text-sm resize-none" />
                  </div>
                  <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                    <FiSend size={16} />
                    Envoyer le message
                  </button>
                </>
              )}
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
