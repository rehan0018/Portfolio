import React, { useState } from 'react';
import { projects } from '../data/projects';
import { Project } from '../types';
import { ArrowUpRight, Github, Sparkles, Orbit } from 'lucide-react';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
  onHoverProject: (id: string | null) => void;
}

const CATEGORIES = ['All', 'AI & Systems', 'Autonomous Agents', 'Full Stack', 'Web Engineering'] as const;

export function ProjectsSection({ onSelectProject, onHoverProject }: ProjectsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  const featuredProjects = filteredProjects.filter((p) => p.featured);
  const otherProjects = filteredProjects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative py-28 px-4 sm:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-14">
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cosmos-accent mb-3">
          <Orbit className="w-3.5 h-3.5" />
          <span>PROJECTS & SYSTEMS</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-cosmos-text">
          My Constellations
        </h2>
        <p className="mt-3 text-sm sm:text-base text-cosmos-textSecondary max-w-2xl font-light leading-relaxed">
          Autonomous agents, clinical intelligence, and safe learning systems. Inspect any node to examine the underlying engineering challenges, architectures, and verified source code.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all ${
                selectedCategory === cat
                  ? 'bg-cosmos-accent/15 border border-cosmos-accent/50 text-cosmos-text'
                  : 'cosmic-glass text-cosmos-textSecondary hover:text-cosmos-text hover:border-cosmos-accent/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Projects: Observatory Editorial Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {featuredProjects.map((project) => (
          <div
            key={project.id}
            onMouseEnter={() => onHoverProject(project.id)}
            onMouseLeave={() => onHoverProject(null)}
            onClick={() => onSelectProject(project)}
            className="group relative cursor-pointer rounded-2xl cosmic-glass hover:cosmic-glass-elevated border border-cosmos-borderSubtle hover:border-cosmos-accent/40 p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Top metadata & orbital indicator */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span
                    className="w-2.5 h-2.5 rounded-full animate-pulse"
                    style={{ backgroundColor: project.color }}
                  />
                  <span className="font-mono text-[11px] uppercase tracking-wider text-cosmos-textSecondary">
                    {project.category}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-cosmos-textMuted group-hover:text-cosmos-accent transition-colors font-mono text-[11px]">
                  <span>INSPECT</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>

              {/* Title & Tagline */}
              <h3 className="mt-4 text-xl sm:text-2xl font-normal tracking-tight text-cosmos-text group-hover:text-cosmos-accent transition-colors">
                {project.name}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-cosmos-textSecondary font-light leading-relaxed line-clamp-3">
                {project.tagline}
              </p>

              {/* Architecture Snippet */}
              <div className="mt-5 pt-4 border-t border-cosmos-borderSubtle/60">
                <div className="font-mono text-[10px] text-cosmos-textMuted uppercase tracking-wider mb-2">
                  Key Technical Problem
                </div>
                <p className="text-xs text-cosmos-textSecondary/90 font-light line-clamp-2">
                  {project.problem}
                </p>
              </div>
            </div>

            {/* Bottom Stack Badges & GitHub Link */}
            <div className="mt-6 pt-4 border-t border-cosmos-borderSubtle/40 flex items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1.5 overflow-hidden">
                {project.techStack.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-[11px] font-mono rounded bg-cosmos-surfaceElevated border border-cosmos-borderSubtle/60 text-cosmos-textMuted"
                  >
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 4 && (
                  <span className="px-1.5 py-0.5 text-[11px] font-mono text-cosmos-textMuted">
                    +{project.techStack.length - 4}
                  </span>
                )}
              </div>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1.5 rounded-lg text-cosmos-textSecondary hover:text-cosmos-text hover:bg-white/5 transition-colors"
                title="View on GitHub"
                aria-label={`View ${project.name} on GitHub`}
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Nodes (Constellation Grid) */}
      {otherProjects.length > 0 && (
        <div className="mt-8">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-cosmos-textMuted mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ADDITIONAL SYSTEMS & REPOSITORIES</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {otherProjects.map((project) => (
              <div
                key={project.id}
                onMouseEnter={() => onHoverProject(project.id)}
                onMouseLeave={() => onHoverProject(null)}
                onClick={() => onSelectProject(project)}
                className="group cursor-pointer rounded-xl cosmic-glass hover:cosmic-glass-elevated border border-cosmos-borderSubtle hover:border-cosmos-accent/30 p-4 transition-all duration-200 flex items-center justify-between"
              >
                <div className="pr-4">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: project.color }}
                    />
                    <h4 className="text-sm font-medium text-cosmos-text group-hover:text-cosmos-accent transition-colors">
                      {project.name}
                    </h4>
                    <span className="font-mono text-[10px] text-cosmos-textMuted">
                      {project.category}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-cosmos-textSecondary font-light line-clamp-1">
                    {project.tagline}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-1.5 text-cosmos-textMuted hover:text-cosmos-text transition-colors"
                    aria-label={`View ${project.name} repository`}
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <ArrowUpRight className="w-4 h-4 text-cosmos-textMuted group-hover:text-cosmos-accent transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
