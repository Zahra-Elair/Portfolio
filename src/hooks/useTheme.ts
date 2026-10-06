import { useState, useEffect } from 'react';

export function useTheme() {
  // index.html sets the initial class before first paint
  const [theme, setTheme] = useState<'light' | 'dark'>(
    document.documentElement.classList.contains('dark') ? 'dark' : 'light'
  );

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    try {
      localStorage.setItem('theme', next);
    } catch {
      // storage unavailable; theme still applies for this visit
    }
    setTheme(next);
  };

  return { theme, toggleTheme };
}
