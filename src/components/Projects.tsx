import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { ShoppingCart, Package, Server, Layers, Box, ChevronDown, ChevronUp, ExternalLink, Code2 } from 'lucide-react';
import { projects } from '../data/portfolio';
import { clearSectionScrollPadding, scrollElementBelowNavbarWhenReady } from '../utils/scrollToSection';
import ArchitectureDiagram from './ArchitectureDiagram';
import MetricDelta from './MetricDelta';
import DecisionRecord from './DecisionRecord';
import PerfFindings from './PerfFindings';
import ApiSequenceDiagram from './ApiSequenceDiagram';
import ConfiguratorStateDiagram from './ConfiguratorStateDiagram';
import CollapsibleSection from './CollapsibleSection';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'shopping-cart': ShoppingCart,
  package: Package,
  server: Server,
  layers: Layers,
  box: Box,
};

const badgeColors: Record<string, string> = {
  Production: 'bg-accent-500/10 text-accent-400 border-accent-500/20',
  Platform: 'bg-warm-400/10 text-warm-400 border-warm-400/20',
  'Open Source': 'bg-white/5 text-gray-300 border-white/10',
};

const accentTextMap: Record<string, string> = {
  'from-accent-500 to-accent-600': 'text-accent-400',
  'from-emerald-500 to-teal-600': 'text-warm-400',
  'from-violet-500 to-purple-600': 'text-violet-400',
  'from-cyan-500 to-blue-600': 'text-cyan-400',
};

const accentDotMap: Record<string, string> = {
  'text-accent-400': 'bg-accent-400',
  'text-warm-400': 'bg-warm-400',
  'text-violet-400': 'bg-violet-400',
  'text-cyan-400': 'bg-cyan-400',
};

function hasArtifacts(project: (typeof projects)[number]) {
  const a = project.artifacts;
  return Boolean(
    a?.decisionRecord ||
    a?.showApiSequence ||
    a?.showStateDiagram ||
    a?.showArchitecture ||
    (a?.perfFindings && a.perfFindings.length > 0) ||
    project.technicalDeepDive
  );
}

const PANEL_EXIT_MS = 220;

const orderedProjects = [
  ...projects.filter((project) => project.badge !== 'Open Source'),
  ...projects.filter((project) => project.badge === 'Open Source'),
];

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.05 });
  const [expanded, setExpanded] = useState<string | null>(null);
  const pendingExpandRef = useRef<string | null>(null);
  const switchTimerRef = useRef<number | null>(null);

  const toggleProject = (projectId: string) => {
    if (switchTimerRef.current !== null) {
      window.clearTimeout(switchTimerRef.current);
      switchTimerRef.current = null;
    }

    if (expanded === projectId) {
      pendingExpandRef.current = null;
      setExpanded(null);
      return;
    }

    if (expanded !== null) {
      pendingExpandRef.current = projectId;
      setExpanded(null);
      switchTimerRef.current = window.setTimeout(() => {
        const next = pendingExpandRef.current;
        pendingExpandRef.current = null;
        switchTimerRef.current = null;
        if (next) setExpanded(next);
      }, PANEL_EXIT_MS);
      return;
    }

    setExpanded(projectId);
  };

  useEffect(() => {
    return () => {
      if (switchTimerRef.current !== null) {
        window.clearTimeout(switchTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!expanded) {
      clearSectionScrollPadding('work');
      return;
    }

    const cancelScroll = scrollElementBelowNavbarWhenReady(
      () => document.getElementById(`${expanded}-card`) ?? document.getElementById(`${expanded}-heading`),
      { behavior: 'auto', delays: [0, 80, 240, 420] }
    );

    return () => {
      cancelScroll();
      clearSectionScrollPadding('work');
    };
  }, [expanded]);

  return (
    <section id="work" ref={ref} className="scroll-mt-16 py-16 sm:py-24 bg-surface-800 relative" aria-labelledby="work-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-accent-400 font-mono text-sm">03.</span>
            <div className="h-px flex-1 max-w-xs bg-accent-500/30" />
          </div>
          <h2 id="work-heading" className="text-4xl font-serif text-white mb-4">Selected Work</h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Three Verizon e-commerce case studies - cart conversion, multi-product configurator, and production reliability - plus open-source demos (ShopForge, ConfigStack).
          </p>
        </motion.div>

        <div className="space-y-3">
          {orderedProjects.map((project, i) => {
            const Icon = iconMap[project.icon];
            const isExpanded = expanded === project.id;
            const panelId = `${project.id}-panel`;
            const accentText = accentTextMap[project.color] ?? 'text-accent-400';
            const showArtifacts = hasArtifacts(project);

            return (
              <motion.div
                key={project.id}
                id={`${project.id}-card`}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`scroll-mt-20 rounded-xl border transition-colors duration-200 ${
                  isExpanded ? 'border-white/10' : 'border-white/5 hover:border-white/10 overflow-hidden'
                } bg-surface-700/30`}
              >
                <button
                  type="button"
                  onClick={() => toggleProject(project.id)}
                  aria-expanded={isExpanded}
                  aria-controls={panelId}
                  className="w-full text-left px-5 py-4 sm:px-6 sm:py-5 flex items-center gap-4 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-inset"
                >
                  <div className="w-10 h-10 rounded-lg bg-surface-600 border border-white/10 flex items-center justify-center flex-shrink-0">
                    <Icon className={`w-5 h-5 ${accentText}`} aria-hidden="true" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 id={`${project.id}-heading`} className="text-white font-semibold text-lg">{project.title}</h3>
                      {project.badge && (
                        <span className={`px-2 py-0.5 rounded text-xs font-medium border ${badgeColors[project.badge] ?? badgeColors.Production}`}>
                          {project.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-400 text-sm font-mono mt-0.5">{project.subtitle}</p>
                    {!isExpanded && (
                      <p className="text-gray-400 text-sm mt-1.5 line-clamp-2">{project.headlineMetric}</p>
                    )}
                  </div>

                  <div className={`text-gray-400 transition-colors flex-shrink-0 ${isExpanded ? 'text-accent-400' : 'group-hover:text-white'}`} aria-hidden="true">
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={`${project.id}-heading`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6 border-t border-white/5 pt-5 space-y-5">
                        <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{project.description}</p>

                        {project.myContribution && (
                          <div className="p-4 rounded-lg bg-surface-900/50 border border-accent-500/15">
                            <h4 className="text-accent-400 text-xs font-semibold uppercase tracking-wider mb-1.5">My Contribution</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">{project.myContribution}</p>
                          </div>
                        )}

                        {project.metrics && project.metrics.length > 0 && (
                          <div>
                            <h4 className="text-gray-400 text-xs uppercase tracking-wider font-medium mb-3">Impact Metrics</h4>
                            {project.metricContext && (
                              <p className="text-gray-400 text-xs leading-relaxed mb-3">{project.metricContext}</p>
                            )}
                            <MetricDelta metrics={project.metrics} accentClass={accentText} />
                          </div>
                        )}

                        {(project.problem || project.approach || project.outcome) && (
                          <div className="grid sm:grid-cols-3 gap-3">
                            {project.problem && (
                              <div className="p-4 rounded-lg bg-surface-900/50 border border-white/5">
                                <h4 className="text-accent-400 text-xs font-semibold uppercase tracking-wider mb-2">Problem</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">{project.problem}</p>
                              </div>
                            )}
                            {project.approach && (
                              <div className="p-4 rounded-lg bg-surface-900/50 border border-white/5">
                                <h4 className="text-warm-400 text-xs font-semibold uppercase tracking-wider mb-2">Approach</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">{project.approach}</p>
                              </div>
                            )}
                            {project.outcome && (
                              <div className="p-4 rounded-lg bg-surface-900/50 border border-white/5">
                                <h4 className="text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">Outcome</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">{project.outcome}</p>
                              </div>
                            )}
                          </div>
                        )}

                        <div>
                          <h4 className="text-gray-400 text-xs uppercase tracking-wider font-medium mb-3">Highlights</h4>
                          <ul className="space-y-2">
                            {project.highlights.map((highlight, hi) => (
                              <li key={hi} className="flex items-start gap-2.5 text-gray-400 text-sm">
                                <span className={`w-1 h-1 rounded-full ${accentDotMap[accentText] ?? 'bg-accent-400'} mt-2 flex-shrink-0`} aria-hidden="true" />
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {showArtifacts && (
                          <CollapsibleSection title="System design & deep dive">
                            {project.artifacts?.decisionRecord && (
                              <div>
                                <h4 className="text-gray-400 text-xs uppercase tracking-wider font-medium mb-2">Design Decision</h4>
                                <DecisionRecord record={project.artifacts.decisionRecord} />
                              </div>
                            )}

                            {project.artifacts?.showApiSequence && (
                              <div>
                                <h4 className="text-gray-400 text-xs uppercase tracking-wider font-medium mb-2">API Sequence</h4>
                                <ApiSequenceDiagram />
                              </div>
                            )}

                            {project.artifacts?.showStateDiagram && (
                              <div>
                                <h4 className="text-gray-400 text-xs uppercase tracking-wider font-medium mb-2">State Machine</h4>
                                <ConfiguratorStateDiagram />
                              </div>
                            )}

                            {project.artifacts?.showArchitecture && (
                              <div>
                                <h4 className="text-gray-400 text-xs uppercase tracking-wider font-medium mb-2">Architecture</h4>
                                <ArchitectureDiagram />
                              </div>
                            )}

                            {project.artifacts?.perfFindings && project.artifacts.perfFindings.length > 0 && (
                              <PerfFindings findings={project.artifacts.perfFindings} />
                            )}

                            {project.technicalDeepDive && (
                              <div className="p-4 rounded-lg bg-surface-900/50 border border-white/5">
                                <h4 className="text-gray-400 text-xs uppercase tracking-wider font-medium mb-2">Technical Deep Dive</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">{project.technicalDeepDive}</p>
                              </div>
                            )}
                          </CollapsibleSection>
                        )}

                        <div>
                          <h4 className="text-gray-400 text-xs uppercase tracking-wider font-medium mb-3">Tech Stack</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech) => (
                              <span
                                key={tech}
                                className="px-2.5 py-1 rounded-md bg-surface-900/60 border border-white/5 text-gray-400 text-xs font-mono"
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
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent-500/10 border border-accent-500/20 text-accent-400 text-sm font-medium hover:bg-accent-500/15 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
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
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-900/60 border border-white/10 text-gray-300 text-sm font-medium hover:bg-surface-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
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
