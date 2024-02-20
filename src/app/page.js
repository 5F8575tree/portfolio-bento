"use client";

import styles from "./page.module.css";
import NavBar from "./components/NavBar";
import Grid from "./components/Grid";
import { ThemeProvider } from "./ThemeContext";

export default function Home() {
  return (
    <main className={styles.main}>
      <ThemeProvider>
        <NavBar />
        <Grid />
      </ThemeProvider>
    </main>
  );
}
