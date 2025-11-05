import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Getting Started with React and TypeScript',
      excerpt: 'Learn how to set up a React project with TypeScript and best practices for type safety in your applications.',
      date: '2024-01-15',
      readTime: '5 min',
      category: 'React',
      emoji: '⚛️'
    },
    {
      id: 2,
      title: 'Building Retro UI with Tailwind CSS',
      excerpt: 'A comprehensive guide to creating vintage-inspired designs using modern Tailwind CSS utilities.',
      date: '2024-01-10',
      readTime: '7 min',
      category: 'CSS',
      emoji: '🎨'
    },
    {
      id: 3,
      title: 'Understanding React Hooks in Depth',
      excerpt: 'Deep dive into React Hooks, their use cases, and how to create custom hooks for your projects.',
      date: '2024-01-05',
      readTime: '10 min',
      category: 'React',
      emoji: '🪝'
    },
    {
      id: 4,
      title: 'RESTful API Design Best Practices',
      excerpt: 'Learn the principles of designing clean, scalable RESTful APIs with Node.js and Express.',
      date: '2023-12-28',
      readTime: '8 min',
      category: 'Backend',
      emoji: '🔌'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      {/* Page Title */}
      <div className="text-center mb-16">
        <h1 className="font-mono text-5xl md:text-6xl font-bold text-retro-brown dark:text-mint mb-4 retro-shadow inline-flex items-center gap-3">
          <BookOpen className="text-soft-pink dark:text-pastel-blue" />
          Blog
        </h1>
        <p className="font-mono text-xl text-retro-brown/70 dark:text-mint/70 max-w-2xl mx-auto">
          Thoughts, tutorials, and insights about web development
        </p>
      </div>

      {/* Blog Posts */}
      <div className="grid md:grid-cols-2 gap-8">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="group bg-cream dark:bg-warm-black rounded-xl retro-border overflow-hidden hover:scale-102 transition-all duration-300 hover:shadow-retro cursor-pointer"
          >
            {/* Post Header */}
            <div className="p-6 bg-soft-pink/10 dark:bg-mint/10 border-b-2 border-retro-brown/20 dark:border-mint/20">
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 text-xs font-mono font-bold bg-soft-pink dark:bg-mint text-cream dark:text-warm-black rounded-full">
                  {post.category}
                </span>
                <div className="text-4xl">{post.emoji}</div>
              </div>
              <div className="flex items-center gap-4 text-xs font-mono text-retro-brown/60 dark:text-mint/60">
                <span className="flex items-center gap-1">
                  <Calendar size={14} />
                  {new Date(post.date).toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: 'numeric', 
                    year: 'numeric' 
                  })}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={14} />
                  {post.readTime}
                </span>
              </div>
            </div>

            {/* Post Body */}
            <div className="p-6">
              <h2 className="font-mono text-2xl font-bold text-retro-brown dark:text-mint mb-3 group-hover:text-soft-pink dark:group-hover:text-pastel-blue transition-colors retro-shadow">
                {post.title}
              </h2>
              <p className="font-mono text-sm text-retro-brown/70 dark:text-mint/70 mb-4 leading-relaxed">
                {post.excerpt}
              </p>
              <button className="flex items-center gap-2 font-mono text-sm font-semibold text-soft-pink dark:text-pastel-blue hover:gap-3 transition-all">
                Read More
                <ArrowRight size={16} />
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Coming Soon Message */}
      <div className="mt-16 text-center p-8 bg-soft-pink/10 dark:bg-mint/10 rounded-xl retro-border">
        <p className="font-mono text-lg text-retro-brown dark:text-mint">
          More articles coming soon! 📚
        </p>
      </div>
    </div>
  );
};

export default Blog;
