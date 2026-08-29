import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Code2, Layers, Wrench, Globe } from 'lucide-react';
import { skills, type Skill } from '../data/portfolio';

const categoryConfig: Record<
  Skill['category'],
  { label: string; color: string; border: string; bg: string; icon: React.ComponentType<{ className?: string }> }
> = {
  language: {
    label: 'Languages',
    color: 'text-accent-400',
    border: 'border-accent-500/30',
    bg: 'bg-accent-500/8',
    icon: Code2,
  },
  framework: {
    label: 'Frameworks & Libraries',
    color: 'text-cyan-400',
    border: 'border-cyan-500/30',
    bg: 'bg-cyan-500/8',
    icon: Layers,
  },
  tooling: {
    label: 'Testing & Tooling',
    color: 'text-orange-400',
    border: 'border-orange-500/30',
    bg: 'bg-orange-500/8',
    icon: Wrench,
  },
  platform: {
    label: 'Architecture & Web Standards',
    color: 'text-purple-400',
    border: 'border-purple-500/30',
    bg: 'bg-purple-500/8',
    icon: Globe,
  },
};

const levelBadge: Record<Skill['level'], { label: string; classes: string }> = {
  expert: { label: 'Expert', classes: 'bg-accent-500/15 text-accent-400 border border-accent-500/30' },
  proficient: { label: 'Pro', classes: 'bg-white/5 text-gray-400 border border-white/10' },
  familiar: { label: '~', classes: 'bg-white/5 text-gray-600 border border-white/5' },
};

const categories = Object.keys(categoryConfig) as Skill['category'][];

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.05 });

  return (
    <section id="skills" ref={ref} className="py-24 bg-surface-800 relative">
      <div className="absolute left-0 top-1/3 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-accent-400 font-mono text-sm">02.</span>
            <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-accent-500/50 to-transparent" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">Skills & Tech Stack</h2>
          <p className="text-gray-400 text-lg">
            Languages, frameworks, and tools I use daily across 4 production apps — with 90% test coverage and CI performance gates enforced on every merge.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, ci) => {
            const config = categoryConfig[category];
            const CategoryIcon = config.icon;
            const categorySkills = skills.filter((s) => s.category === category);

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: ci * 0.1 }}
                className={`rounded-2xl border ${config.border} ${config.bg} p-6 hover:border-opacity-60 transition-all duration-300 backdrop-blur-sm`}
              >
                {/* Card header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 rounded-lg bg-surface-700 flex items-center justify-center">
                    <CategoryIcon className={`w-4 h-4 ${config.color}`} />
                  </div>
                  <h3 className={`${config.color} font-semibold text-sm uppercase tracking-wider`}>
                    {config.label}
                  </h3>
                </div>

                {/* Skills list */}
                <ul className="space-y-2">
                  {categorySkills.map((skill, si) => {
                    const badge = levelBadge[skill.level];
                    return (
                      <motion.li
                        key={skill.name}
                        initial={{ opacity: 0, x: -10 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: ci * 0.1 + si * 0.06 }}
                        className="flex items-center justify-between gap-2"
                      >
                        <span
                          className={`text-sm font-medium leading-snug ${
                            skill.level === 'expert' ? 'text-gray-100' : 'text-gray-300'
                          }`}
                        >
                          {skill.name}
                        </span>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          {skill.context && (
                            <span className="hidden lg:inline text-xs text-gray-600 max-w-[140px] truncate" title={skill.context}>
                              {skill.context}
                            </span>
                          )}
                          <span
                            className={`text-xs font-semibold px-2 py-0.5 rounded-full ${badge.classes}`}
                          >
                            {badge.label}
                          </span>
                        </div>
                      </motion.li>
                    );
                  })}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 flex items-center gap-5 justify-end"
        >
          <span className="text-gray-600 text-xs mr-1">Proficiency:</span>
          <span className="flex items-center gap-1.5 text-xs text-accent-400">
            <span className="px-2 py-0.5 rounded-full bg-accent-500/15 border border-accent-500/30 font-semibold">Expert</span>
            <span className="text-gray-600">daily use, deep knowledge</span>
          </span>
          <span className="flex items-center gap-1.5 text-xs text-gray-400">
            <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 font-semibold">Pro</span>
            <span className="text-gray-600">proficient, production use</span>
          </span>
        </motion.div>
      </div>
    </section>
  );
}
