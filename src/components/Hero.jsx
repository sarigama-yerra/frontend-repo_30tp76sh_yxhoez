import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-24 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/80 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 flex flex-col items-start justify-center min-h-[70vh]">
        <motion.h1
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tight text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I’m <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400">Alex</span>
        </motion.h1>
        <motion.p
          className="mt-4 text-lg sm:text-xl text-white/80 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
        >
          I design and build interactive, playful experiences for the modern web. Dive into my work, experiments, and thoughts below.
        </motion.p>

        <motion.div
          className="mt-8 flex items-center gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <a
            href="#projects"
            className="px-5 py-3 rounded-md bg-white text-black font-semibold hover:opacity-90"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-5 py-3 rounded-md bg-white/10 text-white border border-white/20 hover:bg-white/15"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
