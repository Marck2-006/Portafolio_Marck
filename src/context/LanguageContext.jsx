import { createContext, useContext, useEffect, useState } from 'react';
import { portfolioContent } from '../data/portfolioData';

const STORAGE_KEY = 'portfolio-lang';
const SUPPORTED_LANGUAGES = ['es', 'en'];

const LanguageContext = createContext(null);

function getInitialLanguage() {
  if (typeof window === 'undefined') return 'es';
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved && SUPPORTED_LANGUAGES.includes(saved)) {
      return saved;
    }
  } catch {
    // Fallback silently when localStorage is unavailable
  }
  return 'es';
}

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(getInitialLanguage);

  const setLanguage = (nextLang) => {
    if (!SUPPORTED_LANGUAGES.includes(nextLang)) return;
    setLanguageState(nextLang);
  };

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === 'es' ? 'en' : 'es'));
  };

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;

      const meta = portfolioContent[language]?.meta;
      if (meta) {
        document.title = meta.title;
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
          metaDesc.setAttribute('content', meta.description);
        }
      }
    }

    try {
      window.localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // Ignore storage write errors in restricted browsing modes
    }
  }, [language]);

  const content = portfolioContent[language] || portfolioContent.es;

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, toggleLanguage, content }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return ctx;
}
