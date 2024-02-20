import styles from "../toggleLanguage.module.css";

const ToggleLanguage = () => {
  return (
    <div className={styles.toggleLanguage}>
      <div className={styles.controls}>
        <img src='/britain.svg' />
        <img src='/japan.svg' />
      </div>
      <div className={styles.toggleSwitch}>
        <input
          id="languageToggle"
          type="checkbox"
          // onChange={toggleLanguage}
          // checked={Language === 'dark'}
        />
        <label htmlFor='languageToggle' className={styles.slider}></label>
      </div>
    </div>
  );
};

export default ToggleLanguage;
