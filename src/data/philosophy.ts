import { PhilosophyQuestion } from '../types';

export const philosophyQuestions: PhilosophyQuestion[] = [
  {
    id: 'emergence',
    inquiry: 'How do complex systems emerge from simple rules?',
    context: 'From Conway’s Game of Life to cellular automata and distributed consensus protocols, minimal local rules yield macroscopic structure that cannot be deduced from single components in isolation.',
    reflection: 'In software architecture, this reveals why modular simplicity at individual boundaries is far more robust than monolithic complexity. Nature and software share this principle: build simple, coherent primitives, and let collective behavior handle the scale.',
    relatedDomain: 'Systems & Emergence'
  },
  {
    id: 'intelligence',
    inquiry: 'Where does intelligence come from?',
    context: 'Is intelligence merely statistical pattern matching across vast parameter spaces, or does genuine comprehension require grounded physical embodiment, causal models, and intentionality?',
    reflection: 'Working with machine learning models and Socratic systems underscores the difference between predictive fluency and true reasoning. Exploring this boundary makes building AI tools both technically demanding and deeply fascinating.',
    relatedDomain: 'Cognition & AI'
  },
  {
    id: 'reliability',
    inquiry: 'What makes a system truly reliable?',
    context: 'Every component in a physical or digital system will eventually fail. Networks drop packets, disks degrade, memory bit-flips occur, and software invariants get violated.',
    reflection: 'Reliability isn’t the absence of failure; it is the presence of resilience. Systems like Alaadin taught me that true robustness comes from explicit safety boundaries, idempotency, and graceful fallback modes rather than wishful perfection.',
    relatedDomain: 'Resilience & Architecture'
  },
  {
    id: 'technology-humanity',
    inquiry: 'How should technology shape human life?',
    context: 'Tools alter the cognitive habits of their users. When we automate learning, decision-making, or social connections, we redefine what humans spend their attention on.',
    reflection: 'This guided the design of Edufeedia: rather than giving students ready-made answers, an educational tool should stimulate active recall and Socratic inquiry, amplifying human capability rather than replacing it.',
    relatedDomain: 'Systems & Emergence'
  },
  {
    id: 'engineering-nature',
    inquiry: 'What can engineering teach us about the world?',
    context: 'Engineering forces an encounter with reality. Ideas that sound elegant on paper fail immediately if they violate thermodynamics, bandwidth limits, or computational complexity.',
    reflection: 'Writing code and designing systems is an empirical discipline. It teaches intellectual humility: the machine doesn’t care about your intentions, only what you have actually built.',
    relatedDomain: 'Resilience & Architecture'
  },
  {
    id: 'unknown-universe',
    inquiry: 'How much of the universe remains unknown?',
    context: 'We understand only ~5% of the universe’s energy density (ordinary matter); 95% remains dark matter and dark energy. Our most successful models are acknowledged approximations.',
    reflection: 'Contemplating the scale of the cosmos keeps engineering in perspective. It fuels a relentless curiosity to learn, question assumptions, and appreciate the small window of order we can create in software.',
    relatedDomain: 'Cosmology & Scale'
  }
];
