import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Trophy } from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import { useLanguage } from '../context/LanguageContext';

const BLOCK_ICONS = {
  academica: GraduationCap,
  competencias: Trophy,
  emprendimiento: Briefcase,
};

const NODE_STYLES = {
  blue: {
    dot: 'bg-blue-500 shadow-[0_0_16px_rgba(59,130,246,0.9)]',
    ring: 'border-blue-500/40 bg-blue-500/10 text-blue-400',
    badge: 'border-blue-500/30 bg-blue-500/10 text-blue-300',
  },
  purple: {
    dot: 'bg-violet-500 shadow-[0_0_16px_rgba(139,92,246,0.9)]',
    ring: 'border-violet-500/40 bg-violet-500/10 text-violet-400',
    badge: 'border-violet-500/30 bg-violet-500/10 text-violet-300',
  },
  crimson: {
    dot: 'bg-rose-500 shadow-[0_0_16px_rgba(244,63,94,0.9)]',
    ring: 'border-rose-500/40 bg-rose-500/10 text-rose-400',
    badge: 'border-rose-500/30 bg-rose-500/10 text-rose-300',
  },
};

export default function Experience() {
  const { content } = useLanguage();
  const experienceSection = content.experience;

  return (
    <section
      id="trayectoria"
      className="relative border-t border-white/[0.06] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="mb-16 max-w-2xl"
        >
          <div className="mb-3 flex items-center gap-3 font-mono text-xs tracking-[0.22em] text-[#A1A1AA]">
            <span className="text-rose-400">{experienceSection.sectionIndex}</span>
            <span className="h-px w-8 bg-gradient-to-r from-blue-500 via-violet-500 to-rose-500" />
            <span>{experienceSection.sectionTag}</span>
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {experienceSection.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#A1A1AA] sm:text-base">
            {experienceSection.subtitle}
          </p>
        </motion.div>

        {/* Neofuturistic Vertical Timeline */}
        <div className="relative pl-7 sm:pl-10">
          {/* Continuous Blue -> Purple -> Crimson Spine */}
          <div
            aria-hidden="true"
            className="absolute bottom-2 left-[11px] top-2 w-[2px] rounded-full bg-gradient-to-b from-[#2563EB] via-[#7C3AED] to-[#E11D48] opacity-75 sm:left-[15px]"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-2 left-[9px] top-2 w-[6px] rounded-full bg-gradient-to-b from-[#2563EB]/30 via-[#7C3AED]/30 to-[#E11D48]/30 blur-[3px] sm:left-[13px]"
          />

          <div className="space-y-12">
            {experienceSection.blocks.map((block, blockIdx) => {
              const BlockIcon = BLOCK_ICONS[block.id] || GraduationCap;
              const style = NODE_STYLES[block.accent];

              return (
                <motion.div
                  key={block.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.55,
                    delay: blockIdx * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative"
                >
                  {/* Luminous Block Node */}
                  <div
                    aria-hidden="true"
                    className="absolute -left-[25px] top-1 flex h-5 w-5 items-center justify-center rounded-full border border-white/20 bg-[#050508] sm:-left-[33px] sm:h-6 sm:w-6"
                  >
                    <span className={`h-2.5 w-2.5 rounded-full ${style.dot}`} />
                  </div>

                  {/* Block Header */}
                  <div className="mb-5 flex flex-wrap items-center gap-3">
                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-xl border ${style.ring}`}
                    >
                      <BlockIcon className="h-4 w-4" />
                    </span>
                    <div>
                      <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                        {experienceSection.blockLabel} {block.blockIndex}
                      </span>
                      <h3 className="font-display text-xl font-bold tracking-tight text-white sm:text-2xl">
                        {block.blockTitle}
                      </h3>
                    </div>
                  </div>

                  {/* Items within Block */}
                  <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                    {block.items.map((item) => (
                      <SpotlightCard
                        key={item.title}
                        accent={block.accent}
                        className={`p-6 ${
                          block.items.length === 1 ? 'lg:col-span-2' : ''
                        }`}
                      >
                        <div className="flex flex-col gap-3">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <span
                              className={`rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider ${style.badge}`}
                            >
                              {item.badge}
                            </span>
                            <span className="font-mono text-xs tracking-wider text-[#A1A1AA]">
                              {item.period}
                            </span>
                          </div>

                          <div>
                            <h4 className="font-display text-lg font-bold tracking-tight text-white sm:text-xl">
                              {item.title}
                            </h4>
                            <p className="mt-0.5 font-mono text-xs text-zinc-400">
                              {item.organization}
                            </p>
                          </div>

                          <p className="text-sm leading-relaxed text-[#A1A1AA]">
                            {item.description}
                          </p>
                        </div>
                      </SpotlightCard>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
