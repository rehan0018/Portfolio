import React, { useState } from 'react';
import { philosophyQuestions } from '../data/philosophy';
import { HelpCircle, ChevronRight, Compass } from 'lucide-react';

export function PhilosophySection() {
  const [activeQuestion, setActiveQuestion] = useState(philosophyQuestions[0]);

  return (
    <section id="philosophy" className="relative py-28 px-4 sm:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-14">
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cosmos-accent mb-3">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>INTELLECTUAL INQUIRY</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-cosmos-text">
          Questions I Keep Around
        </h2>
        <p className="mt-3 text-sm sm:text-base text-cosmos-textSecondary max-w-2xl font-light leading-relaxed">
          I don't think of software purely as syntax or product specs. Code is a medium for exploring complexity, emergence, resilience, and the rules governing organized matter.
        </p>
      </div>

      {/* Inquiry Grid / Split Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 rounded-2xl cosmic-glass border border-cosmos-borderSubtle p-6 sm:p-8">
        {/* Left: Questions List */}
        <div className="lg:col-span-6 space-y-2.5">
          <div className="font-mono text-xs uppercase tracking-wider text-cosmos-textMuted mb-3 flex items-center gap-2">
            <Compass className="w-3.5 h-3.5 text-cosmos-accent" />
            <span>CORE QUESTIONS</span>
          </div>

          {philosophyQuestions.map((q) => {
            const isSelected = activeQuestion.id === q.id;
            return (
              <div
                key={q.id}
                onClick={() => setActiveQuestion(q)}
                className={`cursor-pointer rounded-xl p-4 transition-all duration-200 border ${
                  isSelected
                    ? 'bg-cosmos-surfaceElevated border-cosmos-accent/50 shadow-md shadow-black/20'
                    : 'bg-cosmos-surface/30 border-cosmos-borderSubtle/50 hover:border-cosmos-accent/30'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-cosmos-gold block mb-1">
                      {q.relatedDomain}
                    </span>
                    <h3 className="text-xs sm:text-sm font-normal text-cosmos-text leading-snug">
                      {q.inquiry}
                    </h3>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isSelected ? 'text-cosmos-accent translate-x-1' : 'text-cosmos-textMuted'
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Right: Reflection Inspector */}
        <div className="lg:col-span-6 flex flex-col justify-between rounded-xl bg-cosmos-surface/60 border border-cosmos-borderSubtle p-6 sm:p-7">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-cosmos-accent block pb-3 border-b border-cosmos-borderSubtle/60">
              DOMAIN: {activeQuestion.relatedDomain}
            </span>

            <h3 className="mt-5 text-xl sm:text-2xl font-serif italic text-cosmos-text leading-snug">
              "{activeQuestion.inquiry}"
            </h3>

            <div className="mt-6 space-y-4">
              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-cosmos-textMuted block mb-1.5">
                  Context & Background
                </span>
                <p className="text-xs sm:text-sm text-cosmos-textSecondary font-light leading-relaxed">
                  {activeQuestion.context}
                </p>
              </div>

              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-cosmos-gold block mb-1.5">
                  Engineering Reflection
                </span>
                <p className="text-xs sm:text-sm text-cosmos-textSecondary font-light leading-relaxed">
                  {activeQuestion.reflection}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-cosmos-borderSubtle/40 font-mono text-[11px] text-cosmos-textMuted flex items-center justify-between">
            <span>PERSPECTIVE: EMPIRICAL & CURIOUS</span>
            <span>SYSTEM DESIGN PHILOSOPHY</span>
          </div>
        </div>
      </div>
    </section>
  );
}
