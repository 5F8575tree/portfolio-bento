import styles from "./page.module.css";
import ToggleTheme from "./components/ToggleTheme";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <main className={styles.main}>
      <ToggleTheme />
      <NavBar />
    </main>
  );
}
