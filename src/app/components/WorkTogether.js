import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

import styles from "../workTogether.module.css";

const WorkTogether = () => {
  const { theme } = useContext(ThemeContext);

  const imageSrc = theme === 'light' ? '/subtract-black.svg' : 'subtract-blue.svg';

  return (
    <div className={styles.workTogether}>
      <img className={styles.image} src={imageSrc} alt="contact me"/>
    </div>
  )
}

export default WorkTogether
