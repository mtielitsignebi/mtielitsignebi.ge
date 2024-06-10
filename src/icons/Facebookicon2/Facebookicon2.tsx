import React from "react";
import styled from "styled-components";

interface Props {
  className: any;
}

const StyledFacebookicon2 = styled.svg`
  .g {
    clip-path: url(#clip0_728_310);
  }

  .path {
    stroke: #000d38;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 2.25;
  }

  .defs {
    .clip-path {
      rect {
        fill: white;
        height: 24;
        transform: translate(0.5);
        width: 24;
      }
    }
  }
`;

export const Facebookicon2 = ({ className }: Props): JSX.Element => {
  return (
    <StyledFacebookicon2
      className={`facebookicon-2 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 25 24"
      width="25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_728_310)">
        <path
          className="path"
          d="M12.5 21C17.4706 21 21.5 16.9706 21.5 12C21.5 7.02944 17.4706 3 12.5 3C7.52944 3 3.5 7.02944 3.5 12C3.5 16.9706 7.52944 21 12.5 21Z"
        />
        <path
          className="path"
          d="M16.25 8.25002H14.75C14.4542 8.24878 14.1611 8.30613 13.8875 8.41876C13.614 8.5314 13.3654 8.69708 13.1563 8.90626C12.9471 9.11544 12.7814 9.36397 12.6688 9.63752C12.5561 9.91106 12.4988 10.2042 12.5 10.5V21"
        />
        <path className="path" d="M9.5 13.5H15.5" />
      </g>
      <defs className="defs">
        <clipPath className="clip-path" id="clip0_728_310">
          <rect className="rect" height="24" transform="translate(0.5)" width="24" />
        </clipPath>
      </defs>
    </StyledFacebookicon2>
  );
};
