import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/80 shadow-lg shadow-black/40"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center text-white font-black text-sm shadow-lg shadow-orange-500/25 group-hover:shadow-orange-500/50 transition-shadow">
            AF
          </div>
          <span className="font-semibold text-zinc-200 hidden sm:block group-hover:text-orange-400 transition-colors tracking-tight">
            Aero Flamiano
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-zinc-400 hover:text-zinc-100 hover:bg-white/5 rounded-lg transition-all duration-200 text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-3 px-5 py-2 bg-gradient-to-r from-orange-500 to-amber-400 text-white text-sm font-bold rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-orange-500/25"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-zinc-400 hover:text-white p-2 rounded-lg hover:bg-white/5 transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <HiX size={22} /> : <HiMenu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
        } bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800/80`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="px-4 py-3 text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-all text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 px-4 py-3 bg-gradient-to-r from-orange-500 to-amber-400 text-white text-center font-bold rounded-xl text-sm"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}
