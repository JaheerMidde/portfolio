import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { MapPin, Briefcase, Zap, BookOpen, Activity, Film, Utensils } from 'lucide-react';
import { personal, personalInterests } from '../data/portfolio';

const interestIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  activity: Activity,
  film: Film,
  utensils: Utensils,
};

const cards = [
  {
    icon: Briefcase,
    title: 'What I Do',
    content:
      'I build customer-facing web applications used by millions — responsive UIs, reliable API integration, and the tooling that keeps releases safe.',
    color: 'text-accent-400',
    bg: 'bg-accent-500/10 border-accent-500/20',
  },
  {
    icon: Zap,
    title: 'How I Work',
    content:
      'Clear communication, thoughtful code reviews, and a bias toward maintainable solutions. I enforce 90% Jest coverage in CI and Lighthouse performance budgets so regressions do not reach production.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10 border-cyan-500/20',
  },
  {
    icon: BookOpen,
    title: 'What I Enjoy',
    content:
      'Frontend architecture, design systems, and the craft of building interfaces that are fast, accessible, and pleasant to use at scale.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10 border-emerald-500/20',
  },
];

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section id="about" ref={ref} className="py-24 bg-surface-900 relative overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-start gap-8">
            {/* Avatar - swap the div below for: <img src="/photo.jpg" alt="Jaheer Midde" className="w-28 h-28 rounded-full object-cover flex-shrink-0 ring-2 ring-accent-500/30 ring-offset-4 ring-offset-surface-900 shadow-xl shadow-accent-500/20" /> */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="hidden sm:block relative flex-shrink-0"
            >
              <img 
              src="https://media.licdn.com/dms/image/v2/D5603AQEHyvtv1C4hrw/profile-displayphoto-crop_800_800/B56Z3Yl2JfJ8AI-/0/1777455294894?e=1789603200&v=beta&t=0GVJpKHXVqUr7yAZqkcR0SlHXPkmel1klhw0z5mi_S0"
              alt="Jaheer Midde"
              width={112}
              height={112}
              loading="lazy"
              decoding="async"
              className="w-28 h-28 rounded-full bg-gradient-to-br from-accent-500 via-purple-500 to-cyan-500 flex items-center justify-center text-white text-3xl font-bold ring-2 ring-accent-500/30 ring-offset-4 ring-offset-surface-900 shadow-xl shadow-accent-500/20 select-none"
              />
              <span className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-surface-900" />
            </motion.div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-accent-400 font-mono text-sm">01.</span>
                <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-accent-500/50 to-transparent" />
              </div>
              <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
              <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
                Frontend Engineer at <span className="text-white font-medium">{personal.company}</span>, based in{' '}
                <span className="inline-flex items-center gap-1 text-white font-medium">
                  <MapPin className="w-4 h-4 text-accent-400" aria-hidden="true" />
                  {personal.location}
                </span>
                . I design and ship reliable frontend systems across customer-facing e-commerce products and shared UI platforms, with a focus on accessible interfaces and maintainable delivery.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.12 }}
              className={`p-6 rounded-2xl border ${card.bg} backdrop-blur-sm`}
            >
              <card.icon className={`w-6 h-6 ${card.color} mb-4`} />
              <h3 className="text-white font-semibold text-lg mb-3">{card.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">{card.content}</p>
            </motion.div>
          ))}
        </div>

        {/* Beyond the Code */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mt-8"
        >
          <p className="text-gray-600 text-xs font-medium uppercase tracking-wider mb-4">Beyond the Code</p>
          <div className="grid sm:grid-cols-3 gap-4">
            {personalInterests.map((interest, i) => {
              const Icon = interestIconMap[interest.icon];
              return (
                <motion.div
                  key={interest.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.75 + i * 0.1 }}
                  className="flex gap-3 items-start p-4 rounded-xl bg-surface-800 border border-white/5"
                >
                  <div className="w-8 h-8 rounded-lg bg-surface-700 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-gray-400" />
                  </div>
                  <div>
                    <div className="text-gray-300 text-sm font-medium mb-1">{interest.title}</div>
                    <div className="text-gray-500 text-xs leading-relaxed">{interest.description}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
