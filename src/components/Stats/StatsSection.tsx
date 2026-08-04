import React from 'react';
import { useTheme } from '../../styles/theme';
import { useCounter } from '../../hooks/useCounter';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import type { StatsSectionProps } from '../../types/design-system';

// ============================================================
// Icon Map
// ============================================================
const ICON_MAP: Record<string, string> = {
  rocket: '🚀',
  clock: '⏱️',
  star: '⭐',
  code: '💻',
  database: '🗄️',
  layout: '📐',
  users: '👥',
  check: '✅',
};

// ============================================================
// Stat Card
// ============================================================
const StatCard: React.FC<{
  metric: StatsSectionProps['metrics'][number];
  animate: boolean;
  isVisible: boolean;
}> = ({ metric, animate, isVisible }) => {
  const { theme } = useTheme();
  const { current } = useCounter({
    target: metric.value,
    duration: metric.animationDuration || 2000,
    delay: 200,
    easing: 'easeOut',
  });

  const displayValue = animate && isVisible ? current : metric.value;
  const icon = ICON_MAP[metric.icon] || metric.icon;

  return (
    <div
      style={{
        textAlign: 'center',
        padding: '24px 16px',
        backgroundColor: theme.colors.bg.secondary,
        border: `1px solid ${theme.colors.border.default}`,
        borderRadius: theme.borderRadius.lg,
        transition: theme.transitions.base,
      }}
    >
      <div style={{ fontSize: '2rem', marginBottom: '8px' }}>{icon}</div>
      <div
        style={{
          fontSize: theme.typography.fontSize['3xl'],
          fontWeight: 800,
          color: theme.colors.accent.blue,
          lineHeight: 1.1,
          marginBottom: '4px',
        }}
      >
        {metric.prefix}{displayValue.toLocaleString()}{metric.suffix}
      </div>
      <div
        style={{
          fontSize: theme.typography.fontSize.sm,
          color: theme.colors.text.secondary,
          fontWeight: 500,
        }}
      >
        {metric.label}
      </div>
    </div>
  );
};

// ============================================================
// Main Component
// ============================================================
export const StatsSection: React.FC<StatsSectionProps> = ({
  metrics,
  animate = true,
  gridColumns = 4,
  className = '',
  testId,
  style,
}) => {
  const { ref, isVisible } = useIntersectionObserver({ triggerOnce: true, threshold: 0.3 });
  const { theme } = useTheme();

  return (
    <div ref={ref} className={className} data-testid={testId} style={{ marginTop: theme.spacing['3xl'], ...style }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(auto-fit, minmax(${gridColumns === 2 ? '200px' : gridColumns === 3 ? '160px' : '140px'}, 1fr))`,
          gap: '16px',
        }}
      >
        {metrics.map(metric => (
          <StatCard key={metric.label} metric={metric} animate={animate} isVisible={isVisible} />
        ))}
      </div>
    </div>
  );
};
