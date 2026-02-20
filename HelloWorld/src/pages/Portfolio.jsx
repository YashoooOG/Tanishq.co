import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import SectionWrapper from '../components/SectionWrapper';
import TypingEffect from '../components/TypingEffect';
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';
import { projects } from '../data/projects';
import '../styles/portfolio.css';
import '../styles/components.css';

/* ── Last-login timestamp (session-persistent) ── */
const SESSION_KEY = 'tc_last_login';
function getLastLogin() {
  const prev = sessionStorage.getItem(SESSION_KEY);
  const now = new Date().toLocaleString('en-IN', {
    weekday: 'short', month: 'short', day: 'numeric',
    hour: '2-digit', minute: '2-digit', second: '2-digit',
  });
  if (!prev) sessionStorage.setItem(SESSION_KEY, now);
  return prev || 'first time here, welcome.';
}

/* ── Tech Stack Data ── */
const STACK = [
  { name: 'Java', icon: '☕', level: 85 },
  { name: 'C', icon: '⚙', level: 75 },
  { name: 'MySQL', icon: '🗄', level: 80 },
  { name: 'JavaScript', icon: 'JS', level: 78 },
  { name: 'React', icon: '⚛', level: 72 },
  { name: 'HTML', icon: '{}', level: 90 },
  { name: 'CSS', icon: '🎨', level: 85 },
  { name: 'Git', icon: '⑂', level: 82 },
  { name: 'Linux', icon: '🐧', level: 75 },
  { name: 'Node.js', icon: '⬢', level: 65 },
  { name: 'Bash', icon: '$_', level: 70 },
  { name: 'REST API', icon: '⇌', level: 80 },
];

/* ── Contact Form Component ── */
function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      e.email = 'Valid email is required';
    if (!form.message.trim() || form.message.length < 10)
      e.message = 'Message must be at least 10 characters';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setSent(true);
  };

  const handleChange = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    setErrors((er) => ({ ...er, [field]: '' }));
  };

  // Easter egg: "hire me" in the message
  const hireMe = form.message.toLowerCase().includes('hire me');

  if (sent) {
    const isSecret = form.message.toLowerCase().includes('hire me');
    return (
      <div className="terminal-form">
        <div className="terminal-form__header">
          <div className="terminal-form__dot" />
          <div className="terminal-form__dot" />
          <div className="terminal-form__dot" />
          <span className="terminal-form__title">contact.sh</span>
        </div>
        {isSecret ? (
          <div className="terminal-form__success terminal-form__success--secret">
            <div style={{ fontSize: '1.4rem', marginBottom: '10px', color: 'var(--accent)' }}>⚡</div>
            <div style={{ color: 'var(--accent)', marginBottom: '6px' }}>$ sudo hire tanishq --immediately</div>
            <div>Access granted. Offer letter incoming. Good choice.</div>
          </div>
        ) : (
          <div className="terminal-form__success">
            <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>✓</div>
            Transmission received. I'll respond within 24 hours.
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="terminal-form">
      <div className="terminal-form__header">
        <div className="terminal-form__dot" />
        <div className="terminal-form__dot" />
        <div className="terminal-form__dot" />
        <span className="terminal-form__title">contact.sh — tanishq@portfolio</span>
      </div>
      <form className="terminal-form__body" onSubmit={handleSubmit} noValidate>
        <div className="terminal-form__field">
          <label className="terminal-form__label">Name</label>
          <input
            type="text"
            className="terminal-form__input"
            placeholder="Enter your name"
            value={form.name}
            onChange={handleChange('name')}
          />
          {errors.name && <span className="terminal-form__error">{errors.name}</span>}
        </div>
        <div className="terminal-form__field">
          <label className="terminal-form__label">Email</label>
          <input
            type="email"
            className="terminal-form__input"
            placeholder="your@email.com"
            value={form.email}
            onChange={handleChange('email')}
          />
          {errors.email && <span className="terminal-form__error">{errors.email}</span>}
        </div>
        <div className="terminal-form__field">
          <label className="terminal-form__label">Message</label>
          <textarea
            className="terminal-form__textarea"
            placeholder="Your message..."
            value={form.message}
            onChange={handleChange('message')}
          />
          {errors.message && <span className="terminal-form__error">{errors.message}</span>}
          {hireMe && (
            <span className="terminal-form__hint">
              ⚡ psst, you typed the magic words...
            </span>
          )}
        </div>
        <button type="submit" className="terminal-form__submit">
          SEND TRANSMISSION
        </button>
      </form>
    </div>
  );
}

/* ── SkillCard with animated bar ── */
function SkillCard({ skill }) {
  const [animated, setAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true); },
      { threshold: 0.2 }
    );
    const el = ref.current;
    if (el) obs.observe(el);
    return () => { if (el) obs.unobserve(el); };
  }, []);

  return (
    <div className="stack__card" ref={ref}>
      <div className="stack__card-icon">{skill.icon}</div>
      <div className="stack__card-name">{skill.name}</div>
      <div className="stack__card-bar-track">
        <div
          className="stack__card-bar-fill"
          style={{ width: animated ? `${skill.level}%` : '0%' }}
        />
      </div>
    </div>
  );
}

/* ── Main Portfolio Page ── */
export default function Portfolio() {
  const lastLogin = getLastLogin();

  return (
    <div className="page">
      {/* ── HERO ── */}
      <section className="hero">
        <div className="container">
          <div className="hero__content">
            <div className="hero__login-line">
              Last login: {lastLogin} on portfolio
            </div>
            <div className="hero__eyebrow">System Online</div>
            <h1 className="hero__title">
              TANISHQ<span className="hero__title-accent">.CO</span>
              <br />
              INITIALIZING…
            </h1>
            <p className="hero__subtitle">
              Full Stack Developer · Backend Engineering Enthusiast
            </p>
            <div className="hero__typing-wrapper">
              <span className="hero__typing-prompt">$</span>
              <TypingEffect />
            </div>
            <div className="hero__actions">
              <a href="#projects" className="btn btn-primary">
                Explore Portfolio
              </a>
              <Link to="/resume" className="btn btn-secondary">
                View Resume
              </Link>
            </div>
          </div>
        </div>
        <div className="hero__scroll-indicator">
          <div className="hero__scroll-line" />
          <span>SCROLL</span>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="about" id="about">
        <div className="container">
          <SectionWrapper>
            <div className="section-label">01 / About</div>
            <h2 className="section-title">ABOUT.SYS</h2>
            <div className="about__grid" style={{ marginTop: '36px' }}>
              <div className="about__box">
                <p className="about__text">
                  I'm a second-year Computer Science student with a strong focus on backend
                  engineering and full-stack development. I build systems that are clean,
                  scalable, and maintainable.
                </p>
                <p className="about__text">
                  My approach: understand the problem deeply, design the architecture before
                  writing a single line, and write code that your future self won't hate.
                </p>
                <div className="about__location">
                  <div className="about__location-dot" />
                  India · Open to Remote
                </div>
                <div className="about__status">
                  <span className="about__status-dot" />
                  Currently building: DSA Tracker v2 + this portfolio
                </div>
              </div>
              <div>
                <div className="about__highlights">
                  {[
                    'Backend API design and REST architecture',
                    'Full stack development with React & Node.js',
                    'Database design and query optimization',
                    'Data structures and algorithm problem solving',
                    'Linux system administration and shell scripting',
                    'Clean code principles and software architecture',
                  ].map((item) => (
                    <div key={item} className="about__highlight-item">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* ── TECH STACK ── */}
      <section className="stack" id="stack">
        <div className="container">
          <SectionWrapper>
            <div className="section-label">02 / Stack</div>
            <h2 className="section-title">TECH.STACK</h2>
            <p className="section-subtitle" style={{ marginTop: '10px' }}>
              Tools and technologies I work with on a regular basis.
            </p>
            <div className="stack__grid">
              {STACK.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section className="projects" id="projects">
        <div className="container">
          <SectionWrapper>
            <div className="section-label">03 / Work</div>
            <h2 className="section-title">MISSIONS.COMPLETED</h2>
            <p className="section-subtitle" style={{ marginTop: '10px' }}>
              A selection of projects across backend systems, full-stack apps, and developer tooling.
            </p>
            <div className="projects__grid">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="stats">
        <div className="container">
          <SectionWrapper>
            <div className="stats__grid">
              {[
                { value: '6+', label: 'Projects Completed' },
                { value: '12+', label: 'Technologies Learned' },
                { value: '70%', label: 'Backend Focus' },
                { value: '50K+', label: 'Lines of Code' },
              ].map(({ value, label }) => (
                <div key={label} className="stats__item">
                  <div className="stats__value">
                    <span>{value}</span>
                  </div>
                  <div className="stats__label">{label}</div>
                </div>
              ))}
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="contact" id="contact">
        <div className="container">
          <SectionWrapper>
            <div className="section-label">04 / Contact</div>
            <h2 className="section-title">CONTACT.TERMINAL</h2>
            <div className="contact__grid" style={{ marginTop: '40px' }}>
              <div>
                <p className="contact__info-title">
                  Open to internships, collaborations, and interesting backend problems.
                  If you have something worth building, let's talk.
                </p>
                <div className="contact__socials">
                  {[
                    { icon: '⑂', label: 'GitHub', href: 'https://github.com' },
                    { icon: 'in', label: 'LinkedIn', href: 'https://linkedin.com' },
                    { icon: '@', label: 'yash@example.com', href: 'mailto:yash@example.com' },
                  ].map(({ icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="contact__social-link"
                    >
                      <span className="contact__social-icon">{icon}</span>
                      {label}
                    </a>
                  ))}
                </div>
              </div>
              <ContactForm />
            </div>
          </SectionWrapper>
        </div>
      </section>

      <Footer />
    </div>
  );
}
