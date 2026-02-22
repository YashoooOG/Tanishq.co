import { useEffect, useState, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import CommandPalette from './components/CommandPalette';
import KonamiOverlay from './components/KonamiOverlay';
import { useKonami } from './hooks/useKonami';

/* ── Console Easter Egg ── */
const CONSOLE_ART = `
%c
 ████████╗ █████╗ ███╗  ██╗██╗███████╗██╗  ██╗ ██████╗     ██████╗ ██████╗ 
    ██╔══╝██╔══██╗████╗ ██║██║██╔════╝██║  ██║██╔═══██╗   ██╔════╝██╔═══██╗
    ██║   ███████║██╔██╗██║██║███████╗███████║██║   ██║   ██║     ██║   ██║
    ██║   ██╔══██║██║╚████║██║╚════██║██╔══██║██║▄▄ ██║   ██║     ██║   ██║
    ██║   ██║  ██║██║ ╚███║██║███████║██║  ██║╚██████╔╝   ╚██████╗╚██████╔╝
    ╚═╝   ╚═╝  ╚═╝╚═╝  ╚══╝╚═╝╚══════╝╚═╝  ╚═╝ ╚══▀▀═╝    ╚═════╝ ╚═════╝ 
`;

/* ── Scroll to top on route change ── */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

/* ── Inner app with routing context ── */
function AppInner() {
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [konamiActive, setKonamiActive] = useState(false);

  // Console Easter egg — fires once on mount
  useEffect(() => {
    console.log(
      CONSOLE_ART,
      'color: #ef4444; font-family: monospace; font-size: 10px;'
    );
    console.log(
      '%c Hey, curious one. 👀',
      'color: #3b82f6; font-weight: bold; font-size: 14px;'
    );
    console.log(
      '%c You found the source. Try the Konami code on the page for another secret.',
      'color: #787060; font-size: 12px;'
    );
    console.log(
      '%c ↑↑↓↓←→←→BA',
      'color: #e8e4dc; font-family: monospace; font-size: 13px; letter-spacing: 4px;'
    );
  }, []);

  // Ctrl+K → command palette
  useEffect(() => {
    const handler = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setPaletteOpen((o) => !o);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  // Number key navigation (1–4 → sections, only on home)
  useEffect(() => {
    const SECTION_MAP = { '1': '#about', '2': '#stack', '3': '#projects', '4': '#contact' };
    const handler = (e) => {
      // Don't intercept when typing in inputs
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) return;
      const target = SECTION_MAP[e.key];
      if (target) {
        document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  // Konami code
  const triggerKonami = useCallback(() => setKonamiActive(true), []);
  useKonami(triggerKonami);

  return (
    <>
      <ScrollToTop />
      <Navbar onOpenPalette={() => setPaletteOpen(true)} />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <CommandPalette isOpen={paletteOpen} onClose={() => setPaletteOpen(false)} />
      {konamiActive && <KonamiOverlay onClose={() => setKonamiActive(false)} />}
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppInner />
      </Router>
    </ThemeProvider>
  );
}

export default App;
