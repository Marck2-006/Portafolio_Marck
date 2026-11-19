import { motion } from 'framer-motion';
import {
  Cpu,
  Database,
  Globe,
  Layers,
  ShieldCheck,
  Workflow,
} from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import { useLanguage } from '../context/LanguageContext';

export default function Projects() {
  const { content } = useLanguage();
  const projectsData = content.projects;

  return (
    <section
      id="proyectos"
      className="relative border-t border-white/[0.06] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="mb-14 max-w-2xl"
        >
          <div className="mb-3 flex items-center gap-3 font-mono text-xs tracking-[0.22em] text-[#A1A1AA]">
            <span className="text-blue-400">{projectsData.sectionIndex}</span>
            <span className="h-px w-8 bg-gradient-to-r from-blue-500 to-violet-500" />
            <span>{projectsData.sectionTag}</span>
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {projectsData.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#A1A1AA] sm:text-base">
            {projectsData.subtitle}
          </p>
        </motion.div>

        {/* A) Proyectos Principales */}
        <div className="mb-6 flex items-center gap-3">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-blue-400">
            {projectsData.featuredSectionLabel}
          </span>
          <span className="h-px flex-1 bg-white/[0.07]" />
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {projectsData.featured.map((project, index) => {
            const isBlue = project.accent === 'blue';
            const PrimaryIcon = isBlue ? Globe : Workflow;
            const SecondaryIcon = isBlue ? ShieldCheck : Database;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <SpotlightCard
                  accent={project.accent}
                  className="h-full p-7 sm:p-8"
                >
                  {/* Subtle top ambient strip */}
                  <div
                    aria-hidden="true"
                    className={`pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${
                      isBlue
                        ? 'from-blue-600 via-blue-400 to-violet-500'
                        : 'from-violet-600 via-purple-400 to-blue-500'
                    } opacity-75`}
                  />

                  <div className="flex h-full flex-col justify-between gap-7">
                    <div>
                      {/* Meta header */}
                      <div className="mb-5 flex items-center justify-between gap-4">
                        <span className="inline-flex items-center gap-2 font-mono text-xs tracking-wider text-[#A1A1AA]">
                          <PrimaryIcon
                            className={`h-4 w-4 ${
                              isBlue ? 'text-blue-400' : 'text-violet-400'
                            }`}
                          />
                          {project.category}
                        </span>
                        <span className="font-mono text-xs font-semibold tracking-[0.2em] text-zinc-600">
                          PRJ_{project.index}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                        {project.title}
                      </h3>

                      {/* Highlights pills */}
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className={`rounded-full border px-2.5 py-0.5 font-mono text-[10px] tracking-wider ${
                              isBlue
                                ? 'border-blue-500/30 bg-blue-500/10 text-blue-300'
                                : 'border-violet-500/30 bg-violet-500/10 text-violet-300'
                            }`}
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>

                      {/* Technical Focus & Impact Architecture Blocks */}
                      <div className="mt-6 space-y-4">
                        <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                          <div className="mb-1.5 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-400">
                            <Layers className="h-3.5 w-3.5 text-blue-400" />
                            {projectsData.technicalFocusLabel}
                          </div>
                          <p className="text-sm leading-relaxed text-zinc-300">
                            {project.enfoqueTecnico}
                          </p>
                        </div>

                        <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                          <div className="mb-1.5 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-400">
                            <SecondaryIcon className="h-3.5 w-3.5 text-violet-400" />
                            {projectsData.impactArchitectureLabel}
                          </div>
                          <p className="text-sm leading-relaxed text-zinc-300">
                            {project.impactoArquitectura}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Monospace Stack Tags */}
                    <div className="flex flex-wrap items-center gap-2 border-t border-white/[0.07] pt-5">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg border border-white/[0.09] bg-[#050508]/80 px-2.5 py-1 font-mono text-[11px] tracking-wide text-zinc-200"
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
        </div>

        {/* B) Prototipos e Iniciativas Adicionales */}
        <div className="mt-16 mb-6 flex items-center gap-3">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-violet-400">
            {projectsData.prototypesSectionLabel}
          </span>
          <span className="h-px flex-1 bg-white/[0.07]" />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {projectsData.prototypes.map((proto, index) => (
            <motion.div
              key={proto.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <SpotlightCard accent={proto.accent} className="h-full p-6">
                <div className="flex h-full flex-col justify-between gap-5">
                  <div>
                    <div className="mb-3 flex items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 font-mono text-[11px] tracking-wider text-[#A1A1AA]">
                        <Cpu className="h-3.5 w-3.5 text-zinc-400" />
                        {proto.tag}
                      </span>
                      <span className="font-mono text-[10px] text-zinc-600">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-bold tracking-tight text-white">
                      {proto.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#A1A1AA]">
                      {proto.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {proto.stack.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2 py-0.5 font-mono text-[10px] tracking-wider text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
