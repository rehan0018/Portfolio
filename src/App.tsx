import React, { useState } from 'react';
import { UniverseCanvas } from './components/canvas/UniverseCanvas';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { ProjectModal } from './components/ProjectModal';
import { EngineeringSection } from './components/EngineeringSection';
import { JourneySection } from './components/JourneySection';
import { ProblemSolvingSection } from './components/ProblemSolvingSection';
import { PhilosophySection } from './components/PhilosophySection';
import { CosmosSection } from './components/CosmosSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { TerminalModal } from './components/TerminalModal';
import { Project } from './types';
import { projects } from './data/projects';
import { Sparkles, X } from 'lucide-react';

export function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [activePrinciple, setActivePrinciple] = useState<string | null>(null);

  const handleSelectProjectById = (id: string) => {
    const proj = projects.find((p) => p.id === id);
    if (proj) setSelectedProject(proj);
  };

  return (
    <div className="relative min-h-screen bg-cosmos-bg text-cosmos-text selection:bg-cosmos-accent/25 selection:text-white">
      {/* 3D Celestial Cosmos Canvas */}
      <UniverseCanvas
        activeProjectId={hoveredProjectId || (selectedProject ? selectedProject.id : null)}
        onSelectProject={handleSelectProjectById}
        onStarPrinciple={(principle) => setActivePrinciple(principle)}
      />

      {/* Floating Navigation */}
      <Navigation onOpenTerminal={() => setIsTerminalOpen(true)} />

      {/* Subtle Principle Star Click Notification (Easter Egg) */}
      {activePrinciple && (
        <div className="fixed bottom-6 right-6 z-50 max-w-sm p-4 rounded-xl cosmic-glass-elevated border border-cosmos-accent/40 shadow-2xl flex items-start gap-3 animate-fadeIn">
          <Sparkles className="w-4 h-4 text-cosmos-accent shrink-0 mt-0.5" />
          <div className="flex-1">
            <div className="font-mono text-[10px] uppercase tracking-wider text-cosmos-accent mb-1">
              Celestial Principle Unlocked
            </div>
            <p className="text-xs text-cosmos-textSecondary font-light leading-relaxed">
              "{activePrinciple}"
            </p>
          </div>
          <button
            onClick={() => setActivePrinciple(null)}
            className="text-cosmos-textMuted hover:text-cosmos-text transition-colors p-1"
            aria-label="Dismiss principle"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main Semantic HTML Experience */}
      <main className="relative z-20">
        <Hero />
        <ProjectsSection
          onSelectProject={(p) => setSelectedProject(p)}
          onHoverProject={(id) => setHoveredProjectId(id)}
        />
        <EngineeringSection />
        <JourneySection />
        <ProblemSolvingSection />
        <PhilosophySection />
        <CosmosSection />
        <AboutSection />
        <ContactSection />
      </main>

      <Footer />

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Developer Terminal Modal (Easter Egg) */}
      <TerminalModal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />
    </div>
  );
}

export default App;
