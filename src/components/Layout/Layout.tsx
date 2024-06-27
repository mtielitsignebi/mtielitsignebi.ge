import React, { ReactNode } from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import * as S from "./styles";
import { Container } from "@mantine/core";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <S.Wrapper>
      <Header />
      <Container fluid mt="64px" px={0}>
        {children}
      </Container>
      <Footer />
    </S.Wrapper>
  );
};
