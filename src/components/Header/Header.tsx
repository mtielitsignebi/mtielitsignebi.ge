import { useState } from "react";
import { Usericon1 } from "../../icons/Usericon1";
import { Button } from "../Button";
import {
  StyledHeader,
  Logo,
  Actions,
  Hamburger,
  Menu,
  MenuItem,
  MenuDiv,
} from "./styles";

interface Props {
  platform: string;
}

export const Header = ({ platform }: Props): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <StyledHeader platform={platform} className="header">
      <Logo
        className="logo"
        alt="Logo"
        src={"https://c.animaapp.com/9E1pYK5V/img/logo-2.svg"}
      />
      <Actions platform={platform} className="actions">
        <Button
          override={<Usericon1 className="usericon-1" />}
          style="ghost"
          text="შესვლა"
        />

        <Button icon={false} style="default" text="დონაცია" />
      </Actions>
      <Hamburger platform={platform} onClick={toggleMenu}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu platform={platform} isOpen={menuOpen} className="menu">
        <MenuItem className="item">მთავარი</MenuItem>
        <MenuDiv className="div">ჩვენ შესახებ</MenuDiv>
        <MenuDiv className="div">სიახლეები</MenuDiv>
        {platform !== "web" && (
          <>
            <Button
              override={<Usericon1 className="usericon-1" />}
              style="ghost"
              text="შესვლა"
            />

            <Button icon={false} style="default" text="დონაცია" />
          </>
        )}
      </Menu>
    </StyledHeader>
  );
};
