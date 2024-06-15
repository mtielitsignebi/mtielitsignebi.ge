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
} from "./styles";
import { useLocation, useNavigate } from "react-router";

interface Props {
  platform: string;
}

export const Header = ({ platform }: Props): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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
            style="outline"
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
        <MenuItem
          onClick={() => navigate(`/home`)}
          className={`item ${
            location.pathname === "/home" ? "MenuItemActive" : ""
          }`}
        >
          მთავარი
        </MenuItem>
        <MenuItem
          onClick={() => navigate(`/about`)}
          className={`item ${
            location.pathname === "/about" ? "MenuItemActive" : ""
          }`}
        >
          ჩვენ შესახებ
        </MenuItem>
        <MenuItem
          onClick={() => navigate(`/events`)}
          className={`item ${
            location.pathname === "/events" ? "MenuItemActive" : ""
          }`}
        >
          სიახლეები
        </MenuItem>
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
