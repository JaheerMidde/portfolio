import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Star } from 'lucide-react';
import { skills, type Skill } from '../data/portfolio';

const skillGroups: { title: string; categories: Skill['category'][] }[] = [
  { title: 'Frameworks & Libraries', categories: ['framework'] },
  { title: 'Platform & Patterns', categories: ['platform'] },
  { title: 'Testing & Delivery', categories: ['tooling'] },
  { title: 'Backend & APIs', categories: ['backend', 'database'] },
];

function SkillList({
  items,
  inView,
  delayOffset,
  featured = false,
}: {
  readonly items: Skill[];
  readonly inView: boolean;
  readonly delayOffset: number;
  readonly featured?: boolean;
}) {
  return (
    <ul className={featured ? 'grid gap-4 sm:grid-cols-2 lg:grid-cols-3' : 'space-y-3'}>
      {items.map((skill, si) => (
        <motion.li
          key={skill.name}
          initial={{ opacity: 0, x: -10 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.4, delay: delayOffset + si * 0.06 }}
          className={featured
            ? 'flex flex-col gap-1.5 rounded-lg border border-white/5 bg-surface-900/30 p-3'
            : 'flex flex-col gap-1'
          }
        >
          <span className="block text-sm font-medium leading-snug text-gray-100">{skill.name}</span>
          {skill.context && (
            <span className="block text-xs leading-relaxed text-gray-400">{skill.context}</span>
          )}
        </motion.li>
      ))}
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
    <section id="skills" ref={ref} className="scroll-mt-16 py-16 sm:py-24 bg-surface-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-accent-400 font-mono text-sm">02.</span>
            <div className="h-px flex-1 max-w-xs bg-accent-500/30" />
          </div>
          <h2 className="text-4xl font-serif text-white mb-4">Skills</h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Core strengths grounded in the case studies below - plus the supporting tools and patterns used across production and open-source work.
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
          <SkillList items={coreSkills} inView={inView} delayOffset={0.15} featured />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {additionalGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + gi * 0.08 }}
              className="p-6 rounded-xl border border-white/6 bg-surface-700/20"
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
