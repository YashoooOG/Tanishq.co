import { useEffect } from 'react';
import '../styles/konami.css';

const ASCII = `
 ████████╗ █████╗ ███╗  ██╗██╗███████╗██╗  ██╗ ██████╗              ██████╗ ██████╗ 
    ██╔══╝██╔══██╗████╗ ██║██║██╔════╝██║  ██║██╔═══██╗            ██╔════╝██╔═══██╗
    ██║   ███████║██╔██╗██║██║███████╗███████║██║   ██║            ██║     ██║   ██║
    ██║   ██╔══██║██║╚████║██║╚════██║██╔══██║██║▄▄ ██║            ██║     ██║   ██║
    ██║   ██║  ██║██║ ╚███║██║███████║██║  ██║╚██████╔╝            ╚██████╗╚██████╔╝
    ╚═╝   ╚═╝  ╚═╝╚═╝  ╚══╝╚═╝╚══════╝╚═╝  ╚═╝ ╚══▀▀═╝              ╚═════╝ ╚═════╝ 
`;

export default function KonamiOverlay({ onClose }) {
  useEffect(() => {
    const t = setTimeout(onClose, 4200);
    const esc = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', esc);
    return () => { clearTimeout(t); window.removeEventListener('keydown', esc); };
  }, [onClose]);

  return (
    <div className="konami-overlay" onClick={onClose}>
      <div className="konami-box">
        <pre className="konami-ascii">{ASCII}</pre>
        <div className="konami-msg">
          <span className="konami-prompt">$</span> you found a secret.
        </div>
        <div className="konami-sub">Konami code activated. Nice moves, player one.</div>
        <div className="konami-hint">[ press ESC or click to dismiss ]</div>
        <div className="konami-scan" />
      </div>
    </div>
  );
}
