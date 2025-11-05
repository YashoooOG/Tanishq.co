import { Mail, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted:', formData);
    alert('Message sent! (This is a demo)');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'your@email.com',
      href: 'mailto:your@email.com'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      href: null
    }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/yourusername', label: 'Twitter' }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      {/* Page Title */}
      <div className="text-center mb-16">
        <h1 className="font-mono text-5xl md:text-6xl font-bold text-retro-brown dark:text-mint mb-4 retro-shadow">
          Get In Touch
        </h1>
        <p className="font-mono text-xl text-retro-brown/70 dark:text-mint/70 max-w-2xl mx-auto">
          Have a project in mind? Let's work together to create something amazing!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-cream dark:bg-warm-black rounded-xl retro-border p-8">
          <h2 className="font-mono text-2xl font-bold text-retro-brown dark:text-mint mb-6 retro-shadow">
            Send a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block font-mono text-sm font-semibold text-retro-brown dark:text-mint mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-soft-pink/10 dark:bg-mint/10 border-2 border-retro-brown/20 dark:border-mint/20 rounded-lg font-mono text-retro-brown dark:text-mint focus:border-soft-pink dark:focus:border-pastel-blue focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block font-mono text-sm font-semibold text-retro-brown dark:text-mint mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-soft-pink/10 dark:bg-mint/10 border-2 border-retro-brown/20 dark:border-mint/20 rounded-lg font-mono text-retro-brown dark:text-mint focus:border-soft-pink dark:focus:border-pastel-blue focus:outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block font-mono text-sm font-semibold text-retro-brown dark:text-mint mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 bg-soft-pink/10 dark:bg-mint/10 border-2 border-retro-brown/20 dark:border-mint/20 rounded-lg font-mono text-retro-brown dark:text-mint focus:border-soft-pink dark:focus:border-pastel-blue focus:outline-none transition-colors resize-none"
                placeholder="Your message here..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-4 bg-soft-pink dark:bg-mint text-cream dark:text-warm-black font-mono font-bold rounded-lg hover:scale-105 transition-all duration-300 retro-border-thick flex items-center justify-center gap-2"
            >
              <Send size={20} />
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-8">
          {/* Contact Details */}
          <div className="bg-soft-pink/10 dark:bg-mint/10 rounded-xl retro-border p-8">
            <h2 className="font-mono text-2xl font-bold text-retro-brown dark:text-mint mb-6 retro-shadow">
              Contact Info
            </h2>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="p-3 bg-soft-pink/20 dark:bg-mint/20 rounded-lg">
                    <info.icon className="text-retro-brown dark:text-mint" size={24} />
                  </div>
                  <div>
                    <p className="font-mono text-sm text-retro-brown/60 dark:text-mint/60">
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="font-mono font-semibold text-retro-brown dark:text-mint hover:text-soft-pink dark:hover:text-pastel-blue transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="font-mono font-semibold text-retro-brown dark:text-mint">
                        {info.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-cream dark:bg-warm-black rounded-xl retro-border p-8">
            <h2 className="font-mono text-2xl font-bold text-retro-brown dark:text-mint mb-6 retro-shadow">
              Social Media
            </h2>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-soft-pink/20 dark:bg-mint/20 rounded-lg text-retro-brown dark:text-mint hover:bg-soft-pink/40 dark:hover:bg-mint/40 hover:scale-110 transition-all duration-300 retro-border"
                  aria-label={label}
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>

          {/* Fun Message */}
          <div className="bg-soft-pink/10 dark:bg-mint/10 rounded-xl retro-border p-8 text-center">
            <p className="font-mono text-lg text-retro-brown dark:text-mint">
              ✨ Let's create something amazing together! ✨
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
