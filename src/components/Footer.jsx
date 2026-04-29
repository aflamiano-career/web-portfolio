import { FaGithub, FaHeart } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800/60 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-5">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center text-white font-black text-xs shadow-lg shadow-orange-500/20">
            AF
          </div>
          <span className="text-zinc-600 text-sm font-medium group-hover:text-zinc-400 transition-colors">
            Aero Flamiano
          </span>
        </a>

        {/* Built with */}
        <p className="text-zinc-700 text-xs flex items-center gap-1.5">
          Built with <FaHeart size={10} className="text-orange-500" /> using
          React & Tailwind CSS v4
        </p>

        {/* Right side */}
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/aflamiano-career"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 hover:text-white transition-colors"
          >
            <FaGithub size={17} />
          </a>
          <span className="text-zinc-800 text-xs font-mono">&copy; {year}</span>
        </div>
      </div>
    </footer>
  );
}
