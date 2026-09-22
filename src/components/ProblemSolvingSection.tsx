import React from 'react';
import { ExternalLink, Binary, Network, GitBranch, Cpu, Split, Zap } from 'lucide-react';

const ALGO_NODES = [
  {
    name: 'Graph Traversal & Topological Sort',
    category: 'Connectivity & Order',
    icon: Network,
    desc: 'Dependency resolution, cycle detection, shortest path heuristics',
  },
  {
    name: 'Dynamic Programming & State Space',
    category: 'Optimal Substructure',
    icon: Split,
    desc: 'Memoization, bottom-up tabulations, knapsack & subsequence patterns',
  },
  {
    name: 'Trees & Recursive Invariants',
    category: 'Hierarchical Structures',
    icon: GitBranch,
    desc: 'Binary search trees, lowest common ancestors, prefix tries',
  },
  {
    name: 'Search & Two-Pointer Strategies',
    category: 'Efficiency Primitives',
    icon: Binary,
    desc: 'Binary search over monotonic domains, sliding window bounds',
  },
  {
    name: 'Hashing & Set Invariants',
    category: 'Constant-Time Guarantees',
    icon: Cpu,
    desc: 'Collision mitigation, frequency maps, fast lookup tables',
  },
  {
    name: 'Complexity & Resource Constraints',
    category: 'Asymptotic Analysis',
    icon: Zap,
    desc: 'Time-space trade-offs, cache locality, amortized bound calculations',
  },
];

export function ProblemSolvingSection() {
  return (
    <section className="relative py-20 px-4 sm:px-8 max-w-6xl mx-auto">
      <div className="rounded-2xl cosmic-glass border border-cosmos-borderSubtle p-6 sm:p-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-cosmos-borderSubtle/60">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cosmos-accent mb-2">
              <Binary className="w-3.5 h-3.5" />
              <span>ALGORITHMIC DISCIPLINE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-light text-cosmos-text">
              Problem Solving & Complexity
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-cosmos-textSecondary font-light italic font-serif">
              "Training the mind one problem at a time."
            </p>
          </div>

          <a
            href="https://leetcode.com/u/___rehan____/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cosmos-surfaceElevated hover:bg-cosmos-surface border border-cosmos-borderSubtle hover:border-cosmos-accent/50 text-xs sm:text-sm font-mono text-cosmos-text transition-all group"
          >
            <span>LeetCode Profile</span>
            <ExternalLink className="w-3.5 h-3.5 text-cosmos-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Algorithmic Nodes Constellation */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ALGO_NODES.map((node) => {
            const Icon = node.icon;
            return (
              <div
                key={node.name}
                className="p-4 rounded-xl bg-cosmos-surface/50 border border-cosmos-borderSubtle/50 hover:border-cosmos-accent/30 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-cosmos-surfaceElevated border border-cosmos-borderSubtle/60 text-cosmos-accent">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-cosmos-textMuted block">
                      {node.category}
                    </span>
                    <h3 className="text-xs sm:text-sm font-medium text-cosmos-text">
                      {node.name}
                    </h3>
                  </div>
                </div>
                <p className="mt-2.5 text-xs text-cosmos-textSecondary font-light leading-relaxed">
                  {node.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-8 pt-4 border-t border-cosmos-borderSubtle/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <span className="font-mono text-[11px] text-cosmos-textMuted">
            Focus: Sound reasoning, edge case identification, asymptotic efficiency
          </span>
          <span className="font-mono text-xs text-cosmos-accent">
            leetcode.com/u/___rehan____
          </span>
        </div>
      </div>
    </section>
  );
}
