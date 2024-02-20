import styles from "../grid.module.css";
import Profile from "./Profile";
import WorkTogether from "./WorkTogether";

const Grid = () => {
  return (
    <div className={styles.wrapper}>
      <Profile />
      <div className={styles.project1}>project 1</div>
      <div className={styles.lightDarkMode}>light/dark mode</div>
      <div className={styles.resume}>resume</div>
      <div className={styles.language}>language</div>
      <div className={styles.project2}>project 2</div>
      <WorkTogether />
      <div className={styles.linkedIn}>linkedin</div>
      <div className={styles.gitHub}>github</div>
      <div className={styles.project3}>project 3</div>
      <div className={styles.project4}>project 4</div>
      <div className={styles.skills}>skills</div>
      <div className={styles.aboutMe}>about me</div>
    </div>
  )
}

export default Grid
