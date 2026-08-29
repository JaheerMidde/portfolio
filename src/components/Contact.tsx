import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Mail, Code2, Linkedin, GitBranch, ArrowRight, Send, CalendarDays } from 'lucide-react';
import { personal, siteMeta } from '../data/portfolio';
import { personalCalendarHref as calendarHref } from '../utils/personalCalendar';

const socialLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: personal.email,
    href: `mailto:${personal.email}`,
    color: 'hover:text-accent-400',
    bg: 'hover:bg-accent-500/10 hover:border-accent-500/30',
    external: false,
  },
  {
    icon: Code2,
    label: 'GitHub',
    value: personal.github.replace('https://', ''),
    href: personal.github,
    color: 'hover:text-gray-200',
    bg: 'hover:bg-white/5 hover:border-white/15',
    external: true,
  },
  ...(personal.gitlab
    ? [{
        icon: GitBranch,
        label: 'GitLab',
        value: personal.gitlab.replace('https://', ''),
        href: personal.gitlab,
        color: 'hover:text-violet-400',
        bg: 'hover:bg-violet-500/10 hover:border-violet-500/30',
        external: true,
      }]
    : []),
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: personal.linkedin.replace('https://', ''),
    href: personal.linkedin,
    color: 'hover:text-blue-400',
    bg: 'hover:bg-blue-500/10 hover:border-blue-500/30',
    external: true,
  },
];

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section id="contact" ref={ref} className="scroll-mt-16 py-24 bg-surface-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-accent-400 font-mono text-sm">05.</span>
              <div className="h-px w-16 bg-accent-500/30" />
            </div>
            <h2 className="text-4xl font-serif text-white mb-4">Get In Touch</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-12">
              Open to Software Engineer II/III (frontend) at product companies.
              Reach out for full-time opportunities or conversations about frontend systems at scale.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-8"
          >
            <a
              href={calendarHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-accent-500 hover:bg-accent-400 text-white font-semibold text-lg transition-colors duration-200 shadow-lg shadow-accent-500/30 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-800"
            >
              <CalendarDays className="w-5 h-5" aria-hidden="true" />
              Propose a time
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-800"
            >
              <Send className="w-5 h-5" aria-hidden="true" />
              Say Hello
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-800"
            >
              <Code2 className="w-5 h-5" aria-hidden="true" />
              View on GitHub
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/30 text-white font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:text-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-800"
            >
              <Linkedin className="w-5 h-5" aria-hidden="true" />
              View on LinkedIn
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={`grid gap-3 mb-14 ${socialLinks.length >= 4 ? 'sm:grid-cols-2 lg:grid-cols-4' : 'sm:grid-cols-3'}`}
          >
            {socialLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
                className={`flex items-center gap-4 p-4 rounded-xl bg-surface-700/30 border border-white/5 text-gray-400 transition-all duration-200 group ${link.color} ${link.bg} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500`}
              >
                <link.icon className="w-5 h-5 flex-shrink-0 transition-colors" aria-hidden="true" />
                <div className="text-left min-w-0">
                  <div className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">{link.label}</div>
                  <div className="text-sm font-medium truncate transition-colors">{link.value}</div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-20 space-y-3"
        >
          <div className="text-gray-400 text-sm font-mono flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
            <span>Built with {siteMeta.builtWith.join(' · ')}</span>
            <span className="text-gray-700 hidden sm:inline" aria-hidden="true">•</span>
            <a
              href={siteMeta.ciWorkflowUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center leading-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 rounded"
            >
              <img
                src={siteMeta.ciBadgeUrl}
                alt="CI status"
                className="block h-5 w-auto max-h-5"
                loading="lazy"
              />
            </a>
          </div>
          <p className="text-gray-400 text-sm font-mono">
            <span className="text-gray-300">{personal.name}</span> © {new Date().getFullYear()}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
