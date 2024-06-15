import React, { ReactNode } from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { StyledLayout } from "./styles";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <StyledLayout>
      <Header />
      <div className="content">{children}</div>
      <Footer
      // buttonIcon={<Facebookicon1 className="facebookicon-1" />}
      // className="footer-instance"
      // logo="https://c.animaapp.com/PUxN8WIz/img/logo-5.svg"
      // override={<Instagramicon1 className="instagramicon-instance" />}
      />
    </StyledLayout>
  );
};
