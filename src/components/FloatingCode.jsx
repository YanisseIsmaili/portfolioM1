// Snippets liés aux projets : MoodFlow, GitHub Monitor, Forum Go, Akiroo
const snippets = [
  { text: 'npm run dev',          top: '12%', left: '5%',  delay: '0s',   dur: '7s',  opacity: 'opacity-20' },
  { text: 'git push origin main', top: '20%', left: '75%', delay: '1s',   dur: '9s',  opacity: 'opacity-15' },
  { text: 'docker-compose up',    top: '55%', left: '82%', delay: '2s',   dur: '6s',  opacity: 'opacity-20' },
  { text: 'func main() {',        top: '70%', left: '8%',  delay: '0.5s', dur: '8s',  opacity: 'opacity-15' },
  { text: '@Injectable()',        top: '35%', left: '88%', delay: '3s',   dur: '7s',  opacity: 'opacity-15' },
  { text: 'const mood = 😊',     top: '80%', left: '55%', delay: '1.5s', dur: '10s', opacity: 'opacity-10' },
  { text: 'lora_rank: 16',       top: '45%', left: '2%',  delay: '4s',   dur: '8s',  opacity: 'opacity-15' },
  { text: 'fetch("/api/repos")',  top: '88%', left: '20%', delay: '2.5s', dur: '7s',  opacity: 'opacity-10' },
  { text: '<MobaCharacter />',   top: '15%', left: '40%', delay: '3.5s', dur: '9s',  opacity: 'opacity-10' },
  { text: 'SELECT * FROM users', top: '62%', left: '60%', delay: '1s',   dur: '6s',  opacity: 'opacity-10' },
]

export default function FloatingCode() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {snippets.map((s, i) => (
        <span
          key={i}
          className={`absolute font-mono text-xs text-violet-300 ${s.opacity} whitespace-nowrap`}
          style={{
            top: s.top,
            left: s.left,
            animationDelay: s.delay,
            animationDuration: s.dur,
            animation: `float ${s.dur} ease-in-out ${s.delay} infinite`,
          }}
        >
          {s.text}
        </span>
      ))}
    </div>
  )
}
