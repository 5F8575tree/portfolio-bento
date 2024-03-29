import styles from "../skills.module.css";

const Skills = () => {
  return (
    <div className={styles.skills}>
      <div className={styles.content}>
        <div className={styles.row}>
          <p className={styles.text}>javascript</p>
          <p className={styles.text}>ruby</p>
          <p className={styles.text}>full-stack dev</p>
          <p className={styles.text}>php</p>
        </div>
        <div className={styles.row}>
          <p className={styles.text}>html / css</p>
          <p className={styles.text}>figma</p>
          <p className={styles.text}>swift</p>
          <p className={styles.text}>webpack</p>
        </div>
        <div className={styles.row}>
          <p className={styles.textSmall}>web dev</p>
          <p className={styles.textSmall}>frontend dev</p>
          <p className={styles.textSmall}>web design</p>
          <p className={styles.textSmall}>freelance</p>
        </div>
        <div className={styles.row}>
          <p className={styles.text}>react</p>
          <p className={styles.text}>rails</p>
          <p className={styles.text}>nextjs</p>
          <p className={styles.text}>nodejs</p>
          <p className={styles.text}>graphql</p>
        </div>
        <div className={styles.row}>
          <p className={styles.text}>headless cms</p>
          <p className={styles.text}>wordpress</p>
          <p className={styles.text}>shopify</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
