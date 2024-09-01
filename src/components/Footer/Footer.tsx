import React from "react";
import { Container, Logo, Actions } from "./styles";
import { IconFacebook, IconInstagram } from "../../icons";
import { Button, Center, Text } from "@mantine/core";
import { useControlXState } from "@etlyn/control-x";

export const Footer = (): JSX.Element => {
  const { data } = useControlXState("company-info");
  const SOCIAL_MEDIA = data.social_media ?? [];

  const mediaRedirectHandler = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <Container className="footer">
      <Logo
        alt="Logo"
        src={"https://c.animaapp.com/9E1pYK5V/img/logo.svg"}
        onClick={() => ""}
      />
      <Actions>
        {SOCIAL_MEDIA.map((media, index) => (
          <Button
            key={media.platform + index}
            variant="white"
            radius={8}
            color="#000"
            leftSection={<IconFacebook />}
            onClick={() => mediaRedirectHandler(media.url)}
          >
            {media.platform.charAt(0).toUpperCase() + media.platform.slice(1)}
          </Button>
        ))}
      </Actions>

      <Center mt="xs">
        <Text size="sm">© 2022-2024 ყველა უფლება დაცულია.</Text>
      </Center>
    </Container>
  );
};
