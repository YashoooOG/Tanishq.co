import { ExternalLink, Github, Sparkles } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration and admin dashboard',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: '#',
      live: '#',
      emoji: '🛒'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task manager with real-time updates and team features',
      tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
      github: '#',
      live: '#',
      emoji: '✅'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Beautiful weather app with location-based forecasts and interactive maps',
      tags: ['React', 'Tailwind', 'API'],
      github: '#',
      live: '#',
      emoji: '🌤️'
    },
    {
      id: 4,
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard with charts and real-time data visualization',
      tags: ['React', 'Chart.js', 'Firebase'],
      github: '#',
      live: '#',
      emoji: '📊'
    },
    {
      id: 5,
      title: 'Blog Platform',
      description: 'Modern blogging platform with markdown support and SEO optimization',
      tags: ['Next.js', 'MDX', 'Vercel'],
      github: '#',
      live: '#',
      emoji: '📝'
    },
    {
      id: 6,
      title: 'Portfolio Generator',
      description: 'Create stunning portfolios with drag-and-drop interface',
      tags: ['React', 'Tailwind', 'Framer Motion'],
      github: '#',
      live: '#',
      emoji: '🎨'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      {/* Page Title */}
      <div className="text-center mb-16">
        <h1 className="font-mono text-5xl md:text-6xl font-bold text-retro-brown dark:text-mint mb-4 retro-shadow inline-flex items-center gap-3">
          <Sparkles className="text-soft-pink dark:text-pastel-blue" />
          Projects
        </h1>
        <p className="font-mono text-xl text-retro-brown/70 dark:text-mint/70 max-w-2xl mx-auto">
          A showcase of my recent work and side projects
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group bg-cream dark:bg-warm-black rounded-xl retro-border overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-retro"
          >
            {/* Project Header */}
            <div className="p-6 bg-soft-pink/10 dark:bg-mint/10 border-b-2 border-retro-brown/20 dark:border-mint/20">
              <div className="text-5xl mb-4">{project.emoji}</div>
              <h3 className="font-mono text-xl font-bold text-retro-brown dark:text-mint mb-2 retro-shadow">
                {project.title}
              </h3>
            </div>

            {/* Project Body */}
            <div className="p-6">
              <p className="font-mono text-sm text-retro-brown/70 dark:text-mint/70 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs font-mono font-semibold bg-soft-pink/20 dark:bg-mint/20 text-retro-brown dark:text-mint rounded-full retro-border-thin"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <a
                  href={project.github}
                  className="flex items-center gap-2 text-sm font-mono text-retro-brown dark:text-mint hover:text-soft-pink dark:hover:text-pastel-blue transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={18} />
                  Code
                </a>
                <a
                  href={project.live}
                  className="flex items-center gap-2 text-sm font-mono text-retro-brown dark:text-mint hover:text-soft-pink dark:hover:text-pastel-blue transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={18} />
                  Live
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
