import React from "react";
import styled from "styled-components";

interface Props {
  className: any;
}

const StyledChevron1 = styled.svg`
  &.path {
    fill: #1851B6;
    stroke: #1851B6;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 2;
  }
`;

export const Chevron1 = ({ className }: Props): JSX.Element => {
  return (
    <StyledChevron1
      className={`chevron-1 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M6 9.00098L12 15.001L18 9.00098"
      />
    </StyledChevron1>
  );
};
