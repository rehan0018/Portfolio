import { TechnologyCategory } from '../types';

export const technologyConstellations: TechnologyCategory[] = [
  {
    title: 'SOFTWARE',
    description: 'Constructing deterministic, high-integrity application layers and data backbones.',
    iconName: 'Code',
    nodes: [
      {
        name: 'Backend Engineering',
        description: 'Structured server architectures, REST routing, stateful orchestration',
        verifiedIn: 'Edufeedia, Alaadin, AneAI',
        children: [
          { name: 'Python (FastAPI / Flask)', verifiedIn: 'Edufeedia, AneAI' },
          { name: 'Node.js & Express', verifiedIn: 'Crown' },
          { name: 'Asynchronous Workflows', verifiedIn: 'Alaadin' }
        ]
      },
      {
        name: 'Frontend Engineering',
        description: 'Responsive, accessible, high-performance web interfaces',
        verifiedIn: 'Crown, AneAI, Shree Ram Vadapav',
        children: [
          { name: 'React 18 / 19 & TypeScript', verifiedIn: 'Crown, AneAI' },
          { name: 'Tailwind CSS (v3 / v4)', verifiedIn: 'Crown, AneAI' },
          { name: 'State & Event Pipelines', verifiedIn: 'Edufeedia' }
        ]
      },
      {
        name: 'APIs & Contracts',
        description: 'Predictable schemas, payload validation, and idempotency guarantees',
        verifiedIn: 'Alaadin, AneAI',
        children: [
          { name: 'REST & JSON Schema', verifiedIn: 'AneAI, Alaadin' },
          { name: 'JWT Auth & RBAC', verifiedIn: 'AneAI, Crown' },
          { name: 'Webhook Handling', verifiedIn: 'Alaadin' }
        ]
      },
      {
        name: 'Databases & Storage',
        description: 'Relational integrity, schema migrations, and caching',
        verifiedIn: 'Edufeedia, Crown',
        children: [
          { name: 'PostgreSQL & PLpgSQL', verifiedIn: 'Edufeedia' },
          { name: 'Redis (Caching & Queues)', verifiedIn: 'Crown, Alaadin' },
          { name: 'Alembic / SQL Migrations', verifiedIn: 'Edufeedia' }
        ]
      }
    ]
  },
  {
    title: 'SYSTEMS',
    description: 'Operating environments, process lifecycles, and low-level execution boundaries.',
    iconName: 'Cpu',
    nodes: [
      {
        name: 'Linux & OS Primitives',
        description: 'Process management, file systems, permissions, and shell scripting',
        verifiedIn: 'Deployment environments & repos',
        children: [
          { name: 'Bash & Shell Scripting', verifiedIn: 'Edufeedia' },
          { name: 'Process Signals & Daemonization' },
          { name: 'POSIX I/O & Networking' }
        ]
      },
      {
        name: 'Containers & Isolation',
        description: 'Deterministic builds and runtime containerization',
        verifiedIn: 'Edufeedia, AneAI, Alaadin',
        children: [
          { name: 'Docker & Dockerfile Design', verifiedIn: 'Edufeedia, AneAI, Alaadin' },
          { name: 'Docker Compose Topologies', verifiedIn: 'AneAI' },
          { name: 'Multi-stage Image Optimization' }
        ]
      },
      {
        name: 'Networking & Protocols',
        description: 'Data transmission semantics and gateway configuration',
        verifiedIn: 'Crown, Alaadin',
        children: [
          { name: 'TCP/IP, HTTP/1.1 & HTTP/2' },
          { name: 'CORS & Reverse Proxies' },
          { name: 'DNS & Traffic Routing' }
        ]
      },
      {
        name: 'System Design Principles',
        description: 'Architecting for fault isolation, idempotency, and clean boundaries',
        verifiedIn: 'Alaadin ERV Architecture',
        children: [
          { name: 'Idempotency Layers', verifiedIn: 'Alaadin' },
          { name: 'Fail-Closed Safety Defaults', verifiedIn: 'Edufeedia' },
          { name: 'Decoupled Event Pipelines' }
        ]
      }
    ]
  },
  {
    title: 'CLOUD & RELIABILITY',
    description: 'Infrastructure orchestration, continuous delivery, and operational observability.',
    iconName: 'Cloud',
    nodes: [
      {
        name: 'Cloud Infrastructure',
        description: 'Scalable compute, object storage, and managed data stores',
        verifiedIn: 'Project architectures',
        children: [
          { name: 'AWS Compute & Networking' },
          { name: 'Container Registry & Deployments' },
          { name: 'Environment Configurations & Secrets' }
        ]
      },
      {
        name: 'Reliability & Resilience',
        description: 'Graceful degradation, automated retries with backoff, and circuit breakers',
        verifiedIn: 'Alaadin, Edufeedia',
        children: [
          { name: 'Expected Recovery Value (ERV) Logic', verifiedIn: 'Alaadin' },
          { name: 'Error Budgets & Health Checks' },
          { name: 'Policy-Based Veto Rules', verifiedIn: 'Alaadin' }
        ]
      },
      {
        name: 'Observability & SRE',
        description: 'System telemetry, structured logging, and operational audits',
        verifiedIn: 'Edufeedia README Section 15',
        children: [
          { name: 'Structured Application Telemetry', verifiedIn: 'Edufeedia' },
          { name: 'Audit Trails & Event Verification', verifiedIn: 'Alaadin' },
          { name: 'Log Aggregation & Performance Metrics' }
        ]
      }
    ]
  },
  {
    title: 'INTELLIGENCE',
    description: 'Bridging predictive machine learning with deterministic software policies.',
    iconName: 'Sparkles',
    nodes: [
      {
        name: 'Machine Learning',
        description: 'Statistical classification, regression, and survival analysis',
        verifiedIn: 'AneAI, Alaadin',
        children: [
          { name: 'XGBoost & Random Forest', verifiedIn: 'AneAI' },
          { name: 'Calibrated Classifiers (Brier/ECE)', verifiedIn: 'Alaadin' },
          { name: 'Scikit-Learn & Feature Preprocessing', verifiedIn: 'AneAI' }
        ]
      },
      {
        name: 'Explainable AI (XAI)',
        description: 'Interpretable machine intelligence for high-stakes decision support',
        verifiedIn: 'AneAI',
        children: [
          { name: 'SHAP (Shapley Additive exPlanations)', verifiedIn: 'AneAI' },
          { name: 'Global & Local Feature Importance', verifiedIn: 'AneAI' },
          { name: 'Clinical Risk Factor Attribution', verifiedIn: 'AneAI' }
        ]
      },
      {
        name: 'Socratic AI & RAG',
        description: 'Curriculum-aligned retrieval and guided educational dialogue',
        verifiedIn: 'Edufeedia',
        children: [
          { name: 'Socratic RAG Architecture', verifiedIn: 'Edufeedia' },
          { name: 'Curriculum Grounding & Hallucination Prevention', verifiedIn: 'Edufeedia' },
          { name: 'Multi-Category Content Safety Guardrails', verifiedIn: 'Edufeedia' }
        ]
      },
      {
        name: 'Cognitive Algorithms',
        description: 'Algorithmic models of memory and human learning',
        verifiedIn: 'Edufeedia',
        children: [
          { name: 'SuperMemo SM-2 Spaced Repetition', verifiedIn: 'Edufeedia' },
          { name: 'Active Recall Mechanisms', verifiedIn: 'Edufeedia' },
          { name: 'Adaptive Difficulty Progression' }
        ]
      }
    ]
  }
];
