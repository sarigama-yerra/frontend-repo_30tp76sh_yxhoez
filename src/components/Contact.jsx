import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('idle');

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    // Fake delay to simulate sending
    await new Promise((r) => setTimeout(r, 900));
    setStatus('sent');
  };

  return (
    <section id="contact" className="py-24 bg-black">
      <div className="max-w-3xl mx-auto px-4">
        <div className="flex items-center gap-3">
          <div className="inline-flex p-2 rounded-lg bg-gradient-to-tr from-indigo-500 via-sky-500 to-cyan-400">
            <Mail size={18} className="text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white">Get in touch</h2>
        </div>
        <p className="mt-3 text-white/70">Have a project in mind or just want to say hi? Drop a message.</p>

        <motion.form
          onSubmit={onSubmit}
          className="mt-8 grid gap-4 rounded-2xl border border-white/10 p-6 bg-white/5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your name"
              required
              className="w-full rounded-md bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="w-full rounded-md bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
            />
          </div>
          <textarea
            placeholder="Tell me about your idea..."
            rows={5}
            required
            className="w-full rounded-md bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
          />

          <button
            type="submit"
            disabled={status !== 'idle'}
            className="inline-flex items-center gap-2 justify-center px-5 py-3 rounded-md bg-white text-black font-semibold hover:opacity-90 disabled:opacity-60"
          >
            {status === 'loading' ? (
              <span className="animate-pulse">Sending...</span>
            ) : status === 'sent' ? (
              'Message sent!'
            ) : (
              <>
                <Send size={16} /> Send message
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
