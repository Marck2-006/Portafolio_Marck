import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Compass,
  Cpu,
  Database,
  Layout,
  Smartphone,
  Sparkles,
  Terminal,
  Workflow,
} from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import { useLanguage } from '../context/LanguageContext';

const ICON_MAP = {
  Layout,
  Smartphone,
  Sparkles,
  Database,
  Cpu,
  Workflow,
  Terminal,
  Compass,
};

export default function Skills() {
  const { content } = useLanguage();
  const skillsSection = content.skills;
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredSkills =
    activeFilter === 'all'
      ? skillsSection.items
      : skillsSection.items.filter((skill) => skill.group === activeFilter);

  return (
    <section
      id="habilidades"
      className="relative border-t border-white/[0.06] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Header + Animated Filter Tabs */}
        <div className="mb-12 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            className="max-w-xl"
          >
            <div className="mb-3 flex items-center gap-3 font-mono text-xs tracking-[0.22em] text-[#A1A1AA]">
              <span className="text-violet-400">{skillsSection.sectionIndex}</span>
              <span className="h-px w-8 bg-gradient-to-r from-blue-500 to-violet-500" />
              <span>{skillsSection.sectionTag}</span>
            </div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {skillsSection.title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#A1A1AA] sm:text-base">
              {skillsSection.subtitle}
            </p>
          </motion.div>

          {/* Animated Filter Tabs with Framer Motion layoutId */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            role="tablist"
            aria-label={skillsSection.filterAriaLabel}
            className="inline-flex flex-wrap gap-1.5 rounded-2xl border border-white/[0.08] bg-[#0D0D14]/85 p-1.5 backdrop-blur-md"
          >
            {skillsSection.filters.map((filter) => {
              const isActive = activeFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`relative cursor-pointer rounded-xl px-3.5 py-2 font-mono text-xs tracking-wide transition-colors ${
                    isActive
                      ? 'text-white'
                      : 'text-[#A1A1AA] hover:text-zinc-200'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="active-skill-filter"
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 32,
                      }}
                      className="absolute inset-0 rounded-xl border border-blue-500/35 bg-gradient-to-r from-blue-600/30 to-violet-600/30 shadow-[0_0_16px_rgba(37,99,235,0.2)]"
                    />
                  )}
                  <span className="relative z-10">{filter.label}</span>
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* Interactive Bento Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 gap-4 md:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, idx) => {
              const Icon = ICON_MAP[skill.icon] || Layout;
              const isLearning = Boolean(skill.isActiveLearning);
              const gridSpan =
                activeFilter === 'all' ? skill.span : 'md:col-span-1';

              return (
                <motion.div
                  key={skill.id}
                  layout
                  initial={{ opacity: 0, y: 20, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{
                    duration: 0.35,
                    delay: idx * 0.04,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={gridSpan}
                >
                  <SpotlightCard
                    accent={skill.accent}
                    className={`h-full p-6 ${
                      isLearning
                        ? 'border-rose-500/40 bg-gradient-to-br from-[#0D0D14]/95 via-[#130C18]/90 to-[#1A0B14]/85'
                        : ''
                    }`}
                  >
                    <div className="flex h-full flex-col justify-between gap-5">
                      <div>
                        {/* Card Top Row */}
                        <div className="mb-4 flex items-start justify-between gap-3">
                          <div className="flex items-center gap-3">
                            <div
                              className={`flex h-10 w-10 items-center justify-center rounded-xl border ${
                                isLearning
                                  ? 'border-rose-500/40 bg-gradient-to-br from-rose-500/20 to-violet-500/20 text-rose-400'
                                  : skill.accent === 'purple'
                                    ? 'border-violet-500/25 bg-violet-500/10 text-violet-400'
                                    : 'border-blue-500/25 bg-blue-500/10 text-blue-400'
                              }`}
                            >
                              <Icon className="h-5 w-5" />
                            </div>
                            <h3 className="font-display text-lg font-bold tracking-tight text-white">
                              {skill.category}
                            </h3>
                          </div>

                          {isLearning && (
                            <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-rose-500/45 bg-gradient-to-r from-rose-500/20 to-violet-600/20 px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-wider text-rose-300">
                              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-rose-400" />
                              {skillsSection.activeLearningBadge}
                            </span>
                          )}
                        </div>

                        <p className="text-xs leading-relaxed text-[#A1A1AA] sm:text-sm">
                          {skill.description}
                        </p>
                      </div>

                      {/* Stack Badges */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {skill.items.map((tech) => (
                          <span
                            key={tech}
                            className={`rounded-lg border px-2.5 py-1 font-mono text-[11px] tracking-wide transition-colors ${
                              isLearning
                                ? 'border-rose-500/35 bg-rose-500/10 text-rose-200'
                                : 'border-white/[0.08] bg-white/[0.03] text-zinc-200 group-hover:border-white/[0.15]'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </SpotlightCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
