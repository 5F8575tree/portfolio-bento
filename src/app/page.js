import styles from "./page.module.css";
import ToggleTheme from "./components/ToggleTheme";
import NavBar from "./components/NavBar";
import Grid from "./components/grid";

export default function Home() {
  return (
    <main className={styles.main}>
      <ToggleTheme />
      <NavBar />
      <Grid />
    </main>
  );
}
