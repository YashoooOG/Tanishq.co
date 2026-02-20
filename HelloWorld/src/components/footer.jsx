import { useState, useEffect } from 'react';
import '../styles/components.css';

function LiveClock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  const pad = (n) => String(n).padStart(2, '0');
  return (
    <span className="footer__clock">
      {pad(time.getHours())}:{pad(time.getMinutes())}:{pad(time.getSeconds())}
    </span>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__left">
          <span>TANISHQ.CO</span> · Built with React + Vite · <span>{year}</span>
        </div>
        <div className="footer__center">
          <span className="footer__location">India ·</span>
          <LiveClock />
        </div>
        <div className="footer__right">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            LinkedIn
          </a>
          <a href="mailto:tanishq@example.com" className="footer__link">
            Email
          </a>
        </div>
      </div>
      <div className="footer__marquee">
        <div className="footer__marquee-inner">
          {Array(4).fill(
            'TANISHQ.CO · BACKEND ENGINEER · FULL STACK DEV · OPEN TO WORK · JAVA · NODE.JS · REACT · LINUX · DSA · '
          ).map((t, i) => <span key={i}>{t}</span>)}
        </div>
      </div>
    </footer>
  );
}
