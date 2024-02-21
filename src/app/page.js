"use client";

import styles from "./page.module.css";
import NavBar from "./components/NavBar";
import Grid from "./components/Grid";
import { ThemeProvider } from "./ThemeContext";
import { DisplayProvider } from "./DisplayContext";

export default function Home() {
  return (
    <main className={styles.main}>
      <ThemeProvider>
        <DisplayProvider>
          <NavBar />
          <Grid />
        </DisplayProvider>
      </ThemeProvider>
    </main>
  );
}
