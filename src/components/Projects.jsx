import { useInView } from '../hooks/useInView'
import { projects } from '../data/projects'
import { FiExternalLink } from 'react-icons/fi'
import { FaGithub } from 'react-icons/fa'

function ProjectCard({ project, index }) {
  const [ref, inView] = useInView(0.1)

  return (
    <div
      ref={ref}
      className={`fade-up ${inView ? 'visible' : ''} card-hover group relative flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900 overflow-hidden`}
      style={{ transitionDelay: `${(index % 3) * 0.1}s` }}
    >
      {/* Top accent bar */}
      <div className="h-0.5 w-full bg-gradient-to-r from-orange-500 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" />

      {/* Number badge */}
      <div className="absolute top-4 right-4 w-7 h-7 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center">
        <span className="text-xs font-black text-zinc-500">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <div className="p-6 flex flex-col flex-1 gap-4">
        {/* Emoji + category */}
        <div className="flex items-start justify-between pr-8">
          <span className="text-4xl">{project.emoji}</span>
          <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-zinc-800 text-zinc-400 border border-zinc-700/60 uppercase tracking-wider">
            {project.category}
          </span>
        </div>

        {/* Title + description */}
        <div className="flex-1">
          <h3 className="text-zinc-100 font-black text-lg mb-2 group-hover:text-orange-400 transition-colors tracking-tight">
            {project.title}
          </h3>
          <p className="text-zinc-500 text-sm leading-relaxed">{project.description}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-2.5 py-1 rounded-lg bg-zinc-800/80 text-zinc-500 border border-zinc-700/40"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-auto flex gap-2">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-zinc-700 text-zinc-400 text-sm font-bold
                       hover:border-orange-500/60 hover:text-orange-400 hover:bg-orange-500/5 transition-all duration-200"
          >
            <FiExternalLink size={14} />
            Live Preview
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-zinc-700 text-zinc-400 text-sm font-bold
                       hover:border-zinc-500 hover:text-white hover:bg-white/5 transition-all duration-200"
            aria-label="View source on GitHub"
          >
            <FaGithub size={15} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [headRef, headIn] = useInView()

  return (
    <section id="projects" className="relative bg-zinc-900 py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section header */}
        <div ref={headRef} className={`fade-up ${headIn ? 'visible' : ''} relative mb-20 text-center`}>
          <span className="absolute inset-0 flex items-center justify-center text-[12rem] font-black text-zinc-800/50 select-none pointer-events-none leading-none">
            03
          </span>
          <div className="relative">
            <p className="text-orange-400 font-bold text-xs uppercase tracking-[0.3em] mb-3">What I've Built</p>
            <h2 className="text-4xl md:text-5xl font-black text-zinc-100 mb-4 tracking-tight">Featured Projects</h2>
            <div className="mx-auto w-12 h-1 rounded-full bg-gradient-to-r from-orange-500 to-amber-400 mb-5" />
            <p className="text-zinc-500 max-w-xl mx-auto text-sm leading-relaxed">
              A curated selection of React applications and UI implementations — each built
              hands-on to sharpen skills across the full stack.
            </p>
          </div>
        </div>

        {/* Project grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
