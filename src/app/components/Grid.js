import styles from "../grid.module.css";
import GitHub from "./GitHub";
import Language from "./Language";
import LightDarkMode from "./LightDarkMode";
import Profile from "./Profile";
import Project from "./Project";
import WorkTogether from "./WorkTogether";
import AboutMe from "./aboutMe";
import LinkedIn from "./linkedIn";
import Skills from "./skills";

const Grid = () => {
  return (
    <div className={styles.wrapper}>
      <Profile />
      <Project />
      <LightDarkMode />
      <div className={styles.resume}>resume</div>
      <Language />
      <div className={styles.project2}>project 2</div>
      <WorkTogether />
      <LinkedIn />
      <GitHub />
      <div className={styles.project3}>project 3</div>
      <div className={styles.project4}>project 4</div>
      <Skills />
      <AboutMe />
    </div>
  )
}

export default Grid
