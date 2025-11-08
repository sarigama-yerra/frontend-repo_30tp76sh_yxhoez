import { motion } from 'framer-motion';
import { Code2, Globe, Smartphone } from 'lucide-react';

const projects = [
  {
    title: 'Interactive 3D Landing',
    description: 'A playful product hero using WebGL + Spline integrated with performant React animations.',
    icon: Globe,
    tags: ['Spline', 'React', 'Three.js'],
    link: '#',
  },
  {
    title: 'Design System Playground',
    description: 'A modular, themeable component library with motion-first UX and dark mode.',
    icon: Code2,
    tags: ['Design System', 'Tailwind', 'Framer Motion'],
    link: '#',
  },
  {
    title: 'Mobile Micro‑Interactions',
    description: 'Delightful gestures and haptics prototypes for mobile-first flows.',
    icon: Smartphone,
    tags: ['React Native', 'Motion', 'UX'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-gradient-to-b from-black to-[#070B12]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.15),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(129,140,248,0.12),transparent_40%)]" />
      <div className="relative max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Featured Projects</h2>
          <a href="#" className="text-sm text-white/70 hover:text-white">See all</a>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="group relative rounded-2xl border border-white/10 p-6 bg-white/5 hover:bg-white/10 transition-colors overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
            >
              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-tr from-cyan-500/10 to-indigo-500/10 blur-3xl" />
              <div className="relative">
                <div className="inline-flex p-3 rounded-xl bg-white/10 border border-white/10">
                  <p.icon className="text-white" size={20} />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-white/70 text-sm leading-relaxed">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-md bg-white/10 text-white/80 border border-white/10">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
