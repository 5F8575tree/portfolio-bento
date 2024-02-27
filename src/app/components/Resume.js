import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

import styles from "../resume.module.css";

const Resume = () => {
  const { theme } = useContext(ThemeContext);

  const resumeLink = "/resume-feb-2024.pdf";

  const imageSrc = theme === "light" ? "/resume-light.jpg" : "resume.jpg";

  return (
    <div className={styles.resume}>
      <a href={resumeLink} download="mark-rawlins-resume.pdf">
        <h2 className={styles.resume__text}>
          Click here to download my resume
        </h2>
      </a>
    </div>
  );
};

export default Resume;
