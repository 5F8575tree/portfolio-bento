'use client';

import { useEffect, useState } from 'react';

const ToggleTheme = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Initialize theme from localStorage or default to 'light'
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.body.className = savedTheme;
  }, []);

  useEffect(() => {
    // Apply theme class to body and save preference
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return <button onClick={toggleTheme}>Toggle Theme</button>;
};

export default ToggleTheme;
