import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Building2, Calendar, MapPin, CheckCircle2, GraduationCap, Award, TrendingUp } from 'lucide-react';
import { experiences, education } from '../data/portfolio';

export default function Experience() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section id="experience" ref={ref} className="py-24 bg-surface-800 relative">
      <div className="absolute left-1/4 top-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-accent-400 font-mono text-sm">04.</span>
            <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-accent-500/50 to-transparent" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">Experience</h2>
          <p className="text-gray-400 text-lg">
            Where I&apos;ve worked and what I&apos;ve shipped across customer-facing e-commerce products and shared UI platforms.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent-500/50 via-cyan-500/30 to-transparent hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="md:pl-16 relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 top-6 w-4 h-4 rounded-full bg-gradient-to-br from-accent-500 to-cyan-500 hidden md:flex items-center justify-center shadow-lg shadow-accent-500/50 -translate-x-1/2">
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>

                <div className="bg-surface-700/50 rounded-2xl border border-white/5 hover:border-white/10 transition-colors p-6 lg:p-8">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-500/20 to-cyan-500/20 border border-accent-500/20 flex items-center justify-center">
                          <Building2 className="w-5 h-5 text-accent-400" />
                        </div>
                        <div>
                          <h3 className="text-white font-bold text-xl">{exp.company}</h3>
                          <p className="text-accent-400 font-medium">{exp.role}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 text-sm text-gray-500">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-gray-600" />
                        {exp.period}
                      </span>
                      <span className="hidden sm:block text-gray-700">•</span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-gray-600" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {exp.progression && (
                    <div className="mb-6 p-4 rounded-xl bg-surface-800/60 border border-white/5">
                      <div className="flex items-center gap-2 mb-3">
                        <TrendingUp className="w-3.5 h-3.5 text-accent-400" />
                        <span className="text-gray-500 text-xs uppercase tracking-wider font-medium">Career Progression</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {exp.progression.map((step, si, arr) => {
                          const isLatest = si === arr.length - 1;
                          return (
                            <div key={step.role} className="flex items-center gap-2">
                              <div className={`px-3 py-1.5 rounded-lg text-xs font-medium ${isLatest ? 'bg-accent-500/15 border border-accent-500/30 text-accent-300' : 'bg-surface-700 border border-white/5 text-gray-400'}`}>
                                <div>{step.role}</div>
                                <div className="text-gray-500 font-normal mt-0.5">{step.period}</div>
                              </div>
                              {!isLatest && (
                                <span className="text-gray-600 text-xs">{'→'}</span>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  <p className="text-gray-400 leading-relaxed mb-6">{exp.description}</p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-white font-medium text-sm mb-4 flex items-center gap-2">
                      <span className="w-4 h-px bg-accent-500" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, ai) => (
                        <motion.li
                          key={ai}
                          initial={{ opacity: 0, x: -10 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.3 + ai * 0.07 }}
                          className="flex items-start gap-3 text-gray-400 text-sm leading-relaxed"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech used */}
                  <div>
                    <h4 className="text-gray-500 text-xs uppercase tracking-wider mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full bg-surface-800 border border-white/5 text-gray-300 text-xs font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="w-5 h-5 text-emerald-400" />
            <h3 className="text-white font-semibold text-lg">Education</h3>
            <div className="h-px flex-1 bg-gradient-to-r from-emerald-500/30 to-transparent" />
          </div>

          <div className="space-y-3">
            {education.map((edu, i) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                className="flex items-start gap-4 p-5 rounded-xl bg-surface-700/30 border border-white/5 hover:border-white/10 transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                  <Award className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h4 className="text-white font-semibold text-sm">{edu.institution}</h4>
                      <p className="text-emerald-400 text-sm">{edu.degree}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="text-white font-semibold text-sm">{edu.score}</div>
                      <div className="text-gray-500 text-xs flex items-center justify-end gap-1 mt-0.5">
                        <Calendar className="w-3 h-3" />
                        {edu.period}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-xs mt-1 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {edu.location}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
