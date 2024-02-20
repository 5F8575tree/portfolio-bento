import ToggleTheme from "./ToggleTheme"
import styles from "../lightDarkMode.module.css";

const LightDarkMode = () => {
  return (
    <div className={styles.lightDarkMode}>
      <ToggleTheme />
    </div>
  )

}
export default LightDarkMode
