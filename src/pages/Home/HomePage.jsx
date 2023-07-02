import React from "react";
import { About } from "../../components/About";
import { Blog } from "../../components/Blog";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Hero } from "../../components/Hero";
import { Statistics } from "../../components/Statistics";
import "./style.css";

export const HomePage = () => {
  return (
    <div className="Wrapper">
      <Header />
      <Hero />
      <About />
      <Statistics />
      <Blog />
      <Footer />
    </div>
  );
};
