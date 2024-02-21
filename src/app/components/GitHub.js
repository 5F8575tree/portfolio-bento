import styles from "../gitHub.module.css";

const GitHub = () => {
  return (
    <div className={styles.gitHub}>
      <a href="https://github.com/5F8575tree" target="_blank">
        <img className={styles.gitHub__image} src="/github-light.png" />
      </a>
    </div>
  )
}

export default GitHub
