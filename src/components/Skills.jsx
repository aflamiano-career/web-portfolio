import { useState } from 'react'
import { useInView } from '../hooks/useInView'
import { frontendSkills, backendSkills, qaSkills } from '../data/skills'
import { FaCode, FaServer, FaBug } from 'react-icons/fa'

const tabs = [
  {
    id: 'frontend',
    label: 'Frontend',
    icon: FaCode,
    skills: frontendSkills,
    color: '#f97316',
    activeClasses: 'border-orange-500 text-orange-400 bg-orange-500/10',
  },
  {
    id: 'backend',
    label: 'Backend',
    icon: FaServer,
    skills: backendSkills,
    color: '#f59e0b',
    activeClasses: 'border-amber-500 text-amber-400 bg-amber-500/10',
  },
  {
    id: 'qa',
    label: 'QA & Testing',
    icon: FaBug,
    skills: qaSkills,
    color: '#10b981',
    activeClasses: 'border-emerald-500 text-emerald-400 bg-emerald-500/10',
  },
]

function SkillBar({ name, level, color, index, visible }) {
  return (
    <div
      className={`fade-up ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 0.07}s` }}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-zinc-300 text-sm font-medium">{name}</span>
        <span className="text-xs font-black tabular-nums" style={{ color }}>{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-zinc-800 overflow-hidden">
        <div
          className="h-full rounded-full skill-bar-fill"
          style={{ width: visible ? `${level}%` : '0%', background: color }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const [active, setActive] = useState('frontend')
  const [headRef, headIn] = useInView()
  const [contentRef, contentIn] = useInView(0.1)

  const tab = tabs.find((t) => t.id === active)

  return (
    <section id="skills" className="relative bg-zinc-950 py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section header */}
        <div ref={headRef} className={`fade-up ${headIn ? 'visible' : ''} relative mb-20 text-center`}>
          <span className="absolute inset-0 flex items-center justify-center text-[12rem] font-black text-zinc-900/60 select-none pointer-events-none leading-none">
            02
          </span>
          <div className="relative">
            <p className="text-orange-400 font-bold text-xs uppercase tracking-[0.3em] mb-3">What I Work With</p>
            <h2 className="text-4xl md:text-5xl font-black text-zinc-100 mb-4 tracking-tight">Technical Skills</h2>
            <div className="mx-auto w-12 h-1 rounded-full bg-gradient-to-r from-orange-500 to-amber-400" />
          </div>
        </div>

        {/* Tabs */}
        <div className={`fade-up ${headIn ? 'visible' : ''} flex flex-wrap justify-center gap-3 mb-12`}
          style={{ transitionDelay: '0.1s' }}>
          {tabs.map(({ id, label, icon: Icon, activeClasses }) => (
            <button
              key={id}
              onClick={() => setActive(id)}
              className={`cursor-pointer flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-200 border ${
                active === id
                  ? activeClasses
                  : 'border-zinc-800 text-zinc-500 hover:border-zinc-700 hover:text-zinc-300 bg-transparent'
              }`}
            >
              <Icon size={14} />
              {label}
            </button>
          ))}
        </div>

        {/* Skills panel */}
        <div ref={contentRef} className="max-w-2xl mx-auto">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 overflow-hidden">
            {/* Panel header */}
            <div className="flex items-center gap-3 px-7 py-5 border-b border-zinc-800 bg-zinc-900/80">
              <tab.icon size={16} style={{ color: tab.color }} />
              <span className="font-bold text-zinc-200 text-sm tracking-wide">{tab.label}</span>
              <span className="ml-auto text-xs font-mono text-zinc-600">{tab.skills.length} skills</span>
            </div>
            <div className="p-7 space-y-5">
              {tab.skills.map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={tab.color}
                  index={i}
                  visible={contentIn}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Also familiar with */}
        <div
          className={`fade-up ${headIn ? 'visible' : ''} mt-16 text-center`}
          style={{ transitionDelay: '0.2s' }}
        >
          <p className="text-zinc-600 text-xs mb-5 uppercase tracking-[0.25em] font-bold">Also familiar with</p>
          <div className="flex flex-wrap justify-center gap-2">
            {['Git', 'GitHub', 'Figma', 'Vercel', 'Postman', 'VS Code', 'Linux', 'Agile / Scrum', 'REST', 'JSON'].map((t) => (
              <span
                key={t}
                className="text-xs font-medium px-3 py-1.5 rounded-full bg-zinc-900 text-zinc-500 border border-zinc-800 hover:border-zinc-600 hover:text-zinc-300 transition-colors cursor-default"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
