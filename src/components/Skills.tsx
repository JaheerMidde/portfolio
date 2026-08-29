import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Star } from 'lucide-react';
import { skills, type Skill } from '../data/portfolio';

const levelBadge: Record<Skill['level'], { label: string; classes: string }> = {
  expert: { label: 'Expert', classes: 'bg-accent-500/15 text-accent-400 border border-accent-500/30' },
  proficient: { label: 'Pro', classes: 'bg-white/5 text-gray-400 border border-white/10' },
  familiar: { label: 'Familiar', classes: 'bg-white/5 text-gray-300 border border-white/10' },
};

const skillGroups: { title: string; categories: Skill['category'][] }[] = [
  { title: 'Languages', categories: ['language'] },
  { title: 'Frameworks & Libraries', categories: ['framework'] },
  { title: 'Platform & Patterns', categories: ['platform'] },
  { title: 'Testing & CI', categories: ['tooling'] },
  { title: 'Backend & APIs', categories: ['backend', 'database'] },
];

function SkillList({
  items,
  inView,
  delayOffset,
}: {
  readonly items: Skill[];
  readonly inView: boolean;
  readonly delayOffset: number;
}) {
  return (
    <ul className="space-y-2">
      {items.map((skill, si) => {
        const badge = levelBadge[skill.level];
        return (
          <motion.li
            key={skill.name}
            initial={{ opacity: 0, x: -10 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: delayOffset + si * 0.06 }}
            className="flex items-center justify-between gap-2"
          >
            <span className="text-sm font-medium leading-snug text-gray-100">{skill.name}</span>
            <div className="flex items-center gap-2 flex-shrink-0">
              {skill.context && (
                <span className="hidden lg:inline text-xs text-gray-400 max-w-[200px] truncate" title={skill.context}>
                  {skill.context}
                </span>
              )}
              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${badge.classes}`}>
                {badge.label}
              </span>
            </div>
          </motion.li>
        );
      })}
    </ul>
  );
}

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.05 });
  const coreSkills = skills.filter((skill) => skill.core);
  const additionalGroups = skillGroups
    .map((group) => ({
      ...group,
      items: skills.filter((skill) => !skill.core && group.categories.includes(skill.category)),
    }))
    .filter((group) => group.items.length > 0);

  return (
    <section id="skills" ref={ref} className="scroll-mt-16 py-24 bg-surface-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-accent-400 font-mono text-sm">02.</span>
            <div className="h-px flex-1 max-w-xs bg-accent-500/30" />
          </div>
          <h2 className="text-4xl font-serif text-white mb-4">Skills</h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Core strengths verified by the case studies below - plus the languages, tooling, and patterns used across production and open-source work.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="p-6 rounded-xl border border-accent-500/20 bg-surface-700/30 mb-8"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 rounded-lg bg-surface-700 flex items-center justify-center">
              <Star className="w-4 h-4 text-accent-400" aria-hidden="true" />
            </div>
            <h3 className="text-accent-400 font-semibold text-sm uppercase tracking-wider">Core Strengths</h3>
          </div>
          <SkillList items={coreSkills} inView={inView} delayOffset={0.15} />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {additionalGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + gi * 0.08 }}
              className="p-6 rounded-xl border border-white/5 bg-surface-700/20"
            >
              <h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-4">{group.title}</h3>
              <SkillList items={group.items} inView={inView} delayOffset={0.25 + gi * 0.08} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
