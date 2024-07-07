import styled from "styled-components";
import { usePlatform } from "../../hooks";
import { Button } from "@mantine/core";
import { theme } from "../../theme";

const StyledGoalSection = styled.div`
  height: 702px;
  position: relative;
  width: 1280px;

  ${(props) => props.theme.platform.mobile} {
    width: 390px;
  }

  & .overlap-group {
    height: 547px;
    position: relative;
    top: 44px;
  }

  & .goal {
    align-items: center;
    background-color: ${(props) => props.theme.colors.green[100]};
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    gap: 48px;
    left: 0;
    padding: 96px 0px 64px;
    position: absolute;
    top: 127px;
    width: 1280px;

    ${(props) => props.theme.platform.mobile} {
      width: 342px;
    }
  }

  & .heading-our {
    color: var(--text);
    font-family: var(--title-m-font-family);
    font-size: var(--title-m-font-size);
    font-style: var(--title-m-font-style);
    font-weight: var(--title-m-font-weight);
    letter-spacing: var(--title-m-letter-spacing);
    line-height: var(--title-m-line-height);
    margin-top: -1px;
    position: relative;
    text-align: center;
    white-space: nowrap;
    width: fit-content;
  }

  & .p {
    color: var(--text);
    font-family: "Noto Serif Georgian", Helvetica;
    font-size: 18px;
    font-weight: 300;
    letter-spacing: 0;
    line-height: 25.2px;
    position: relative;
    text-align: center;
    width: 920px;

    ${(props) => props.theme.platform.mobile} {
      width: 310px;
    }
  }

  & .img {
    height: 173px;
    left: 540px;
    position: absolute;
    top: 0;
    width: 200px;

    ${(props) => props.theme.platform.mobile} {
      width: 180px;
      height: 155px;
      left: 81px;
    }
  }
`;

export const GoalSection = (): JSX.Element => {
  const platform = usePlatform();
  return (
    <StyledGoalSection>
      <div className="overlap-group">
        <div className="goal">
          <div className="heading-our">ჩვენი მიზანი</div>
          <p className="p">
            {" "}
            შევიძინოთ, შევაგროვოთ წიგნები მთაში მცხოვრები ბავშვებისთვის, რათა
            რაც შეიძლება მეტ ბავშვს ვაჩუქოთ მათთვის საყვარელი პერსონაჟები.
            გვინდა შევმატოთ წიგნები მცირე კონტიგენტიანი სკოლის ბიბლიოთეკებსაც და
            სრულად მოვიცვათ საქართველოს მთიანი რეგიონები და მიმდებარე სოფლები.
          </p>
          <Button size="md" color={theme.colors.blue[400]}>
            დონაცია
          </Button>
        </div>
        <img
          className="img"
          alt="Logo"
          src="https://c.animaapp.com/9E1pYK5V/img/logo-4@2x.png"
        />
      </div>
    </StyledGoalSection>
  );
};
