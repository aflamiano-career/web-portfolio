import { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { HiArrowDown, HiArrowRight } from "react-icons/hi";

// ── Typing hook ────────────────────────────────────────────────
const roles = [
  "Web Developer",
  "Frontend Specialist",
  "React Developer",
  "QA Engineer",
];

function useTyping(words, speed = 90, pause = 2200) {
  const [text, setText] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = words[wordIdx];
    if (typing) {
      if (text.length < current.length) {
        const t = setTimeout(
          () => setText(current.slice(0, text.length + 1)),
          speed,
        );
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setTyping(false), pause);
      return () => clearTimeout(t);
    } else {
      if (text.length > 0) {
        const t = setTimeout(() => setText(text.slice(0, -1)), speed / 2);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => {
        setWordIdx((i) => (i + 1) % words.length);
        setTyping(true);
      }, 0);
      return () => clearTimeout(t);
    }
  }, [text, typing, wordIdx, words, speed, pause]);

  return text;
}

// ── Terminal lines ─────────────────────────────────────────────
const TERMINAL_LINES = [
  { delay: 400, prompt: true, text: "whoami" },
  { delay: 1000, prompt: false, text: "Aero Flamiano — Web Developer" },
  { delay: 1800, prompt: true, text: "cat focus.json" },
  {
    delay: 2600,
    prompt: false,
    text: '{ frontend: "60%", backend: "25%", qa: "15%" }',
  },
  { delay: 3500, prompt: true, text: "ls ./stack" },
  {
    delay: 4200,
    prompt: false,
    text: "React  JavaScript  Node.js  Python  PHP  Jest",
  },
  { delay: 5000, prompt: true, text: "echo $AVAILABILITY" },
  {
    delay: 5700,
    prompt: false,
    text: "✓  Open to work — let's build something.",
    green: true,
  },
];

function TerminalLine({ line, show }) {
  const [text, setText] = useState("");

  useEffect(() => {
    if (!show) return;
    let i = 0;
    const t = setInterval(() => {
      setText(line.text.slice(0, i + 1));
      i++;
      if (i >= line.text.length) clearInterval(t);
    }, 22);
    return () => clearInterval(t);
  }, [show, line.text]);

  if (!show) return null;
  return (
    <div className="font-mono text-sm leading-7">
      {line.prompt ? (
        <div className="flex items-baseline gap-1 flex-wrap">
          {/* Linux bash prompt: user@host:~$ */}
          <span className="select-none shrink-0">
            <span className="text-emerald-400">dev@portfolio</span>
            <span className="text-white">:</span>
            <span className="text-sky-400">~</span>
            <span className="text-white">$</span>
          </span>
          <span className="text-zinc-100">{text}</span>
        </div>
      ) : (
        <div
          className={`pl-2 ${line.green ? "text-orange-400" : "text-zinc-500"}`}
        >
          {text}
        </div>
      )}
    </div>
  );
}

function Terminal() {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const timers = TERMINAL_LINES.map((line, i) =>
      setTimeout(() => setVisibleCount((c) => Math.max(c, i + 1)), line.delay),
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="animate-float w-full max-w-md">
      <div className="rounded-xl border border-zinc-700/50 bg-black overflow-hidden shadow-2xl shadow-black/70">
        {/* Linux-style title bar */}
        <div className="flex items-center px-3 py-2 bg-zinc-800/90 border-b border-zinc-700/50">
          {/* Window controls — left-side, flat Linux style */}
          <div className="flex items-center gap-1.5 mr-3">
            <button
              className="w-3 h-3 rounded-sm bg-zinc-600 hover:bg-red-500/80 transition-colors"
              aria-hidden
            />
            <button
              className="w-3 h-3 rounded-sm bg-zinc-600 hover:bg-amber-500/80 transition-colors"
              aria-hidden
            />
            <button
              className="w-3 h-3 rounded-sm bg-zinc-600 hover:bg-emerald-500/80 transition-colors"
              aria-hidden
            />
          </div>
          {/* Title */}
          <span className="flex-1 text-center text-xs text-zinc-500 font-mono">
            <span className="text-emerald-400">aero@portfolio</span>
            <span className="text-zinc-400">:~</span>
          </span>
          {/* Distro badge */}
          <span className="text-[10px] text-zinc-700 font-mono ml-3 select-none">
            bash
          </span>
        </div>

        {/* Terminal body */}
        <div className="p-5 min-h-[300px] space-y-0.5 bg-[#0d0d0d]">
          {TERMINAL_LINES.map((line, i) => (
            <TerminalLine key={i} line={line} show={i < visibleCount} />
          ))}
          {/* Blinking cursor at idle prompt */}
          {visibleCount >= TERMINAL_LINES.length && (
            <div className="flex items-baseline gap-1 font-mono text-sm leading-7">
              <span className="select-none">
                <span className="text-emerald-400">aero@portfolio</span>
                <span className="text-white">:</span>
                <span className="text-sky-400">~</span>
                <span className="text-white">$</span>
              </span>
              <span className="w-2 h-4 bg-zinc-300 animate-blink inline-block" />
            </div>
          )}
        </div>

        {/* Status bar — like a terminal emulator bottom bar */}
        <div className="px-4 py-1.5 bg-zinc-800/80 border-t border-zinc-700/50 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="text-[11px] text-zinc-500 font-mono">
              bash — 80×24
            </span>
          </div>
          <span className="text-[11px] text-zinc-700 font-mono">UTF-8</span>
        </div>
      </div>
    </div>
  );
}

// ── Main component ─────────────────────────────────────────────
export default function Hero() {
  const typedRole = useTyping(roles);

  return (
    <section className="relative min-h-screen flex items-center bg-zinc-950 overflow-hidden">
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `radial-gradient(circle, #fb923c 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Warm glow — top right */}
      <div
        className="absolute right-0 top-0 w-[550px] h-[550px] opacity-[0.07] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 100% 0%, #f97316 0%, transparent 60%)",
        }}
      />

      {/* Vertical "FULL STACK" label — far left edge */}
      <div className="absolute left-5 top-0 bottom-0 flex items-center pointer-events-none select-none">
        <span
          className="text-xs font-black uppercase tracking-[0.4em] text-zinc-600"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          WEB&nbsp;&nbsp;DEVELOPER
        </span>
      </div>

      <div className="relative max-w-6xl mx-auto px-14 w-full pt-16 grid lg:grid-cols-[1fr_1fr] gap-16 items-center">
        {/* ── Left: Editorial text ── */}
        <div>
          {/* Top meta row */}
          <div className="flex items-center justify-between mb-12">
            <span className="text-zinc-700 text-xs font-mono">© 2026</span>
            <div className="flex items-center gap-2 text-sm text-zinc-300 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for hire
            </div>
          </div>

          {/* Name — oversized */}
          <p className="text-zinc-600 text-xs font-bold uppercase tracking-[0.4em] mb-4">
            Portfolio
          </p>
          <h1 className="font-black leading-[0.88] tracking-tight mb-8">
            <span className="block text-[4.5rem] md:text-[6.5rem] text-zinc-100">
              AERO
            </span>
            <span className="block text-[4.5rem] md:text-[6.5rem] gradient-text">
              FLAMIANO
            </span>
          </h1>

          {/* Divider with typed role */}
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1 bg-zinc-800" />
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-zinc-400 font-semibold text-sm">
                {typedRole}
              </span>
              <span className="w-0.5 h-4 bg-orange-500 animate-blink" />
            </div>
            <div className="h-px flex-1 bg-zinc-800" />
          </div>

          {/* Bio */}
          <p className="text-zinc-500 text-sm leading-relaxed mb-8 max-w-sm">
            Building polished UIs with React, shipping APIs with Node.js, Python
            & PHP, and keeping everything tested. 60% frontend craft, 40%
            backend & QA rigor.
          </p>

          {/* Capabilities */}
          <div className="flex flex-col gap-2 mb-8">
            {[
              {
                icon: "🎨",
                title: "UI Development",
                desc: "React · JavaScript · Tailwind · CSS · HTML",
              },
              {
                icon: "⚙️",
                title: "Backend APIs",
                desc: "Node.js · Python · PHP",
              },
              {
                icon: "🧪",
                title: "QA & Testing",
                desc: "Jest · Playwright · Manual",
              },
            ].map(({ icon, title, desc }) => (
              <div
                key={title}
                className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors"
              >
                <span className="text-base">{icon}</span>
                <span className="text-zinc-300 text-sm font-semibold">
                  {title}
                </span>
                <span className="ml-auto text-zinc-600 text-xs font-mono">
                  {desc}
                </span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-400 text-white font-black rounded-xl hover:opacity-90 transition-all shadow-lg shadow-orange-500/25 hover:-translate-y-0.5 text-sm group"
            >
              View Projects
              <HiArrowRight
                size={14}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </a>
            <a
              href="https://github.com/aflamiano-career"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-700 text-zinc-400 font-bold rounded-xl hover:border-zinc-500 hover:text-white transition-all text-sm hover:-translate-y-0.5"
            >
              <FaGithub size={15} /> GitHub
            </a>
          </div>
        </div>

        {/* ── Right: Terminal ── */}
        <div className="hidden lg:flex justify-center">
          <Terminal />
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-700 hover:text-orange-400 transition-colors animate-bounce"
      >
        <HiArrowDown size={22} />
      </a>
    </section>
  );
}
