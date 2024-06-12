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
import { useNavigate } from "react-router";

interface Props {
  platform: string;
}

export const Header = ({ platform }: Props): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const reloadPage = () => {
    window.scrollTo(0, 0);
    window.location.reload();
  };

  return (
    <StyledHeader platform={platform} className="header">
      <div onClick={reloadPage}>
        <Logo
          className="logo"
          alt="Logo"
          src={"https://c.animaapp.com/9E1pYK5V/img/logo-2.svg"}
        />
      </div>
      <Actions platform={platform} className="actions">
        <div onClick={() => navigate(`/login`)}>
          <Button
            override={<Usericon1 className="usericon-1" />}
            style="ghost"
            text="შესვლა"
          />
        </div>

        <div onClick={() => navigate(`/donate`)}>
          <Button icon={false} style="default" text="დონაცია" />
        </div>
      </Actions>
      <Hamburger platform={platform} onClick={toggleMenu}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu platform={platform} isOpen={menuOpen} className="menu">
        <div onClick={() => navigate(`/home`)}>
          <MenuItem className="item">მთავარი</MenuItem>
        </div>

        <div onClick={() => navigate(`/about`)}>
          <MenuDiv className="div">ჩვენ შესახებ</MenuDiv>
        </div>

        <div onClick={() => navigate(`/events`)}>
          <MenuDiv className="div">სიახლეები</MenuDiv>
        </div>
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
