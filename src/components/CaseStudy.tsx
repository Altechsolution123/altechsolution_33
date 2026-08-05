import { useEffect, useRef, useState } from "react";
import { project } from "../data/portfolio";

// ============================================================
// Interactive Architecture Layers
// ============================================================
interface ArchLayer {
  id: string;
  title: string;
  icon: string;
  color: string;
  description: string;
  details: string[];
  techTags: string[];
}

const ARCH_LAYERS: ArchLayer[] = [
  {
    id: "presentation",
    title: "Presentation Layer",
    icon: "🖥️",
    color: "#58a6ff",
    description:
      "Dual-track delivery: React 19 TypeScript code-first app for complex functionality across all departments, plus 16 Canvas Apps (Power Fx + PA YAML v3.0) for per-department business forms.",
    details: [
      "React 19 with Vite, shadcn/ui, Jotai state management, and TanStack Query",
      "16 Canvas Apps with reusable component definitions in PA YAML v3.0",
      "HTML Text/HtmlViewer for rich read-only visual areas matching UI designs 1:1",
      "Triple Container Strategy for responsive layouts across desktop, tablet, and mobile",
      "IntersectionObserver-based scroll animations and glass-morphism design system",
    ],
    techTags: [
      "React 19",
      "TypeScript 5.9",
      "Vite",
      "shadcn/ui",
      "Power Fx",
      "PA YAML",
    ],
  },
  {
    id: "data",
    title: "Data Layer",
    icon: "💾",
    color: "#bc8cff",
    description:
      "SharePoint Online as the primary data store with a single MainDB_{Dept} list per site using FormCode discriminator. Dataverse for relational parent-child topologies and compliance-grade isolated databases.",
    details: [
      "Single MainDB_{Dept} list per SharePoint site — FormCode column discriminates form types",
      "Parent-Child data topology: MainDB parent lists → relational child task/comment/attachment tables",
      "Choice and Lookup columns mapped to dropdowns and combo boxes in Canvas Apps",
      "People columns integrated with Office 365 Users connector for person/group lookups",
      "Dataverse for E-Procurement and Rebate Approval with custom table relationships",
    ],
    techTags: [
      "SharePoint Online",
      "Dataverse",
      "MainDB Pattern",
      "FormCode",
      "Parent-Child",
    ],
  },
  {
    id: "integration",
    title: "Integration & Workflow",
    icon: "⚡",
    color: "#3fb950",
    description:
      "Power Automate cloud flows for approvals, notifications, and routing. Custom Connectors with REST APIs for bidirectional ERP synchronization. 8 production flows with standard connectors only.",
    details: [
      "Multi-level approval flows — up to 5 tiers routing through department head → division head → COO → ED",
      "Standard connectors only: SharePoint, Office 365 Outlook, Approvals, Teams — no premium licensing",
      "Custom Connectors for ERP: real-time bidirectional sync for PR, PO, GRN, and invoice",
      "Email notifications with deep links back to Power Apps for instant form access",
      "FlowStudio MCP for headless flow management — discover, bump, clone, create/update flows via API",
    ],
    techTags: [
      "Power Automate",
      "Approvals",
      "Outlook",
      "Teams",
      "Custom Connectors",
      "REST APIs",
    ],
  },
  {
    id: "enterprise",
    title: "Enterprise Systems",
    icon: "🏢",
    color: "#ffa657",
    description:
      "ERP bidirectional synchronization via Custom Connectors. Microsoft 365 Entra ID for authentication, Outlook for notifications, Teams for collaboration. CIP Capex Budget Control integrated into procurement.",
    details: [
      "ERP sync: Purchase Requisitions, Purchase Orders, GRN, and Invoices in real-time",
      "Microsoft Entra ID for single sign-on and role-based access control across all apps",
      "Office 365 Outlook for automated email notifications and meeting scheduling",
      "Microsoft Teams integration for approval actions and channel notifications",
      "CIP Capex Budget Control — real-time budget validation against ERP before PO issuance",
    ],
    techTags: ["ERP", "Entra ID", "Outlook", "Teams", "CIP Budget", "SSO"],
  },
  {
    id: "devops",
    title: "DevOps & AI",
    icon: "🤖",
    color: "#f85149",
    description:
      "50+ AI coding assistants across 12 automated development pipelines. GitHub Actions + Azure Pipelines for CI/CD. PAC CLI + PnP PowerShell for deployment. Enterprise governance standards baked into every pipeline.",
    details: [
      "50+ AI agents: legacy-migration-agent, canvas-migration-architect, canvas-screen-builder, msapp-builder, and more",
      "12 automated pipelines: Form Migration, TSX Screen Dev, Canvas Migration, SharePoint Validation, QA",
      "GitHub Actions: lint → typecheck → build → test → deploy with environment matrix",
      "PAC CLI: canvas pack/unpack, solution clone, auth, code generate for SharePoint services",
      "PnP PowerShell: idempotent list creation, column provisioning, schema export for 28+ department sites",
    ],
    techTags: [
      "GitHub Actions",
      "Azure Pipelines",
      "PAC CLI",
      "PnP PowerShell",
      "AI Agents",
      "CI/CD",
    ],
  },
];

// ============================================================
// Database Model Code Snippets
// ============================================================
const DB_MODEL_SNIPPET = `-- SharePoint List Architecture
-- Single MainDB_{Dept} per site with FormCode discriminator

MainDB_IT (Parent List)
├── ID (System)
├── Title (Single line of text)
├── FormCode (Choice) — discriminates ITSSR, ITHDP, ITRFQ, etc.
├── Category (Choice) — Hardware, Software, Network, Security
├── Status (Choice) — Submitted, Assigned, In Progress, Resolved, Closed
├── Priority (Choice) — Low, Medium, High, Critical
├── RequestorEmail (Person or Group)
├── AssignedTo (Person or Group)
└── Remarks (Multiple lines of text)

MainDB_IT_Tasks (Child List)
├── ID (System)
├── Title (Single line of text)
├── ParentRequestID (Lookup → MainDB_IT)
├── TaskDescription (Multiple lines of text)
├── AssignedTo (Person or Group)
├── DueDate (Date and Time)
├── Status (Choice) — Pending, In Progress, Completed
└── CompletedDate (Date and Time)

-- Dataverse Tables (E-Procurement)
PurchaseRequest (Parent)
├── PurchaseRequestID (Primary Key)
├── Requestor (Lookup → User)
├── Department (Lookup → Department)
├── TotalAmount (Currency)
├── Status (Choice) — Draft, Pending LOA, Approved, Rejected
└── CIPBudgetCode (Text)

PurchaseOrder (Child)
├── PurchaseOrderID (Primary Key)
├── PurchaseRequestID (Lookup → PurchaseRequest)
├── VendorID (Lookup → Vendor)
├── POAmount (Currency)
├── PODate (Date)
└── ERPSyncStatus (Choice) — Pending, Synced, Failed`;

const POWER_FX_SNIPPET = `// Power Fx — Canvas Screen Logic Patterns
// Source: scrIT_ITSSR_New.pa.yaml (IT Service Request — New Submission)

// ── Screen OnVisible: Initialize form context ──
Set(gblActiveFormCode, "ITSSR");
Set(gblActiveDept, "IT");
Set(gblIsNewForm, true);
Set(gblCurrentUser, User());

// ── Gallery Items: Filter by FormCode ──
Filter(
    MainDB_IT,
    FormCode.Value = "ITSSR" && Status.Value <> "Closed"
)

// ── Dropdown Items: SharePoint Choice column ──
Choices(MainDB_IT.Category)

// ── People Picker: Office 365 Users ──
Office365Users.SearchUser({searchTerm: txtSearch.Text})

// ── Submit: Patch to SharePoint ──
Patch(
    MainDB_IT,
    Defaults(MainDB_IT),
    {
        Title: txtTitle.Text,
        FormCode: {Value: "ITSSR"},
        Category: ddlCategory.Selected,
        Priority: ddlPriority.Selected,
        RequestorEmail: {
            '@odata.type': "#Microsoft.Azure.Connectors.SharePoint.SPListExpandedUser",
            Claims: "i:0#.f|membership|" & User().Email,
            Email: User().Email,
            DisplayName: User().FullName
        },
        Status: {Value: "Submitted"}
    }
);
Notify("Request submitted successfully!", NotificationType.Success);
Navigate(scrIT_ITSSR_Detail, ScreenTransition.Fade);

// ── Role Visibility: Show Approve only for approvers ──
btnApprove.Visible =
    gblCurrentUserRole = "approver" &&
    galRequests.Selected.Status.Value = "Pending Approval";

// ── Error Handling ──
If(
    IsEmpty(Errors(MainDB_IT)),
    Notify("Saved", NotificationType.Success),
    Notify(First(Errors(MainDB_IT)).Message, NotificationType.Error)
)`;

const ARCH_DECISIONS = [
  {
    title: "DEC-2026-001: Single MainDB per Site",
    problem:
      "23+ form codes per department — separate lists per form would create 800+ lists unmanageable at scale.",
    decision:
      "One MainDB_{Dept} list per SharePoint site with a FormCode discriminator column.",
    tradeoff:
      "Trades query simplicity (Filter by FormCode) for drastically reduced list sprawl and admin overhead.",
    impact:
      "28 sites × 1 list = 28 lists vs. 800+ if per-form. Query performance validated at 10K+ items with indexed FormCode.",
  },
  {
    title: "DEC-2026-002: Dual-Track Architecture",
    problem:
      "Complex cross-department views needed React flexibility; simple departmental forms needed citizen-developer accessibility.",
    decision:
      "React 19 code-first app for complex/shared functionality + 16 Canvas Apps for per-department business forms.",
    tradeoff:
      "Two codebases to maintain, but each track optimizes for its user persona. Shared SharePoint data layer ensures consistency.",
    impact:
      "Developers get full TypeScript/React power. Business users get Power Fx simplicity. Both read/write the same SharePoint lists.",
  },
  {
    title: "DEC-2026-003: Standard Connectors Only",
    problem:
      "Premium connectors (Dataverse, SQL, custom APIs) would increase per-user licensing by $40/user/month for 2,000+ users.",
    decision:
      "Use only standard connectors included in existing M365 E3/E5 licenses: SharePoint, Office 365 Users, Outlook, Teams.",
    tradeoff:
      "No direct SQL Server or Dataverse for most forms. Workaround: SharePoint lists with indexed columns for query performance.",
    impact:
      "$960K/year licensing cost avoided. Dataverse used only for E-Procurement and Rebate Approval where relational integrity is mandatory.",
  },
  {
    title: "DEC-2026-007: Model Columns Over Remarks JSON",
    problem:
      "Legacy enterprise forms stored arbitrary data in multi-line text fields — unsearchable, unvalidatable, unqueryable.",
    decision:
      "Every field gets its own SharePoint column (typed). No JSON blobs in Remarks. Child lists for repeating data.",
    tradeoff:
      "More columns to manage (100+ per MainDB list), but enables native SharePoint indexing, filtering, sorting, and Power BI reporting.",
    impact:
      "Data accuracy improved from ~70% (free-text) to 98% (typed/validated). Power BI dashboards became possible without ETL.",
  },
];

const MERMAID_DIAGRAM = `graph TB
    subgraph PRESENTATION["Presentation"]
        REACT["React 19 Code-First App"]:::pres
        CANVAS["16 Canvas Apps"]:::pres
    end
    subgraph INTEGRATION["Integration"]
        PA["Power Automate Flows"]:::inte
        CC["Custom Connectors"]:::inte
    end
    subgraph DATA_LAYER["Data"]
        SP["SharePoint Online"]:::data
        DV["Dataverse"]:::data
    end
    subgraph ENTERPRISE["Enterprise"]
        ERP["ERP"]:::ent
        M365["Microsoft 365"]:::ent
    end
    subgraph DEVOPS["DevOps & AI"]
        AI["50+ AI Agents"]:::dev
        CICD["GitHub Actions CI/CD"]:::dev
    end
    REACT --> SP
    CANVAS --> SP
    SP --> PA
    SP --> DV
    PA --> M365
    PA --> CC
    DV <--> CC
    CC <--> ERP
    REACT -.-> AI
    CANVAS -.-> AI
    AI -.-> CICD
    CICD -.-> REACT
    CICD -.-> CANVAS
    classDef pres fill:#0d1117,stroke:#58a6ff,stroke-width:2px,color:#e6edf3
    classDef inte fill:#0d1117,stroke:#3fb950,stroke-width:2px,color:#e6edf3
    classDef data fill:#0d1117,stroke:#bc8cff,stroke-width:2px,color:#e6edf3
    classDef ent fill:#0d1117,stroke:#ffa657,stroke-width:2px,color:#e6edf3
    classDef dev fill:#0d1117,stroke:#f85149,stroke-width:2px,color:#e6edf3`;

export default function CaseStudy() {
  const mermaidRef = useRef<HTMLDivElement>(null);
  const [activeLayer, setActiveLayer] = useState<string | null>(null);
  const [expandedDecision, setExpandedDecision] = useState<number | null>(null);
  const [activeDeepDive, setActiveDeepDive] = useState<string | null>(null);

  useEffect(() => {
    const loadMermaid = async () => {
      if (!mermaidRef.current) return;
      try {
        const resp = await fetch(
          "https://mermaid.ink/svg/" +
            btoa(unescape(encodeURIComponent(MERMAID_DIAGRAM))),
        );
        if (resp.ok) {
          const svgText = await resp.text();
          const modified = svgText.replace(
            /<g class="node default (pres|inte|data|ent|dev)">/g,
            (_, cls) => {
              const layerMap: Record<string, string> = {
                pres: "presentation",
                inte: "integration",
                data: "data",
                ent: "enterprise",
                dev: "devops",
              };
              return `<g class="node default ${cls}" style="cursor:pointer" data-layer="${layerMap[cls] || ""}" `;
            },
          );
          mermaidRef.current!.innerHTML = modified;
          setTimeout(() => {
            const nodes = mermaidRef.current?.querySelectorAll("[data-layer]");
            nodes?.forEach((node) => {
              node.addEventListener("click", (e) => {
                const layer = (e.currentTarget as HTMLElement).getAttribute(
                  "data-layer",
                );
                if (layer) setActiveLayer(layer === activeLayer ? null : layer);
              });
            });
          }, 100);
        }
      } catch {
        if (mermaidRef.current) {
          mermaidRef.current.innerHTML = `<pre class="mermaid-fallback">${MERMAID_DIAGRAM}</pre>`;
        }
      }
    };
    loadMermaid();
  }, [activeLayer]);

  const activeLayerData = ARCH_LAYERS.find((l) => l.id === activeLayer);

  return (
    <section id="case-study">
      <div className="container">
        <span className="section-label">Featured Project</span>
        <h2 className="section-title">{project.title}</h2>
        <p className="section-subtitle">{project.subtitle}</p>

        <div className="case-study-meta">
          <div className="meta-item">
            <span className="meta-label">Client</span>
            <span className="meta-value">{project.client}</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Scale</span>
            <span className="meta-value">{project.scale}</span>
          </div>
        </div>

        {/* Overview */}
        <div className="case-study-section">
          <h3>Overview</h3>
          <p
            style={{
              fontSize: "0.9375rem",
              lineHeight: 1.7,
              color: "var(--color-text-secondary)",
            }}
          >
            {project.overview}
          </p>
        </div>

        {/* Challenge */}
        <div className="case-study-section">
          <h3>The Challenge</h3>
          <ul className="challenge-list">
            {project.challenge.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Approach */}
        <div className="case-study-section">
          <h3>The Approach</h3>
          {project.approach.map((phase) => (
            <div key={phase.phase} className="card phase-card">
              <h4>{phase.phase}</h4>
              <p>{phase.detail}</p>
            </div>
          ))}
        </div>

        {/* Interactive Architecture */}
        <div className="case-study-section">
          <h3>🏗️ Interactive System Architecture</h3>
          <p
            style={{
              fontSize: "0.9375rem",
              lineHeight: 1.7,
              color: "var(--color-text-secondary)",
              marginBottom: 16,
            }}
          >
            {project.architecture.description}{" "}
            <em>Click any layer to see its details.</em>
          </p>

          <div className="arch-layer-selector">
            {ARCH_LAYERS.map((layer) => (
              <button
                key={layer.id}
                className={`arch-layer-btn ${activeLayer === layer.id ? "active" : ""}`}
                style={{ "--layer-color": layer.color } as React.CSSProperties}
                onClick={() =>
                  setActiveLayer(activeLayer === layer.id ? null : layer.id)
                }
              >
                <span className="arch-layer-icon">{layer.icon}</span>
                <span className="arch-layer-label">{layer.title}</span>
              </button>
            ))}
          </div>

          {activeLayerData && (
            <div
              className="arch-layer-detail"
              style={{ borderColor: activeLayerData.color }}
            >
              <div
                className="arch-layer-detail-header"
                style={{ background: `${activeLayerData.color}15` }}
              >
                <span style={{ fontSize: "1.5rem" }}>
                  {activeLayerData.icon}
                </span>
                <div>
                  <h4
                    style={{
                      color: activeLayerData.color,
                      margin: 0,
                      fontSize: "1rem",
                    }}
                  >
                    {activeLayerData.title}
                  </h4>
                  <p
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--color-text-secondary)",
                      margin: "4px 0 0",
                    }}
                  >
                    {activeLayerData.description}
                  </p>
                </div>
              </div>
              <ul className="arch-layer-bullets">
                {activeLayerData.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
              <div className="arch-layer-tags">
                {activeLayerData.techTags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="mermaid-container" ref={mermaidRef}>
            <div className="mermaid-loading">
              Loading architecture diagram...
            </div>
          </div>
          <div className="diagram-legend">
            {ARCH_LAYERS.map((l) => (
              <span
                key={l.id}
                style={{ cursor: "pointer" }}
                onClick={() =>
                  setActiveLayer(l.id === activeLayer ? null : l.id)
                }
              >
                <span
                  className="legend-dot"
                  style={{ background: l.color }}
                ></span>{" "}
                {l.title}
              </span>
            ))}
          </div>
        </div>

        {/* Try it Live */}
        <div className="case-study-section">
          <h3>🛠️ Try It Live</h3>
          <p
            style={{
              fontSize: "0.9375rem",
              lineHeight: 1.7,
              color: "var(--color-text-secondary)",
              marginBottom: 16,
            }}
          >
            Explore the technology stack in interactive sandbox environments.
          </p>
          <div className="demo-buttons">
            <a
              href="https://stackblitz.com/github/altechsolution123/portfolio?file=src%2Fdata%2Fportfolio.ts"
              target="_blank"
              rel="noopener noreferrer"
              className="demo-btn stackblitz-btn"
            >
              <span className="demo-btn-icon">⚡</span>
              <span>
                <strong>Open in StackBlitz</strong>
                <small>Explore TypeScript components</small>
              </span>
            </a>
            <a
              href="https://codesandbox.io/s/github/altechsolution123/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="demo-btn codesandbox-btn"
            >
              <span className="demo-btn-icon">📦</span>
              <span>
                <strong>Open in CodeSandbox</strong>
                <small>Inspect React 19 + Vite setup</small>
              </span>
            </a>
            <a
              href="https://github.com/altechsolution123"
              target="_blank"
              rel="noopener noreferrer"
              className="demo-btn github-btn"
            >
              <span className="demo-btn-icon">🐙</span>
              <span>
                <strong>View on GitHub</strong>
                <small>Full source code & documentation</small>
              </span>
            </a>
          </div>
        </div>

        {/* Technical Deep Dives */}
        <div className="case-study-section">
          <h3>🔍 Technical Deep Dives</h3>
          <p
            style={{
              fontSize: "0.9375rem",
              lineHeight: 1.7,
              color: "var(--color-text-secondary)",
              marginBottom: 16,
            }}
          >
            Click any section below to explore database models, Power Fx
            patterns, and architecture decisions.
          </p>

          {/* DB Modeling */}
          <div
            className={`deep-dive-card ${activeDeepDive === "db" ? "expanded" : ""}`}
          >
            <div
              className="deep-dive-header"
              onClick={() =>
                setActiveDeepDive(activeDeepDive === "db" ? null : "db")
              }
            >
              <span>🗄️</span>
              <span>Database Modeling Strategy</span>
              <span className="deep-dive-chevron">
                {activeDeepDive === "db" ? "▾" : "▸"}
              </span>
            </div>
            {activeDeepDive === "db" && (
              <div className="deep-dive-body">
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--color-text-secondary)",
                    marginBottom: 12,
                  }}
                >
                  Every department gets one SharePoint site. Each site has one{" "}
                  <code>MainDB_{"{Dept}"}</code> list — not one list per form. A{" "}
                  <code>FormCode</code> Choice column discriminates form types.
                  Child lists handle repeating data linked via Lookup columns.
                  Dataverse is reserved for compliance-grade modules
                  (E-Procurement, Rebate Approval) requiring relational
                  integrity and audit trails.
                </p>
                <div className="code-snippet-card">
                  <div className="code-snippet-header">
                    <span
                      className="code-snippet-dot"
                      style={{ backgroundColor: "#FF5F56" }}
                    />
                    <span
                      className="code-snippet-dot"
                      style={{ backgroundColor: "#FFBD2E" }}
                    />
                    <span
                      className="code-snippet-dot"
                      style={{ backgroundColor: "#27C93F" }}
                    />
                    <span className="code-snippet-filename">
                      SharePoint List Schema — MainDB + Child Lists
                    </span>
                  </div>
                  <pre className="code-snippet-body">{DB_MODEL_SNIPPET}</pre>
                </div>
              </div>
            )}
          </div>

          {/* Power Fx */}
          <div
            className={`deep-dive-card ${activeDeepDive === "pfx" ? "expanded" : ""}`}
            style={{ marginTop: 12 }}
          >
            <div
              className="deep-dive-header"
              onClick={() =>
                setActiveDeepDive(activeDeepDive === "pfx" ? null : "pfx")
              }
            >
              <span>⚡</span>
              <span>Power Fx Logic Patterns</span>
              <span className="deep-dive-chevron">
                {activeDeepDive === "pfx" ? "▾" : "▸"}
              </span>
            </div>
            {activeDeepDive === "pfx" && (
              <div className="deep-dive-body">
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--color-text-secondary)",
                    marginBottom: 12,
                  }}
                >
                  Every screen follows a strict pattern: <code>OnVisible</code>{" "}
                  sets global context variables, galleries filter by{" "}
                  <code>FormCode</code> and <code>Status</code>, dropdowns use{" "}
                  <code>Choices()</code> for SharePoint choice columns,{" "}
                  <code>Patch()</code> writes to SharePoint with typed property
                  bags, and role visibility formulas hide/show action buttons.
                  All without a single premium connector.
                </p>
                <div className="code-snippet-card">
                  <div className="code-snippet-header">
                    <span
                      className="code-snippet-dot"
                      style={{ backgroundColor: "#FF5F56" }}
                    />
                    <span
                      className="code-snippet-dot"
                      style={{ backgroundColor: "#FFBD2E" }}
                    />
                    <span
                      className="code-snippet-dot"
                      style={{ backgroundColor: "#27C93F" }}
                    />
                    <span className="code-snippet-filename">
                      scrIT_ITSSR_New.pa.yaml — Power Fx Logic
                    </span>
                  </div>
                  <pre className="code-snippet-body">{POWER_FX_SNIPPET}</pre>
                </div>
              </div>
            )}
          </div>

          {/* Architecture Decisions */}
          <div
            className={`deep-dive-card ${activeDeepDive === "arch" ? "expanded" : ""}`}
            style={{ marginTop: 12 }}
          >
            <div
              className="deep-dive-header"
              onClick={() =>
                setActiveDeepDive(activeDeepDive === "arch" ? null : "arch")
              }
            >
              <span>🏛️</span>
              <span>Key Architectural Decisions</span>
              <span className="deep-dive-chevron">
                {activeDeepDive === "arch" ? "▾" : "▸"}
              </span>
            </div>
            {activeDeepDive === "arch" && (
              <div className="deep-dive-body">
                <div className="arch-decisions-grid">
                  {ARCH_DECISIONS.map((dec, i) => (
                    <div
                      key={dec.title}
                      className={`arch-decision-card ${expandedDecision === i ? "expanded" : ""}`}
                      onClick={() =>
                        setExpandedDecision(expandedDecision === i ? null : i)
                      }
                    >
                      <div className="arch-decision-header">
                        <strong
                          style={{ fontSize: "0.85rem", color: "#58a6ff" }}
                        >
                          {dec.title}
                        </strong>
                        <span className="deep-dive-chevron">
                          {expandedDecision === i ? "▾" : "▸"}
                        </span>
                      </div>
                      {expandedDecision === i && (
                        <div style={{ marginTop: 10 }}>
                          <div className="arch-decision-row">
                            <strong>Problem:</strong> <span>{dec.problem}</span>
                          </div>
                          <div className="arch-decision-row">
                            <strong>Decision:</strong>{" "}
                            <span>{dec.decision}</span>
                          </div>
                          <div className="arch-decision-row">
                            <strong>Trade-off:</strong>{" "}
                            <span>{dec.tradeoff}</span>
                          </div>
                          <div className="arch-decision-row">
                            <strong>Impact:</strong> <span>{dec.impact}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Results */}
        <div className="case-study-section">
          <h3>Results & Impact</h3>
          <div className="results-grid">
            {project.results.map((result) => (
              <div key={result.metric} className="card result-card">
                <div className="result-value">{result.value}</div>
                <div className="result-label">{result.metric}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="case-study-section">
          <h3>Technology Stack</h3>
          <div className="tech-stack">
            {project.techStack.map((tech) => (
              <span key={tech} className="tag">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
