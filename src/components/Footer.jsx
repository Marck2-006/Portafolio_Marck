import { ArrowUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { content } = useLanguage();
  const currentYear = new Date().getFullYear();
  const navLinks = content.nav.links;
  const contactData = content.contact;
  const footerData = content.footer;

  return (
    <footer className="relative border-t border-white/[0.08] bg-[#050508]">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          {/* Editorial signature */}
          <div>
            <p className="font-display text-lg font-bold tracking-tight text-white">
              Bismarck{' '}
              <span className="font-light text-zinc-300">
                Hernández Castellón
              </span>
            </p>
            <p className="mt-1 font-mono text-xs tracking-[0.2em] text-zinc-500">
              {content.hero.subtitle}
            </p>
          </div>

          {/* Quick section links */}
          <nav
            aria-label={footerData.navAriaLabel}
            className="flex flex-wrap items-center gap-x-5 gap-y-2"
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="font-mono text-xs text-[#A1A1AA] transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Back to top */}
          <a
            href="#inicio"
            aria-label={footerData.backToTopAriaLabel}
            className="group inline-flex items-center gap-2 rounded-xl border border-white/[0.09] bg-[#0D0D14] px-3.5 py-2 font-mono text-xs text-zinc-300 transition-all hover:border-blue-500/40 hover:text-white"
          >
            <span>{footerData.backToTopLabel}</span>
            <ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-white/[0.06] pt-6 sm:flex-row sm:items-center">
          <p className="font-mono text-[11px] text-zinc-500">
            © {currentYear} {footerData.copyrightSuffix}
          </p>

          <div className="flex items-center gap-4 font-mono text-[11px] text-zinc-400">
            {contactData.socials.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-violet-400"
              >
                {social.name} ({social.handle})
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
