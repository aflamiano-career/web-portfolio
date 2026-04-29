import { useInView } from '../hooks/useInView'
import { FaGithub, FaEnvelope } from 'react-icons/fa'
import { HiArrowRight } from 'react-icons/hi'

const contacts = [
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'aflamiano.career@gmail.com',
    href: 'mailto:aflamiano.career@gmail.com',
    color: '#f97316',
    description: 'Best way to reach me',
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    value: 'aflamiano-career',
    href: 'https://github.com/aflamiano-career',
    color: '#fafafa',
    description: 'See my code & projects',
  },
]

export default function Contact() {
  const [headRef, headIn] = useInView()

  return (
    <section id="contact" className="relative bg-zinc-950 py-28 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-[0.06]"
        style={{ background: 'radial-gradient(ellipse, #f97316 0%, transparent 70%)' }}
      />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Section header */}
        <div ref={headRef} className={`fade-up ${headIn ? 'visible' : ''} relative mb-20 text-center`}>
          <span className="absolute inset-0 flex items-center justify-center text-[12rem] font-black text-zinc-900/60 select-none pointer-events-none leading-none">
            04
          </span>
          <div className="relative">
            <p className="text-orange-400 font-bold text-xs uppercase tracking-[0.3em] mb-3">Let's Talk</p>
            <h2 className="text-4xl md:text-5xl font-black text-zinc-100 mb-4 tracking-tight">Get In Touch</h2>
            <div className="mx-auto w-12 h-1 rounded-full bg-gradient-to-r from-orange-500 to-amber-400 mb-5" />
            <p className="text-zinc-500 max-w-lg mx-auto text-sm leading-relaxed">
              Whether you have a project in mind, a job opportunity, or just want to say hello —
              my inbox is always open. I'll get back to you promptly.
            </p>
          </div>
        </div>

        {/* Main CTA box */}
        <div
          className={`fade-up ${headIn ? 'visible' : ''} max-w-2xl mx-auto mb-12`}
          style={{ transitionDelay: '0.1s' }}
        >
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-10 text-center relative overflow-hidden">
            {/* Subtle inner glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 to-transparent pointer-events-none" />
            <div className="relative">
              <p className="text-zinc-400 text-sm leading-relaxed mb-8 max-w-md mx-auto">
                I'm currently available for freelance work and open to full-time opportunities.
                If you have a project that needs some creative problem solving, let's connect.
              </p>
              <a
                href="mailto:aflamiano.career@gmail.com"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-400 text-white font-black rounded-xl hover:opacity-90 transition-all shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 text-sm"
              >
                <FaEnvelope size={16} />
                Send Me a Message
                <HiArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Contact cards */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-2xl mx-auto">
          {contacts.map(({ icon: Icon, label, value, href, color, description }, i) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className={`fade-up ${headIn ? 'visible' : ''} flex-1 group flex items-center gap-4 p-5 rounded-2xl border border-zinc-800 bg-zinc-900 hover:border-zinc-700 transition-all hover:-translate-y-0.5`}
              style={{ transitionDelay: `${i * 0.1 + 0.2}s` }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: `${color}15`, border: `1px solid ${color}25` }}
              >
                <Icon size={18} style={{ color }} />
              </div>
              <div className="min-w-0">
                <p className="text-zinc-500 text-xs font-bold uppercase tracking-wider">{label}</p>
                <p className="text-zinc-300 text-sm font-semibold truncate group-hover:text-white transition-colors">{value}</p>
                <p className="text-zinc-600 text-xs mt-0.5">{description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
