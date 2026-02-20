import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Footer from '../components/Footer';
import { blogPosts } from '../data/blogData';
import '../styles/blog.css';
import '../styles/components.css';

function renderBlock(block, idx) {
  switch (block.type) {
    case 'heading':
      return <h2 key={idx}>{block.text}</h2>;
    case 'paragraph':
      return <p key={idx}>{block.text}</p>;
    case 'quote':
      return <blockquote key={idx}>{block.text}</blockquote>;
    case 'code':
      return (
        <pre key={idx}>
          <code>{block.text}</code>
        </pre>
      );
    default:
      return null;
  }
}

export default function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [slug]);

  if (!post) {
    return (
      <div className="page blog-post-page">
        <div className="blog-post-container">
          <div
            style={{
              textAlign: 'center',
              padding: '80px 0',
              color: 'var(--text-secondary)',
            }}
          >
            <div style={{ fontSize: '3rem', marginBottom: '16px' }}>404</div>
            <p style={{ marginBottom: '24px', fontSize: '0.9rem' }}>Post not found.</p>
            <Link to="/blog" className="btn btn-ghost">
              ← Back to Blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  return (
    <div className="page blog-post-page">
      <div className="blog-post-container">
        {/* Back */}
        <Link to="/blog" className="blog-post__back">
          ← Developer Logs
        </Link>

        {/* Meta */}
        <div className="blog-post__meta">
          <span className="blog-post__log-id">{post.logId}</span>
          <span className="blog-post__date">{post.date}</span>
          <span className="blog-post__date">· {post.readTime}</span>
        </div>

        {/* Tags */}
        <div className="blog-post__tags" style={{ marginBottom: '20px' }}>
          {post.tags.map((tag) => (
            <span key={tag} className="tech-tag">{tag}</span>
          ))}
        </div>

        {/* Title + Excerpt */}
        <h1 className="blog-post__title">{post.title}</h1>
        <p className="blog-post__excerpt">{post.excerpt}</p>

        {/* Content */}
        <article className="blog-post__content">
          {post.content.map((block, i) => renderBlock(block, i))}
        </article>

        {/* Prev / Next */}
        <nav className="blog-post__nav">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: '16px',
              flexWrap: 'wrap',
            }}
          >
            {prevPost ? (
              <Link
                to={`/blog/${prevPost.slug}`}
                className="btn btn-secondary"
                style={{ fontSize: '0.75rem' }}
              >
                ← {prevPost.logId}: {prevPost.title}
              </Link>
            ) : (
              <div />
            )}
            {nextPost ? (
              <Link
                to={`/blog/${nextPost.slug}`}
                className="btn btn-secondary"
                style={{ fontSize: '0.75rem' }}
              >
                {nextPost.logId}: {nextPost.title} →
              </Link>
            ) : (
              <div />
            )}
          </div>
        </nav>
      </div>
      <Footer />
    </div>
  );
}
