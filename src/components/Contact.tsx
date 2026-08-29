import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Mail, Github, Linkedin, Gitlab, ArrowRight, Send, Code2 } from 'lucide-react';
import { personal, siteMeta } from '../data/portfolio';

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
    icon: Github,
    label: 'GitHub',
    value: personal.github.replace('https://', ''),
    href: personal.github,
    color: 'hover:text-gray-200',
    bg: 'hover:bg-white/5 hover:border-white/15',
    external: true,
  },
  ...(personal.gitlab
    ? [{
        icon: Gitlab,
        label: 'GitLab',
        value: personal.gitlab.replace('https://', ''),
        href: personal.gitlab,
        color: 'hover:text-orange-400',
        bg: 'hover:bg-orange-500/10 hover:border-orange-500/30',
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
    <section id="contact" ref={ref} className="py-24 bg-surface-800 relative overflow-hidden">
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-accent-500/8 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-cyan-500/8 rounded-full blur-3xl" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-accent-400 font-mono text-sm">05.</span>
              <div className="h-px w-16 bg-gradient-to-r from-accent-500/50 to-transparent" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-12">
              Open to full-time roles and interesting conversations about frontend engineering,
              web architecture, and building products at scale.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-14"
          >
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-accent-600 to-accent-500 hover:from-accent-500 hover:to-accent-400 text-white font-semibold text-lg shadow-xl shadow-accent-500/30 hover:shadow-accent-500/50 transition-all duration-300 hover:-translate-y-0.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-800"
            >
              <Send className="w-5 h-5" aria-hidden="true" />
              Say Hello
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={`grid gap-3 ${socialLinks.length >= 4 ? 'sm:grid-cols-2 lg:grid-cols-4' : 'sm:grid-cols-3'}`}
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
                  <div className="text-xs text-gray-600 uppercase tracking-wider mb-0.5">{link.label}</div>
                  <div className="text-sm font-medium truncate transition-colors">{link.value}</div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.8 }}
        className="text-center mt-20 space-y-3"
      >
        <p className="text-gray-600 text-sm font-mono">
          Built with {siteMeta.builtWith.join(' · ')}
          {personal.portfolioRepo && (
            <>
              {' · '}
              <a
                href={personal.portfolioRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-accent-400 transition-colors inline-flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 rounded"
              >
                <Code2 className="w-3.5 h-3.5" aria-hidden="true" />
                View source
              </a>
            </>
          )}
        </p>
        <p className="text-gray-600 text-sm font-mono">
          <span className="text-gray-500">{personal.name}</span> © {new Date().getFullYear()}
        </p>
      </motion.div>
    </section>
  );
}
