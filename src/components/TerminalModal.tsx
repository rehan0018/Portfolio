import React, { useState, useEffect, useRef } from 'react';
import { Terminal, X } from 'lucide-react';
import { projects } from '../data/projects';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandOutput {
  command: string;
  result: string | React.ReactNode;
}

export function TerminalModal({ isOpen, onClose }: TerminalModalProps) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: 'sys.init',
      result: 'Rehan Shaikh Observatory CLI v1.0.0. Type "help" for available commands.',
    },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    let result: React.ReactNode = '';

    if (cmd === 'help') {
      result = (
        <div className="space-y-1 text-cosmos-textSecondary">
          <div><span className="text-cosmos-accent font-semibold">help</span> - Display available commands</div>
          <div><span className="text-cosmos-accent font-semibold">projects</span> - List verified projects & architectures</div>
          <div><span className="text-cosmos-accent font-semibold">cat &lt;name&gt;</span> - Inspect a project (e.g. "cat edufeedia")</div>
          <div><span className="text-cosmos-accent font-semibold">skills</span> - View engineering constellation domains</div>
          <div><span className="text-cosmos-accent font-semibold">cosmos</span> - Print perspective on software & the universe</div>
          <div><span className="text-cosmos-accent font-semibold">status</span> - System telemetry and uptime</div>
          <div><span className="text-cosmos-accent font-semibold">clear</span> - Clear terminal buffer</div>
          <div><span className="text-cosmos-accent font-semibold">exit</span> - Close terminal</div>
        </div>
      );
    } else if (cmd === 'clear') {
      setHistory([]);
      setInput('');
      return;
    } else if (cmd === 'exit') {
      onClose();
      return;
    } else if (cmd === 'projects') {
      result = (
        <div className="space-y-1 text-cosmos-textSecondary">
          {projects.map((p) => (
            <div key={p.id} className="flex items-center gap-3">
              <span className="text-cosmos-gold font-mono">{p.id}</span>
              <span>-</span>
              <span>{p.name}: {p.tagline}</span>
            </div>
          ))}
        </div>
      );
    } else if (cmd.startsWith('cat ')) {
      const targetId = cmd.replace('cat ', '').trim();
      const proj = projects.find((p) => p.id === targetId || p.name.toLowerCase() === targetId);
      if (proj) {
        result = (
          <div className="space-y-2 text-xs text-cosmos-textSecondary">
            <div className="text-cosmos-accent font-semibold text-sm">{proj.name} ({proj.category})</div>
            <div><span className="text-cosmos-gold">Problem:</span> {proj.problem}</div>
            <div><span className="text-cosmos-gold">Built:</span> {proj.whatIBuilt}</div>
            <div><span className="text-cosmos-gold">Stack:</span> {proj.techStack.join(', ')}</div>
            <div><span className="text-cosmos-gold">Repo:</span> {proj.githubUrl}</div>
          </div>
        );
      } else {
        result = `Project not found: "${targetId}". Type "projects" to see available IDs.`;
      }
    } else if (cmd === 'skills') {
      result = 'Domains: SOFTWARE (Backend, Frontend, APIs, Databases), SYSTEMS (Linux, Docker, Networking, System Design), CLOUD (AWS, SRE, Reliability, Observability), INTELLIGENCE (Machine Learning, XGBoost, SHAP XAI, Socratic RAG).';
    } else if (cmd === 'cosmos') {
      result = '"Some systems fit inside a computer. Others span a planet. Some span the universe." — Engineering is an instrument of empirical inquiry.';
    } else if (cmd === 'status') {
      result = 'SYSTEM INTEGRITY: 100% | 3D SCENE: OPTIMIZED | REPOSITORIES: VERIFIED | HEURISTICS: ACTIVE';
    } else {
      result = `command not found: "${cmd}". Type "help" for command catalog.`;
    }

    setHistory((prev) => [...prev, { command: input, result }]);
    setInput('');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl h-[420px] rounded-xl cosmic-glass-elevated border border-cosmos-borderSubtle flex flex-col font-mono text-xs shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Header Bar */}
        <div className="px-4 py-2.5 bg-cosmos-surfaceElevated border-b border-cosmos-borderSubtle flex items-center justify-between select-none">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 cursor-pointer" onClick={onClose} />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            </div>
            <span className="ml-3 text-[11px] text-cosmos-textMuted flex items-center gap-1.5">
              <Terminal className="w-3 h-3 text-cosmos-accent" />
              rehan@observatory:~ (interactive shell)
            </span>
          </div>

          <button
            onClick={onClose}
            className="text-cosmos-textMuted hover:text-cosmos-text transition-colors"
            aria-label="Close terminal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Terminal Output Area */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3 font-mono">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center gap-2 text-cosmos-accent">
                <span>rehan@observatory:~$</span>
                <span className="text-cosmos-text">{item.command}</span>
              </div>
              <div className="pl-4 text-cosmos-textSecondary leading-relaxed">
                {item.result}
              </div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Terminal Input Line */}
        <form
          onSubmit={handleCommand}
          className="p-3 bg-cosmos-surface/80 border-t border-cosmos-borderSubtle flex items-center gap-2"
        >
          <span className="text-cosmos-accent">rehan@observatory:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type 'help', 'projects', 'cat edufeedia'..."
            className="flex-1 bg-transparent text-cosmos-text outline-none placeholder:text-cosmos-textMuted/50 font-mono text-xs"
          />
        </form>
      </div>
    </div>
  );
}
