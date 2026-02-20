import '../styles/components.css';

export default function ProjectCard({ project }) {
  const { id, title, description, tech, liveLink, codeLink, status } = project;

  const statusLabel = {
    live: 'LIVE',
    wip: 'IN PROGRESS',
    archived: 'ARCHIVED',
  };

  return (
    <div className="project-card">
      <div className="project-card__header">
        <div>
          <div className="project-card__id">{id}</div>
          <div className="project-card__title">{title}</div>
        </div>
        <span className={`project-card__status project-card__status--${status}`}>
          {statusLabel[status] || status}
        </span>
      </div>

      <p className="project-card__desc">{description}</p>

      <div className="project-card__tags">
        {tech.map((t) => (
          <span key={t} className="tech-tag">{t}</span>
        ))}
      </div>

      <div className="project-card__actions">
        {liveLink && (
          <a href={liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            View Project ↗
          </a>
        )}
        {codeLink && (
          <a href={codeLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            View Code
          </a>
        )}
      </div>
    </div>
  );
}
