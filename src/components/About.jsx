import { useInView } from "../hooks/useInView";

function StatBox({ value, label, delay }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={`fade-up ${inView ? "visible" : ""} flex flex-col items-center p-5 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-orange-600/40 transition-colors`}
      style={{ transitionDelay: delay }}
    >
      <p className="text-3xl font-black gradient-text">{value}</p>
      <p className="text-zinc-500 text-xs mt-1 font-medium tracking-wide">
        {label}
      </p>
    </div>
  );
}

function SplitBar({ label, pct, color, delay }) {
  const [ref, inView] = useInView(0.3);
  return (
    <div
      ref={ref}
      className={`fade-up ${inView ? "visible" : ""}`}
      style={{ transitionDelay: delay }}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-zinc-300 font-semibold text-sm">{label}</span>
        <span className="font-black text-sm" style={{ color }}>
          {pct}%
        </span>
      </div>
      <div className="h-2.5 rounded-full bg-zinc-800 overflow-hidden">
        <div
          className="h-full rounded-full skill-bar-fill"
          style={{ width: inView ? `${pct}%` : "0%", background: color }}
        />
      </div>
    </div>
  );
}

export default function About() {
  const [headRef, headIn] = useInView();

  return (
    <section id="about" className="relative bg-zinc-900 py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header with decorative number */}
        <div
          ref={headRef}
          className={`fade-up ${headIn ? "visible" : ""} relative mb-20 text-center`}
        >
          <span className="absolute inset-0 flex items-center justify-center text-[12rem] font-black text-zinc-800/50 select-none pointer-events-none leading-none">
            01
          </span>
          <div className="relative">
            <p className="text-orange-400 font-bold text-xs uppercase tracking-[0.3em] mb-3">
              Who I Am
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-zinc-100 mb-4 tracking-tight">
              About Me
            </h2>
            <div className="mx-auto w-12 h-1 rounded-full bg-gradient-to-r from-orange-500 to-amber-400" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — Bio */}
          <div className="space-y-6">
            <p
              className={`fade-up ${headIn ? "visible" : ""} text-zinc-300 text-lg leading-relaxed`}
              style={{ transitionDelay: "0.1s" }}
            >
              I'm a{" "}
              <span className="text-orange-400 font-bold">
                Web Developer
              </span>{" "}
              with a strong bias toward frontend craftsmanship. I love turning
              complex requirements into intuitive, pixel-perfect interfaces —
              while keeping the backend solid and test coverage honest.
            </p>
            <p
              className={`fade-up ${headIn ? "visible" : ""} text-zinc-400 leading-relaxed`}
              style={{ transitionDelay: "0.2s" }}
            >
              My workflow blends component-driven UI architecture in React with
              reliable REST API design in Node.js, Python, and PHP, backed by
              thorough manual and automated testing. I believe great software is
              fast, accessible, and battle-tested.
            </p>
            <p
              className={`fade-up ${headIn ? "visible" : ""} text-zinc-400 leading-relaxed`}
              style={{ transitionDelay: "0.3s" }}
            >
              Currently open to{" "}
              <span className="text-zinc-200 font-semibold">
                full-time roles
              </span>{" "}
              and freelance projects — let's build something great together.
            </p>

            <div className="grid grid-cols-3 gap-3 pt-2">
              <StatBox value="6+" label="Demo Projects" delay="0.2s" />
              <StatBox value="8+" label="Years Exp." delay="0.3s" />
              <StatBox value="100%" label="Dedication" delay="0.4s" />
            </div>
          </div>

          {/* Right — Skill split */}
          <div className="space-y-5">
            <div
              className={`fade-up ${headIn ? "visible" : ""} p-7 rounded-2xl bg-zinc-950 border border-zinc-800`}
              style={{ transitionDelay: "0.1s" }}
            >
              <h3 className="text-zinc-200 font-bold text-base mb-7 flex items-center gap-2 uppercase tracking-wider text-sm">
                <span className="w-1 h-5 rounded-full bg-gradient-to-b from-orange-500 to-amber-400" />
                Focus Distribution
              </h3>
              <div className="space-y-5">
                <SplitBar
                  label="Frontend (React, JS, Tailwind, CSS)"
                  pct={60}
                  color="#f97316"
                  delay="0.2s"
                />
                <SplitBar
                  label="Backend (Node, Python, PHP)"
                  pct={25}
                  color="#f59e0b"
                  delay="0.35s"
                />
                <SplitBar
                  label="QA & Testing (Jest, Playwright, Manual)"
                  pct={15}
                  color="#10b981"
                  delay="0.5s"
                />
              </div>
            </div>

            {/* Focus cards */}
            <div className="grid grid-cols-2 gap-4">
              <div
                className={`fade-up ${headIn ? "visible" : ""} group p-5 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-orange-600/50 transition-all hover:-translate-y-0.5`}
                style={{ transitionDelay: "0.3s" }}
              >
                <div className="text-2xl mb-3">🎨</div>
                <p className="text-orange-400 font-black text-2xl leading-none">
                  60%
                </p>
                <p className="text-zinc-300 font-bold text-sm mt-1">Frontend</p>
                <p className="text-zinc-600 text-xs mt-1.5 leading-relaxed">
                  React · JS · CSS · UI/UX
                </p>
              </div>
              <div
                className={`fade-up ${headIn ? "visible" : ""} group p-5 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-amber-600/50 transition-all hover:-translate-y-0.5`}
                style={{ transitionDelay: "0.45s" }}
              >
                <div className="text-2xl mb-3">⚙️</div>
                <p className="text-amber-400 font-black text-2xl leading-none">
                  40%
                </p>
                <p className="text-zinc-300 font-bold text-sm mt-1">
                  Backend & QA
                </p>
                <p className="text-zinc-600 text-xs mt-1.5 leading-relaxed">
                  Node · Python · PHP · Tests
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
