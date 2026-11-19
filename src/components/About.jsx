import { motion } from 'framer-motion';
import { BookOpen, Code2, Cpu, Lightbulb } from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import { useLanguage } from '../context/LanguageContext';

const PILLAR_ICONS = {
  Programming: Code2,
  Innovation: Lightbulb,
  Technology: Cpu,
};

const PILLAR_ACCENT_STYLES = {
  blue: {
    bar: 'from-blue-500 to-blue-400',
    icon: 'text-blue-400 bg-blue-500/10 border-blue-500/25',
    index: 'text-blue-400',
  },
  purple: {
    bar: 'from-violet-500 to-purple-400',
    icon: 'text-violet-400 bg-violet-500/10 border-violet-500/25',
    index: 'text-violet-400',
  },
  crimson: {
    bar: 'from-rose-500 to-pink-500',
    icon: 'text-rose-400 bg-rose-500/10 border-rose-500/25',
    index: 'text-rose-400',
  },
};

export default function About() {
  const { content } = useLanguage();
  const aboutData = content.about;

  return (
    <section
      id="sobre-mi"
      className="relative border-t border-white/[0.06] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Section Editorial Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="mb-14 max-w-2xl"
        >
          <div className="mb-3 flex items-center gap-3 font-mono text-xs tracking-[0.22em] text-[#A1A1AA]">
            <span className="text-blue-400">{aboutData.sectionIndex}</span>
            <span className="h-px w-8 bg-gradient-to-r from-blue-500 to-violet-500" />
            <span>{aboutData.sectionTag}</span>
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {aboutData.title}
          </h2>
        </motion.div>

        {/* Asymmetric Editorial Grid: Narrative + 3 Book-Inspired Pillar Cards */}
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Narrative Column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 lg:col-span-7"
          >
            <SpotlightCard accent="blue" className="p-7 sm:p-9">
              <div className="mb-5 flex items-center justify-between border-b border-white/[0.07] pb-4">
                <span className="inline-flex items-center gap-2 font-mono text-xs tracking-wider text-zinc-400">
                  <BookOpen className="h-3.5 w-3.5 text-blue-400" />
                  {aboutData.cardHeader}
                </span>
                <span className="font-mono text-[11px] text-zinc-500">
                  {aboutData.locationBadge}
                </span>
              </div>

              <div className="space-y-5 text-sm leading-relaxed text-zinc-300 sm:text-base sm:leading-[1.8]">
                {aboutData.paragraphs.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-3 border-t border-white/[0.07] pt-5 font-mono text-[11px] tracking-wider text-zinc-400">
                {aboutData.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-zinc-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Right Column: 3 Compact Pillar Cards (Programming, Innovation, Technology) */}
          <div className="flex flex-col gap-4 lg:col-span-5">
            {aboutData.pillars.map((pillar, index) => {
              const Icon = PILLAR_ICONS[pillar.title] || Code2;
              const style = PILLAR_ACCENT_STYLES[pillar.accent];

              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <SpotlightCard accent={pillar.accent} className="p-5 sm:p-6">
                    {/* Book-spine inspired left luminous accent bar */}
                    <div
                      aria-hidden="true"
                      className={`absolute inset-y-4 left-0 w-[3px] rounded-r-full bg-gradient-to-b ${style.bar}`}
                    />

                    <div className="flex items-start gap-4 pl-2">
                      <div
                        className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${style.icon}`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <h3 className="font-display text-lg font-bold tracking-tight text-white">
                            {pillar.title}
                          </h3>
                          <span
                            className={`font-mono text-[10px] tracking-[0.2em] ${style.index}`}
                          >
                            {pillar.index}
                          </span>
                        </div>
                        <p className="mt-0.5 font-mono text-[11px] tracking-wide text-[#A1A1AA]">
                          {pillar.subtitle}
                        </p>
                        <p className="mt-2.5 text-xs leading-relaxed text-zinc-400 sm:text-sm">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  </SpotlightCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
