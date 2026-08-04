import React, { useState } from 'react';
import type { ProjectCardProps, Project } from '../../types/design-system';
import { useTheme } from '../../styles/theme';

// ============================================================
// Status Badge
// ============================================================
const STATUS_MAP: Record<Project['status'], { color: string; icon: string }> = {
  merged: { color: '#3FB950', icon: '✓' },
  open: { color: '#58A6FF', icon: '○' },
  closed: { color: '#F85149', icon: '✕' },
};

const StatusBadge: React.FC<{ status: Project['status'] }> = ({ status }) => {
  const { color, icon } = STATUS_MAP[status];
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4px',
        padding: '2px 8px',
        borderRadius: '12px',
        fontSize: '0.75rem',
        fontWeight: 600,
        backgroundColor: `${color}20`,
        color,
        border: `1px solid ${color}40`,
      }}
    >
      <span aria-hidden="true">{icon}</span>
      {status}
    </span>
  );
};

// ============================================================
// Metric Chip
// ============================================================
const MetricChip: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '12px 16px',
      borderRadius: '8px',
      background: 'rgba(255,255,255,0.03)',
      border: '1px solid rgba(255,255,255,0.06)',
    }}
  >
    <span style={{ fontSize: '1.5rem', fontWeight: 800, lineHeight: 1.1 }}>{value}</span>
    <span style={{ fontSize: '0.7rem', color: '#8B949E', marginTop: '2px' }}>{label}</span>
  </div>
);

// ============================================================
// Main Component
// ============================================================
export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  expanded: initiallyExpanded = false,
  onExpand,
  className = '',
  testId,
  style,
}) => {
  const { theme } = useTheme();
  const [isExpanded, setIsExpanded] = useState(initiallyExpanded);

  const handleToggle = () => {
    const newState = !isExpanded;
    setIsExpanded(newState);
    onExpand?.(project.id);
  };

  const cardStyle: React.CSSProperties = {
    backgroundColor: theme.colors.bg.secondary,
    border: `1px solid ${theme.colors.border.default}`,
    borderRadius: theme.borderRadius.lg,
    transition: theme.transitions.base,
    overflow: 'hidden',
    ...style,
  };

  const headerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 20px',
    cursor: 'pointer',
    userSelect: 'none',
    flexWrap: 'wrap',
    gap: '8px',
    borderBottom: isExpanded ? `1px solid ${theme.colors.border.default}` : 'none',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '1rem',
    fontWeight: 600,
    color: theme.colors.text.primary,
    margin: 0,
  };

  const bodyStyle: React.CSSProperties = {
    maxHeight: isExpanded ? '600px' : '0px',
    opacity: isExpanded ? 1 : 0,
    overflow: 'hidden',
    transition: theme.transitions.slow,
    padding: isExpanded ? '20px' : '0 20px',
  };

  const bodyId = `project-card-body-${project.id}`;

  const buttonStyle: React.CSSProperties = {
    ...headerStyle,
    width: '100%',
    background: 'transparent',
    border: 'none',
    color: 'inherit',
    font: 'inherit',
    textAlign: 'left',
  };

  return (
    <div className={className} data-testid={testId} style={cardStyle}>
      <button
        type="button"
        style={buttonStyle}
        onClick={handleToggle}
        aria-expanded={isExpanded}
        aria-controls={bodyId}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
          <StatusBadge status={project.status} />
          <h3 style={titleStyle}>{project.title}</h3>
          <span style={{ color: theme.colors.text.muted, fontSize: '0.8rem', fontFamily: theme.typography.fontFamily.mono }}>
            #{project.id}
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.8rem', color: theme.colors.text.secondary }}>
          <span>{project.commits} commits</span>
          <span>{project.filesChanged} files</span>
          <span style={{ fontSize: '0.7rem' }}>{isExpanded ? '▼' : '▶'}</span>
        </div>
      </button>

      <div id={bodyId} style={bodyStyle}>
        <p style={{ color: theme.colors.text.secondary, lineHeight: 1.7, margin: '0 0 16px 0' }}>
          {project.description}
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${project.metrics.length}, 1fr)`, gap: '8px', marginBottom: '16px' }}>
          {project.metrics.map((m, i) => (
            <MetricChip key={i} label={m.label} value={m.value} />
          ))}
        </div>

        <div
          style={{
            padding: '10px 16px',
            borderRadius: theme.borderRadius.md,
            backgroundColor: `${theme.colors.accent.green}15`,
            color: theme.colors.accent.green,
            fontSize: '0.9rem',
            fontWeight: 500,
            marginBottom: '16px',
          }}
        >
          💰 {project.impact}
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
          {project.tech.map(tech => (
            <span
              key={tech}
              style={{
                padding: '2px 10px',
                borderRadius: theme.borderRadius.full,
                fontSize: '0.75rem',
                fontWeight: 500,
                backgroundColor: `${theme.colors.accent.blue}20`,
                color: theme.colors.accent.blue,
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem', color: theme.colors.text.muted, flexWrap: 'wrap', gap: '8px' }}>
          <span>🕐 Merged {project.mergedDate}</span>
          {project.links?.caseStudy && (
            <a
              href={project.links.caseStudy}
              style={{ color: theme.colors.accent.blue, textDecoration: 'none', fontWeight: 500 }}
            >
              Read Case Study →
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
