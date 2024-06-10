import React from "react";
import styled from "styled-components";

interface Props {
  className: any;
}

const StyledEnvelopeicon1 = styled.svg`
  & .path {
    stroke: #6ab271;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 1.66667;
  }
`;

export const Envelopeicon1 = ({ className }: Props): JSX.Element => {
  return (
    <StyledEnvelopeicon1
      className={`envelopeicon-1 ${className}`}
      fill="none"
      height="40"
      viewBox="0 0 40 40"
      width="40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M10 12.5H30V26.6667C30 26.8877 29.9122 27.0996 29.7559 27.2559C29.5996 27.4122 29.3877 27.5 29.1667 27.5H10.8333C10.6123 27.5 10.4004 27.4122 10.2441 27.2559C10.0878 27.0996 10 26.8877 10 26.6667V12.5Z"
      />
      <path
        className="path"
        d="M30 12.5L20 21.6667L10 12.5"
      />
    </StyledEnvelopeicon1>
  );
};
