import React from "react";
import { Button, Text } from "@mantine/core";
import { theme } from "../../theme";
import {
  StyledGoalSection,
  OverlapGroup,
  Goal,
  HeadingOur,
  Description,
  Logo,
} from "./styles";
import { useNavigate } from "react-router";

export const GoalSection = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <StyledGoalSection>
      <OverlapGroup>
        <Logo
          alt="Logo"
          src="https://c.animaapp.com/9E1pYK5V/img/logo-4@2x.png"
        />
        <Goal>
          <HeadingOur>ჩვენი მიზანი</HeadingOur>
          <Description>
            შევიძინოთ, შევაგროვოთ წიგნები მთაში მცხოვრები ბავშვებისთვის, რათა
            რაც შეიძლება მეტ ბავშვს ვაჩუქოთ მათთვის საყვარელი პერსონაჟები.
            გვინდა შევმატოთ წიგნები მცირე კონტიგენტიანი სკოლის ბიბლიოთეკებსაც და
            სრულად მოვიცვათ საქართველოს მთიანი რეგიონები და მიმდებარე სოფლები.
          </Description>
          <Button
            size="md"
            color={theme.colors.blue[400]}
            onClick={() => navigate(`/donate`)}
          >
            დონაცია
          </Button>
        </Goal>
      </OverlapGroup>
    </StyledGoalSection>
  );
};
