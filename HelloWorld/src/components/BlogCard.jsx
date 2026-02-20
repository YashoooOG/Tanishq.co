import { Link } from 'react-router-dom';
import '../styles/components.css';

export default function BlogCard({ post }) {
  const { slug, logId, title, date, readTime, tags, excerpt } = post;

  return (
    <Link to={`/blog/${slug}`} className="blog-card">
      <div className="blog-card__log-id">{logId}</div>
      <div className="blog-card__title">{title}</div>
      <div className="blog-card__meta">
        <span>{date}</span>
        <span>·</span>
        <span>{readTime}</span>
      </div>
      <p className="blog-card__excerpt">{excerpt}</p>
      <div className="blog-card__tags">
        {tags.map((tag) => (
          <span key={tag} className="tech-tag">{tag}</span>
        ))}
      </div>
      <div className="blog-card__cta">Read More →</div>
    </Link>
  );
}
