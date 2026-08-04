import React, { useState, useCallback, useMemo } from 'react';
import type { ThemeMode } from '../styles/theme';
import { theme, ThemeContext } from '../styles/theme';

// ============================================================
// Theme Provider
// ============================================================
export interface ThemeProviderProps {
  children: React.ReactNode;
  defaultMode?: ThemeMode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultMode = 'dark',
}) => {
  const [mode, setMode] = useState<ThemeMode>(defaultMode);

  const toggleTheme = useCallback(() => {
    setMode(prev => {
      if (prev === 'dark') return 'light';
      if (prev === 'light') return 'power-apps';
      return 'dark';
    });
  }, []);

  const setTheme = useCallback((newMode: ThemeMode) => {
    setMode(newMode);
  }, []);

  const contextValue = useMemo(() => ({
    theme: theme[mode],
    mode,
    toggleTheme,
    setTheme,
  }), [mode, toggleTheme, setTheme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
