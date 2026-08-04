import React from "react";
import { useTheme } from "../../styles/theme";
import { AnimatedTitle } from "../Effects/AnimatedTitle";
import { personalInfo } from "../../data/portfolio";
import type { DeveloperInfo } from "../../hooks/usePortfolio";

// ============================================================
// Types
// ============================================================
export interface HeroProps {
  developer: DeveloperInfo;
}

// ============================================================
// Component
// ============================================================
export const Hero: React.FC<HeroProps> = ({ developer }) => {
  const { theme } = useTheme();

  const typingPhrases = [
    "Power Platform Architect",
    "Enterprise Solution Architect",
    "AI & Automation Lead",
    "M365 Modernization Specialist",
  ];

  return (
    <section
      id="hero"
      style={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "40px",
        paddingBottom: "40px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "40px",
          flexWrap: "wrap",
        }}
      >
        {/* Avatar */}
        <div style={{ flexShrink: 0 }}>
          <img
            src={
              developer.avatar || `https://github.com/${developer.github}.png`
            }
            alt={`${developer.name} — ${developer.title}`}
            style={{
              width: "140px",
              height: "140px",
              borderRadius: theme.borderRadius.full,
              border: `3px solid ${theme.colors.accent.blue}`,
              boxShadow: `0 0 30px ${theme.colors.accent.blue}30`,
            }}
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </div>

        <div style={{ flex: 1, minWidth: "300px", maxWidth: "640px" }}>
          {/* Status badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 14px",
              backgroundColor: `${theme.colors.accent.green}15`,
              border: `1px solid ${theme.colors.accent.green}30`,
              borderRadius: theme.borderRadius.full,
              marginBottom: "24px",
              fontSize: theme.typography.fontSize.sm,
              fontWeight: 500,
              color: theme.colors.accent.green,
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: theme.colors.accent.green,
                boxShadow: `0 0 8px ${theme.colors.accent.green}`,
              }}
            />
            {developer.status}
          </div>

          {/* Name with location */}
          <h1
            style={{
              fontSize: theme.typography.fontSize["5xl"],
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: theme.typography.letterSpacing.tight,
              color: theme.colors.text.primary,
              margin: "0 0 8px 0",
            }}
          >
            {developer.name}
          </h1>

          {/* Animated title */}
          <h2
            style={{
              fontSize: theme.typography.fontSize["2xl"],
              fontWeight: 600,
              lineHeight: 1.4,
              color: theme.colors.accent.blue,
              margin: "0 0 20px 0",
              minHeight: "2rem",
            }}
          >
            <AnimatedTitle
              phrases={typingPhrases}
              typingSpeed={60}
              deletingSpeed={30}
              pauseTime={2500}
            />
          </h2>

          {/* Bio — short punchy tagline, full story in About section */}
          <p
            style={{
              fontSize: theme.typography.fontSize.lg,
              color: theme.colors.text.secondary,
              lineHeight: 1.7,
              marginBottom: "12px",
              maxWidth: "640px",
            }}
          >
            {personalInfo.tagline}
          </p>
          <p
            style={{
              color: theme.colors.text.muted,
              fontSize: theme.typography.fontSize.sm,
              marginBottom: "28px",
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            <span>📍 {developer.location}</span>
            <a
              href={
                developer.linkedin
                  ? `https://linkedin.com/in/${developer.linkedin}`
                  : "#"
              }
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: theme.colors.accent.blue,
                textDecoration: "none",
              }}
            >
              🔗 linkedin.com/in/{developer.linkedin}
            </a>
          </p>

          {/* CTA Buttons */}
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a
              href="#case-study"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "14px 28px",
                backgroundColor: theme.colors.accent.blue,
                color: theme.colors.text.inverse,
                borderRadius: theme.borderRadius.md,
                fontWeight: 600,
                textDecoration: "none",
                fontSize: theme.typography.fontSize.md,
                transition: theme.transitions.fast,
              }}
            >
              View Case Study
              <span aria-hidden="true">→</span>
            </a>

            <a
              href={`mailto:${developer.email}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "14px 28px",
                backgroundColor: "transparent",
                color: theme.colors.text.primary,
                border: `1.5px solid ${theme.colors.border.default}`,
                borderRadius: theme.borderRadius.md,
                fontWeight: 600,
                textDecoration: "none",
                fontSize: theme.typography.fontSize.md,
                transition: theme.transitions.fast,
              }}
            >
              Get in Touch
            </a>

            <a
              href={
                developer.github
                  ? `https://github.com/${developer.github}`
                  : "#"
              }
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "14px 28px",
                backgroundColor: "transparent",
                color: theme.colors.text.secondary,
                border: `1.5px solid ${theme.colors.border.default}`,
                borderRadius: theme.borderRadius.md,
                fontWeight: 600,
                textDecoration: "none",
                fontSize: theme.typography.fontSize.md,
                transition: theme.transitions.fast,
              }}
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
