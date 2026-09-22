import React, { useEffect } from 'react';
import { X, Github, ExternalLink, ShieldCheck, Layers, Cpu, Terminal } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl cosmic-glass-elevated border border-cosmos-borderSubtle p-6 sm:p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-cosmos-textSecondary hover:text-cosmos-text hover:bg-white/5 transition-colors"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="border-b border-cosmos-borderSubtle pb-5">
          <div className="flex items-center gap-3">
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: project.color }}
            />
            <span className="font-mono text-xs tracking-widest uppercase text-cosmos-accent">
              {project.category}
            </span>
          </div>
          <h2
            id="modal-project-title"
            className="mt-2 text-2xl sm:text-3xl font-light tracking-tight text-cosmos-text"
          >
            {project.name}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-cosmos-textSecondary font-light leading-relaxed">
            {project.tagline}
          </p>
        </div>

        {/* Verified Stats / Highlights if present */}
        {project.stats && project.stats.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-5">
            {project.stats.map((stat, i) => (
              <div
                key={i}
                className="p-3 rounded-xl bg-cosmos-surface/80 border border-cosmos-borderSubtle/60"
              >
                <div className="font-mono text-[10px] text-cosmos-textMuted uppercase tracking-wider">
                  {stat.label}
                </div>
                <div className="mt-1 text-xs sm:text-sm text-cosmos-text font-medium">
                  {stat.value}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Engineering Problem */}
        <div className="mt-6">
          <div className="flex items-center gap-2 font-mono text-xs text-cosmos-accent uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-cosmos-accent" />
            <span>The Engineering Problem</span>
          </div>
          <p className="mt-2 text-xs sm:text-sm text-cosmos-textSecondary leading-relaxed font-light">
            {project.problem}
          </p>
        </div>

        {/* What I Built */}
        <div className="mt-6">
          <div className="flex items-center gap-2 font-mono text-xs text-cosmos-gold uppercase tracking-wider">
            <Cpu className="w-4 h-4 text-cosmos-gold" />
            <span>What I Built</span>
          </div>
          <p className="mt-2 text-xs sm:text-sm text-cosmos-textSecondary leading-relaxed font-light">
            {project.whatIBuilt}
          </p>
        </div>

        {/* Architecture & Technical Details */}
        <div className="mt-6">
          <div className="flex items-center gap-2 font-mono text-xs text-cosmos-slate uppercase tracking-wider">
            <Layers className="w-4 h-4 text-cosmos-slate" />
            <span>Architecture & Technical Details</span>
          </div>
          <ul className="mt-3 space-y-2">
            {project.architecture.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-xs sm:text-sm text-cosmos-textSecondary font-light"
              >
                <span className="font-mono text-cosmos-accent text-xs mt-0.5">›</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="mt-6">
          <div className="flex items-center gap-2 font-mono text-xs text-cosmos-textMuted uppercase tracking-wider mb-2">
            <Terminal className="w-3.5 h-3.5" />
            <span>Technologies Verified In Codebase</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-mono rounded-md bg-cosmos-surfaceElevated border border-cosmos-borderSubtle text-cosmos-textSecondary"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 pt-5 border-t border-cosmos-borderSubtle flex flex-wrap items-center justify-between gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cosmos-surfaceElevated hover:bg-cosmos-surface hover:border-cosmos-accent/50 border border-cosmos-borderSubtle text-xs sm:text-sm font-medium text-cosmos-text transition-all"
          >
            <Github className="w-4 h-4" />
            <span>View Source on GitHub</span>
          </a>

          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cosmos-accent/10 border border-cosmos-accent/40 hover:bg-cosmos-accent/20 text-xs sm:text-sm font-medium text-cosmos-accent transition-all"
            >
              <span>Live Demonstration</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ) : (
            <span className="font-mono text-[11px] text-cosmos-textMuted">
              Verified Public Repository
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
