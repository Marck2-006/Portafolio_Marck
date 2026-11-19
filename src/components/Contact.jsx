import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Check, Copy, Mail } from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import { useLanguage } from '../context/LanguageContext';

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

function InstagramIcon({ className = 'h-5 w-5' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const SOCIAL_ICONS = {
  github: GitHubIcon,
  instagram: InstagramIcon,
};

export default function Contact() {
  const { content } = useLanguage();
  const contactData = content.contact;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactData.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = contactData.email;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    }
  };

  return (
    <section
      id="contacto"
      className="relative border-t border-white/[0.06] py-24 sm:py-32"
    >
      {/* Localized subtle ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[340px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-600/12 via-violet-600/12 to-rose-600/10 blur-[120px]"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="mb-12 max-w-2xl"
        >
          <div className="mb-3 flex items-center gap-3 font-mono text-xs tracking-[0.22em] text-[#A1A1AA]">
            <span className="text-blue-400">{contactData.sectionIndex}</span>
            <span className="h-px w-8 bg-gradient-to-r from-blue-500 to-violet-500" />
            <span>{contactData.sectionTag}</span>
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {contactData.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#A1A1AA] sm:text-lg">
            {contactData.message}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
          {/* Primary Email Interactive Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-7"
          >
            <SpotlightCard accent="blue" className="h-full p-7 sm:p-9">
              <div className="flex h-full flex-col justify-between gap-8">
                <div>
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[11px] tracking-wider text-zinc-300">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-[#E11D48]" />
                    {contactData.directResponseBadge}
                  </div>

                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
                    {contactData.emailLabel}
                  </p>
                  <a
                    href={`mailto:${contactData.email}`}
                    className="mt-2 block break-all font-display text-xl font-bold tracking-tight text-white transition-colors hover:text-blue-400 sm:text-3xl"
                  >
                    {contactData.email}
                  </a>
                </div>

                {/* Action buttons: mailto + Copy with animated feedback */}
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={`mailto:${contactData.email}`}
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#7C3AED] px-5 py-3 font-display text-sm font-semibold text-white shadow-[0_0_24px_rgba(37,99,235,0.28)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_32px_rgba(124,58,237,0.45)]"
                  >
                    <Mail className="h-4 w-4" />
                    <span>{contactData.sendEmailButton}</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className={`inline-flex min-w-[168px] cursor-pointer items-center justify-center gap-2 rounded-xl border px-5 py-3 font-mono text-xs font-medium tracking-wider transition-all duration-300 ${
                      copied
                        ? 'border-rose-500/60 bg-rose-500/15 text-rose-200 shadow-[0_0_20px_rgba(244,63,94,0.25)]'
                        : 'border-white/15 bg-[#050508]/75 text-zinc-200 hover:border-rose-500/50 hover:text-white'
                    }`}
                  >
                    <AnimatePresence mode="wait" initial={false}>
                      {copied ? (
                        <motion.span
                          key="copied"
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          transition={{ duration: 0.18 }}
                          className="inline-flex items-center gap-2"
                        >
                          <Check className="h-4 w-4 text-rose-400" />
                          <span>{contactData.copiedFeedback}</span>
                        </motion.span>
                      ) : (
                        <motion.span
                          key="copy"
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          transition={{ duration: 0.18 }}
                          className="inline-flex items-center gap-2"
                        >
                          <Copy className="h-4 w-4 text-zinc-400" />
                          <span>{contactData.copyEmailButton}</span>
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </button>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* External Social Links (GitHub & Instagram) */}
          <div className="flex flex-col gap-5 lg:col-span-5">
            {contactData.socials.map((social, idx) => {
              const Icon = SOCIAL_ICONS[social.id] || GitHubIcon;
              const isGithub = social.id === 'github';

              return (
                <motion.div
                  key={social.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex-1"
                >
                  <SpotlightCard
                    accent={isGithub ? 'purple' : 'crimson'}
                    as="a"
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full p-6"
                  >
                    <div className="flex h-full items-center justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div
                          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border ${
                            isGithub
                              ? 'border-violet-500/30 bg-violet-500/10 text-violet-300'
                              : 'border-rose-500/30 bg-rose-500/10 text-rose-300'
                          }`}
                        >
                          <Icon className="h-5 w-5" />
                        </div>

                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-display text-lg font-bold text-white">
                              {social.name}
                            </h3>
                            <span className="font-mono text-xs text-zinc-400">
                              {social.handle}
                            </span>
                          </div>
                          <p className="mt-1 text-xs leading-relaxed text-[#A1A1AA] sm:text-sm">
                            {social.description}
                          </p>
                        </div>
                      </div>

                      <ArrowUpRight className="h-5 w-5 shrink-0 text-zinc-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
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
