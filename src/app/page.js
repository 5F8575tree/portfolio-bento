"use client";

import styles from "./page.module.css";
import ToggleTheme from "./components/ToggleTheme";
import NavBar from "./components/NavBar";
import Grid from "./components/Grid";
import { ThemeProvider } from "./ThemeContext";

export default function Home() {
  return (
    <main className={styles.main}>
      <ThemeProvider>
        <ToggleTheme />
        <NavBar />
        <Grid />
      </ThemeProvider>
    </main>
  );
}
