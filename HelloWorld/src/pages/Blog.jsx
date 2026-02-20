import { useState } from 'react';
import BlogCard from '../components/BlogCard';
import Footer from '../components/Footer';
import SectionWrapper from '../components/SectionWrapper';
import { blogPosts } from '../data/blogData';
import '../styles/blog.css';
import '../styles/components.css';

const ALL_TAGS = ['All', ...Array.from(new Set(blogPosts.flatMap((p) => p.tags)))];

export default function Blog() {
  const [activeTag, setActiveTag] = useState('All');

  const filtered =
    activeTag === 'All'
      ? blogPosts
      : blogPosts.filter((p) => p.tags.includes(activeTag));

  return (
    <div className="page blog-page">
      <div className="container">
        <SectionWrapper>
          <div className="blog-page__header">
            <div className="section-label">Developer Logs</div>
            <h1 className="blog-page__title">DEVELOPER.LOGS</h1>
            <p className="blog-page__subtitle">
              Notes on backend engineering, architecture, and the craft of writing clean code.
            </p>
          </div>
        </SectionWrapper>

        <SectionWrapper>
          <div className="blog-filters">
            {ALL_TAGS.map((tag) => (
              <button
                key={tag}
                className={`blog-filter-btn${activeTag === tag ? ' active' : ''}`}
                onClick={() => setActiveTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="blog-grid">
            {filtered.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
              No posts found for this filter.
            </div>
          )}
        </SectionWrapper>
      </div>
      <Footer />
    </div>
  );
}
