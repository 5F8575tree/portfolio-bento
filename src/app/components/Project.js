import styles from "../project.module.css";

const Project = () => {
  return (
    <div className={styles.project}>
      <div className={styles.header}>
        <h2 className={styles.title}>project</h2>
        <svg className={styles.icon} />
      </div>
      <div className={styles.intro}>
        A company website built in php and Javascript
      </div>
      <div className={styles.image}>
        image
      </div>
      <div className={styles.paragraph}>
        paragraph
      </div>
      <div className={styles.designBit}>
        design bit
      </div>
    </div>
  )
}

export default Project
