import styles from "../profile.module.css";

const Profile = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.profile__image_wrapper}>
        <img className={styles.profile__image} src="/me-with-ted.jpeg" />
      </div>
      <div className={styles.profile__content_wrapper}>
        <div className={styles.profile__headers}>
          <h1 className={styles.profile__name}>Mark Rawlins</h1>
          <h2 className={styles.profile__role}>Frontend Developer</h2>
        </div>
        <div className={styles.profile__paragraph_wrapper}>
          <p className={styles.profile__paragraph}>
            I create robust software solutions based on sound fundamentals.
            I listen, I plan, I execute. Originally from the UK, I'm now in Kamakura, JP.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Profile
