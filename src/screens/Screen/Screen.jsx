import React from "react";
import { About } from "../../components/About";
import { Blog } from "../../components/Blog";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Hero } from "../../components/Hero";
import { Statistics } from "../../components/Statistics";
import "./style.css";

export const Screen = () => {
  return (
    <div className="screen">
      <Header />
      <Hero />
      <About />
      <Statistics />
      <Blog />
      <Footer
        className="footer-instance"
        href="https://www.facebook.com/mtieli.tsignebi/?locale=ms_MY"
      />
    </div>
  );
};
