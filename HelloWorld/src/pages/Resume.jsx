import Footer from '../components/footer';
import SectionWrapper from '../components/SectionWrapper';
import '../styles/resume.css';
import '../styles/components.css';

const DRIVE_LINK = 'https://drive.google.com/file/d/14EkAZFRFnPsg-DYd5z8pbQfsoLf_2r4G/view?usp=sharing';

function getDriveDownloadLink(shareLink) {
  const match = shareLink.match(/\/d\/([a-zA-Z0-9_-]+)/);
  if (!match) return shareLink;
  return `https://drive.google.com/uc?export=download&id=${match[1]}`;
}

export default function Resume() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = getDriveDownloadLink(DRIVE_LINK);
    link.download = 'Tanishq_Resume.pdf';
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
                href={DRIVE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                View on Drive ↗
              </a>
              <button className="btn btn-secondary" onClick={handleDownload}>
                Download PDF ↓
              </button>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper>
          <div className="resume-pdf-section">
            <div className="resume-pdf-section__label">PDF Preview</div>
            {DRIVE_LINK === 'PASTE_YOUR_GOOGLE_DRIVE_LINK_HERE' ? (
              <div className="resume-pdf-placeholder">
                <span>📄</span>
                <span>Add your Google Drive link to enable preview.</span>
              </div>
            ) : (
              <iframe
                className="resume-pdf-embed"
                src={DRIVE_LINK.replace('/view', '/preview')}
                title="Resume Preview"
                allow="autoplay"
              />
            )}
          </div>
        </SectionWrapper>
      </div>
      <Footer />
    </div>
  );
}
