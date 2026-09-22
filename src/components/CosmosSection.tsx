import React from 'react';
import { cosmicThemes } from '../data/cosmos';
import { Sparkles, Globe, Orbit, Atom } from 'lucide-react';

export function CosmosSection() {
  return (
    <section className="relative py-28 px-4 sm:px-8 max-w-5xl mx-auto text-center">
      {/* Editorial Quotation */}
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cosmos-accent mb-4">
          <Orbit className="w-3.5 h-3.5 text-cosmos-accent" />
          <span>PERSPECTIVE</span>
        </div>

        <blockquote className="font-serif italic text-2xl sm:text-4xl text-cosmos-text max-w-3xl leading-relaxed text-glow">
          "{cosmicThemes.quote}"
        </blockquote>

        <div className="w-12 h-[1px] bg-cosmos-borderSubtle my-8" />

        {/* Conceptual narrative */}
        <div className="max-w-2xl space-y-4 text-xs sm:text-sm text-cosmos-textSecondary font-light leading-relaxed text-left sm:text-justify">
          {cosmicThemes.body.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* 4 Pillars of Curiosity */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 w-full text-left">
          <div className="p-4 rounded-xl cosmic-glass border border-cosmos-borderSubtle/60">
            <div className="flex items-center gap-2 text-cosmos-accent font-mono text-xs mb-1.5">
              <Orbit className="w-3.5 h-3.5" />
              <span>Cosmology</span>
            </div>
            <p className="text-[11px] text-cosmos-textMuted font-light">
              Gravitational dynamics, large-scale structures, cosmic expansion.
            </p>
          </div>

          <div className="p-4 rounded-xl cosmic-glass border border-cosmos-borderSubtle/60">
            <div className="flex items-center gap-2 text-cosmos-gold font-mono text-xs mb-1.5">
              <Atom className="w-3.5 h-3.5" />
              <span>Physics</span>
            </div>
            <p className="text-[11px] text-cosmos-textMuted font-light">
              Thermodynamics, entropy, physical limits of computation.
            </p>
          </div>

          <div className="p-4 rounded-xl cosmic-glass border border-cosmos-borderSubtle/60">
            <div className="flex items-center gap-2 text-cosmos-slate font-mono text-xs mb-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Emergence</span>
            </div>
            <p className="text-[11px] text-cosmos-textMuted font-light">
              How simple deterministic rules assemble complex collective behavior.
            </p>
          </div>

          <div className="p-4 rounded-xl cosmic-glass border border-cosmos-borderSubtle/60">
            <div className="flex items-center gap-2 text-cosmos-accent font-mono text-xs mb-1.5">
              <Globe className="w-3.5 h-3.5" />
              <span>Systems</span>
            </div>
            <p className="text-[11px] text-cosmos-textMuted font-light">
              Feedback loops, fault isolation, and planetary-scale infrastructure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
