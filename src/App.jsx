import { LanguageProvider } from './context/LanguageContext';
import CollabIntroOverlay from './components/CollabIntroOverlay';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen w-full overflow-x-hidden bg-[#050508] text-white selection:bg-[#7C3AED]/40 selection:text-white">
        {/* Subtle fixed editorial grid and ambient neo-futuristic glows */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
        >
          <div className="bg-editorial-grid absolute inset-0 opacity-40" />
          <div className="absolute -left-40 top-[28%] h-[420px] w-[420px] rounded-full bg-blue-600/[0.06] blur-[140px]" />
          <div className="absolute -right-40 top-[62%] h-[420px] w-[420px] rounded-full bg-violet-600/[0.07] blur-[140px]" />
        </div>

        {/* Main layout */}
        <div className="relative z-10">
          <CollabIntroOverlay />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </LanguageProvider>
  );
}
