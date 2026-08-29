import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { personal } from '../data/portfolio';
import CodeHighlight from './CodeHighlight';
import { scrollToSection } from '../utils/scrollToSection';

const codeSnippet = `// Module Federation - remote entry
import { lazy, Suspense } from 'react';

const CheckoutRemote = lazy(() =>
  import('checkout/App').then((m) => ({ default: m.CheckoutApp }))
);

export function CheckoutShell() {
  return (
    <Suspense fallback={<CheckoutSkeleton />}>
      <CheckoutRemote />
    </Suspense>
  );
}`;

export default function Hero() {
  const scrollToAbout = () => scrollToSection('#about');

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-surface-900">
      {/* Editorial accent - single warm line, no orbs */}
      <div className="absolute top-0 left-0 right-0 h-px bg-accent-500/40" aria-hidden="true" />
      <div className="absolute top-24 left-8 sm:left-16 w-px h-32 bg-gradient-to-b from-accent-500/60 to-transparent hidden sm:block" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="relative w-fit mb-8"
          >
            <img
              src={personal.photoUrl}
              alt="Jaheer Midde"
              width={72}
              height={72}
              className="w-[72px] h-[72px] rounded-full object-cover ring-1 ring-white/15"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-accent-400 text-sm font-mono tracking-widest uppercase mb-5"
          >
            Available for opportunities
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-serif tracking-tight mb-5"
          >
            <span className="text-white">{personal.name.split(' ')[0]}</span>
            <br />
            <span className="text-white/85 italic">{personal.name.split(' ')[1]}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-6"
          >
            <p className="text-xl sm:text-2xl text-gray-200 font-medium leading-snug">
              {personal.title}
            </p>
            <div className="mt-3 h-0.5 w-12 bg-accent-500" aria-hidden="true" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mb-8 max-w-lg"
          >
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
              {personal.tagline}
            </p>
            {personal.taglineProof && (
              <p className="text-accent-400 text-base sm:text-lg leading-relaxed mt-2.5 font-medium">
                {personal.taglineProof}
              </p>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap gap-3 mb-10"
          >
            <a
              href={`mailto:${personal.email}`}
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-surface-700 hover:bg-surface-600 border border-white/8 text-white font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-900"
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
              Email
            </a>
            {personal.resume && (
              <a
                href={personal.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-surface-700 hover:bg-surface-600 border border-white/8 text-white font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-900"
              >
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
                View Resume
              </a>
            )}
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="flex items-center gap-2 px-5 py-3 rounded-lg bg-surface-700 hover:bg-surface-600 border border-white/8 text-gray-300 font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-900"
            >
              <Github className="w-4 h-4" aria-hidden="true" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="flex items-center gap-2 px-5 py-3 rounded-lg bg-surface-700 hover:bg-surface-600 border border-white/8 text-gray-300 font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-900"
            >
              <Linkedin className="w-4 h-4" aria-hidden="true" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-wrap gap-2"
          >
            {['TypeScript', 'React', 'Next.js', 'Module Federation', 'Web Performance'].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-md bg-surface-800 border border-white/6 text-gray-400 text-xs font-mono"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="hidden lg:block"
          aria-hidden="true"
        >
          <div className="bg-surface-800 rounded-xl border border-white/8 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 bg-surface-700 border-b border-white/6">
              <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
              <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
              <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
              <span className="ml-2 text-gray-400 text-xs font-mono">checkout-shell.tsx</span>
            </div>
            <motion.pre
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.3 }}
              className="p-6 text-sm font-mono text-gray-300 leading-relaxed overflow-x-auto"
            >
              <code>
                <CodeHighlight code={codeSnippet} />
              </code>
            </motion.pre>
            <div className="px-6 py-3 bg-surface-700/50 border-t border-white/6 flex items-center gap-6 text-xs font-mono text-gray-400">
              <span><span className="text-accent-400">React</span> lazy</span>
              <span><span className="text-warm-400">Module Federation</span> remote</span>
              <span><span className="text-gray-400">TypeScript</span> typed</span>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 rounded-lg px-2 py-1"
        aria-label="Scroll to about section"
      >
        <span className="text-xs font-mono tracking-widest uppercase">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.button>
    </section>
  );
}
