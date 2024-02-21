import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

import styles from "../workTogether.module.css";

const WorkTogether = () => {
  const { theme } = useContext(ThemeContext);

  const email = "mjrawlins.dev@gmail.com";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      alert("My email address has been copied to your clipboard!");
    } catch (err) {
      console.error("Failed to copy email: ", err);
      alert("Oops... the email address didn't copy. It's mjrawlins.dev@gmail.com");
    }
  };


  const imageSrc = theme === 'light' ? '/subtract-black.svg' : 'subtract-blue.svg';

  return (
    <div className={styles.workTogether} onClick={handleCopyEmail}>
      <img className={styles.image} src={imageSrc} alt="contact me"/>
      <div className={styles.content}>
        <p className={styles.text}>Work<br /> Together?</p>
        <img className={styles.envelope} src='/envelope.svg' />
      </div>
    </div>
  )
}

export default WorkTogether
