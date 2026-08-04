import React, { useState, useCallback } from "react";
import type {
  ContributionGridProps,
  Skill,
  SkillLevel,
} from "../../types/design-system";
import { useTheme } from "../../styles/theme";

// ============================================================
// Helpers
// ============================================================
// Fallback for browsers without color-mix
const getSkillColorFallback = (
  level: SkillLevel,
  accentColor: string,
): string => {
  const opacityMap: Record<SkillLevel, number> = {
    1: 0.08,
    2: 0.2,
    3: 0.4,
    4: 0.65,
    5: 1,
  };
  return opacityMap[level] === 1
    ? accentColor
    : `${accentColor}${Math.round(opacityMap[level] * 255)
        .toString(16)
        .padStart(2, "0")}`;
};

// ============================================================
// Tooltip
// ============================================================
const LEVEL_LABELS = [
  "",
  "Beginner",
  "Intermediate",
  "Advanced",
  "Expert",
  "Master",
];

const Tooltip: React.FC<{ skill: Skill }> = ({ skill }) => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        backgroundColor: theme.colors.bg.primary,
        border: `1px solid ${theme.colors.border.default}`,
        borderRadius: theme.borderRadius.md,
        padding: "10px 14px",
        boxShadow: theme.shadows.lg,
        minWidth: "140px",
        pointerEvents: "none",
      }}
    >
      <strong
        style={{
          color: theme.colors.text.primary,
          display: "block",
          marginBottom: "4px",
          fontSize: "0.85rem",
        }}
      >
        {skill.name}
      </strong>
      <div
        style={{
          color: theme.colors.text.secondary,
          fontSize: "0.75rem",
          marginBottom: "6px",
        }}
      >
        {LEVEL_LABELS[skill.level]}
      </div>
      <div
        style={{
          height: "4px",
          borderRadius: "2px",
          backgroundColor: theme.colors.bg.tertiary,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${(skill.level / 5) * 100}%`,
            backgroundColor: getSkillColorFallback(
              skill.level,
              theme.colors.accent.blue,
            ),
            borderRadius: "2px",
          }}
        />
      </div>
    </div>
  );
};

// ============================================================
// Main Component
// ============================================================
export const ContributionGrid: React.FC<ContributionGridProps> = ({
  skills,
  columns = 6,
  cellSize = "md",
  showLabels = true,
  onSkillHover,
  className = "",
  testId,
  style,
}) => {
  const { theme } = useTheme();
  const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  const rows = Math.ceil(skills.length / columns);
  const grid = Array.from({ length: rows }, (_, row) =>
    skills.slice(row * columns, (row + 1) * columns),
  );

  const cellPixelSize = cellSize === "sm" ? 16 : cellSize === "lg" ? 26 : 22;
  const gap = 3;

  const handleMouseEnter = useCallback(
    (skill: Skill, e: React.MouseEvent) => {
      setHoveredSkill(skill);
      setTooltipPos({ x: e.clientX + 10, y: e.clientY - 60 });
      onSkillHover?.(skill);
    },
    [onSkillHover],
  );

  const handleMouseLeave = useCallback(() => setHoveredSkill(null), []);

  const containerStyle: React.CSSProperties = {
    position: "relative",
    ...style,
  };

  const gridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap: `${gap}px`,
    justifyItems: "center",
    maxWidth: `${columns * (cellPixelSize + 70)}px`,
    margin: "0 auto",
  };

  const cellStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "4px",
    cursor: "pointer",
    outline: "none",
    transition: "transform 0.15s ease",
  };

  const squareStyle: (level: SkillLevel) => React.CSSProperties = (level) => ({
    width: cellPixelSize,
    height: cellPixelSize,
    borderRadius: "3px",
    backgroundColor: getSkillColorFallback(level, theme.colors.accent.blue),
    border: "1px solid transparent",
    transition: "transform 0.1s ease, border-color 0.1s ease",
    flexShrink: 0,
  });

  const labelStyle: React.CSSProperties = {
    fontSize: "0.72rem",
    lineHeight: "1.25",
    color: theme.colors.text.secondary,
    textAlign: "center",
    width: `${cellPixelSize + 50}px`,
    wordBreak: "break-word",
  };

  return (
    <div className={className} data-testid={testId} style={containerStyle}>
      <div style={gridStyle}>
        {grid.map((row, ri) =>
          row.map((skill, ci) => (
            <div
              key={`${skill.name}-${ri}-${ci}`}
              role="gridcell"
              aria-label={`${skill.name}: ${skill.level}/5 — ${LEVEL_LABELS[skill.level]}`}
              tabIndex={0}
              style={{
                ...cellStyle,
                transform:
                  hoveredSkill?.name === skill.name
                    ? "scale(1.15)"
                    : "scale(1)",
              }}
              onMouseEnter={(e) => handleMouseEnter(skill, e)}
              onMouseLeave={handleMouseLeave}
              onFocus={() => setHoveredSkill(skill)}
              onBlur={() => setHoveredSkill(null)}
            >
              <div
                style={{
                  ...squareStyle(skill.level),
                  border:
                    hoveredSkill?.name === skill.name
                      ? `1px solid ${theme.colors.text.primary}`
                      : "1px solid transparent",
                }}
              />
              <span
                style={{
                  ...labelStyle,
                  color:
                    hoveredSkill?.name === skill.name
                      ? theme.colors.text.primary
                      : theme.colors.text.secondary,
                  fontWeight: hoveredSkill?.name === skill.name ? 600 : 400,
                }}
              >
                {skill.name}
              </span>
            </div>
          )),
        )}
      </div>

      {showLabels && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "6px",
            marginTop: "10px",
            fontSize: "0.7rem",
            color: theme.colors.text.secondary,
          }}
        >
          <span>Less</span>
          {[1, 2, 3, 4, 5].map((level) => (
            <span
              key={level}
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "2px",
                backgroundColor: getSkillColorFallback(
                  level as SkillLevel,
                  theme.colors.accent.blue,
                ),
              }}
            />
          ))}
          <span>More</span>
        </div>
      )}

      {hoveredSkill && (
        <div
          style={{
            position: "fixed",
            left: tooltipPos.x,
            top: tooltipPos.y,
            zIndex: 1000,
          }}
        >
          <Tooltip skill={hoveredSkill} />
        </div>
      )}
    </div>
  );
};
