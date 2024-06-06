import PropTypes from "prop-types";
import React from "react";
import { Usericon1 } from "../../icons/Usericon1";
import styled from "styled-components";

interface Props {
  text: string;
  icon?: boolean;
  style: "ghost" | "default";
  className?: any;
  override?: JSX.Element;
  divClassName?: any;
}

const StyledButton = styled.button`
  all: unset;
  align-items: center;
  border-radius: 8px;
  box-sizing: border-box;
  display: flex;
  gap: 4px;
  height: 44px;
  justify-content: center;
  overflow: hidden;
  padding: 10px 24px;
  position: relative;
  width: 140px;

  & .text-wrapper {
    font-family: var(--label-m-font-family);
    font-size: var(--label-m-font-size);
    font-style: var(--label-m-font-style);
    font-weight: var(--label-m-font-weight);
    letter-spacing: var(--label-m-letter-spacing);
    line-height: var(--label-m-line-height);
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }

  & .user-icon {
    height: 24px !important;
    position: relative !important;
    width: 24px !important;
  }

  &.default {
    background-color: var(--accent);
  }

  &.ghost .text-wrapper {
    color: var(--primitives-accent-duplicate);
  }

  &.default .text-wrapper {
    color: #ffffff;
  }
`;

export const Button = ({
  text = "ლეიბლი",
  icon = true,
  style,
  className,
  override = <Usericon1 className="user-icon" />,
  divClassName,
}: Props): JSX.Element => {
  return (
    <StyledButton className={`button ${style} ${className}`}>
      {icon && <>{override}</>}

      <div className={`text-wrapper ${divClassName}`}>{text}</div>
    </StyledButton>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.bool,
  style: PropTypes.oneOf(["ghost", "default"]),
};
