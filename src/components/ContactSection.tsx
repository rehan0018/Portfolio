import React from 'react';
import { Github, Linkedin, ExternalLink, Orbit, Code2 } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="relative py-28 px-4 sm:px-8 max-w-4xl mx-auto text-center">
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cosmos-accent mb-4">
          <Orbit className="w-3.5 h-3.5" />
          <span>EDGE OF THE ORBIT</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-cosmos-text">
          Let’s build something worth exploring.
        </h2>

        <p className="mt-4 text-sm sm:text-base text-cosmos-textSecondary font-light max-w-xl leading-relaxed">
          Open to engineering conversations, technical collaborations, and exploring challenging software problems.
        </p>

        {/* Public Verified Profiles */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
          <a
            href="https://github.com/rehan0018"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl cosmic-glass hover:cosmic-glass-elevated border border-cosmos-borderSubtle hover:border-cosmos-accent/50 text-xs sm:text-sm font-mono text-cosmos-text transition-all group"
          >
            <Github className="w-4 h-4 text-cosmos-accent group-hover:scale-110 transition-transform" />
            <span>GitHub (rehan0018)</span>
            <ExternalLink className="w-3 h-3 text-cosmos-textMuted group-hover:text-cosmos-accent transition-colors" />
          </a>

          <a
            href="https://www.linkedin.com/in/rehan-shaikh-26248030a/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl cosmic-glass hover:cosmic-glass-elevated border border-cosmos-borderSubtle hover:border-cosmos-accent/50 text-xs sm:text-sm font-mono text-cosmos-text transition-all group"
          >
            <Linkedin className="w-4 h-4 text-cosmos-accent group-hover:scale-110 transition-transform" />
            <span>LinkedIn Profile</span>
            <ExternalLink className="w-3 h-3 text-cosmos-textMuted group-hover:text-cosmos-accent transition-colors" />
          </a>

          <a
            href="https://leetcode.com/u/___rehan____/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl cosmic-glass hover:cosmic-glass-elevated border border-cosmos-borderSubtle hover:border-cosmos-gold/50 text-xs sm:text-sm font-mono text-cosmos-text transition-all group"
          >
            <Code2 className="w-4 h-4 text-cosmos-gold group-hover:scale-110 transition-transform" />
            <span>LeetCode (___rehan____)</span>
            <ExternalLink className="w-3 h-3 text-cosmos-textMuted group-hover:text-cosmos-gold transition-colors" />
          </a>
        </div>
      </div>
    </section>
  );
}
