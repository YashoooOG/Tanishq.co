import { useEffect, useRef, useState } from 'react';

const PHRASES = [
  'Building Scalable Systems',
//   'Designing Clean Architectures',
  'Hard Stuck Gold in Valorant',
  'Solving Complex Problems',
  `const life = 'Hello, World!'`,
];

export default function TypingEffect() {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const currentPhrase = PHRASES[phraseIndex];

    if (!deleting && charIndex <= currentPhrase.length) {
      timeoutRef.current = setTimeout(() => {
        setText(currentPhrase.slice(0, charIndex));
        setCharIndex((c) => c + 1);
      }, 60);
    } else if (!deleting && charIndex > currentPhrase.length) {
      timeoutRef.current = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIndex >= 0) {
      timeoutRef.current = setTimeout(() => {
        setText(currentPhrase.slice(0, charIndex));
        setCharIndex((c) => c - 1);
      }, 35);
    } else if (deleting && charIndex < 0) {
      setDeleting(false);
      setPhraseIndex((i) => (i + 1) % PHRASES.length);
      setCharIndex(0);
    }

    return () => clearTimeout(timeoutRef.current);
  }, [charIndex, deleting, phraseIndex]);

  return (
    <span>
      {text}
      <span
        style={{
          display: 'inline-block',
          width: '2px',
          height: '1em',
          background: 'var(--accent)',
          marginLeft: '2px',
          verticalAlign: 'middle',
          animation: 'blink 1s step-end infinite',
        }}
      />
    </span>
  );
}
