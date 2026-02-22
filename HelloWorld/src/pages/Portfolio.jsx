import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaDiscord, FaInstagram, FaEnvelope } from "react-icons/fa";
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

/* ── Categorised Knowledge Stack ── */
const KNOWLEDGE = [
    {
        id: '02.01',
        label: 'Core CS Concepts',
        type: 'concept',
        items: [
            { name: 'OOPs', icon: '⬡' },
            { name: 'DSA', icon: '⧉' },
            { name: 'CN', icon: '⇌' },
            { name: 'OS', icon: '⚙' },
            { name: 'DBMS', icon: '🗄' },
            { name: 'Agile Methodology', icon: '🔄' },
        ],
    },
    {
        id: '02.02',
        label: 'Languages',
        type: 'skill',
        items: [
            { name: 'Java', icon: '☕' },
            { name: 'Python', icon: '🐍' },
            { name: 'C / C++', icon: 'C++' },
            { name: 'JavaScript', icon: 'JS' },
            { name: 'TypeScript', icon: 'TS' },
        ],
    },
    {
        id: '02.03',
        label: 'Full-Stack Development',
        type: 'skill',
        items: [
            { name: 'HTML', icon: '{}' },
            { name: 'Tailwind CSS', icon: '🌊' },
            { name: 'Bootstrap', icon: 'B' },
            { name: 'React.js', icon: '⚛' },
            { name: 'Node.js', icon: '⬢' },
            { name: 'Express.js', icon: '▶' },
            { name: 'FastAPI', icon: '⚡' },
            // { name: 'REST APIs', icon: '⇄' },
            { name: 'WebSockets', icon: '🔌' },
        ],
    },
    {
        id: '02.04',
        label: 'Databases',
        type: 'skill',
        items: [
            { name: 'MySQL', icon: '🗃' },
            { name: 'PostgreSQL', icon: '🐘' },
            { name: 'MongoDB', icon: '🍃' },
            { name: 'Firebase', icon: '🔥' },
        ],
    },
    {
        id: '02.05',
        label: 'DevOps & Cloud',
        type: 'skill',
        items: [
            { name: 'Docker', icon: '🐳' },
            { name: 'Kubernetes', icon: '☸' },
            { name: 'GitHub Actions', icon: '⚙' },
        ],
    },
    {
        id: '02.06',
        label: 'Data & Computer Vision',
        type: 'skill',
        items: [
            { name: 'NumPy', icon: '🔢' },
            { name: 'Pandas', icon: '🐼' },
            { name: 'OpenCV', icon: '👁' },
            { name: 'Matplotlib', icon: '📊' },
        ],
    },
    {
        id: '02.07',
        label: 'Tools',
        type: 'skill',
        items: [
            { name: 'Git', icon: '⑂' },
            { name: 'GitHub', icon: '🐙' },
            { name: 'Postman', icon: '📮' },
            { name: 'VS Code', icon: '⌨' },
            { name: 'Android Studio', icon: '🤖' },
            { name: 'Figma', icon: '🎨' },
        ],
    },
];

/* ── Contact Form Component ── */
function ContactForm() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});
    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);
    const [serverError, setServerError] = useState('');

    const validate = () => {
        const e = {};
        if (!form.name.trim()) e.name = 'Name is required';
        if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
            e.email = 'Valid email is required';
        if (!form.message.trim() || form.message.length < 10)
            e.message = 'Message must be at least 10 characters';
        return e;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length) {
            setErrors(errs);
            return;
        }
        setLoading(true);
        setServerError('');
        try {
            const res = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Something went wrong.');
            setSent(true);
        } catch (err) {
            setServerError(err.message);
        } finally {
            setLoading(false);
        }
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
                <button type="submit" className="terminal-form__submit" disabled={loading}>
                    {loading ? 'SENDING...' : 'SEND TRANSMISSION'}
                </button>
                {serverError && (
                    <span className="terminal-form__error" style={{ marginTop: '8px', display: 'block' }}>
                        ✗ {serverError}
                    </span>
                )}
            </form>
        </div>
    );
}

/* ── SkillCard ── */
function SkillCard({ skill }) {
    return (
        <div className="stack__card">
            <div className="stack__card-icon">{skill.icon}</div>
            <div className="stack__card-name">{skill.name}</div>
        </div>
    );
}

/* ── ConceptTag (no progress bar) ── */
function ConceptTag({ item }) {
    return (
        <div className="stack__concept">
            <span className="stack__concept-icon">{item.icon}</span>
            <span className="stack__concept-name">{item.name}</span>
        </div>
    );
}

/* ── Category block ── */
function StackCategory({ cat }) {
    return (
        <div className="stack__category">
            <div className="stack__category-header">
                <span className="stack__category-id">{cat.id}</span>
                <span className="stack__category-label">{cat.label}</span>
            </div>
            {cat.type === 'concept' ? (
                <div className="stack__concept-grid">
                    {cat.items.map((item) => (
                        <ConceptTag key={item.name} item={item} />
                    ))}
                </div>
            ) : (
                <div className="stack__grid">
                    {cat.items.map((skill) => (
                        <SkillCard key={skill.name} skill={skill} />
                    ))}
                </div>
            )}
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
                        </h1>
                        <p className="hero__subtitle">
                            Full Stack Developer · Likes To Play VideoGames
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
                                    I'm a Computer Science student with a strong focus on backend
                                    engineering and full-stack development. I build whatever excites me,
                                    I try to keep it clean, scalable, maintainable and aesthetic.
                                    Passionate about learning and creating things from scratch.
                                </p>
                                <p className="about__text">
                                    My approach: I understand the problem deeply, think about it for eternity,
                                    and while I’m sleeping the solution just comes to me— and that’s
                                    when I sit down and write it..
                                </p>
                                <div className="about__location">
                                    <div className="about__location-dot" />
                                    India · Open to Remote Work
                                </div>
                                <div className="about__status">
                                    <span className="about__status-dot" />
                                    Currently building: a better life...
                                </div>
                            </div>
                            <div>
                                <div className="about__highlights">
                                    {[
                                        'Full stack development with React & Node.js',
                                        'Database design and query optimization',
                                        'Java programming and object-oriented design',
                                        'Data structures and algorithm problem solving',
                                        'Clean code principles and software architecture',
                                        'Linux basics and development environment setup',
                                        'Friendly Instalocker Jett in Mumbai server',
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
                        <h2 className="section-title">KNOWLEDGE.STACK</h2>
                        <p className="section-subtitle" style={{ marginTop: '10px' }}>
                            Concepts I understand and tools I use on a regular basis.
                        </p>
                        <div className="stack__categories">
                            {KNOWLEDGE.map((cat) => (
                                <StackCategory key={cat.id} cat={cat} />
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

            {/* ── EDUCATION ── */}
            <section className="education" id="education">
                <div className="container">
                    <SectionWrapper>
                        <div className="section-label">04 / Education</div>
                        <h2 className="section-title">EDUCATION.LOG</h2>
                        <div className="edu__list" style={{ marginTop: '40px' }}>

                            {/* College */}
                            <div className="edu__item">
                                <div className="edu__year">
                                    <span>2024</span>
                                    <span className="edu__year-sep">—</span>
                                    <span>2028</span>
                                </div>
                                <div className="edu__body">
                                    <h3 className="edu__degree">Bachelor of Engineering</h3>
                                    <div className="edu__institution">
                                        Chitkara University, Rajpura, Punjab
                                    </div>
                                    <p className="edu__desc">
                                        Computer Science Engineering · Currently in 4th Semester<br />
                                        Building a foundation in algorithms, data structures, software engineering, and emerging technologies.
                                    </p>
                                    <div className="edu__tags">
                                        <span className="edu__tag edu__tag--accent">4th Semester</span>
                                        <span className="edu__tag">B.E. CSE</span>
                                        <span className="edu__tag">Rajpura</span>
                                    </div>
                                </div>
                            </div>

                            {/* School */}
                            <div className="edu__item">
                                <div className="edu__year">
                                    <span>2022</span>
                                    <span className="edu__year-sep">—</span>
                                    <span>2024</span>
                                </div>
                                <div className="edu__body">
                                    <h3 className="edu__degree">Senior Secondary (XII)</h3>
                                    <div className="edu__institution">
                                        OPS Intermediate College — Science Stream
                                    </div>
                                    <p className="edu__desc">
                                        Physics, Chemistry, Mathematics<br />
                                        First steps into the world of computers & programming.
                                    </p>
                                    <div className="edu__tags">
                                        <span className="edu__tag">Science</span>
                                        <span className="edu__tag">UP(State) Board </span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </SectionWrapper>
                </div>
            </section>

            {/* ── CONTACT ── */}
            <section className="contact" id="contact">
                <div className="container">
                    <SectionWrapper>
                        <div className="section-label">05 / Contact</div>
                        <h2 className="section-title">CONTACT.TERMINAL</h2>
                        <div className="contact__grid" style={{ marginTop: '40px' }}>
                            <div>
                                <p className="contact__info-title">
                                    Open to internships, collaborations, and interesting backend problems.
                                    If you have something worth building, let's talk.
                                </p>
                                <div className="contact__socials">
                                    {[
                                        {icon: <FaGithub />,label: 'GitHub',href: 'https://github.com/YashoooOG'},
                                        {icon: <FaLinkedin />,label: 'LinkedIn',href: 'https://www.linkedin.com/in/yashoooog/'},
                                        {icon: <FaEnvelope />,label: 'Mail Me',href: 'mailto:tanishq20verma05@gmail.com'},
                                        {icon: <FaDiscord />,label: 'Discord',href: 'https://discord.com/users/762528855771840532'},
                                        {icon: <FaInstagram />,label: 'Instagram',href: 'https://www.instagram.com/tanishq.__.verma/'},
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
