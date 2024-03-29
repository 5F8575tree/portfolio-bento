import styles from "../project.module.css";

const Project = ({ title, intro, imageSrc, designBit, number, link }) => {
  const classForGrid = (number) => {
    return styles[`project${number}`];
  };

  return (
    <div className={classForGrid(number)}>
      <a href={link} target="_blank">
        <div className={styles.image}>
          {imageSrc ? <img src={imageSrc} alt={title} /> : "No image"}
        </div>
        <div className={styles.projectContent}>
          <div className={styles.header}>
            <h2 className={styles.title}>{title}</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              width="20"
              viewBox="0 0 500 500"
            >
              <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />
            </svg>
          </div>
          <div className={styles.intro}>{intro}</div>
          <div className={styles.looper}>
            {designBit ? <img src={designBit} alt={title} /> : "No image"}
          </div>
        </div>
      </a>
    </div>
  );
};

export default Project;
