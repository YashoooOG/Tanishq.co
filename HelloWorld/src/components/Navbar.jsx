import { useState, useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../styles/navbar.css';

const NAV_LINKS = [
  { label: 'Portfolio', to: '/' },
  { label: 'Resume', to: '/resume' },
];

export default function Navbar({ onOpenPalette }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoGlitch, setLogoGlitch] = useState(false);
  const logoClicks = useRef(0);
  const logoTimer = useRef(null);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, []);

  // Logo click easter egg — 5 rapid clicks triggers glitch
  const handleLogoClick = () => {
    logoClicks.current += 1;
    clearTimeout(logoTimer.current);
    logoTimer.current = setTimeout(() => { logoClicks.current = 0; }, 1200);
    if (logoClicks.current >= 5) {
      logoClicks.current = 0;
      setLogoGlitch(true);
      setTimeout(() => setLogoGlitch(false), 800);
    }
  };

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="navbar__inner">
          <Link to="/" className={`navbar__logo${logoGlitch ? ' navbar__logo--glitch' : ''}`} onClick={handleLogoClick}>
            <span className="navbar__logo-bracket">[</span>
            TANISHQ<span className="navbar__logo-dot">.CO</span>
            <span className="navbar__logo-bracket">]</span>
          </Link>

          <ul className="navbar__links">
            {NAV_LINKS.map(({ label, to }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `navbar__link${isActive ? ' active' : ''}`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          <button
            className="navbar__palette-btn"
            onClick={onOpenPalette}
            aria-label="Open command palette"
            title="Command palette"
          >
            <span className="navbar__palette-icon">⌘</span>
            <span className="navbar__palette-hint">K</span>
          </button>

          <button
            className={`navbar__hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className={`navbar__mobile-menu${menuOpen ? ' open' : ''}`}>
        {NAV_LINKS.map(({ label, to }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              `navbar__link${isActive ? ' active' : ''}`
            }
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </NavLink>
        ))}
      </div>
    </>
  );
}
