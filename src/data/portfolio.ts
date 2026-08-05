import type { PortfolioData } from "../hooks/usePortfolio";
import type {
  StatMetric,
  Skill,
  SkillCategory,
  SkillLevel,
  Project,
  TimelineEvent,
  ArchitectureStack,
  AIStack,
  IntegrationStack,
  QualityStack,
  SecurityStack,
  MonitoringStack,
  DevEnvironmentStack,
  DatabaseStack,
  UXStack,
  BIStack,
  TechnologyRadar,
} from "../types/design-system";

export const personalInfo = {
  name: "Ali Akhmad Fauzie",
  title:
    "Enterprise Power Platform & Dynamics 365 Solution Architect | Dataverse Data Architect | AI & ALM Lead",
  tagline:
    "365+ apps modernized · Dataverse migration blueprint · 50+ AI agents · Enterprise ALM across 28+ departments",
  bio: `Enterprise Power Platform & Dynamics 365 Solution Architect with 7+ years of service delivery, operations leadership, and dual-track transformation experience spanning low-code Canvas Apps, code-first React/TypeScript platforms, and Dataverse data architecture.

Proven track record leading large-scale digital modernization at a publicly listed Malaysian conglomerate (palm oil, oleochemicals, property) — migrating 361 legacy Lotus Domino forms into a dual-track Microsoft 365 environment with 16 production Power Apps Canvas apps, 400+ TypeScript components, and a React 19 code-first platform. SharePoint Online was selected as the Phase 1 data store to leverage existing M365 licensing with zero additional cost, while a Phase 2 Dataverse Migration Blueprint defines the path to enterprise-grade relational data, row-level security, Business Units, and polymorphic lookups.

Architecture expertise spans Dataverse solution design with managed/unmanaged solution boundaries, environment strategy (Dev → Build → Test → Prod), connection reference management, environment variables, PCF Controls (TypeScript/React), and C# Dataverse Plugins with pre/post-operation telemetry via Application Insights. AI-enabled delivery with 50+ specialized Copilot agents across 12 automated workflows, Power Platform governance with WCAG 2.2 AA and OWASP Top 10 standards, and operational process optimization with 98%+ SLA compliance.

Self-taught developer who pioneered Power Platform adoption on the BPO operations floor in 2021, building end-to-end operational tools using Power Apps, Power Automate, and SharePoint to manage teams, track KPIs, and automate workflows.`,
  location: "Indonesia",
  email: "aliakhmadfauzie@gmail.com",
  social: {
    github: "https://github.com/altechsolution123",
    linkedin: "https://linkedin.com/in/aliakhmadf",
  },
};

export const skills = [
  {
    category: "Power Platform & Dynamics 365",
    items: [
      "Power Apps Canvas",
      "Power Automate",
      "Dataverse",
      "Power Fx",
      "Power Pages",
      "Model-Driven Apps",
      "PCF Controls",
      "PA YAML v3.0",
    ],
  },
  {
    category: "Dataverse & Data Architecture",
    items: [
      "Dataverse Table Design",
      "Business Units & Security Roles",
      "Row-Level & Field-Level Security",
      "Polymorphic Lookups",
      "Alternate Keys & Plugins",
      "C# Plugin Development",
      "Custom Workflow Activities",
    ],
  },
  {
    category: "Frontend & Code-First",
    items: [
      "React 19",
      "TypeScript 5.9",
      "Vite",
      "shadcn/ui",
      "Jotai",
      "TanStack Query",
      "Fluent UI v9",
    ],
  },
  {
    category: "ALM & DevOps",
    items: [
      "GitHub Actions",
      "Azure DevOps Pipelines",
      "PAC CLI",
      "Solution Segmentation",
      "Managed vs Unmanaged Solutions",
      "Environment Variables",
      "Connection References",
      "PnP PowerShell",
    ],
  },
  {
    category: "AI & Copilot",
    items: [
      "GitHub Copilot",
      "Copilot Studio",
      "AI Agent Architecture",
      "Azure OpenAI",
      "RAG Architecture",
      "DLP Guardrails",
      "Python",
      "PowerShell",
    ],
  },
  {
    category: "Enterprise Architecture",
    items: [
      "Solution Architecture",
      "Environment Strategy (Dev→Build→Test→Prod)",
      "Dataverse Migration Blueprint",
      "SharePoint-to-Dataverse Roadmap",
      "GxP Compliance",
      "OWASP Top 10",
      "WCAG 2.2 AA",
    ],
  },
  {
    category: "Leadership & Operations",
    items: [
      "Enterprise Solution Delivery",
      "Power Platform Governance",
      "SLA & Operations Management (98%+)",
      "Team Scaling (9 → 34+)",
      "Stakeholder & Client Engagement",
      "SOW Negotiation & Budget Oversight",
    ],
  },
];

export const project = {
  title: "Enterprise Legacy System Modernization",
  subtitle:
    "Enterprise-Wide Digital Transformation for a Publicly Listed Malaysian Conglomerate",
  client: "IOI Corporation Berhad — palm oil, oleochemicals, property",
  scale: "365+ forms · 28+ departments · 2 sites (Penang + Johor) · Dataverse Migration Blueprint",
  overview: `Led the modernization of 365 business applications across 28+ departments from Lotus Domino to Microsoft 365. Designed a dual-track solution combining modern web applications (React/TypeScript) with 16 low-code Power Apps. SharePoint Online was selected as the Phase 1 data store to eliminate initial licensing costs — with full acknowledgment of its constraints: 5,000-item list threshold, no native relational keys, no row/field-level security, and API throttling under concurrent loads. A Phase 2 Dataverse Migration Blueprint defines the enterprise-grade path forward: Dataverse tables with polymorphic lookups, Business Unit hierarchy for data isolation, Security Role inheritance, Field Security Profiles for PII, and managed solution ALM with staged environment promotion.`,
    "Proprietary legacy technology — extremely difficult to find developers to maintain it",
    "No integration with Microsoft Teams, no mobile approvals, no cloud storage, no SSO",
  challenge: [
    "Aging Lotus Domino platform (20+ years old) with no mobile access, modern security, or cloud integration",
    "Proprietary legacy technology — extremely difficult to find developers to maintain it",
    "No integration with Microsoft Teams, no mobile approvals, no cloud storage, no SSO",
    "Budget constraints required Phase 1 to use existing M365 licensing (SharePoint Online) — accepting its 5,000-item threshold and lack of relational integrity as Phase 1 trade-offs",
    "Compliance risks — no multi-factor authentication, no audit trails, no data retention policies",
    "Manual processes everywhere — email-based approvals, paper forms, disconnected workflows",
    "Need for enterprise-grade Dataverse architecture in Phase 2 with row-level security and managed solution ALM",
  ],
  approach: [
    {
      phase: "Phase 1: Discovery & Analysis",
      detail:
        "Extracted and documented all 365+ business applications from the legacy system — catalogued 1,171 user interface screens, mapped every data field to its Microsoft 365 equivalent, and documented all business workflows and notification rules.",
    },
    {
      phase: "Phase 2: Architecture Design",
      detail:
        "Designed a dual-track solution: a modern React web application for complex functionality, and 16 Power Apps for departmental business apps. Key architectural decisions: SharePoint Online as Phase 1 data store (zero additional licensing cost, accepting its 5,000-item threshold and lack of relational integrity), Dataverse Migration Blueprint for Phase 2 (Business Units mapped to department hierarchy, Security Role inheritance, Field Security Profiles for PII/financial data, polymorphic lookups, alternate keys for ERP sync), managed vs. unmanaged solution boundaries with solution segmentation, environment strategy (Dev → Build → Test → Prod) with deployment settings files and dynamic connection references, and automated workflows via Power Automate.",
    },
    {
      phase: "Phase 2b: Dataverse Migration Blueprint",
      detail:
        "Defined enterprise-grade Dataverse target architecture: Entity-Relationship Diagram with MainDB parent tables using FormCode discriminator, child task tables with polymorphic lookups, Business Unit hierarchy for departmental data isolation, Security Role inheritance model, Field Security Profiles for sensitive columns, and alternate keys for Oracle ERP bidirectional sync. Migration roadmap: SharePoint list → Dataverse table with column mapping, data transformation rules, and staged rollout per department.",
    },
    {
      phase: "Phase 2c: C# Plugins & PCF Controls",
      detail:
        "Built C# Dataverse Plugins registered on Pre/Post-Operation execution pipeline stages with Application Insights telemetry for plugin performance monitoring. Developed PCF Controls (TypeScript/React) for custom UI components extending Model-Driven App functionality — including a dynamic lookup selector with server-side filtering and a multi-level approval tree component.",
    },
    {
      phase: "Phase 2d: Enterprise ALM Pipeline",
      detail:
        "Implemented complete CI/CD pipeline: GitHub Actions + Azure DevOps with Power Platform Build Tools. Solution segmentation strategy: separate managed solutions for core entities, business logic, and UI layer. Deployment settings files with per-environment connection references, environment variables, and dynamic configuration. Staged solution promotion: Dev (unmanaged) → Build (export + managed) → Test (managed import + validation) → Prod (managed import + smoke test).",
    },
    {
      phase: "Phase 3: AI-Accelerated Development",
      detail:
        "Built a team of 50+ AI coding assistants organized into 12 automated development pipelines. This AI ecosystem handled analysis, specification writing, code generation, and quality checks — cutting development time by 70% while maintaining enterprise quality standards.",
    },
    {
      phase: "Phase 4: Delivery",
      detail:
        "Delivered 16 production applications with 400+ reusable components, 45+ custom data hooks, and 1,800+ automation scripts. All apps accessible on desktop, tablet, and mobile — with modern security (single sign-on, multi-factor authentication, audit trails).",
    },
    {
      phase: "Phase 5: Quality & Governance",
      detail:
        "Established enterprise-wide standards for accessibility (WCAG 2.2 AA), security (OWASP Top 10), and performance (Core Web Vitals). Implemented automated testing, code review pipelines, and change management processes adopted across the organization.",
    },
  ],
  results: [
    { metric: "Forms Migrated", value: "365+" },
    { metric: "Departments", value: "28+" },
    { metric: "Production Apps", value: "16" },
    { metric: "Reusable Component Library", value: "400+" },
    { metric: "Automation Scripts", value: "1,800+" },
    { metric: "AI Agent Pipelines", value: "12" },
    { metric: "Concurrent User Capacity", value: "500+" },
    { metric: "Annual License Savings", value: "$100K+" },
  ],
  techStack: [
    "Power Apps",
    "Power Fx",
    "Power Automate",
    "SharePoint Online",
    "React 19",
    "TypeScript 5.9",
    "Vite",
    "shadcn/ui",
    "Jotai",
    "TanStack Query",
    "GitHub Copilot",
    "GitHub Actions",
    "Azure Pipelines",
    "PAC CLI",
    "PnP PowerShell",
    "Microsoft Entra ID",
  ],
  architecture: {
    title: "Solution Architecture",
    description:
      "Dual-track architecture: React 19 code-first platform for complex workflows + 16 Power Apps Canvas apps for departmental business apps. Phase 1: SharePoint Online as primary data store (zero licensing cost, accepting 5,000-item threshold). Phase 2: Dataverse Migration Blueprint with Business Units, Security Roles, polymorphic lookups, and managed solution ALM. AI pipeline: 50+ agents with RAG-grounded Azure OpenAI and DLP guardrails. ALM: GitHub Actions + Azure DevOps with solution segmentation, deployment settings files, and staged Dev→Build→Test→Prod promotion.",
  },
};

export const highlights = [
  {
    icon: "🏗️",
    title: "Dual-Track Architecture with Dataverse Migration Blueprint",
    description:
        "Phase 1 delivered on SharePoint Online (zero additional licensing cost) across 16 production Power Apps. Phase 2 Dataverse Migration Blueprint defines enterprise-grade relational data with row-level security, Business Units, polymorphic lookups, and managed solution ALM — ensuring the architecture scales to enterprise complexity.",
  },
  {
    icon: "🤖",
    title: "AI-Powered Development & Copilot Studio",
    description:
        "Built 50+ specialized AI coding agents across 12 automated pipelines: form migration, TSX development, Canvas screen generation, QA testing, governance auditing, and documentation. Each pipeline uses Azure OpenAI (GPT-4o) with RAG architecture — vector-indexed SharePoint schema documentation, PA YAML v3.0 reference, and project-specific business rules ground every AI response. Copilot Studio declarative agents with topic triggers handle enterprise queries. DLP policies enforce data classification and prevent PII leakage into AI outputs.",
  },
  {
    icon: "🏛️",
    title: "Enterprise ALM & Solution Governance",
    description:
        "Implemented enterprise ALM with GitHub Actions and Azure DevOps using Power Platform Build Tools. Solution segmentation: separate managed solutions for core entities, business logic, and UI layer. Deployment settings files with per-environment dynamic connection references and environment variables. Staged promotion: Dev (unmanaged) → Build (export + managed packaging) → Test (managed import + automated validation) → Prod (managed import + smoke test). Solution checker runs on every PR.",
  },
  {
    icon: "🔌",
    title: "Dataverse Plugin & PCF Control Development",
    description:
        "Built C# Dataverse Plugins registered on Pre/Post-Operation execution pipeline stages with Application Insights telemetry for plugin performance monitoring and error tracking. Developed PCF Controls (TypeScript/React) for custom UI: dynamic lookup selectors with server-side OData filtering, multi-level approval tree components, and real-time status indicators with SignalR integration — extending Model-Driven App capabilities beyond standard canvas limitations.",
  },
  {
    icon: "💰",
    title: "ERP & Procurement Integration",
    description:
        "End-to-end e-Procurement with real-time Oracle PowerBiz ERP bidirectional synchronization via Custom Connectors. CIP Capex Budget Control, multi-vendor PO splits, and SPQQ external supplier portal — all built with standard Microsoft 365 tools.",
  },
  {
    icon: "📐",
    title: "Enterprise-Grade Quality & Compliance",
    description:
        "Every application meets international standards for accessibility (WCAG 2.2 AA), security (OWASP Top 10), and performance (Core Web Vitals). Automated testing, code review pipelines, and GxP compliance with immutable audit trails.",
  },
  {
    icon: "📊",
    title: "Delivered at Enterprise Scale",
    description:
        "365 business applications across 28+ departments, 400+ reusable components, and 1,800+ automation scripts — all delivered on schedule with measurable business impact: 70% faster delivery, $100K+ annual license savings, 98%+ SLA compliance.",
  },
];

// ============================================================
// Typed Portfolio Data (new design system format)
// ============================================================

// NOTE: Type imports are at the top of this file (lines 1-2)

export const developer = {
  name: personalInfo.name,
  title: personalInfo.title,
  email: personalInfo.email,
  phone: "+60 13-295 7406",
  location: personalInfo.location,
  github: "altechsolution123",
  linkedin: "aliakhmadf",
  twitter: "altechsolution123",
  status: "Available for enterprise architecture & AI consulting",
  bio: personalInfo.bio,
  avatar: `${import.meta.env.BASE_URL}avatar.jpg`,
} as const;

// Dataverse Migration Blueprint — Phase 2 Architecture
export const dataverseMigrationBlueprint = {
  title: "Dataverse Migration Blueprint — Phase 2",
  description:
    "Enterprise-grade transition from SharePoint Online to Dataverse with full relational data model, security role inheritance, and managed solution ALM.",
  erd: [
    "Business Units mapped to department hierarchy",
    "MainDB parent tables with FormCode discriminator",
    "Child task tables with polymorphic lookups",
    "Row-level security profiles per department",
    "Field-level security for sensitive columns",
    "Alternate keys for ERP synchronization",
  ],
  securityModel: [
    "Dataverse Security Roles per department",
    "Business Unit hierarchy for data isolation",
    "Row-Level Security Profiles",
    "Field-Level Security for PII/financial data",
    "Audit logging with immutable trails",
  ],
  alm: [
    "Managed vs. Unmanaged solution boundaries",
    "Environment Variables for configuration",
    "Connection References for data source portability",
    "Deployment Settings Files for per-environment config",
    "GitHub Actions CI/CD with Power Platform Build Tools",
    "Staged solution promotion: Dev → Build → Test → Prod",
  ],
};

export const metrics: StatMetric[] = [
  {
    label: "Enterprise Apps Modernized",
    value: 365,
    icon: "rocket",
    suffix: "+",
  },
  { label: "Production Systems Built", value: 16, icon: "layout", suffix: "" },
  { label: "Component Library Adoption", value: 400, icon: "layers", suffix: "+" },
  { label: "Delegation-Compliant Data Models", value: 28, icon: "database", suffix: "+" },
  { label: "License Cost Savings", value: 100, icon: "dollar", suffix: "K+" },
  { label: "Departments Served", value: 28, icon: "building", suffix: "+" },
];

export const allSkills: Skill[] = [
  // Low-Code / No-Code
  {
    name: "Power Apps Canvas",
    level: 4 as SkillLevel,
    category: "platform" as SkillCategory,
  },
  {
    name: "Power Automate",
    level: 4 as SkillLevel,
    category: "platform" as SkillCategory,
  },
  {
    name: "Dataverse",
    level: 4 as SkillLevel,
    category: "platform" as SkillCategory,
  },
  {
    name: "Dataverse Plugins (C#)",
    level: 4 as SkillLevel,
    category: "platform" as SkillCategory,
  },
  {
    name: "PCF Controls",
    level: 4 as SkillLevel,
    category: "platform" as SkillCategory,
  },
  {
    name: "Model-Driven Apps",
    level: 4 as SkillLevel,
    category: "platform" as SkillCategory,
  },
  {
    name: "Power BI",
    level: 4 as SkillLevel,
    category: "platform" as SkillCategory,
  },
  {
    name: "AI Builder",
    level: 4 as SkillLevel,
    category: "platform" as SkillCategory,
  },
  {
    name: "Power Pages",
    level: 4 as SkillLevel,
    category: "platform" as SkillCategory,
  },
  {
    name: "Microsoft Forms",
    level: 4 as SkillLevel,
    category: "platform" as SkillCategory,
  },
  // Languages & Frameworks
  {
    name: "Power Fx",
    level: 4 as SkillLevel,
    category: "language" as SkillCategory,
  },
  {
    name: "TypeScript",
    level: 4 as SkillLevel,
    category: "language" as SkillCategory,
  },
  {
    name: "YAML / PA YAML",
    level: 4 as SkillLevel,
    category: "language" as SkillCategory,
  },
  {
    name: "JavaScript",
    level: 4 as SkillLevel,
    category: "language" as SkillCategory,
  },
  {
    name: "HTML/CSS",
    level: 4 as SkillLevel,
    category: "language" as SkillCategory,
  },
  {
    name: "SQL",
    level: 3 as SkillLevel,
    category: "language" as SkillCategory,
  },
  {
    name: "Python",
    level: 3 as SkillLevel,
    category: "language" as SkillCategory,
  },
  {
    name: "C#",
    level: 4 as SkillLevel,
    category: "language" as SkillCategory,
  },
  // Frontend
  {
    name: "React",
    level: 4 as SkillLevel,
    category: "framework" as SkillCategory,
  },
  {
    name: "Vite",
    level: 4 as SkillLevel,
    category: "framework" as SkillCategory,
  },
  {
    name: "shadcn/ui",
    level: 4 as SkillLevel,
    category: "framework" as SkillCategory,
  },
  // Integrations & APIs
  {
    name: "SharePoint Online",
    level: 4 as SkillLevel,
    category: "cloud" as SkillCategory,
  },
  {
    name: "REST APIs",
    level: 4 as SkillLevel,
    category: "cloud" as SkillCategory,
  },
  {
    name: "Custom Connectors",
    level: 4 as SkillLevel,
    category: "cloud" as SkillCategory,
  },
  {
    name: "ERP Integration",
    level: 4 as SkillLevel,
    category: "cloud" as SkillCategory,
  },
  {
    name: "GxP Compliance",
    level: 4 as SkillLevel,
    category: "cloud" as SkillCategory,
  },
  {
    name: "Microsoft Entra ID",
    level: 4 as SkillLevel,
    category: "cloud" as SkillCategory,
  },
  // DevOps & ALM
  {
    name: "GitHub Copilot",
    level: 4 as SkillLevel,
    category: "tool" as SkillCategory,
  },
  {
    name: "Git / GitHub",
    level: 4 as SkillLevel,
    category: "tool" as SkillCategory,
  },
  {
    name: "GitHub Actions",
    level: 4 as SkillLevel,
    category: "tool" as SkillCategory,
  },
  {
    name: "Azure Pipelines",
    level: 3 as SkillLevel,
    category: "tool" as SkillCategory,
  },
  {
    name: "PAC CLI",
    level: 4 as SkillLevel,
    category: "tool" as SkillCategory,
  },
  {
    name: "PnP PowerShell",
    level: 4 as SkillLevel,
    category: "tool" as SkillCategory,
  },
  {
    name: "ALM / DevOps",
    level: 4 as SkillLevel,
    category: "tool" as SkillCategory,
  },
  // Lark / Collaboration
  {
    name: "Lark Base",
    level: 4 as SkillLevel,
    category: "platform" as SkillCategory,
    secondary: true,
  },
  {
    name: "Lark Automation",
    level: 4 as SkillLevel,
    category: "platform" as SkillCategory,
    secondary: true,
  },
  {
    name: "Lark Chat",
    level: 4 as SkillLevel,
    category: "platform" as SkillCategory,
    secondary: true,
  },
  // AI & Copilot
  {
    name: "Copilot Studio",
    level: 4 as SkillLevel,
    category: "platform" as SkillCategory,
  },
  {
    name: "AI Agent Architecture",
    level: 4 as SkillLevel,
    category: "platform" as SkillCategory,
  },
  // Leadership
  {
    name: "Team Leadership & Operations",
    level: 4 as SkillLevel,
    category: "leadership" as SkillCategory,
  },
  {
    name: "Process Mapping & Optimization",
    level: 4 as SkillLevel,
    category: "leadership" as SkillCategory,
  },
  {
    name: "Cross-Border Project Execution",
    level: 4 as SkillLevel,
    category: "leadership" as SkillCategory,
  },
  {
    name: "Stakeholder Alignment",
    level: 4 as SkillLevel,
    category: "leadership" as SkillCategory,
  },
];

export const typedProjects: Project[] = [
  {
    section: "Power Platform",
    id: 1,
    title: "IOI Domino → Microsoft 365 Migration",
    status: "merged",
    statusColor: "green",
    description:
      "Led enterprise-wide migration of 365+ Lotus Domino business applications to Microsoft Power Platform across 28+ departments. Phase 1 delivered on SharePoint Online (zero additional licensing cost) with 16 production Power Apps. Dataverse Migration Blueprint defined for Phase 2 with row-level security, Business Units, and managed solution ALM. Built 50+ AI agents across 12 automated pipelines.",
    metrics: [
      { label: "Apps Migrated", value: "365+" },
      { label: "Reusable Components", value: "400+" },
      { label: "Production Apps", value: "16" },
      { label: "Automation Scripts", value: "1,800+" },
    ],
    tech: [
      "Power Apps",
      "Power Automate",
      "Dataverse",
      "SharePoint Online",
      "React 19",
      "TypeScript",
      "GitHub Copilot",
    ],
    impact: "70% faster delivery with AI-assisted development, $100K+ annual license savings",
    commits: 1200,
    filesChanged: 3400,
    mergedDate: "2026-06-15",
    links: {
      caseStudy: "#case-study",
      github: "https://github.com/altechsolution123",
    },
  },
  {
    section: "Power Platform",
    id: 2,
    title: "AI-Enabled Development Pipeline",
    status: "merged",
    statusColor: "purple",
    description:
      "Built 50+ specialized AI coding agents across 12 automated pipelines: form migration, TSX development, Canvas screen generation, QA testing, governance auditing, documentation, code review, and performance optimization. Each agent uses Azure OpenAI (GPT-4o) with RAG architecture — vector-indexed SharePoint schema, PA YAML v3.0 reference, and business rules ground every response. Copilot Studio declarative agents with topic triggers handle enterprise queries. DLP policies enforce data classification. Reduced migration delivery time by 70%.",
    metrics: [
      { label: "AI Agents", value: "50+" },
      { label: "Pipelines", value: "12" },
      { label: "Effort Reduction", value: "70%" },
    ],
    tech: [
      "GitHub Copilot",
      "Python",
      "TypeScript",
      "PowerShell",
      "Azure OpenAI",
    ],
    impact: "70% reduction in form migration effort",
    commits: 450,
    filesChanged: 1200,
    mergedDate: "2026-04-20",
  },
  {
    section: "Power Platform",
    id: 3,
    title: "E-Procurement System & Oracle PowerBiz ERP Integration",
    status: "merged",
    statusColor: "purple",
    description:
      "End-to-end purchasing suite on Dataverse with Purchase Requisition LOA routing, Purchase Orders with multi-vendor splits, CIP Capex Budget Control, and SPQQ Supplier Portal. Bidirectional Oracle PowerBiz ERP sync via Custom Connectors with managed solution ALM, environment variables, and connection references.",
    metrics: [
      { label: "Procurement Modules", value: "5" },
      { label: "ERP Sync Rate", value: "100%" },
      { label: "Vendor Portal Users", value: "200+" },
    ],
    tech: [
      "Power Apps Canvas",
      "Dataverse",
      "Power Automate",
      "Oracle ERP",
      "Custom Connectors",
      "REST APIs",
      "Managed Solutions",
    ],
    impact: "Real-time bidirectional ERP sync replacing manual data entry",
    commits: 620,
    filesChanged: 1800,
    mergedDate: "2025-11-20",
  },
  {
    section: "Power Platform",
    id: 4,
    title: "SmartFlow — Business Request Automation",
    status: "merged",
    statusColor: "green",
    description:
      "Automated business request processing with architectural depth: Power Automate flows with conditional branching, parallel approval paths, and error handling via Configure Run After. SharePoint list as queue with indexed columns for delegation-safe filtering. Power BI dashboard with DAX measures for real-time SLA tracking. Teams notification cards via Adaptive Cards. 80% manual task reduction, 90% data accuracy.",
    metrics: [
      { label: "Manual Task Reduction", value: "80%" },
      { label: "Data Accuracy", value: "90%" },
      { label: "Real-Time Tracking", value: "100%" },
    ],
    tech: [
      "Power Apps",
      "Microsoft Forms",
      "Power Automate",
      "SharePoint",
      "Power BI",
      "Teams",
    ],
    impact: "80% reduction in manual processing, 90% data accuracy",
    commits: 340,
    filesChanged: 950,
    mergedDate: "2025-08-15",
  },
  {
    section: "Power Platform",
    id: 5,
    title: "PulseTrack — Workforce Management",
    status: "merged",
    statusColor: "purple",
    description:
      "Real-time workforce management with enterprise architecture: Power Apps Canvas with delegation-compliant queries against SharePoint list (indexed Status + Agent columns), Power Automate flows for automated status aggregation via recurrence triggers, Power BI semantic model with star-schema data modeling and DAX measures for SLA compliance tracking. Eliminated manual reporting by 90%, increased accuracy to 98%, reduced team leader workload by 70%.",
    metrics: [
      { label: "Manual Reporting Cut", value: "90%" },
      { label: "Status Accuracy", value: "98%" },
      { label: "Manager Workload Saved", value: "70%" },
    ],
    tech: ["Power Apps", "Power Automate", "SharePoint", "Power BI", "Teams"],
    impact: "90% reduction in manual reporting, 98% tracking accuracy",
    commits: 290,
    filesChanged: 720,
    mergedDate: "2025-05-10",
  },
  {
    section: "Power Platform",
    id: 6,
    title: "CS Resolver — AI-Powered Customer Service",
    status: "merged",
    statusColor: "orange",
    description:
      "AI-powered case classification with enterprise architecture: AI Builder text classification model trained on 120+ SOP categories, Power Automate flows with parallel branching for multi-step case routing, SharePoint list with indexed columns and delegation-safe OData filters for case queue management. Pre-operation validation ensures classification confidence threshold before auto-assignment. 50% classification accuracy boost, 65% faster handling time.",
    metrics: [
      { label: "Classification Boost", value: "50%" },
      { label: "Handling Time Cut", value: "65%" },
      { label: "SOP Categories", value: "120+" },
    ],
    tech: ["Power Apps Canvas", "AI Builder", "Power Automate", "SharePoint"],
    impact: "50% classification accuracy boost, 65% faster case resolution",
    commits: 210,
    filesChanged: 540,
    mergedDate: "2025-03-01",
  },
  {
    section: "Power Platform",
    id: 8,
    title: "Rebate Approval System — Isolated Compliance",
    status: "merged",
    statusColor: "red",
    description:
      "Standalone corporate approval workflow on Dataverse with complete database isolation. Architecture: separate Dataverse Business Unit for financial data, Security Role inheritance with 5-tier approval matrix (Requestor → Line Manager → Finance → Compliance → Executive), Field Security Profiles on amount/PO columns, immutable audit trail via Dataverse Auditing with column-level tracking, and pre-operation C# Plugin for validation rules. Fully isolated for GxP compliance.",
    metrics: [
      { label: "Approval Tiers", value: "5" },
      { label: "Audit Compliance", value: "100%" },
      { label: "Data Isolation", value: "Complete" },
    ],
    tech: ["Power Apps", "Dataverse", "Power Automate", "Row-Level Security", "Audit Logs"],
    impact: "Fully isolated approval engine for sensitive financial rebates",
    commits: 180,
    filesChanged: 460,
    mergedDate: "2025-01-20",
  },
  {
    section: "Operational History",
    id: 9,
    title: "DocFinder — AI Document Search",
    status: "merged",
    statusColor: "orange",
    description:
      "AI-powered operational guidelines search engine. Built on Lark ecosystem (pre-Microsoft stack, 2024). Uses AI Builder for intelligent document classification — 80% faster search times, 99% accuracy.",
    metrics: [
      { label: "Search Speed Boost", value: "80%" },
      { label: "Recommendation Accuracy", value: "99%" },
      { label: "Documents Indexed", value: "5000+" },
    ],
    tech: ["AI Builder", "Lark Chat", "Lark Base"],
    impact: "80% faster document search, 99% recommendation accuracy",
    commits: 140,
    filesChanged: 340,
    mergedDate: "2024-05-10",
  },
  {
    section: "Operational History",
    id: 10,
    title: "LeadFlow — Task & Progress Management",
    status: "merged",
    statusColor: "green",
    description:
      "Task tracking and progress management system. Built on Lark ecosystem (pre-Microsoft stack, 2024). Increased task completion rates by 40% with real-time visibility.",
    metrics: [
      { label: "Task Completion Boost", value: "40%" },
      { label: "Real-Time Tracking", value: "100%" },
      { label: "Team Adoption", value: "95%" },
    ],
    tech: ["Lark Task", "Lark Automation", "Lark Base", "Power BI"],
    impact: "40% increase in task completion, 100% real-time visibility",
    commits: 160,
    filesChanged: 380,
    mergedDate: "2024-11-01",
  },
  {
    section: "Operational History",
    id: 11,
    title: "LeaveSync — Smart Leave Management",
    status: "merged",
    statusColor: "purple",
    description:
      "Automated leave management system. Built on Lark ecosystem (pre-Microsoft stack, 2024). Cut leave processing time by 60%, accelerated approvals by 60%.",
    metrics: [
      { label: "Processing Speed", value: "60%" },
      { label: "Approval Speed", value: "60%" },
      { label: "Tracking Accuracy", value: "90%" },
    ],
    tech: ["Lark Base", "Lark Automation", "Lark Chat"],
    impact: "60% faster leave processing and approvals",
    commits: 130,
    filesChanged: 310,
    mergedDate: "2024-09-15",
  },
  {
    section: "Operational History",
    id: 12,
    title: "AskLark — Intelligent Query Management",
    status: "merged",
    statusColor: "green",
    description:
      "Smart query management system. Built on Lark ecosystem (pre-Microsoft stack, 2024). Achieved 60% faster response times and 50% reduction in repeated queries.",
    metrics: [
      { label: "Response Speed", value: "60%" },
      { label: "Repeat Queries Cut", value: "50%" },
      { label: "Agent Satisfaction", value: "92%" },
    ],
    tech: ["Lark Base", "Lark Automation"],
    impact: "60% faster responses, 50% fewer repeated queries",
    commits: 110,
    filesChanged: 260,
    mergedDate: "2024-07-20",
  },
  {
    section: "Operational History",
    id: 13,
    title: "MarketPoint — GIP POC Monitoring",
    status: "merged",
    statusColor: "red",
    description:
      "Dedicated point-of-contact monitoring system for GIP operations. Built on Lark ecosystem (pre-Microsoft stack, 2024). Improved monitoring efficiency by 40%.",
    metrics: [
      { label: "Monitoring Efficiency", value: "40%" },
      { label: "Issue Resolution Speed", value: "50%" },
      { label: "Markets Covered", value: "12" },
    ],
    tech: ["Lark Base", "Lark Automation", "Power BI"],
    impact: "40% monitoring efficiency gain, 50% faster issue resolution",
    commits: 120,
    filesChanged: 290,
    mergedDate: "2024-03-01",
  },
  {
    section: "Operational History",
    id: 14,
    title: "GameIntel — Real-Time Event Alerts",
    status: "merged",
    statusColor: "green",
    description:
      "Instant event alert system for game moderators. Built on Lark ecosystem (pre-Microsoft stack, 2024). REST API integration. Reduced external searches by 80%.",
    metrics: [
      { label: "External Search Cut", value: "80%" },
      { label: "Labeling Accuracy", value: "40%" },
      { label: "Alert Latency", value: "<1s" },
    ],
    tech: ["Game Data REST APIs", "Lark Automation", "Lark Chat"],
    impact: "80% reduction in external searches, sub-second alerts",
    commits: 90,
    filesChanged: 220,
    mergedDate: "2024-01-15",
  },
  {
    section: "Operational History",
    id: 15,
    title: "WorkSync — Productivity & Attendance Tracker",
    status: "merged",
    statusColor: "purple",
    description:
      "Smart productivity and attendance tracking platform. Built on Lark ecosystem (pre-Microsoft stack, 2024). Delivered 30% productivity increase with real-time insights.",
    metrics: [
      { label: "Productivity Increase", value: "30%" },
      { label: "Attendance Accuracy", value: "100%" },
      { label: "Team Adoption", value: "98%" },
    ],
    tech: ["Lark Automation", "Lark Base", "Power BI"],
    impact: "30% productivity lift, 100% real-time attendance visibility",
    commits: 150,
    filesChanged: 360,
    mergedDate: "2023-11-01",
  },
  {
    section: "Operational History",
    id: 16,
    title: "AHT Optimization Initiative",
    status: "merged",
    statusColor: "green",
    description:
      "Data-driven initiative to reduce Average Handling Time across customer service operations. Built on Lark ecosystem (pre-Microsoft stack, 2024). Achieved 15% AHT reduction through automated workflow optimization.",
    metrics: [
      { label: "AHT Reduction", value: "15%" },
      { label: "Processes Optimized", value: "24" },
      { label: "Teams Impacted", value: "8" },
    ],
    tech: ["Power Automate", "Power BI"],
    impact: "15% reduction in average handling time across 8 teams",
    commits: 80,
    filesChanged: 190,
    mergedDate: "2023-09-01",
  },
];

export const timeline: TimelineEvent[] = [
  {
    date: "2017",
    emoji: "🚚",
    title: "Digital Marketing Specialist — TheLorry",
    description:
      "Started professional career in digital marketing after university graduation. Gained foundational experience in digital strategy, analytics, and cross-functional team collaboration.",
  },
  {
    date: "2017 – 2022",
    emoji: "🏢",
    title: "Service Delivery Ops Sr Team Lead — Accenture",
    description:
      "Advanced from Data Analyst to Senior Team Lead over 5+ years. Led cross-functional service delivery teams and managed stakeholder relationships across global enterprise accounts.",
    highlights: [
      "Data Analyst → Team Lead → Senior Team Lead",
      "Accenture Diamond Award recipient",
      "Cross-functional service delivery leadership",
    ],
  },
  {
    date: "2021",
    emoji: "💡",
    title: "Started Learning Power Platform",
    description:
      "Self-taught developer who pioneered internal low-code adoption during COVID-19. Built end-to-end operational tools using Power Apps, Power Automate, and SharePoint to keep business processes running during remote work transitions.",
  },
  {
    date: "2023 – 2025",
    emoji: "⚙️",
    title: "Team Leader, Operations — Concentrix",
    description:
      "Drove AI-powered workflow automation and team scaling across customer service operations. Built 8 Lark ecosystem productivity tools. Certified Lark Developer building enterprise bots and real-time executive dashboards.",
    highlights: [
      "CS Resolver — AI-powered case classification",
      "PulseTrack — real-time workforce management",
      "SmartFlow — automated business request handling",
    ],
  },
  {
    date: "2024 – 2026",
    emoji: "📐",
    title: "Power Platform Solution Architect — IOI Group",
    description:
      "Led enterprise-wide Domino-to-Microsoft 365 migration — modernizing 365+ business applications across 28+ departments. Designed dual-track architecture with Phase 1 SharePoint Online and Phase 2 Dataverse Migration Blueprint. Built 50+ AI agents across 12 automated pipelines.",
    highlights: [
      "16 production Power Apps deployed",
      "50+ AI agents across 12 pipelines",
      "E-Procurement system with real-time Oracle ERP sync",
      "Dataverse Migration Blueprint with ERD and Security Roles",
      "Managed Solution ALM with GitHub Actions CI/CD",
      "PCF Controls (TypeScript/React) and C# Dataverse Plugins",
    ],
  },
  {
    date: "2025",
    emoji: "🚀",
    title: "Power Platform Solution Manager — Meraki Malaysia",
    description:
      "Leading enterprise Power Platform architecture, automation strategy, and digital transformation initiatives. Designing scalable Canvas App and Power Automate solutions integrated with SharePoint Online and Dataverse.",
    highlights: [
      "Enterprise-scale Power Platform solutions",
      "Governance frameworks for Power Apps ALM",
      "AI-assisted development methodologies",
    ],
  },
];

export const social = {
  github: "https://github.com/altechsolution123",
  linkedin: "https://linkedin.com/in/aliakhmadf",
  twitter: "https://twitter.com/altechsolution123",
} as const;

export const methodology = {
  title: "Enterprise Governance & ALM Methodology",
  description:
    "Enterprise-grade quality, security, ALM, and compliance standards applied across all projects — including managed solution boundaries, environment strategy, and CI/CD pipeline architecture.",
  standards: [
    {
      name: "Solution ALM & CI/CD",
      icon: "🔄",
      description:
        "GitHub Actions + Azure DevOps pipelines with Power Platform Build Tools, managed vs. unmanaged solution boundaries, environment variables, and connection references",
    },
    {
      name: "Environment Strategy",
      icon: "🌐",
      description:
        "Dev → Build → Test → Prod pipeline with deployment settings files, dynamic environment variable replacement, and staged solution promotion",
    },
    {
      name: "WCAG 2.2 AA Accessibility",
      icon: "♿",
      description:
        "All applications meet inclusive design standards with automated accessibility checks",
    },
    {
      name: "OWASP Top 10 Security",
      icon: "🔒",
      description:
        "Security-first development with vulnerability scanning, threat modeling, and Dataverse security role inheritance",
    },
    {
      name: "Core Web Vitals Performance",
      icon: "⚡",
        description: "Performance budgets, lazy loading, and optimized rendering",
    },
    {
      name: "PA YAML v3.0 Schema Compliance",
      icon: "📋",
      description:
        "Strict Canvas App schema validation with automated CI/CD quality gates",
    },
  ],
  artifacts: [
    { label: "Documentation Files", value: "200+" },
    { label: "CI/CD Quality Gates", value: "12" },
    { label: "AI Agent Pipelines", value: "12" },
    { label: "Enterprise Standards", value: "6" },
  ],
};

// ============================================================
// Utility Functions
// ============================================================

export const projectData = project;

export const getSkillsByCategory = (category: SkillCategory): Skill[] => {
  return allSkills.filter((skill) => skill.category === category);
};

export const getProjectsBySection = (section: string): Project[] => {
  return typedProjects.filter((project) => project.section === section);
};

export const getLatestProjects = (limit: number = 5): Project[] => {
  return [...typedProjects]
    .sort(
      (a, b) =>
        new Date(b.mergedDate).getTime() - new Date(a.mergedDate).getTime(),
    )
    .slice(0, limit);
};

export const getSkillLevelCounts = (): Record<SkillLevel, number> => {
  const counts: Record<SkillLevel, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  allSkills.forEach((skill) => {
    counts[skill.level] = (counts[skill.level] || 0) + 1;
  });
  return counts;
};

export const getMetricsByIcon = (): Record<string, StatMetric[]> => {
  return metrics.reduce(
    (acc, metric) => {
      const icon = metric.icon || "default";
      if (!acc[icon]) acc[icon] = [];
      acc[icon].push(metric);
      return acc;
    },
    {} as Record<string, StatMetric[]>,
  );
};

export const socialLinks = {
  github: { url: social.github, label: "GitHub", icon: "github" },
  linkedin: { url: social.linkedin, label: "LinkedIn", icon: "linkedin" },
  twitter: { url: social.twitter, label: "Twitter", icon: "twitter" },
} as const;

// ============================================================
// Default Export
// ============================================================

export const portfolioData: PortfolioData = {
  developer,
  metrics,
  skills: allSkills,
  projects: typedProjects,
  methodology,
  timeline,
  social,
};

export default portfolioData;

// ============================================================
// 1. Architecture & Design Patterns Stack
// ============================================================

export const architectureStack: ArchitectureStack = {
  patterns: [
    "Dual-Track Architecture (Code-First + Low-Code)",
    "Dataverse Entity-Relationship Design",
    "Parent-Child Data Topology with FormCode Discriminator",
    "Event-Driven Architecture",
    "Microservices Integration",
    "Repository Pattern",
    "Factory Pattern",
    "Observer Pattern",
    "Strategy Pattern",
  ],
  designSystems: [
    "Atomic Design",
    "Component-Based Architecture",
    "Fluent UI v9 (Microsoft)",
    "Design Tokens",
    "Power Apps Component Framework",
  ],
  dataPatterns: [
    "FormCode Discriminator Pattern",
    "MainDB Parent-Child Relationships",
    "7-Stage Workflow Orchestration",
    "3-Tier DEV/TEST/PROD Environment",
    "Dataverse Business Unit Isolation",
    "Row-Level & Field-Level Security Profiles",
    "Polymorphic Lookup Relationships",
  ],
};

// ============================================================
// 2. AI & Copilot Stack
// ============================================================

export const aiStack: AIStack = {
  agents: {
    total: 50,
    categories: [
      "Form Migration Agents",
      "TSX Development Agents",
      "Canvas Migration Agents",
      "QA & Testing Agents",
      "Governance & Compliance Agents",
      "Documentation Agents",
      "Code Review Agents",
      "Performance Optimization Agents",
    ],
    pipelines: 12,
  },
  tools: [
    "GitHub Copilot",
    "Copilot Studio (Declarative Agents)",
    "Azure OpenAI (GPT-4o)",
    "AI Builder",
    "Custom AI Agents",
    "RAG Architecture (Vector Store Grounding)",
    "Prompt Engineering",
  ],
  automation: [
    "Workflow Automation",
    "Intelligent Routing",
    "Automated Classification",
    "Predictive Analytics",
    "Natural Language Processing",
    "DLP Guardrails for AI Output",
    "Enterprise Data Loss Prevention",
  ],
};

// ============================================================
// 3. Integration Stack
// ============================================================

export const integrationStack: IntegrationStack = {
  apis: [
    "REST APIs",
    "Custom Connectors (Power Platform)",
    "OData v4",
    "Webhooks",
    "OAuth 2.0",
    "OpenID Connect",
  ],
  thirdParty: [
    "Oracle PowerBiz ERP",
    "SAP Integration (via Custom Connectors)",
  ],
  protocols: ["HTTPS", "WebSocket", "SSO (SAML, OIDC)"],
  middleware: [
    "Azure API Management",
    "Custom Connectors",
    "Logic Apps",
    "Data Gateway",
  ],
};

// ============================================================
// 4. Testing & Quality Stack
// ============================================================

export const qualityStack: QualityStack = {
  testing: [
    "Unit Testing (Jest, Vitest)",
    "Integration Testing",
    "E2E Testing (Playwright, Cypress)",
    "Accessibility Testing (axe-core)",
    "Performance Testing (Lighthouse)",
    "Security Testing (OWASP ZAP)",
    "Visual Regression Testing",
  ],
  codeQuality: [
    "ESLint",
    "Prettier",
    "TypeScript strict mode",
    "SonarQube",
    "Code Coverage (90%+)",
    "Dependabot",
  ],
  standards: [
    "WCAG 2.2 AA",
    "OWASP Top 10",
    "Core Web Vitals",
    "GxP Compliance",
    "GDPR",
    "PA YAML v3.0",
  ],
};

// ============================================================
// 5. Security Stack
// ============================================================

export const securityStack: SecurityStack = {
  authentication: [
    "Microsoft Entra ID (Azure AD)",
    "OAuth 2.0",
    "OpenID Connect",
    "SAML 2.0",
    "MFA/2FA",
    "Conditional Access",
  ],
  authorization: [
    "RBAC (Role-Based Access Control)",
    "Dataverse Security Roles",
    "Dataverse Business Units",
    "Row-Level Security Profiles",
    "Field-Level Security Profiles",
    "SharePoint Permissions",
    "Power Platform DLP Policies",
  ],
  security: [
    "Data Encryption (At Rest + In Transit)",
    "TLS 1.2+",
    "Secrets Management (Azure Key Vault)",
    "Threat Modeling",
    "Vulnerability Scanning",
    "Audit Logging (Immutable Trails)",
    "Dataverse Plugin Telemetry (Application Insights)",
  ],
};

// ============================================================
// 6. Monitoring & Observability Stack
// ============================================================

export const monitoringStack: MonitoringStack = {
  observability: [
    "Application Insights",
    "Azure Monitor",
    "Power Platform Analytics",
    "SharePoint Audit Logs",
  ],
  dashboards: [
    "Power BI",
    "Grafana",
    "Executive Dashboards",
    "Real-Time Performance Metrics",
  ],
  alerts: [
    "Azure Alerts",
    "Power Automate Alerting",
    "Custom Notification Systems",
  ],
  metrics: [
    "SLA Compliance (98%+)",
    "Response Times",
    "Error Rates",
    "User Adoption",
    "System Uptime",
  ],
};

// ============================================================
// 7. Development Environment Stack
// ============================================================

export const devEnvironmentStack: DevEnvironmentStack = {
  ides: [
    "VS Code",
    "Power Apps Studio",
    "Power Pages Designer",
    "GitHub Codespaces",
  ],
  extensions: [
    "Power Platform Tools",
    "GitHub Copilot",
    "ESLint",
    "Prettier",
    "TypeScript",
    "shadcn/ui extensions",
    "GitLens",
  ],
  packageManagers: ["npm", "yarn", "pnpm", "NuGet"],
  buildTools: ["Vite", "Webpack", "PAC CLI", "MSBuild"],
};

// ============================================================
// 8. Database & Storage Stack
// ============================================================

export const databaseStack: DatabaseStack = {
  storage: [
    "SharePoint Online (Lists & Libraries)",
    "Dataverse",
    "Azure SQL Database",
    "Cosmos DB",
    "Azure Blob Storage",
  ],
  dataSources: [
    "REST APIs",
    "OData",
    "GraphQL",
    "Oracle DB (via ERP)",
    "Excel/CSV Imports",
  ],
  caching: [
    "Redis Cache",
    "SharePoint Cache",
    "Browser Cache (Service Workers)",
  ],
  backup: ["Azure Backup", "SharePoint Retention Policies", "Dataverse Backup"],
};

// ============================================================
// 9. UX/UI Stack
// ============================================================

export const uxStack: UXStack = {
  frameworks: [
    "shadcn/ui",
    "Fluent UI (Microsoft)",
    "Tailwind CSS",
    "Material-UI",
    "Ant Design",
  ],
  icons: [
    "Lucide Icons",
    "Font Awesome",
    "Fluent UI Icons",
    "Custom SVG Icons",
  ],
  animations: ["Framer Motion", "CSS Animations", "Lottie", "React Spring"],
  prototyping: ["Figma", "Adobe XD", "Power Apps Creator Kit"],
};

// ============================================================
// 10. Business Intelligence Stack
// ============================================================

export const businessIntelligenceStack: BIStack = {
  analytics: ["Power BI", "D3.js", "Chart.js", "Recharts", "Azure Data Studio"],
  reporting: [
    "Power BI Report Server",
    "Paginated Reports",
    "Executive Dashboards",
    "Real-Time Operational Dashboards",
  ],
  dataModeling: [
    "DAX",
    "Power Query (M Language)",
    "Star Schema",
    "Data Marts",
  ],
};

// ============================================================
// 11. Enhanced Skills (extended categories)
// ============================================================

export const enhancedSkills: Skill[] = [
  // Architecture
  {
    name: "Dual-Track Architecture",
    level: 5 as SkillLevel,
    category: "platform" as SkillCategory,
  },
  {
    name: "Event-Driven Design",
    level: 4 as SkillLevel,
    category: "platform" as SkillCategory,
  },
  {
    name: "Microservices",
    level: 4 as SkillLevel,
    category: "platform" as SkillCategory,
  },
  {
    name: "CQRS Pattern",
    level: 3 as SkillLevel,
    category: "platform" as SkillCategory,
  },
  // Security
  {
    name: "OWASP Top 10",
    level: 5 as SkillLevel,
    category: "cloud" as SkillCategory,
  },
  {
    name: "Threat Modeling",
    level: 4 as SkillLevel,
    category: "cloud" as SkillCategory,
  },
  {
    name: "OAuth 2.0 / OIDC",
    level: 4 as SkillLevel,
    category: "cloud" as SkillCategory,
  },
  // Testing
  {
    name: "Jest / Vitest",
    level: 4 as SkillLevel,
    category: "tool" as SkillCategory,
  },
  {
    name: "Playwright",
    level: 3 as SkillLevel,
    category: "tool" as SkillCategory,
  },
  {
    name: "Accessibility Testing",
    level: 4 as SkillLevel,
    category: "tool" as SkillCategory,
  },
  {
    name: "Lighthouse",
    level: 4 as SkillLevel,
    category: "tool" as SkillCategory,
  },
  // Monitoring
  {
    name: "Azure Monitor",
    level: 4 as SkillLevel,
    category: "cloud" as SkillCategory,
  },
  {
    name: "Application Insights",
    level: 4 as SkillLevel,
    category: "cloud" as SkillCategory,
  },
  {
    name: "Power BI Analytics",
    level: 5 as SkillLevel,
    category: "platform" as SkillCategory,
  },
];

// ============================================================
// 12. Technology Radar
// ============================================================

export const technologyRadar: TechnologyRadar = {
  adopt: [
    "React 19",
    "TypeScript 5.9",
    "Vite",
    "shadcn/ui",
    "GitHub Copilot",
    "Power Apps",
    "Power Automate",
  ],
  trial: ["AI Agents", "Copilot Studio", "GraphQL", "WebAssembly"],
  assess: ["Blazor", "MAUI", "Azure Functions", "Kubernetes"],
  hold: ["jQuery", "Web Forms", "Classic SharePoint"],
};

// ============================================================
// 13. Combined Stacks Export
// ============================================================

export const stacks = {
  architecture: architectureStack,
  ai: aiStack,
  integrations: integrationStack,
  quality: qualityStack,
  security: securityStack,
  monitoring: monitoringStack,
  devEnvironment: devEnvironmentStack,
  database: databaseStack,
  ux: uxStack,
  businessIntelligence: businessIntelligenceStack,
  technologyRadar,
};

/** All-in-one portfolio data including stacks */
export const fullPortfolioData = {
  ...portfolioData,
  stacks,
};
