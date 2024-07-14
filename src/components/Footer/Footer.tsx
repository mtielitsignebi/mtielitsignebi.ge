import React from "react";
import { Container, Logo, Actions, Copy } from "./styles";
import { IconFacebook, IconInstagram } from "../../icons";
import { Button } from "@mantine/core";

export const Footer = (): JSX.Element => {
  return (
    <Container className="footer">
      <Logo alt="Logo" src={"https://c.animaapp.com/9E1pYK5V/img/logo.svg"} />
      <Actions>
        <Button
          variant="white"
          radius={8}
          color="#000"
          leftSection={<IconFacebook />}
        >
          Facebook
        </Button>

        <Button
          variant="white"
          radius={8}
          color="#000"
          leftSection={<IconInstagram />}
        >
          Instagram
        </Button>
      </Actions>
      <Copy>© 2023 ყველა უფლება დაცულია.</Copy>
    </Container>
  );
};
