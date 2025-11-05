import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/90 dark:bg-warm-black/90 backdrop-blur-md border-b-2 border-retro-brown dark:border-mint/30 transition-all duration-500">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-mono font-bold text-retro-brown dark:text-mint hover:scale-105 transition-transform duration-300">
            <span className="retro-shadow">&lt;TV/&gt;</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-mono text-sm tracking-wide transition-all duration-300 ${
                  isActive(link.path)
                    ? 'text-soft-pink dark:text-pastel-blue retro-glow scale-110'
                    : 'text-retro-brown/70 dark:text-mint/70 hover:text-soft-pink dark:hover:text-pastel-blue hover:scale-105'
                }`} 
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
           
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-retro-brown dark:text-mint p-2 hover:bg-soft-pink/20 dark:hover:bg-mint/20 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t-2 border-retro-brown/20 dark:border-mint/20 pt-4 space-y-3 animate-slide-down">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block font-mono text-sm tracking-wide transition-all duration-300 ${
                  isActive(link.path)
                    ? 'text-soft-pink dark:text-pastel-blue retro-glow'
                    : 'text-retro-brown/70 dark:text-mint/70 hover:text-soft-pink dark:hover:text-pastel-blue'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
