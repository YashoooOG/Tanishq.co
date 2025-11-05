import { Github, Linkedin, Mail, Twitter, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/yourusername', label: 'Twitter' },
    { icon: Mail, href: 'mailto:your@email.com', label: 'Email' },
  ];

  return (
    <footer className="bg-cream dark:bg-warm-black border-t-2 border-retro-brown dark:border-mint/30 transition-all duration-500 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="font-mono text-lg font-bold text-retro-brown dark:text-mint mb-4 retro-shadow">
              About
            </h3>
            <p className="text-retro-brown/70 dark:text-mint/70 font-mono text-sm leading-relaxed">
              Crafting digital experiences with a retro twist. Building the web, one pixel at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-mono text-lg font-bold text-retro-brown dark:text-mint mb-4 retro-shadow">
              Quick Links
            </h3>
            <ul className="space-y-2 font-mono text-sm">
              <li><a href="/" className="text-retro-brown/70 dark:text-mint/70 hover:text-soft-pink dark:hover:text-pastel-blue transition-colors">Home</a></li>
              <li><a href="/about" className="text-retro-brown/70 dark:text-mint/70 hover:text-soft-pink dark:hover:text-pastel-blue transition-colors">About</a></li>
              <li><a href="/projects" className="text-retro-brown/70 dark:text-mint/70 hover:text-soft-pink dark:hover:text-pastel-blue transition-colors">Projects</a></li>
              <li><a href="/contact" className="text-retro-brown/70 dark:text-mint/70 hover:text-soft-pink dark:hover:text-pastel-blue transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-mono text-lg font-bold text-retro-brown dark:text-mint mb-4 retro-shadow">
              Connect
            </h3>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-soft-pink/20 dark:bg-mint/20 rounded-lg text-retro-brown dark:text-mint hover:bg-soft-pink/40 dark:hover:bg-mint/40 hover:scale-110 transition-all duration-300 retro-border"
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t-2 border-retro-brown/20 dark:border-mint/20 text-center">
          <p className="font-mono text-sm text-retro-brown/70 dark:text-mint/70 flex items-center justify-center gap-2">
            © {currentYear} Made with <Heart size={16} className="text-soft-pink dark:text-pastel-blue animate-pulse" /> by Your Name
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
