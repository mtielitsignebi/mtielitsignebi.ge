import React from "react";
import styled from "styled-components";

interface Props {
  className: any;
}

const StyledPencilicon = styled.svg`
  & .path {
    stroke: #3f3f46;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 1.25;
  }
`;

export const Pencilicon = ({ className }: Props): JSX.Element => {
  return (
    <StyledPencilicon
      className={`pencilicon ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M15.0007 8.33424L11.6673 5.0009M2.08398 17.9176L4.90429 17.6042C5.24887 17.5659 5.42115 17.5468 5.58219 17.4946C5.72506 17.4484 5.86102 17.383 5.98639 17.3004C6.1277 17.2072 6.25027 17.0846 6.49542 16.8395L17.5007 5.83424C18.4211 4.91376 18.4211 3.42138 17.5007 2.5009C16.5802 1.58043 15.0878 1.58043 14.1673 2.5009L3.16209 13.5061C2.91694 13.7513 2.79436 13.8739 2.70118 14.0152C2.61851 14.1405 2.55316 14.2765 2.50691 14.4194C2.45478 14.5804 2.43564 14.7527 2.39735 15.0973L2.08398 17.9176Z"
      />
    </StyledPencilicon>
  );
};
