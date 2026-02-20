import { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import '../styles/command-palette.css';

const COMMANDS = [
  { id: 'home',     label: 'Go to Home',         icon: '~',  action: 'nav',    target: '/' },
  { id: 'resume',   label: 'View Resume',         icon: '📄', action: 'nav',    target: '/resume' },
  { id: 'blog',     label: 'Read Blog',           icon: '✏',  action: 'nav',    target: '/blog' },
  { id: 'about',    label: 'Scroll to About',     icon: '01', action: 'scroll', target: '#about' },
  { id: 'stack',    label: 'Scroll to Stack',     icon: '02', action: 'scroll', target: '#stack' },
  { id: 'projects', label: 'Scroll to Projects',  icon: '03', action: 'scroll', target: '#projects' },
  { id: 'contact',  label: 'Scroll to Contact',   icon: '04', action: 'scroll', target: '#contact' },
  { id: 'theme',    label: 'Toggle Dark / Light', icon: '◑',  action: 'theme' },
  { id: 'github',   label: 'Open GitHub',         icon: '⑂',  action: 'link',   target: 'https://github.com' },
  { id: 'linkedin', label: 'Open LinkedIn',       icon: 'in', action: 'link',   target: 'https://linkedin.com' },
  { id: 'email',    label: 'Send Email',          icon: '@',  action: 'link',   target: 'mailto:tanishq@example.com' },
];

export default function CommandPalette({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(0);
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const { toggle } = useTheme();

  const filtered = COMMANDS.filter((c) =>
    c.label.toLowerCase().includes(query.toLowerCase())
  );

  // reset on open
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelected(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  const run = useCallback(
    (cmd) => {
      onClose();
      if (cmd.action === 'nav') {
        navigate(cmd.target);
      } else if (cmd.action === 'scroll') {
        // navigate home first if not there, then scroll
        if (window.location.pathname !== '/') {
          navigate('/');
          setTimeout(() => {
            document.querySelector(cmd.target)?.scrollIntoView({ behavior: 'smooth' });
          }, 400);
        } else {
          document.querySelector(cmd.target)?.scrollIntoView({ behavior: 'smooth' });
        }
      } else if (cmd.action === 'theme') {
        toggle();
      } else if (cmd.action === 'link') {
        window.open(cmd.target, '_blank');
      }
    },
    [navigate, onClose, toggle]
  );

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e) => {
      if (e.key === 'Escape') { onClose(); return; }
      if (e.key === 'ArrowDown') { e.preventDefault(); setSelected((s) => Math.min(s + 1, filtered.length - 1)); }
      if (e.key === 'ArrowUp')   { e.preventDefault(); setSelected((s) => Math.max(s - 1, 0)); }
      if (e.key === 'Enter' && filtered[selected]) run(filtered[selected]);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, filtered, selected, run, onClose]);

  // Reset selected when results change
  useEffect(() => { setSelected(0); }, [query]);

  if (!isOpen) return null;

  return (
    <div className="cp-backdrop" onClick={onClose}>
      <div className="cp-modal" onClick={(e) => e.stopPropagation()}>
        <div className="cp-header">
          <span className="cp-header-prompt">⌘</span>
          <input
            ref={inputRef}
            className="cp-input"
            placeholder="Type a command or search…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            spellCheck={false}
          />
          <span className="cp-esc" onClick={onClose}>ESC</span>
        </div>
        <ul className="cp-list">
          {filtered.length === 0 && (
            <li className="cp-empty">No commands found for "{query}"</li>
          )}
          {filtered.map((cmd, i) => (
            <li
              key={cmd.id}
              className={`cp-item${i === selected ? ' cp-item--active' : ''}`}
              onClick={() => run(cmd)}
              onMouseEnter={() => setSelected(i)}
            >
              <span className="cp-item-icon">{cmd.icon}</span>
              <span className="cp-item-label">{cmd.label}</span>
              {i === selected && <span className="cp-item-enter">↵</span>}
            </li>
          ))}
        </ul>
        <div className="cp-footer">
          <span><kbd>↑↓</kbd> navigate</span>
          <span><kbd>↵</kbd> run</span>
          <span><kbd>ESC</kbd> close</span>
        </div>
      </div>
    </div>
  );
}
