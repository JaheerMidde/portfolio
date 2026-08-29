import { motion } from 'framer-motion';
import { ArrowDown, ExternalLink, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { personal } from '../data/portfolio';

const floatingOrbs = [
  { size: 300, x: '10%', y: '20%', color: 'bg-accent-500/10', delay: 0 },
  { size: 200, x: '80%', y: '10%', color: 'bg-cyan-500/10', delay: 1 },
  { size: 150, x: '70%', y: '70%', color: 'bg-purple-500/10', delay: 2 },
  { size: 100, x: '20%', y: '75%', color: 'bg-emerald-500/10', delay: 1.5 },
];

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
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-surface-900">
      {floatingOrbs.map((orb, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-3xl ${orb.color} animate-pulse-slow`}
          style={{ width: orb.size, height: orb.size, left: orb.x, top: orb.y }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 6 + orb.delay, repeat: Infinity, delay: orb.delay }}
          aria-hidden="true"
        />
      ))}

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(129,140,248,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(129,140,248,1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="relative w-fit mb-8"
          >
            <img 
              src="https://media.licdn.com/dms/image/v2/D5603AQEHyvtv1C4hrw/profile-displayphoto-crop_800_800/B56Z3Yl2JfJ8AI-/0/1777455294894?e=1789603200&v=beta&t=0GVJpKHXVqUr7yAZqkcR0SlHXPkmel1klhw0z5mi_S0"
              alt="Jaheer Midde"
              className="w-[72px] h-[72px] rounded-full bg-gradient-to-br from-accent-500 via-purple-500 to-cyan-500 flex items-center justify-center text-white text-xl font-bold ring-2 ring-white/10 ring-offset-4 ring-offset-surface-900 select-none shadow-lg shadow-accent-500/30"
              role="img"
              aria-label="Jaheer Midde profile photo placeholder"
              width={72}
              height={72}
            />
            <span className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-surface-900 shadow-sm" aria-hidden="true" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-500/10 border border-accent-500/20 text-accent-400 text-sm font-medium mb-6"
          >
            <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
            Available for opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-4"
          >
            <span className="text-white">{personal.name.split(' ')[0]}</span>
            <br />
            <span className="text-white">{personal.name.split(' ')[1]}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-6"
          >
            <span className="text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-accent-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent animate-gradient-x bg-200%">
              {personal.title}
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg"
          >
            {personal.tagline}{' '}
            <span className="text-gray-300">
              Currently engineering at{' '}
              <span className="text-accent-400 font-semibold">{personal.company}</span>.
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap gap-3 mb-10"
          >
            <a
              href={`mailto:${personal.email}`}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-accent-500 hover:bg-accent-400 text-white font-semibold transition-all duration-200 shadow-lg shadow-accent-500/30 hover:shadow-accent-500/50 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-900"
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
              Get in Touch
            </a>
            {personal.resume && (
              <a
                href={personal.resume}
                target='_blank'
                rel='noopener noreferer'
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent-500/40 text-white font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:text-accent-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-900"
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
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-900"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-900"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-wrap gap-2"
          >
            {['TypeScript', 'React', 'Next.js', 'Node.js', 'Tailwind CSS'].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full bg-surface-700 border border-white/5 text-gray-400 text-xs font-mono"
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
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent-500 to-cyan-500 rounded-2xl blur opacity-20" />
            <div className="relative bg-surface-800 rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
              <div className="flex items-center gap-2 px-4 py-3 bg-surface-700 border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-2 text-gray-500 text-xs font-mono">checkout-shell.tsx</span>
              </div>
              <pre className="p-6 text-sm font-mono text-gray-300 leading-relaxed overflow-x-auto">
                <code>
                  {codeSnippet.split('\n').map((line, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + i * 0.1, duration: 0.3 }}
                    >
                      <span className="text-gray-600 select-none mr-4 text-xs">{String(i + 1).padStart(2, ' ')}</span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: line
                            .replace(/\/\/.+/, (m) => `<span class="text-gray-500">${m}</span>`)
                            .replace(/\b(import|from|export|function|return|lazy|Suspense|const|default)\b/g, '<span class="text-purple-400">$1</span>')
                            .replace(/\b(CheckoutRemote|CheckoutShell|CheckoutSkeleton|CheckoutApp)\b/g, '<span class="text-cyan-400">$1</span>')
                            .replace(/['`][^'`]*['`]/g, (m) => `<span class="text-emerald-400">${m}</span>`),
                        }}
                      />
                    </motion.div>
                  ))}
                </code>
              </pre>
              <div className="px-6 py-4 bg-surface-700/50 border-t border-white/5 flex items-center gap-6">
                <div className="text-center">
                  <div className="text-emerald-400 font-bold text-sm">React</div>
                  <div className="text-gray-500 text-xs">lazy loading</div>
                </div>
                <div className="w-px h-8 bg-white/5" />
                <div className="text-center">
                  <div className="text-cyan-400 font-bold text-sm">Module Federation</div>
                  <div className="text-gray-500 text-xs">remote imports</div>
                </div>
                <div className="w-px h-8 bg-white/5" />
                <div className="text-center">
                  <div className="text-accent-400 font-bold text-sm">TypeScript</div>
                  <div className="text-gray-500 text-xs">type-safe</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 hover:text-gray-300 transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 rounded-lg px-2 py-1"
        aria-label="Scroll to about section"
      >
        <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
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
