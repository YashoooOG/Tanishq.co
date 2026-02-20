import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import SectionWrapper from '../components/SectionWrapper';
import '../styles/resume.css';
import '../styles/components.css';

const SKILLS = [
  { name: 'Java', level: 85 },
  { name: 'JavaScript / React', level: 78 },
  { name: 'MySQL', level: 80 },
  { name: 'C', level: 75 },
  { name: 'Node.js / Express', level: 65 },
  { name: 'Linux / Bash', level: 72 },
  { name: 'Git', level: 82 },
  { name: 'REST API Design', level: 80 },
  { name: 'Data Structures & Algorithms', level: 78 },
];

const EDUCATION = [
  {
    date: '2023 — Present',
    title: 'B.Tech in Computer Science',
    org: 'University Name, India',
    desc: 'Core coursework: Data Structures, Algorithms, Operating Systems, Database Management Systems, Computer Networks, Object-Oriented Programming.',
  },
  {
    date: '2021 — 2023',
    title: 'Higher Secondary (PCM + CS)',
    org: 'School Name, India',
    desc: 'Aggregate: 91.4% · Computer Science elective with Java and SQL.',
  },
];

const EXPERIENCE = [
  {
    date: 'Jun 2024 — Aug 2024',
    title: 'Backend Developer Intern',
    org: 'Company Name',
    desc: 'Built and maintained REST APIs using Java Spring Boot. Optimized MySQL queries reducing average response time by 40%. Wrote comprehensive unit tests with JUnit.',
  },
  {
    date: 'Jan 2024 — Mar 2024',
    title: 'Open Source Contributor',
    org: 'Self-directed',
    desc: 'Contributed bug fixes and documentation improvements to 3 open-source Java projects. Gained experience with pull request workflows and code review processes.',
  },
];

const CERTIFICATIONS = [
  'Java Programming — Oracle Certified Associate',
  'MySQL Database Administration — Udemy',
  'The Complete Node.js Developer Course — Udemy',
  'Linux Command Line Basics — Coursera',
  'Data Structures and Algorithms — Self-taught via LeetCode (200+ problems)',
];

export default function Resume() {
  const handleDownload = () => {
    // Replace '/resume.pdf' with your actual CV path inside /public
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Yash_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="page resume-page">
      <div className="container">
        <SectionWrapper>
          <div className="resume-page__header">
            <div className="section-label">Resume</div>
            <h1 className="resume-page__title">RESUME.DOC LOADED</h1>
            <p className="resume-page__subtitle">
              Full Stack Developer · Backend Engineering Enthusiast · Available for Internships
            </p>
            <div className="resume-page__actions">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                View Resume ↗
              </a>
              <button className="btn btn-secondary" onClick={handleDownload}>
                Download PDF
              </button>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper>
          <div className="resume-layout">
            {/* ── Left Column ── */}
            <div>
              {/* Skills */}
              <div className="resume-block">
                <div className="resume-block__title">Skills</div>
                <div className="skills-list">
                  {SKILLS.map(({ name, level }) => (
                    <div key={name} className="skill-row">
                      <div className="skill-row__header">
                        <span>{name}</span>
                        <span>{level}%</span>
                      </div>
                      <div className="skill-row__track">
                        <div
                          className="skill-row__fill"
                          style={{ width: `${level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="resume-block">
                <div className="resume-block__title">Certifications</div>
                <div className="cert-list">
                  {CERTIFICATIONS.map((c) => (
                    <div key={c} className="cert-item">{c}</div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Right Column ── */}
            <div>
              {/* Education */}
              <div className="resume-block">
                <div className="resume-block__title">Education</div>
                <div className="timeline">
                  {EDUCATION.map((entry) => (
                    <div key={entry.title} className="timeline-entry">
                      <div className="timeline-entry__date">{entry.date}</div>
                      <div className="timeline-entry__title">{entry.title}</div>
                      <div className="timeline-entry__org">{entry.org}</div>
                      <div className="timeline-entry__desc">{entry.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div className="resume-block">
                <div className="resume-block__title">Experience</div>
                <div className="timeline">
                  {EXPERIENCE.map((entry) => (
                    <div key={entry.title} className="timeline-entry">
                      <div className="timeline-entry__date">{entry.date}</div>
                      <div className="timeline-entry__title">{entry.title}</div>
                      <div className="timeline-entry__org">{entry.org}</div>
                      <div className="timeline-entry__desc">{entry.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Projects highlight */}
              <div className="resume-block">
                <div className="resume-block__title">Key Projects</div>
                <div className="timeline">
                  {[
                    {
                      date: '2024',
                      title: 'Travel India',
                      org: 'React · Node.js · MySQL',
                      desc: 'Full-stack travel discovery platform with user auth, search, and dynamic content.',
                    },
                    {
                      date: '2024',
                      title: 'API Builder Toolkit',
                      org: 'Java · Spring Boot · JWT',
                      desc: 'Scaffolding tool for production-grade REST APIs with authentication and validation.',
                    },
                    {
                      date: '2024',
                      title: 'DSA Tracker',
                      org: 'React · LocalStorage',
                      desc: 'Personal algorithm practice tracker with topic/difficulty organization.',
                    },
                  ].map((entry) => (
                    <div key={entry.title} className="timeline-entry">
                      <div className="timeline-entry__date">{entry.date}</div>
                      <div className="timeline-entry__title">{entry.title}</div>
                      <div className="timeline-entry__org">{entry.org}</div>
                      <div className="timeline-entry__desc">{entry.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* ── PDF Embed ── */}
        <SectionWrapper>
          <div className="resume-pdf-section">
            <div className="resume-pdf-section__label">PDF Preview</div>
            <div className="resume-pdf-placeholder">
              <span>📄</span>
              <span>Place your resume PDF at /public/resume.pdf to enable preview.</span>
              <a href="/resume.pdf" target="_blank" className="btn btn-ghost" style={{ marginTop: '8px' }}>
                Open PDF ↗
              </a>
            </div>
          </div>
        </SectionWrapper>
      </div>
      <Footer />
    </div>
  );
}
