import styles from "../linkedIn.module.css";

const LinkedIn = () => {
  return (
    <div className={styles.linkedIn}>
      <a href="https://linkedin.com/in/markjrawlins" target="_blank">
        <img className={styles.linkedIn__image} src="/linkedin-light.png" />
      </a>
    </div>
  )
}

export default LinkedIn
