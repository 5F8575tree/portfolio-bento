import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

import styles from "../resume.module.css";

const Resume = () => {
  const { theme } = useContext(ThemeContext);

  const imageSrc = theme === 'light' ? '/resume-light.jpg' : 'resume.jpg';

  return (
    <div className={styles.resume}>
      <img className={styles.image} src={imageSrc} alt="contact me"/>
    </div>
  )
}

export default Resume
