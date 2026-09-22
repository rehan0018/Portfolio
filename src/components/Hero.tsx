import React from 'react';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between items-center px-6 pt-32 pb-12 text-center select-none"
    >
      {/* Top subtle cosmic coordinates indicator */}
      <div className="flex items-center gap-3 font-mono text-[11px] text-cosmos-textMuted tracking-widest uppercase">
        <span>LOC: 19.2° N, 72.8° E</span>
        <span className="w-1 h-1 rounded-full bg-cosmos-borderSubtle" />
        <span>ORBIT: SOFTWARE & SYSTEMS</span>
      </div>

      {/* Central Cinematic Typography */}
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-cosmos-text text-glow font-sans">
          REHAN SHAIKH
        </h1>

        <div className="mt-4 flex items-center gap-3">
          <span className="h-[1px] w-8 bg-cosmos-accent/40" />
          <p className="font-mono text-sm sm:text-base text-cosmos-accent tracking-widest uppercase font-medium">
            Software Engineer
          </p>
          <span className="h-[1px] w-8 bg-cosmos-accent/40" />
        </div>

        <p className="mt-6 text-base sm:text-lg text-cosmos-textSecondary font-light tracking-wide max-w-xl font-sans">
          Building systems, exploring ideas, staying curious.
        </p>
      </div>

      {/* Bottom Scroll Prompt */}
      <a
        href="#projects"
        className="group flex flex-col items-center gap-2 text-cosmos-textMuted hover:text-cosmos-accent transition-colors font-mono text-[11px] tracking-widest uppercase"
        aria-label="Scroll to explore projects"
      >
        <span>SCROLL TO EXPLORE</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-cosmos-accent/60 group-hover:text-cosmos-accent transition-colors" />
      </a>
    </section>
  );
}
