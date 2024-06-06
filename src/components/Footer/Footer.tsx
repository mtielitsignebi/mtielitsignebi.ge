import PropTypes from "prop-types";
import React from "react";
import { Facebookicon } from "../../icons/Facebookicon";
import { Instagramicon1 } from "../../icons/Instagramicon1";
import { Button } from "../Button";
import styled from "styled-components";

interface Props {
  platform: string;
  className: any;
  logo: string;
  buttonIcon: JSX.Element;
  override: JSX.Element;
}

const StyledFooter = styled.div`
  align-items: center;
  display: inline-flex;
  flex-direction: column;
  gap: 48px;
  padding: 40px 0px;
  position: relative;

  & .actions-2 {
    align-items: center;
    display: flex;
    flex: 0 0 auto;
    flex-wrap: wrap;
    gap: 32px 16px;
    justify-content: center;
    position: relative;
    width: 296px;
  }

  & .logo-2 {
    height: 128px;
    position: relative;
    width: 150px;
  }

  & .button-instance {
    background-color: var(--primitives-white-duplicate) !important;
  }

  & .design-component-instance-node {
    color: var(--primitives-text-duplicate) !important;
    margin-right: -0.5px !important;
  }

  & .button-2 {
    color: var(--primitives-text-duplicate) !important;
    margin-right: -3px !important;
  }

  & .copy {
    color: var(--text);
    font-family: var(--body-m-regular-font-family);
    font-size: var(--body-m-regular-font-size);
    font-style: var(--body-m-regular-font-style);
    font-weight: var(--body-m-regular-font-weight);
    letter-spacing: var(--body-m-regular-letter-spacing);
    line-height: var(--body-m-regular-line-height);
    position: relative;
    text-align: center;
    white-space: nowrap;
    width: fit-content;
  }

  & .facebook-icon {
    margin-left: -0.5px !important;
    position: relative !important;
    width: 24px !important;
  }

  & .instagram-icon {
    height: 24px !important;
    margin-left: -3px !important;
    position: relative !important;
    width: 24px !important;
  }
`;

export const Footer = ({
  platform,
  className,
  logo = "https://c.animaapp.com/9E1pYK5V/img/logo.svg",
  buttonIcon = <Facebookicon className="facebook-icon" />,
  override = <Instagramicon1 className="instagram-icon" />,
}: Props): JSX.Element => {
  return (
    <StyledFooter className={`footer ${className}`}>
      <div className="actions-2">
        <img className="logo-2" alt="Logo" src={logo} />
        <Button
          className="button-instance"
          divClassName="design-component-instance-node"
          override={buttonIcon}
          style="default"
          text="Facebook"
        />
        <Button
          className="button-instance"
          divClassName="button-2"
          override={override}
          style="default"
          text="Instagram"
        />
      </div>
      <p className="copy">© 2023 ყველა უფლება დაცულია.</p>
    </StyledFooter>
  );
};

Footer.propTypes = {
  platform: PropTypes.oneOf(["web"]),
  logo: PropTypes.string,
};
