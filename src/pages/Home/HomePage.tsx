import React from "react";
import { Carousel } from "../../components/Carousel";
import { GoalSection } from "../../components/GoalSection";
import { HeroSection } from "../../components/HeroSection";
import { HistorySection } from "../../components/HistorySection";
import { Layout } from "../../components/Layout";
import { Container } from "./styles";
import { Divider } from "../../icons/Divider";

export const HomePage = (): JSX.Element => {
  return (
    <Layout>
      <Container>
        <HeroSection />
        <Divider />
        <HistorySection />
        <Divider />
        <GoalSection />
        <Carousel />
      </Container>
    </Layout>
  );
};
