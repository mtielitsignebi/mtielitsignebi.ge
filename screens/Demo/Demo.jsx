import React from "react";
import { About } from "../../components/About";
import { Blog } from "../../components/Blog";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Hero } from "../../components/Hero";
import { Statistics } from "../../components/Statistics";
import styles from "./Demo.module.css";

export const Demo = () => {
  return (
    <div className={styles.screen}>
      <div className={styles.div8}>
        <Footer
          href="https://www.facebook.com/mtieli.tsignebi/?locale=ms_MY"
          style={{
            borderBottomStyle: "none",
            borderLeftStyle: "none",
            borderRightStyle: "none",
            left: "0",
            mixBlendMode: "normal",
            position: "absolute",
            top: "3458px",
          }}
        />
        <Blog
          style={{
            left: "80px",
            position: "absolute",
            top: "2101px",
          }}
        />
        <Statistics
          style={{
            left: "0",
            position: "absolute",
            top: "1321px",
          }}
        />
        <About
          style={{
            left: "0",
            position: "absolute",
            top: "980px",
          }}
        />
        <Hero
          style={{
            left: "0",
            position: "absolute",
            top: "75px",
          }}
        />
        <Header
          style={{
            left: "0",
            position: "absolute",
            top: "0",
          }}
        />
      </div>
    </div>
  );
};
