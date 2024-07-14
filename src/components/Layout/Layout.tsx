import React, { ReactNode } from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import * as SC from "./styles";
import { Container } from "@mantine/core";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <SC.Wrapper>
      <SC.HeaderWrapper>
        <Header />
      </SC.HeaderWrapper>

      <SC.MainContainer>
        <SC.Content>
          <Container fluid px={0}>
            {children}
          </Container>
        </SC.Content>

        <Footer />
      </SC.MainContainer>
    </SC.Wrapper>
  );
};
