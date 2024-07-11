import React from "react";
import styled from "styled-components";

interface Props {
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

  & .logo {
    height: 40px;
    object-fit: cover;
    position: relative;
    width: 40px;
  }

  & .label {
    color: var(--blue-900);
    font-family: var(--body-m-regular-font-family);
    font-size: var(--body-m-regular-font-size);
    font-style: var(--body-m-regular-font-style);
    font-weight: var(--body-m-regular-font-weight);
    letter-spacing: var(--body-m-regular-letter-spacing);
    line-height: var(--body-m-regular-line-height);
  }
`;

export const PartnerCard = ({ logo, text }: Props): JSX.Element => {
  return (
    <StyledPartnerCard className="partner-card">
      <img className="logo" alt="Logo" src={logo} />
      <div className="label">{text}</div>
    </StyledPartnerCard>
  );
};
