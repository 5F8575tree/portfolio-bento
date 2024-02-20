import React, { useContext } from 'react';
import { ThemeContext } from "../ThemeContext";

import styles from "../toggleTheme.module.css";

const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={styles.toggleTheme}>
      <div className={styles.controls}>
        <img src='/sun.svg' />
        <img src='/moon.svg' />
      </div>
      <div className={styles.toggleSwitch}>
        <input
          id="themeToggle"
          type="checkbox"
          onChange={toggleTheme}
          checked={theme === 'dark'}
        />
        <label htmlFor='themeToggle' className={styles.slider}></label>
      </div>
    </div>
  );
};

export default ToggleTheme;
