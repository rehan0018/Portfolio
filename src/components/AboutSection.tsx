import React from 'react';
import { User, Terminal, Compass, Telescope } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="relative py-28 px-4 sm:px-8 max-w-4xl mx-auto">
      <div className="rounded-2xl cosmic-glass border border-cosmos-borderSubtle p-6 sm:p-10">
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cosmos-accent mb-4">
          <User className="w-3.5 h-3.5" />
          <span>ABOUT ME</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-cosmos-text">
          Rehan Shaikh
        </h2>

        <p className="mt-4 text-sm sm:text-base text-cosmos-textSecondary font-light leading-relaxed">
          I am a software engineering student and developer grounded in practical systems, modern full-stack development, and applied artificial intelligence. I enjoy building software where reliability, clear boundaries, and sound reasoning matter.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 pt-8 border-t border-cosmos-borderSubtle/60">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-cosmos-accent uppercase tracking-wider mb-2">
              <Terminal className="w-3.5 h-3.5" />
              <span>What I Build</span>
            </div>
            <p className="text-xs sm:text-sm text-cosmos-textSecondary font-light leading-relaxed">
              Autonomous AI agents with deterministic safety policies, clinical machine learning systems with explainable feature attribution, safe learning tools with cognitive retention algorithms, and clean modern web platforms.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-cosmos-gold uppercase tracking-wider mb-2">
              <Compass className="w-3.5 h-3.5" />
              <span>What I Am Learning</span>
            </div>
            <p className="text-xs sm:text-sm text-cosmos-textSecondary font-light leading-relaxed">
              Distributed system patterns, fault tolerance, cloud infrastructure, container orchestration, and continuous algorithmic sharpening on LeetCode.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-cosmos-slate uppercase tracking-wider mb-2">
              <Telescope className="w-3.5 h-3.5" />
              <span>What I Am Curious About</span>
            </div>
            <p className="text-xs sm:text-sm text-cosmos-textSecondary font-light leading-relaxed">
              How simple mathematical rules generate intricate complex behaviors in both distributed codebases and physical natural systems—from cellular automata to cosmology and thermodynamics.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-cosmos-accent uppercase tracking-wider mb-2">
              <User className="w-3.5 h-3.5" />
              <span>Where I Want to Go</span>
            </div>
            <p className="text-xs sm:text-sm text-cosmos-textSecondary font-light leading-relaxed">
              Working alongside engineers who take software craftsmanship seriously, tackling real technical problems, and building infrastructure that remains resilient under load.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
