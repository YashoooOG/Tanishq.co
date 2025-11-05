import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GraduationCap, Code2, Briefcase } from 'lucide-react';

const Home = () => {
  const skillCategories = {
    languages: ['TypeScript'],
    frameworks: ['React', 'Next.js', 'Node.js', 'Express', 'Tailwind CSS'],
    tools: ['Git', 'Figma', 'MongoDB', 'PostgreSQL', 'REST APIs', 'GraphQL'],
  };

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'University Name',
      year: '2018 - 2022',
      icon: GraduationCap
    }
  ];

  const experience = [
    {
      role: 'Senior Frontend Developer',
      company: 'Tech Corp',
      period: '2022 - Present',
      description: 'Leading frontend development with React and TypeScript'
    },
    {
      role: 'Full Stack Developer',
      company: 'Startup XYZ',
      period: '2020 - 2022',
      description: 'Built and maintained full-stack web applications'
    }
  ];

  const freelanceServices = [
    { title: 'Web App Development', desc: 'React/Next.js frontends and full‑stack features.' },
    { title: 'UI Engineering', desc: 'Responsive, accessible, pixel‑perfect interfaces.' },
    { title: 'API Integration', desc: 'REST/GraphQL integrations and data fetching.' },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center px-6">
      {/* Avatar + Hero */}
      <div className="max-w-4xl mx-auto text-center">
        {/* Avatar */}
        <div className="mb-8 flex justify-center">
          <div className="w-32 h-32 bg-gradient-to-br from-soft-pink to-pastel-blue dark:from-mint to-pastel-blue rounded-full retro-border-thick animate-float relative">
            <div className="absolute inset-2 bg-cream dark:bg-warm-black rounded-full flex items-center justify-center">
              <span className="text-4xl">👨‍💻</span>
            </div>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="font-mono text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight whitespace-nowrap text-retro-brown dark:text-mint mb-6 retro-shadow animate-fade-in">
          Hello, I'm <span className="text-soft-pink dark:text-pastel-blue retro-glow">Tanishq Verma</span>
        </h1>

        {/* Tagline */}
        <p className="font-mono text-xl md:text-2xl text-retro-brown/70 dark:text-mint/70 mb-8 max-w-2xl mx-auto leading-relaxed">
          <Sparkles className="inline-block mr-2 text-soft-pink dark:text-pastel-blue" size={24} />
          Full Stack Developer · Open Source Contributor · Problem Solver
        </p>
        {/* Online Alias */}
        <p className="font-mono text-base md:text-lg text-retro-brown/70 dark:text-mint/70 mb-8">
          "I go by the name of <span className="text-soft-pink dark:text-pastel-blue">YashoooOG</span> online"
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/projects"
            className="group px-8 py-4 bg-soft-pink dark:bg-mint text-cream dark:text-warm-black font-mono font-bold rounded-lg hover:scale-105 transition-all duration-300 retro-border-thick flex items-center gap-2"
          >
            View My Work
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
          <Link
            to="/contact"
            className="px-8 py-4 bg-cream dark:bg-warm-black text-retro-brown dark:text-mint font-mono font-bold rounded-lg hover:scale-105 transition-all duration-300 retro-border-thick"
          >
            Get In Touch
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-20 animate-bounce">
          <div className="w-6 h-10 border-2 border-retro-brown dark:border-mint rounded-full mx-auto relative">
            <div className="w-1.5 h-1.5 bg-soft-pink dark:bg-pastel-blue rounded-full absolute top-2 left-1/2 -translate-x-1/2 animate-scroll"></div>
          </div>
        </div>
      </div>

      {/* About section */}
      <div className="max-w-6xl mx-auto px-6 py-20">

        {/* Page Title */}
        <div className="text-center mb-16">
          {/* <h1 className="font-mono text-5xl md:text-6xl font-bold text-retro-brown dark:text-mint mb-4 retro-shadow">
          About Me
        </h1> */}
          <p className="font-mono text-xl text-retro-brown/70 dark:text-mint/70 max-w-2xl mx-auto">
            Get to know more about my journey, skills, and experience
          </p>
        </div>

        {/* Bio Section */}
        <div className="mb-16 p-8 bg-soft-pink/10 dark:bg-mint/10 rounded-xl retro-border">
          <p className="font-mono text-lg text-retro-brown dark:text-mint leading-relaxed text-justify">
            I'm a passionate developer who loves creating beautiful, functional web experiences.
            With a retro aesthetic twist and modern functionality, I bring ideas to life through code.
            When I'm not coding, you'll find me exploring new technologies, contributing to open source,
            or enjoying a good cup of coffee while reading tech blogs.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Code2 className="text-soft-pink dark:text-pastel-blue" size={28} />
            <h2 className="font-mono text-3xl font-bold text-retro-brown dark:text-mint retro-shadow">
              Skills
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Languages */}
            <div className="p-6 bg-cream dark:bg-warm-black rounded-lg retro-border">
              <h3 className="font-mono text-xl font-bold text-retro-brown dark:text-mint mb-4">
                Languages
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {skillCategories.languages.map((skill, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-soft-pink/10 dark:bg-mint/10 rounded-md text-center"
                  >
                    <span className="font-mono text-retro-brown dark:text-mint font-semibold">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Frameworks */}
            <div className="p-6 bg-cream dark:bg-warm-black rounded-lg retro-border">
              <h3 className="font-mono text-xl font-bold text-retro-brown dark:text-mint mb-4">
                Frameworks
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {skillCategories.frameworks.map((skill, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-soft-pink/10 dark:bg-mint/10 rounded-md text-center"
                  >
                    <span className="font-mono text-retro-brown dark:text-mint font-semibold">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="p-6 bg-cream dark:bg-warm-black rounded-lg retro-border">
              <h3 className="font-mono text-xl font-bold text-retro-brown dark:text-mint mb-4">
                Tools
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {skillCategories.tools.map((skill, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-soft-pink/10 dark:bg-mint/10 rounded-md text-center"
                  >
                    <span className="font-mono text-retro-brown dark:text-mint font-semibold">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>



        {/* Education */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="text-soft-pink dark:text-pastel-blue" size={28} />
            <h2 className="font-mono text-3xl font-bold text-retro-brown dark:text-mint retro-shadow">
              Education
            </h2>
          </div>
          {education.map((edu, index) => (
            <div
              key={index}
              className="p-6 bg-soft-pink/10 dark:bg-mint/10 rounded-lg retro-border"
            >
              <h3 className="font-mono text-xl font-bold text-retro-brown dark:text-mint mb-2">
                {edu.degree}
              </h3>
              <p className="font-mono text-retro-brown/70 dark:text-mint/70 mb-1">
                {edu.school}
              </p>
              <p className="font-mono text-sm text-retro-brown/60 dark:text-mint/60">
                {edu.year}
              </p>
            </div>
          ))}
        </div>

        {/* Experience */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="text-soft-pink dark:text-pastel-blue" size={28} />
            <h2 className="font-mono text-3xl font-bold text-retro-brown dark:text-mint retro-shadow">
              Experience
            </h2>
          </div>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="p-6 bg-cream dark:bg-warm-black rounded-lg retro-border"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="font-mono text-xl font-bold text-retro-brown dark:text-mint">
                    {exp.role}
                  </h3>
                  <span className="font-mono text-sm text-retro-brown/60 dark:text-mint/60">
                    {exp.period}
                  </span>
                </div>
                <p className="font-mono text-soft-pink dark:text-pastel-blue mb-2">
                  {exp.company}
                </p>
                <p className="font-mono text-retro-brown/70 dark:text-mint/70">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Freelance (replaces Languages) */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Briefcase className="text-soft-pink dark:text-pastel-blue" size={28} />
            <h2 className="font-mono text-3xl font-bold text-retro-brown dark:text-mint retro-shadow">
              Freelance
            </h2>
          </div>
          <p className="font-mono text-retro-brown/70 dark:text-mint/70 mb-6">
            Available for freelance and contract work. I can help with:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {freelanceServices.map((svc, index) => (
              <div
                key={index}
                className="p-6 bg-soft-pink/10 dark:bg-mint/10 rounded-lg retro-border"
              >
                <h3 className="font-mono text-xl font-bold text-retro-brown dark:text-mint mb-2">
                  {svc.title}
                </h3>
                <p className="font-mono text-retro-brown/70 dark:text-mint/70">
                  {svc.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/contact"
              className="inline-block px-6 py-3 bg-soft-pink dark:bg-mint text-cream dark:text-warm-black font-mono font-bold rounded-lg retro-border-thick"
            >
              Hire Me
            </Link>
          </div>
        </div>
      </div>
    </div>);
};

export default Home;
