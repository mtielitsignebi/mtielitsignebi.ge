import React from "react";
import styled from "styled-components";

interface Props {
  className: any;
}

const StyledPencilicon2 = styled.svg`
  & .path {
    stroke: #3f3f46;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 1.25;
  }
`;

export const Pencilicon2 = ({ className }: Props): JSX.Element => {
  return (
    <StyledPencilicon2
      className={`pencilicon-2 ${className}`}
      fill="none"
      height="21"
      viewBox="0 0 20 21"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M15.0007 8.83326L11.6673 5.49993M2.08398 18.4166L4.90429 18.1032C5.24887 18.0649 5.42115 18.0458 5.58219 17.9937C5.72506 17.9474 5.86102 17.8821 5.98639 17.7994C6.1277 17.7062 6.25027 17.5836 6.49542 17.3385L17.5007 6.33326C18.4211 5.41279 18.4211 3.9204 17.5007 2.99993C16.5802 2.07945 15.0878 2.07945 14.1673 2.99992L3.16209 14.0052C2.91694 14.2503 2.79436 14.3729 2.70118 14.5142C2.61851 14.6396 2.55316 14.7755 2.50691 14.9184C2.45478 15.0794 2.43564 15.2517 2.39735 15.5963L2.08398 18.4166Z"
      />
    </StyledPencilicon2>
  );
};
