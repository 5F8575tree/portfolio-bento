import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

import styles from "../resume.module.css";

const Resume = () => {
  const { theme } = useContext(ThemeContext);

  const resumeLink = "/resume-feb-2024.pdf";

  const imageSrc = theme === 'light' ? '/resume-light.jpg' : 'resume.jpg';

  return (
    <div className={styles.resume}>
      <a href={resumeLink} download="mark-rawlins-resume.pdf">
        <img className={styles.image} src={imageSrc} alt="contact me"/>
      </a>
    </div>
  )
}

export default Resume
