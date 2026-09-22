import React, { useState } from 'react';
import { journeyMilestones } from '../data/journey';
import { Compass, CircleDot, ChevronDown, CheckCircle } from 'lucide-react';

export function JourneySection() {
  const [expandedIndex, setExpandedIndex] = useState<number>(1); // Default to Present

  return (
    <section id="journey" className="relative py-28 px-4 sm:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-14">
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cosmos-accent mb-3">
          <Compass className="w-3.5 h-3.5" />
          <span>TRAJECTORY & EVOLUTION</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-cosmos-text">
          The Orbit
        </h2>
        <p className="mt-3 text-sm sm:text-base text-cosmos-textSecondary max-w-2xl font-light leading-relaxed">
          An evolving orbital path of engineering learning and building. Tracing foundational computing principles to autonomous systems, clinical intelligence, and distributed scale.
        </p>

        {/* Orbital Stage Selector */}
        <div className="flex items-center gap-3 mt-8 font-mono text-xs text-cosmos-textMuted">
          <span>PAST</span>
          <span className="text-cosmos-accent">→</span>
          <span className="text-cosmos-gold font-semibold">PRESENT</span>
          <span className="text-cosmos-accent">→</span>
          <span>NEXT</span>
        </div>
      </div>

      {/* Orbital Milestones */}
      <div className="space-y-6">
        {journeyMilestones.map((milestone, idx) => {
          const isExpanded = expandedIndex === idx;
          const isPresent = milestone.stage === 'Present';
          const isNext = milestone.stage === 'Next';

          return (
            <div
              key={milestone.stage}
              className={`rounded-2xl transition-all duration-300 border ${
                isExpanded
                  ? 'cosmic-glass-elevated border-cosmos-accent/40 shadow-xl shadow-black/40'
                  : 'cosmic-glass border-cosmos-borderSubtle hover:border-cosmos-accent/30'
              } p-6 sm:p-7 cursor-pointer`}
              onClick={() => setExpandedIndex(isExpanded ? -1 : idx)}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <div className="mt-1">
                    <CircleDot
                      className={`w-4 h-4 ${
                        isPresent
                          ? 'text-cosmos-gold animate-pulse'
                          : isNext
                          ? 'text-cosmos-accent'
                          : 'text-cosmos-textMuted'
                      }`}
                    />
                  </div>

                  <div>
                    <div className="flex items-center gap-3 font-mono text-xs">
                      <span
                        className={`px-2 py-0.5 rounded text-[11px] font-medium tracking-wider uppercase ${
                          isPresent
                            ? 'bg-cosmos-gold/15 text-cosmos-gold border border-cosmos-gold/30'
                            : isNext
                            ? 'bg-cosmos-accent/15 text-cosmos-accent border border-cosmos-accent/30'
                            : 'bg-cosmos-surfaceElevated text-cosmos-textMuted border border-cosmos-borderSubtle'
                        }`}
                      >
                        {milestone.stage}
                      </span>
                      <span className="text-cosmos-textMuted">{milestone.period}</span>
                    </div>

                    <h3 className="mt-2 text-lg sm:text-xl font-normal text-cosmos-text">
                      {milestone.title}
                    </h3>
                  </div>
                </div>

                <ChevronDown
                  className={`w-4 h-4 text-cosmos-textMuted transition-transform duration-200 mt-2 ${
                    isExpanded ? 'rotate-180 text-cosmos-accent' : ''
                  }`}
                />
              </div>

              <p className="mt-3 text-xs sm:text-sm text-cosmos-textSecondary font-light leading-relaxed pl-7">
                {milestone.description}
              </p>

              {/* Expandable Engineering Takeaways */}
              {isExpanded && (
                <div className="mt-6 pt-5 border-t border-cosmos-borderSubtle/60 pl-7 space-y-4 animate-fadeIn">
                  <div className="font-mono text-xs text-cosmos-accent uppercase tracking-wider">
                    Core Technical Developments
                  </div>
                  <ul className="space-y-2">
                    {milestone.keyTakeaways.map((takeaway, tIdx) => (
                      <li
                        key={tIdx}
                        className="flex items-start gap-2 text-xs sm:text-sm text-cosmos-textSecondary font-light"
                      >
                        <CheckCircle className="w-3.5 h-3.5 text-cosmos-accent/70 mt-0.5 shrink-0" />
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-2">
                    <span className="font-mono text-[11px] text-cosmos-textMuted block">
                      SOURCE OF TRUTH:
                    </span>
                    <span className="font-mono text-xs text-cosmos-gold">
                      {milestone.verifiedContext}
                    </span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
