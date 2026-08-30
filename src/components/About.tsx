import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { MapPin, Briefcase, Zap, BookOpen, Activity, Film, Utensils, FileText, type LucideIcon } from 'lucide-react';
import { personal, personalInterests, beyondWorkSignals } from '../data/portfolio';

const interestIconMap: Record<string, LucideIcon> = {
  activity: Activity,
  film: Film,
  utensils: Utensils,
};

const cards = [
  {
    icon: Briefcase,
    title: 'Conversion & Performance',
    content: 'UI lead for high-traffic purchse surfaces - improving offer experiences, render performance, and controlled rollouts with measurable relative conversion lift.',
    color: 'text-accent-400',
    bg: 'bg-surface-800 border-white/10',
  },
  {
    icon: Zap,
    title: 'System Design & Release Quality',
    content: 'Architecture decisions for multi-device state, server-rendering data boundaries, and automated performance gates - supporting reliable launch cycles.',
    color: 'text-warm-400',
    bg: 'bg-surface-800 border-white/10',
  },
  {
    icon: BookOpen,
    title: 'Purchase-Flow Leadership',
    content: 'Core UI POC for purchase-flow engineering - system design, code reviews, knowledge transer, and cross-team coordination with featured flags, backend, and QA during incidents.',
    color: 'text-gray-300',
    bg: 'bg-surface-800 border-white/10',
  },
];

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section id="about" ref={ref} className="scroll-mt-16 py-16 sm:py-24 bg-surface-900 relative" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-16"
        >
          <div className="flex items-start gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="hidden sm:block flex-shrink-0"
            >
              <img
                src={personal.photoUrl}
                alt="Jaheer Midde"
                width={112}
                height={112}
                loading="lazy"
                decoding="async"
                className="w-28 h-28 rounded-full object-cover ring-1 ring-white/15"
              />
            </motion.div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-accent-400 font-mono text-sm">01.</span>
                <div className="h-px flex-1 max-w-xs bg-accent-500/30" />
              </div>
              <h2 id="about-heading" className="text-4xl font-serif text-white mb-4">About Me</h2>
              <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
                {personal.title} at <span className="text-white font-medium">{personal.company}</span>, based in{' '}
                <span className="inline-flex items-center gap-1 text-white font-medium">
                  <MapPin className="w-4 h-4 text-accent-400" aria-hidden="true" />
                  {personal.location}
                </span>
                . Core UI lead for purchase-flow engineering on Verizon&apos;s customer-facing e-commerce platform - shipping cart conversion, multi-product configurator flows, and production reliability for high-volume customer journeys.{' '}
                <span className="text-gray-300">Open to Software Engineer II/III (frontend) roles.</span>
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
              className={`p-6 rounded-xl border ${card.bg}`}
            >
              <card.icon className={`w-6 h-6 ${card.color} mb-4`} aria-hidden="true" />
              <h3 className="text-white font-semibold text-lg mb-3">{card.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">{card.content}</p>
            </motion.div>
          ))}
        </div>

        {/* Beyond Verizon */}
        {beyondWorkSignals.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-8 p-5 rounded-xl bg-surface-800 border border-accent-500/15"
          >
            <p className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-3">Beyond the Squad</p>
            {beyondWorkSignals.map((signal) => (
              <div key={signal.title} className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-lg bg-accent-500/10 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-4 h-4 text-accent-400" aria-hidden="true" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-gray-300 text-sm font-medium">{signal.title}</span>
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-accent-500/10 text-accent-400 border border-accent-500/20">
                      {signal.type}
                    </span>
                  </div>
                  <p className="text-gray-400 text-xs leading-relaxed">{signal.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* Beyond the Code */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mt-8"
        >
          <p className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-4">Beyond the Code</p>
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
                    <Icon className="w-4 h-4 text-gray-400" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-gray-300 text-sm font-medium mb-1">{interest.title}</div>
                    <div className="text-gray-400 text-xs leading-relaxed">{interest.description}</div>
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
