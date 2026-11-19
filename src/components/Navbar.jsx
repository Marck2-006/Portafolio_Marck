import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const { language, setLanguage, content } = useLanguage();
  const navLinks = content.nav.links;

  const [activeSection, setActiveSection] = useState('inicio');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.id);
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length > 0) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: '-30% 0px -50% 0px',
        threshold: [0.1, 0.25, 0.5],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [navLinks]);

  const handleLinkClick = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav
        data-collab-target="navbar"
        aria-label={content.nav.ariaLabel}
        className={`relative mx-auto flex max-w-5xl items-center justify-between rounded-2xl border px-4 py-2.5 backdrop-blur-md transition-all duration-300 sm:px-5 ${
          scrolled
            ? 'border-white/[0.12] bg-[#050508]/80 shadow-[0_8px_32px_rgba(0,0,0,0.65)]'
            : 'border-white/[0.08] bg-[#050508]/60'
        }`}
      >
        {/* Top subtle luminous edge */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"
        />

        {/* Brand identity */}
        <a
          href="#inicio"
          onClick={() => handleLinkClick('inicio')}
          className="group flex items-center gap-2.5 focus:outline-none"
        >
          <span className="relative flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-[#0D0D14] font-mono text-xs font-semibold tracking-wider text-white transition-colors group-hover:border-violet-500/50">
            BH
            <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-[#E11D48] shadow-[0_0_8px_#F43F5E]" />
          </span>
          <div className="flex flex-col leading-none">
            <span className="font-display text-sm font-bold tracking-tight text-white">
              Bismarck
            </span>
            <span className="font-mono text-[10px] tracking-[0.18em] text-[#A1A1AA] transition-colors group-hover:text-violet-400">
              @MARCK
            </span>
          </div>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <li key={link.id}>
                <a
                  href={link.href}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative rounded-xl px-3.5 py-2 font-mono text-xs tracking-wide transition-colors duration-200 ${
                    isActive
                      ? 'text-white'
                      : 'text-[#A1A1AA] hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="navbar-active-pill"
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 32,
                      }}
                      className="absolute inset-0 rounded-xl border border-white/10 bg-gradient-to-r from-blue-600/25 to-violet-600/25 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]"
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right Controls: Language Switcher (ES // EN) + Mobile Menu Button */}
        <div className="flex items-center gap-2">
          <div
            data-collab-target="lang-switcher"
            role="group"
            aria-label={content.nav.languageSwitcherLabel}
            className="inline-flex items-center rounded-xl border border-white/[0.1] bg-[#0D0D14]/90 px-1.5 py-1 font-mono text-[11px] tracking-[0.14em] transition-all duration-300 hover:border-blue-500/40 hover:shadow-[0_0_16px_rgba(59,130,246,0.18)]"
          >
            <button
              type="button"
              onClick={() => setLanguage('es')}
              aria-pressed={language === 'es'}
              className={`cursor-pointer rounded-lg px-1.5 py-0.5 transition-colors duration-200 ${
                language === 'es'
                  ? 'font-semibold text-white'
                  : 'text-zinc-500 hover:text-zinc-200'
              }`}
            >
              ES
            </button>
            <span
              aria-hidden="true"
              className="select-none px-0.5 text-[10px] text-zinc-600"
            >
              //
            </span>
            <button
              type="button"
              onClick={() => setLanguage('en')}
              aria-pressed={language === 'en'}
              className={`cursor-pointer rounded-lg px-1.5 py-0.5 transition-colors duration-200 ${
                language === 'en'
                  ? 'font-semibold text-white'
                  : 'text-zinc-500 hover:text-zinc-200'
              }`}
            >
              EN
            </button>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={
              mobileMenuOpen ? content.nav.closeMenu : content.nav.openMenu
            }
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-[#0D0D14]/90 text-white transition-colors hover:border-blue-500/40 hover:text-blue-400 md:hidden"
          >
            {mobileMenuOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile animated drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="mx-auto mt-2 max-w-5xl overflow-hidden rounded-2xl border border-white/[0.1] bg-[#0D0D14]/95 p-3 shadow-[0_16px_48px_rgba(0,0,0,0.8)] backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((link, idx) => {
                const isActive = activeSection === link.id;
                return (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      onClick={() => handleLinkClick(link.id)}
                      className={`flex items-center justify-between rounded-xl px-4 py-3 font-mono text-xs tracking-wider transition-colors ${
                        isActive
                          ? 'border border-blue-500/30 bg-gradient-to-r from-blue-600/20 to-violet-600/20 text-white'
                          : 'text-[#A1A1AA] hover:bg-white/[0.04] hover:text-white'
                      }`}
                    >
                      <span>{link.label}</span>
                      <span className="text-[10px] text-zinc-500">
                        0{idx + 1}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
