import React, { useState } from 'react';
import { technologyConstellations } from '../data/technologies';
import { TechnologyCategory, TechnologyNode } from '../types';
import { Code, Cpu, Cloud, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';

const ICON_MAP: Record<string, React.ElementType> = {
  Code,
  Cpu,
  Cloud,
  Sparkles,
};

export function EngineeringSection() {
  const [selectedCategory, setSelectedCategory] = useState<TechnologyCategory>(technologyConstellations[0]);
  const [selectedNode, setSelectedNode] = useState<TechnologyNode>(technologyConstellations[0].nodes[0]);

  return (
    <section id="engineering" className="relative py-28 px-4 sm:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-14">
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cosmos-accent mb-3">
          <Cpu className="w-3.5 h-3.5" />
          <span>TECHNICAL FOUNDATIONS</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-cosmos-text">
          How I Build
        </h2>
        <p className="mt-3 text-sm sm:text-base text-cosmos-textSecondary max-w-2xl font-light leading-relaxed">
          Structured as interconnected engineering constellations rather than ungrounded keyword clouds. Every node represents verified principles and technologies implemented in my public repositories.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {technologyConstellations.map((cat) => {
          const Icon = ICON_MAP[cat.iconName] || Code;
          const isSelected = selectedCategory.title === cat.title;

          return (
            <button
              key={cat.title}
              onClick={() => {
                setSelectedCategory(cat);
                setSelectedNode(cat.nodes[0]);
              }}
              className={`p-4 rounded-xl text-left transition-all duration-200 border ${
                isSelected
                  ? 'bg-cosmos-surfaceElevated border-cosmos-accent/50 shadow-lg shadow-black/30'
                  : 'cosmic-glass border-cosmos-borderSubtle hover:border-cosmos-accent/30 text-cosmos-textSecondary'
              }`}
            >
              <div className="flex items-center justify-between">
                <Icon
                  className={`w-4 h-4 ${
                    isSelected ? 'text-cosmos-accent' : 'text-cosmos-textMuted'
                  }`}
                />
                {isSelected && (
                  <span className="w-1.5 h-1.5 rounded-full bg-cosmos-accent animate-pulse" />
                )}
              </div>
              <div className="mt-3 font-mono text-xs tracking-wider uppercase font-medium text-cosmos-text">
                {cat.title}
              </div>
              <div className="mt-1 text-[11px] text-cosmos-textMuted line-clamp-1">
                {cat.description}
              </div>
            </button>
          );
        })}
      </div>

      {/* Interactive Constellation Explorer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 rounded-2xl cosmic-glass border border-cosmos-borderSubtle p-6 sm:p-8">
        {/* Left Column: Interconnected Tree Hierarchy */}
        <div className="lg:col-span-6 space-y-4">
          <div className="font-mono text-xs uppercase tracking-wider text-cosmos-textMuted flex items-center gap-2 mb-2">
            <span>CONSTELLATION TREE</span>
            <span className="text-[10px] text-cosmos-accent">[{selectedCategory.title}]</span>
          </div>

          <div className="space-y-3">
            {selectedCategory.nodes.map((node) => {
              const isActive = selectedNode.name === node.name;

              return (
                <div
                  key={node.name}
                  onClick={() => setSelectedNode(node)}
                  className={`cursor-pointer rounded-xl p-4 transition-all duration-200 border ${
                    isActive
                      ? 'bg-cosmos-surface border-cosmos-accent/60 shadow-md shadow-black/20'
                      : 'bg-cosmos-surface/40 border-cosmos-borderSubtle/60 hover:border-cosmos-accent/30'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          isActive ? 'bg-cosmos-accent' : 'bg-cosmos-borderSubtle'
                        }`}
                      />
                      <span className="text-sm font-medium text-cosmos-text">
                        {node.name}
                      </span>
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        isActive ? 'text-cosmos-accent translate-x-1' : 'text-cosmos-textMuted'
                      }`}
                    />
                  </div>

                  {node.description && (
                    <p className="mt-1.5 ml-4 text-xs text-cosmos-textSecondary font-light">
                      {node.description}
                    </p>
                  )}

                  {/* Child nodes visual branch */}
                  {node.children && (
                    <div className="mt-3 ml-4 pl-3 border-l border-cosmos-borderSubtle space-y-1.5">
                      {node.children.map((child) => (
                        <div
                          key={child.name}
                          className="flex items-center gap-2 text-xs font-mono text-cosmos-textMuted"
                        >
                          <span className="text-cosmos-accent/60">├─</span>
                          <span className="text-cosmos-textSecondary">{child.name}</span>
                          {child.verifiedIn && (
                            <span className="text-[10px] px-1.5 py-0.2 rounded bg-cosmos-surfaceElevated text-cosmos-accent/80">
                              {child.verifiedIn}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Node Deep Dive / Verification Inspector */}
        <div className="lg:col-span-6 flex flex-col justify-between rounded-xl bg-cosmos-surface/60 border border-cosmos-borderSubtle p-6">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-cosmos-borderSubtle/60">
              <span className="font-mono text-xs text-cosmos-accent uppercase tracking-wider">
                NODE TELEMETRY
              </span>
              <div className="flex items-center gap-1.5 text-xs text-emerald-400/90 font-mono">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified in Codebase</span>
              </div>
            </div>

            <h3 className="mt-4 text-xl sm:text-2xl font-light text-cosmos-text">
              {selectedNode.name}
            </h3>

            {selectedNode.description && (
              <p className="mt-2 text-sm text-cosmos-textSecondary font-light leading-relaxed">
                {selectedNode.description}
              </p>
            )}

            {selectedNode.verifiedIn && (
              <div className="mt-5 p-3 rounded-lg bg-cosmos-surfaceElevated border border-cosmos-borderSubtle/80">
                <span className="font-mono text-[10px] uppercase tracking-wider text-cosmos-textMuted block">
                  Public Implementation Source
                </span>
                <span className="mt-1 font-mono text-xs text-cosmos-accent block">
                  {selectedNode.verifiedIn}
                </span>
              </div>
            )}

            {selectedNode.children && selectedNode.children.length > 0 && (
              <div className="mt-6">
                <span className="font-mono text-xs uppercase tracking-wider text-cosmos-textMuted block mb-2">
                  Specialized Sub-Branches
                </span>
                <div className="space-y-2">
                  {selectedNode.children.map((sub) => (
                    <div
                      key={sub.name}
                      className="p-2.5 rounded-lg bg-cosmos-surface border border-cosmos-borderSubtle/40 flex items-center justify-between"
                    >
                      <span className="text-xs text-cosmos-text font-mono">
                        {sub.name}
                      </span>
                      {sub.verifiedIn && (
                        <span className="text-[10px] font-mono text-cosmos-gold">
                          {sub.verifiedIn}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="mt-6 pt-4 border-t border-cosmos-borderSubtle/40 font-mono text-[11px] text-cosmos-textMuted flex items-center justify-between">
            <span>DISCIPLINE: {selectedCategory.title}</span>
            <span>SYSTEM INTEGRITY: 100%</span>
          </div>
        </div>
      </div>
    </section>
  );
}
