import React, { useState, useEffect } from 'react';
import { Terminal, Menu, X } from 'lucide-react';

interface NavigationProps {
  onOpenTerminal: () => void;
}

const NAV_ITEMS = [
  { label: 'Work', href: '#projects' },
  { label: 'Engineering', href: '#engineering' },
  { label: 'Journey', href: '#journey' },
  { label: 'Ideas', href: '#philosophy' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export function Navigation({ onOpenTerminal }: NavigationProps) {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['hero', 'projects', 'engineering', 'journey', 'philosophy', 'about', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-none py-4 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto flex items-center justify-between pointer-events-auto">
        {/* Brand / Logo */}
        <a
          href="#hero"
          className="group flex items-center gap-2.5 px-3 py-1.5 rounded-full cosmic-glass transition-colors hover:border-cosmos-accent/40"
          aria-label="Rehan Shaikh - Return to top"
        >
          <span className="w-2 h-2 rounded-full bg-cosmos-accent animate-pulse" />
          <span className="font-mono text-xs tracking-widest text-cosmos-text uppercase font-medium">
            REHAN
          </span>
          <span className="hidden sm:inline font-mono text-[10px] text-cosmos-textMuted border-l border-cosmos-borderSubtle pl-2">
            SYSTEMS NOMINAL
          </span>
        </a>

        {/* Desktop Navigation Pill */}
        <nav
          className={`hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full transition-all duration-300 ${
            isScrolled ? 'cosmic-glass-elevated shadow-lg shadow-black/40' : 'cosmic-glass'
          }`}
          aria-label="Main Navigation"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <a
                key={item.label}
                href={item.href}
                className={`relative px-3 py-1 text-xs tracking-wide transition-colors font-medium rounded-full ${
                  isActive
                    ? 'text-cosmos-text font-semibold'
                    : 'text-cosmos-textSecondary hover:text-cosmos-text'
                }`}
              >
                {isActive && (
                  <span className="absolute inset-0 bg-white/5 rounded-full -z-10 border border-cosmos-accent/30" />
                )}
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right actions: Terminal Toggle & Mobile Menu */}
        <div className="flex items-center gap-2">
          {/* Interactive Easter Egg Terminal Button */}
          <button
            onClick={onOpenTerminal}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full cosmic-glass text-cosmos-textSecondary hover:text-cosmos-text hover:border-cosmos-accent/40 transition-colors text-xs font-mono"
            title="Open Developer Terminal (Easter Egg)"
            aria-label="Open Interactive Terminal"
          >
            <Terminal className="w-3.5 h-3.5 text-cosmos-accent" />
            <span className="hidden sm:inline text-[11px]">_cli</span>
          </button>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full cosmic-glass text-cosmos-textSecondary hover:text-cosmos-text transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 max-w-sm mx-auto p-4 rounded-2xl cosmic-glass-elevated shadow-2xl border border-cosmos-borderSubtle pointer-events-auto">
          <nav className="flex flex-col gap-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm text-cosmos-textSecondary hover:text-cosmos-text hover:bg-white/5 rounded-lg transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
