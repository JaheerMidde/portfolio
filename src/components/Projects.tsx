import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { ShoppingCart, Package, Server, ChevronDown, ChevronUp, ExternalLink, Code2 } from 'lucide-react';
import { projects } from '../data/portfolio';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'shopping-cart': ShoppingCart,
  package: Package,
  server: Server,
};

const badgeColors: Record<string, string> = {
  Production: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  Platform: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  'Open Source': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
};

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.05 });
  const [expanded, setExpanded] = useState<string | null>('ecommerce-platform');

  return (
    <section id="work" ref={ref} className="py-24 bg-surface-900 relative" aria-labelledby="work-heading">
      <div className="absolute right-0 bottom-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl pointer-events-none"
      aria-hidden="true" 
    />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-accent-400 font-mono text-sm">03.</span>
            <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-accent-500/50 to-transparent" />
          </div>
          <h2 id="work-heading" className="text-4xl font-bold text-white mb-4">Selected Work</h2>
          <p className="text-gray-400 text-lg">
            Professional highlights from products and platforms serving millions of users, followed by open-source reference implementations for
            e-commerce and multi-device checkout.
          </p>
        </motion.div>

        <div className="space-y-4">
          {projects.map((project, i) => {
            const Icon = iconMap[project.icon];
            const isExpanded = expanded === project.id;
            const panelId = `${project.id}-panel`;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
                  isExpanded
                    ? 'border-white/15 shadow-xl shadow-black/30'
                    : 'border-white/5 hover:border-white/10'
                } bg-surface-800`}
              >
                <button
                  type="button"
                  onClick={() => setExpanded(isExpanded ? null : project.id)}
                  aria-expanded={isExpanded}
                  aria-controls={panelId}
                  className="w-full text-left px-6 py-5 flex items-center gap-4 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-800 rounded-2xl"
                >
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <Icon className="w-5 h-5 text-white" aria-hidden="true" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 id={`${project.id}-heading`} className="text-white font-semibold text-lg">{project.title}</h3>
                      {project.badge && (
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${badgeColors[project.badge] ?? badgeColors.Production}`}>
                          {project.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-500 text-sm font-mono">{project.subtitle}</p>
                  </div>

                  <div className={`text-gray-500 transition-colors ${isExpanded ? 'text-accent-400' : 'group-hover:text-gray-300'}`} aria-hidden="true">
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                <AnimatePresence initial={false} mode='wait'>
                  {isExpanded && (
                    <motion.div
                      key={project.id}
                      id={panelId}
                      role="region"
                      aria-labelledby={`${project.id}-heading`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className='overflow-hidden'
                    >
                      <div className="px-6 pb-6 border-t border-white/5 pt-5 space-y-5">
                        <p className="text-gray-300 leading-relaxed">{project.description}</p>

                        <div>
                          <h4 className="text-white font-medium text-sm mb-3">Highlights</h4>
                          <ul className="space-y-2">
                            {project.highlights.map((highlight, hi) => (
                              <motion.li
                                key={hi}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: hi * 0.05 }}
                                className="flex items-start gap-2 text-gray-400 text-sm"
                              >
                                <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${project.color} mt-2 flex-shrink-0`} aria-hidden="true" />
                                {highlight}
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-gray-400 text-xs uppercase tracking-wider mb-3">Tech Stack</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech) => (
                              <span
                                key={tech}
                                className="px-2.5 py-1 rounded-lg bg-surface-700 border border-white/5 text-gray-300 text-xs font-mono"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {(project.href || project.repo) && (
                          <div className="flex flex-wrap gap-3 pt-1">
                            {project.href && (
                              <a
                                href={project.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent-500/10 border border-accent-500/20 text-accent-400 text-sm font-medium hover:bg-accent-500/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
                              >
                                <ExternalLink className="w-4 h-4" aria-hidden="true" />
                                Live Demo
                              </a>
                            )}
                            {project.repo && (
                              <a
                                href={project.repo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-sm font-medium hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
                              >
                                <Code2 className="w-4 h-4" aria-hidden="true" />
                                Source Code
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
