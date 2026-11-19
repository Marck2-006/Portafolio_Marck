import { motion } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight, Code2, Terminal } from 'lucide-react';
import heroBanner from '../assets/hero-banner.jpg';
import { useLanguage } from '../context/LanguageContext';

function FlutterIcon({ className = 'h-5 w-5' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357L14.314 0zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z" />
    </svg>
  );
}

function GitHubIcon({ className = 'h-5 w-5' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const { content } = useLanguage();
  const heroData = content.hero;

  const techBarItems = [
    {
      id: 'code',
      label: heroData.techBarLabels.code,
      href: '#habilidades',
      external: false,
      hoverClass:
        'hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.22)]',
      icon: Code2,
    },
    {
      id: 'flutter',
      label: heroData.techBarLabels.flutter,
      href: '#habilidades',
      external: false,
      hoverClass:
        'hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-violet-400 hover:shadow-[0_0_20px_rgba(139,92,246,0.22)]',
      icon: FlutterIcon,
    },
    {
      id: 'github',
      label: heroData.techBarLabels.github,
      href: heroData.githubUrl,
      external: true,
      hoverClass:
        'hover:border-white/30 hover:bg-white/10 hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.16)]',
      icon: GitHubIcon,
    },
    {
      id: 'terminal',
      label: heroData.techBarLabels.terminal,
      href: '#habilidades',
      external: false,
      hoverClass:
        'hover:border-rose-500/45 hover:bg-rose-500/10 hover:text-rose-400 hover:shadow-[0_0_20px_rgba(244,63,94,0.22)]',
      icon: Terminal,
    },
  ];

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen w-full items-center overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20"
    >
      {/* Panoramic Monochrome Banner Integration */}
      <div className="pointer-events-none absolute inset-0 z-0 h-full w-full overflow-hidden">
        {/* Ambient neo-futuristic glows behind the right-side monochrome character */}
        <div
          aria-hidden="true"
          className="absolute right-[4%] top-[18%] h-[320px] w-[320px] rounded-full bg-blue-600/20 blur-[110px] sm:h-[520px] sm:w-[520px] sm:blur-[120px]"
        />
        <div
          aria-hidden="true"
          className="absolute right-[16%] bottom-[12%] h-[280px] w-[280px] rounded-full bg-violet-600/20 blur-[110px] sm:h-[460px] sm:w-[460px] sm:blur-[120px]"
        />

        {/* Monochrome editorial hero banner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 h-full w-full"
        >
          <img
            src={heroBanner}
            alt={heroData.bannerAlt}
            className="absolute inset-0 h-full w-full object-cover object-right opacity-80 grayscale contrast-125 md:object-center md:opacity-85"
          />
        </motion.div>

        {/* Mobile uniform contrast overlay + Desktop directional left-to-right gradient */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[#050508]/75 md:bg-transparent md:bg-gradient-to-r md:from-[#050508] md:via-[#050508]/85 md:to-transparent"
        />
        {/* Bottom seamless fade into the page background */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-transparent"
        />
        {/* Top subtle vignette for navbar separation */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#050508]/80 to-transparent"
        />
      </div>

      {/* Main Editorial Content */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          {/* Status badge with tactical pulsing crimson/purple dot */}
          <motion.div variants={itemVariants} className="mb-6 flex max-w-full sm:mb-7">
            <div
              data-collab-target="badge"
              className="inline-flex max-w-full items-center justify-center gap-2 rounded-full border border-white/[0.1] bg-[#0D0D14]/85 px-3 py-1.5 text-center backdrop-blur-md sm:px-4"
            >
              <span className="relative flex h-2 w-2 shrink-0 sm:h-2.5 sm:w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-gradient-to-tr from-[#E11D48] to-[#8B5CF6] sm:h-2.5 sm:w-2.5" />
              </span>
              <span
                data-collab-target="badge-text"
                className="font-mono text-xs leading-snug tracking-wide text-zinc-200 sm:tracking-[0.1em]"
              >
                {heroData.availabilityBadge}
              </span>
            </div>
          </motion.div>

          {/* Editorial Typographic Contrast Name */}
          <motion.div variants={itemVariants}>
            <h1
              data-collab-target="title"
              className="font-display tracking-tight text-white"
            >
              <span className="block text-5xl font-bold leading-[1.02] sm:text-7xl lg:text-[5.25rem]">
                {heroData.firstName}
              </span>
              <span className="mt-1.5 flex flex-wrap items-baseline gap-x-3 gap-y-2 text-2xl font-light tracking-normal text-zinc-200 sm:text-4xl lg:text-[2.65rem]">
                <span>{heroData.lastName}</span>
                <span className="inline-flex items-center rounded-lg border border-violet-500/30 bg-gradient-to-r from-blue-600/15 to-violet-600/20 px-2.5 py-0.5 font-mono text-xs font-medium tracking-wider text-violet-300 sm:text-sm">
                  {heroData.handle}
                </span>
              </span>
            </h1>
          </motion.div>

          {/* Fine gradient horizontal divider */}
          <motion.div
            variants={itemVariants}
            aria-hidden="true"
            className="my-6 h-px w-full max-w-md bg-gradient-to-r from-zinc-500/70 via-blue-500/80 to-violet-500/60"
          />

          {/* Monospace Spaced Subtitle */}
          <motion.p
            variants={itemVariants}
            className="font-mono text-xs font-medium uppercase tracking-[0.26em] text-[#A1A1AA] sm:text-sm"
          >
            {heroData.subtitle}
          </motion.p>

          {/* Personal Quote */}
          <motion.p
            variants={itemVariants}
            data-collab-target="quote"
            className="mt-3 font-display text-base italic text-zinc-300 sm:text-lg"
          >
            &ldquo;{heroData.quote}&rdquo;
          </motion.p>

          {/* Role & Value Proposition */}
          <motion.div variants={itemVariants} className="mt-6">
            <div data-collab-target="subtitle-block" className="space-y-2">
              <p className="text-base font-medium text-white sm:text-lg">
                {heroData.role}
              </p>
              <p className="max-w-xl text-sm leading-relaxed text-[#A1A1AA] sm:text-base">
                {heroData.valueProposition}
              </p>
            </div>
          </motion.div>

          {/* Primary & Secondary CTAs */}
          <motion.div
            variants={itemVariants}
            data-collab-target="cta"
            className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center"
          >
            <a
              href={heroData.primaryCta.href}
              data-collab-target="cta-primary"
              className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-[#2563EB] to-[#7C3AED] px-6 py-3.5 font-display text-sm font-semibold tracking-wide text-white shadow-[0_0_24px_rgba(37,99,235,0.28)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_34px_rgba(124,58,237,0.48)] active:scale-[0.99] sm:w-auto"
            >
              <span className="relative z-10">{heroData.primaryCta.label}</span>
              <ArrowDownRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>

            <a
              href={heroData.secondaryCta.href}
              data-collab-target="cta-secondary"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-[#0D0D14]/70 px-6 py-3.5 font-display text-sm font-medium tracking-wide text-zinc-100 backdrop-blur-md transition-all duration-300 hover:border-[#E11D48]/70 hover:bg-[#E11D48]/10 hover:text-white hover:shadow-[0_0_24px_rgba(225,29,72,0.22)] sm:w-auto"
            >
              <span>{heroData.secondaryCta.label}</span>
              <ArrowUpRight className="h-4 w-4 text-zinc-400 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#F43F5E]" />
            </a>
          </motion.div>

          {/* Minimalist Monochrome Icon Bar */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <span className="mr-1 font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500">
              {heroData.coreStackLabel}
            </span>
            {techBarItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  title={item.label}
                  aria-label={item.label}
                  {...(item.external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  className={`flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.09] bg-[#0D0D14]/80 text-zinc-400 backdrop-blur-sm transition-all duration-300 ${item.hoverClass}`}
                >
                  <IconComponent className="h-[18px] w-[18px]" />
                </a>
              );
            })}
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.a
        href="#sobre-mi"
        aria-label={heroData.scrollAriaLabel}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-zinc-500 transition-colors hover:text-white sm:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.25em]">
          {heroData.scrollLabel}
        </span>
        <span className="h-7 w-px bg-gradient-to-b from-blue-500/80 via-violet-500/60 to-transparent" />
      </motion.a>
    </section>
  );
}
