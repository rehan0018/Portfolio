import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'edufeedia',
    name: 'Edufeedia',
    tagline: 'AI-powered safe learning platform for students aged 10–17 with curriculum alignment and active recall.',
    category: 'AI & Systems',
    featured: true,
    problem: 'Open web search exposes K-12 learners to unvetted content and algorithmic distraction. Generic AI chatbots hallucinate without pedagogical structure or curriculum alignment, lacking age-appropriate safeguards and long-term memory.',
    whatIBuilt: 'An end-to-end safe learning and revision platform engineered for students aged 10–17. Implemented fail-closed Socratic AI tutoring, curriculum-mapped daily study feeds, automated quiz generation, and long-term retention powered by the SuperMemo SM-2 spaced repetition algorithm.',
    architecture: [
      'Socratic RAG engine with strict curriculum indexing',
      'Zero-Trust multi-category safety and content verification',
      'Purpose-specific verifiable guardian consent framework',
      'Multi-tenant Role-Based Access Control (RBAC)',
      'Alembic database migrations & SRE telemetry pipeline'
    ],
    techStack: [
      'Python',
      'PostgreSQL',
      'Docker',
      'FastAPI / Flask',
      'PLpgSQL',
      'SM-2 Algorithm',
      'Socratic RAG'
    ],
    githubUrl: 'https://github.com/rehan0018/Edufeedia',
    orbitRadius: 3.4,
    orbitSpeed: 0.18,
    color: '#8FAFC4',
    stats: [
      { label: 'Target Demographic', value: 'Ages 10–17' },
      { label: 'Retention Model', value: 'SM-2 Spaced Repetition' },
      { label: 'Safety Mode', value: 'Fail-Closed Socratic' }
    ]
  },
  {
    id: 'alaadin',
    name: 'Alaadin',
    tagline: 'Autonomous AI payment recovery agent with expected recovery value (ERV) optimization and strict policy boundaries.',
    category: 'Autonomous Agents',
    featured: true,
    problem: 'Failed online payments cause catastrophic revenue leakage. Blind automated retries trigger bank fraud penalties and alienate legitimate customers without understanding root failure semantics.',
    whatIBuilt: 'An autonomous payment recovery agent that ingests payment failure webhooks, classifies failure modes, computes multi-action Expected Recovery Value (ERV), enforces merchant policy boundaries, executes automated recovery interventions, and proves recovered revenue with direct banking status checks.',
    architecture: [
      'Pipeline: Detect → Understand → Decide (ERV) → Policy Boundary → Act → Verify → Stop',
      'Calibrated ML recovery probability with Brier and ECE calibration',
      'Idempotency layer for guaranteed at-most-once execution',
      'Merchant-defined policy engine with hard programmatic veto'
    ],
    techStack: [
      'JavaScript',
      'Python',
      'Docker',
      'Calibrated ML',
      'Brier / ECE Calibration',
      'Redis Idempotency',
      'REST APIs'
    ],
    githubUrl: 'https://github.com/rehan0018/Alaadin',
    orbitRadius: 4.6,
    orbitSpeed: 0.14,
    color: '#C8A96B',
    stats: [
      { label: 'Decision Logic', value: 'Multi-Action ERV' },
      { label: 'Governance', value: 'Hard Policy Veto' },
      { label: 'Verification', value: 'Direct Banking Status' }
    ]
  },
  {
    id: 'aneai',
    name: 'aneAI',
    tagline: 'Clinical anesthesia risk intelligence and patient survival prediction system.',
    category: 'AI & Systems',
    featured: true,
    problem: 'Intraoperative and postoperative anesthesia complications require immediate multi-factor risk estimation. Black-box predictive models fail in clinical settings where anesthesiologists require transparent, explainable feature attribution before surgical induction.',
    whatIBuilt: 'A doctor-grade clinical risk intelligence application. Combines multidimensional surgical risk stratification (Low, Medium, High), survival probability estimation via XGBoost Regressors, multi-label adverse complication classification (hypotension, delirium), and SHAP (Shapley Additive exPlanations) for local and global model explainability.',
    architecture: [
      'FastAPI backend serving scikit-learn/XGBoost inference pipelines',
      'Doctor-grade clinical dashboard with biometric telemetry input',
      'Explainable AI (XAI) subsystem powered by SHAP feature attribution',
      'Containerized deployment topology with Docker Compose'
    ],
    techStack: [
      'FastAPI',
      'Python 3.10',
      'React',
      'XGBoost',
      'Scikit-Learn',
      'SHAP (XAI)',
      'Tailwind CSS',
      'PostgreSQL',
      'Docker'
    ],
    githubUrl: 'https://github.com/rehan0018/AneAI',
    orbitRadius: 5.8,
    orbitSpeed: 0.11,
    color: '#727B9A',
    stats: [
      { label: 'Inference Stack', value: 'XGBoost + Random Forest' },
      { label: 'Explainability', value: 'SHAP Feature Attribution' },
      { label: 'Backend Server', value: 'FastAPI / Python 3.10' }
    ]
  },
  {
    id: 'crown',
    name: 'Campus Crown',
    tagline: 'Campus-exclusive social ecosystem with verified student authentication and gamified title voting.',
    category: 'Full Stack',
    featured: true,
    problem: 'College communities lack unified internal digital spaces for verified student interactions, academic networking, department announcements, and campus cultural recognition.',
    whatIBuilt: 'A campus-exclusive social networking platform featuring verified college logins, dynamic student profile showcase, category-based campus title voting (e.g., Best Coder, Campus Leader), real-time leaderboards, and an event social feed.',
    architecture: [
      'Modular client-server architecture with React 19 and Vite',
      'Tailwind CSS v4 design system with micro-interactions',
      'Leaderboard calculation engine with Redis caching layer',
      'PostgreSQL relational schema for departments, events, and voting audit'
    ],
    techStack: [
      'React 19',
      'TypeScript',
      'Vite',
      'Tailwind CSS v4',
      'Node.js',
      'Express',
      'PostgreSQL',
      'Redis'
    ],
    githubUrl: 'https://github.com/rehan0018/Crown',
    orbitRadius: 7.0,
    orbitSpeed: 0.08,
    color: '#8FAFC4',
    stats: [
      { label: 'Frontend Engine', value: 'React 19 / TypeScript' },
      { label: 'Ranking Engine', value: 'Real-Time Leaderboards' },
      { label: 'Design System', value: 'Tailwind CSS v4' }
    ]
  },
  {
    id: 'e-commerce',
    name: 'E-Commerce Platform',
    tagline: 'Full-stack digital commerce application with inventory catalog, shopping cart, and transactional checkout.',
    category: 'Web Engineering',
    featured: false,
    problem: 'Building a responsive, reliable shopping portal with state synchronization between client catalog browsing and backend order processing.',
    whatIBuilt: 'A multi-page e-commerce web application featuring product browsing, category filtering, persistent cart state management, and structured checkout flow.',
    architecture: [
      'Modular MVC architecture with server-side request routing',
      'Catalog data models with category filtering and inventory checks',
      'Client-side cart synchronization with local state persistence'
    ],
    techStack: [
      'Python',
      'HTML5',
      'JavaScript',
      'CSS3',
      'REST Endpoints'
    ],
    githubUrl: 'https://github.com/rehan0018/E_commerce_poject_clg',
    orbitRadius: 8.2,
    orbitSpeed: 0.06,
    color: '#A7B0BA'
  },
  {
    id: 'shree-ram-vadapav',
    name: 'Shree Ram Vadapav',
    tagline: 'Web showcase and digital ordering interface for a quick-service culinary brand.',
    category: 'Web Engineering',
    featured: false,
    problem: 'Creating an intuitive, lightweight web presence for local food operations requiring instant menu access and zero-friction customer interaction across all devices.',
    whatIBuilt: 'A fast, responsive web application delivering modern visual presentation, menu exploration, brand story, and direct contact integration.',
    architecture: [
      'Semantic static frontend with optimized asset loading',
      'Fluid responsive layout with mobile-first CSS architecture',
      'Lightweight component structure without heavy runtime overhead'
    ],
    techStack: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'Mobile-First Layout'
    ],
    githubUrl: 'https://github.com/rehan0018/Shree_Ram_Vadapav',
    orbitRadius: 9.4,
    orbitSpeed: 0.05,
    color: '#6F7985'
  }
];
