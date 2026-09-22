import React from 'react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-4 border-t border-cosmos-borderSubtle/60 text-center text-xs font-mono text-cosmos-textMuted select-none">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cosmos-accent" />
          <span className="text-cosmos-text font-medium">Rehan Shaikh</span>
          <span>•</span>
          <span className="text-cosmos-textSecondary">Software • Systems • Curiosity</span>
        </div>

        <div className="flex items-center gap-3 text-[11px]">
          <span>© {currentYear} Rehan Shaikh</span>
          <span>•</span>
          <span className="text-cosmos-textMuted">Built with Three.js & React</span>
        </div>
      </div>
    </footer>
  );
}
