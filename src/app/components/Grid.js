import styles from "../grid.module.css";
import Language from "./Language";
import LightDarkMode from "./LightDarkMode";
import Profile from "./Profile";
import WorkTogether from "./WorkTogether";
import AboutMe from "./aboutMe";
import Skills from "./skills";

const Grid = () => {
  return (
    <div className={styles.wrapper}>
      <Profile />
      <div className={styles.project1}>project 1</div>
      <LightDarkMode />
      <div className={styles.resume}>resume</div>
      <Language />
      <div className={styles.project2}>project 2</div>
      <WorkTogether />
      <div className={styles.linkedIn}>linkedin</div>
      <div className={styles.gitHub}>github</div>
      <div className={styles.project3}>project 3</div>
      <div className={styles.project4}>project 4</div>
      <Skills />
      <AboutMe />
    </div>
  )
}

export default Grid
