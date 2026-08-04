import React from 'react';
import { useTheme } from '../../styles/theme';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import type { TimelineProps } from '../../types/design-system';

// ============================================================
// Single Event
// ============================================================
const TimelineItem: React.FC<{
  event: TimelineProps['events'][number];
  isLast: boolean;
  index: number;
}> = ({ event, isLast, index }) => {
  const { theme } = useTheme();
  const { ref, isVisible } = useIntersectionObserver({ triggerOnce: true, threshold: 0.2 });

  return (
    <div
      ref={ref}
      style={{
        display: 'flex',
        gap: '20px',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
        transition: `all 0.5s ease ${index * 0.1}s`,
        paddingBottom: isLast ? '0' : '32px',
        position: 'relative',
      }}
    >
      {/* Timeline line */}
      {!isLast && (
        <div
          style={{
            position: 'absolute',
            left: '19px',
            top: '48px',
            bottom: '0',
            width: '2px',
            backgroundColor: theme.colors.border.default,
          }}
        />
      )}

      {/* Emoji bubble */}
      <div
        style={{
          width: '40px',
          height: '40px',
          borderRadius: theme.borderRadius.full,
          backgroundColor: theme.colors.bg.secondary,
          border: `2px solid ${theme.colors.border.default}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.1rem',
          flexShrink: 0,
          zIndex: 1,
        }}
      >
        {event.emoji}
      </div>

      {/* Content */}
      <div style={{ flex: 1 }}>
        <div
          style={{
            fontSize: theme.typography.fontSize.xs,
            color: theme.colors.text.muted,
            fontFamily: theme.typography.fontFamily.mono,
            marginBottom: '4px',
          }}
        >
          {new Date(event.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })}
        </div>
        <h4
          style={{
            margin: '0 0 6px 0',
            fontSize: theme.typography.fontSize.md,
            fontWeight: 700,
            color: theme.colors.text.primary,
          }}
        >
          {event.title}
        </h4>
        {event.description && (
          <p
            style={{
              margin: '0 0 8px 0',
              fontSize: theme.typography.fontSize.sm,
              color: theme.colors.text.secondary,
              lineHeight: 1.6,
            }}
          >
            {event.description}
          </p>
        )}
        {event.highlights && event.highlights.length > 0 && (
          <ul
            style={{
              margin: 0,
              padding: '0 0 0 16px',
              fontSize: theme.typography.fontSize.sm,
              color: theme.colors.text.secondary,
            }}
          >
            {event.highlights.map((h, i) => (
              <li key={i} style={{ marginBottom: '2px' }}>
                {h}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

// ============================================================
// Main Component
// ============================================================
export const Timeline: React.FC<TimelineProps> = ({
  events,
  className = '',
  testId,
  style,
}) => {

  return (
    <div className={className} data-testid={testId} style={{ maxWidth: '700px', ...style }}>
      {events.map((event, i) => (
        <TimelineItem key={event.date + event.title} event={event} isLast={i === events.length - 1} index={i} />
      ))}
    </div>
  );
};
