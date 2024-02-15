import styles from "./page.module.css";
import ToggleTheme from "./components/ToggleTheme";

export default function Home() {
  return (
    <main className={styles.main}>
      <ToggleTheme />
    </main>
  );
}
