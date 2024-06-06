import PropTypes from "prop-types";
import React from "react";
import { Usericon1 } from "../../icons/Usericon1";
import { Button } from "../Button";
import styled from "styled-components";

interface Props {
  platform: string;
  className: any;
  logo: string;
}

const StyledHeader = styled.div`
  align-items: center;
  background-color: var(--background-300);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: var(--primitives-bg-100-duplicate);
  display: flex;
  justify-content: space-between;
  padding: 16px 80px 16px 80px;
  position: relative;
  /* width: 1440px; */

  & .logo {
    height: 64px;
    object-fit: cover;
    position: relative;
    width: 70px;
  }

  & .actions {
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 32px;
    justify-content: flex-end;
    position: relative;
  }

  & .usericon-1 {
    height: 24px !important;
    position: relative !important;
    width: 24px !important;
  }

  & .menu {
    align-items: center;
    display: inline-flex;
    gap: 48px;
    justify-content: center;
    left: 538px;
    position: absolute;
    top: 37px;
  }

  & .item {
    color: var(--text);
    font-family: var(--body-m-semibold-font-family);
    font-size: var(--body-m-semibold-font-size);
    font-style: var(--body-m-semibold-font-style);
    font-weight: var(--body-m-semibold-font-weight);
    letter-spacing: var(--body-m-semibold-letter-spacing);
    line-height: var(--body-m-semibold-line-height);
    margin-top: -1px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }

  & .div {
    color: var(--text);
    font-family: var(--body-m-regular-font-family);
    font-size: var(--body-m-regular-font-size);
    font-style: var(--body-m-regular-font-style);
    font-weight: var(--body-m-regular-font-weight);
    letter-spacing: var(--body-m-regular-letter-spacing);
    line-height: var(--body-m-regular-line-height);
    margin-top: -1px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }
`;

export const Header = ({
  platform,
  className,
  logo = "https://c.animaapp.com/9E1pYK5V/img/logo-2.svg",
}: Props): JSX.Element => {
  return (
    <StyledHeader className={`header ${className}`}>
      <img className="logo" alt="Logo" src={logo} />
      <div className="actions">
        <Button icon={false} style="default" text="დონაცია" />
        <Button
          override={<Usericon1 className="usericon-1" />}
          style="ghost"
          text="შესვლა"
        />
      </div>
      <div className="menu">
        <div className="item">მთავარი</div>
        <div className="div">ჩვენ შესახებ</div>
        <div className="div">სიახლეები</div>
      </div>
    </StyledHeader>
  );
};

Header.propTypes = {
  platform: PropTypes.oneOf(["web"]),
  logo: PropTypes.string,
};
