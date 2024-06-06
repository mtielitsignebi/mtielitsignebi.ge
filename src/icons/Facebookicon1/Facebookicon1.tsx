import React from "react";
import styled from "styled-components";

interface Props {
  className: any;
}

const StyledFacebookicon1 = styled.svg`
  .path {
    stroke: #000d38;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 2.25;
  }

  .defs .rect {
    fill: white;
  }
`;

export const Facebookicon1 = ({ className }: Props): JSX.Element => {
  return (
    <StyledFacebookicon1
      className={`facebookicon-1 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_720_1646)">
        <path
          className="path"
          d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
        />
        <path
          className="path"
          d="M15.75 8.25002H14.25C13.9542 8.24878 13.6611 8.30613 13.3875 8.41876C13.114 8.5314 12.8654 8.69708 12.6563 8.90626C12.4471 9.11544 12.2814 9.36397 12.1688 9.63752C12.0561 9.91106 11.9988 10.2042 12 10.5V21"
        />
        <path className="path" d="M9 13.5H15" />
      </g>
      <defs className="defs">
        <clipPath className="clip-path" id="clip0_720_1646">
          <rect className="rect" height="24" width="24" />
        </clipPath>
      </defs>
    </StyledFacebookicon1>
  );
};
