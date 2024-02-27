import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

import styles from "../aboutMe.module.css";

const AboutMe = () => {
  return (
    <div className={styles.aboutMe}>
      <div className={styles.content}>
        <p className={styles.title}>About me</p>
        <p className={styles.text}>
          Outside of software development I am a happy father of two. I like to
          hunt bugs, go fishing, and share ice cream. When alone, I love to read
          books, see some art, go for a cycle, or enjoy some sports. I like to
          be in nature.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
