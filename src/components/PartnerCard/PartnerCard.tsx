import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

interface Props {
  isMob: boolean;
  className: any;
  logo: string;
  text: string;
}

const StyledPartnerCard = styled.div`
  align-items: center;
  background-color: var(--green-200);
  border-radius: 8px;
  box-shadow: var(--story-card);
  display: inline-flex;
  gap: 8px;
  padding: 16px;
  position: relative;

  & .logo-2 {
    height: 40px;
    object-fit: cover;
    position: relative;
    width: 40px;
  }

  & .partner-name {
    color: var(--blue-900);
    font-family: var(--body-m-regular-font-family);
    font-size: var(--body-m-regular-font-size);
    font-style: var(--body-m-regular-font-style);
    font-weight: var(--body-m-regular-font-weight);
    letter-spacing: var(--body-m-regular-letter-spacing);
    line-height: var(--body-m-regular-line-height);
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }
`;

export const PartnerCard = ({
  isMob,
  className,
  logo = "https://c.animaapp.com/rsy2ONkj/img/logo-25@2x.png",
  text = "თეგეტა მოტორსი",
}: Props): JSX.Element => {
  return (
    <StyledPartnerCard className={`partner-card ${className}`}>
      <img className={`logo-2 `} alt="Logo" src={logo} />
      <div className="partner-name">{text}</div>
    </StyledPartnerCard>
  );
};

PartnerCard.propTypes = {
  isMob: PropTypes.bool,
  logo: PropTypes.string,
  text: PropTypes.string,
};
