import React from "react";
import styled from "styled-components";

interface Props {
  className: any;
}

const StyledFacebookicon = styled.svg`
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

export const Facebookicon = ({ className }: Props): JSX.Element => {
  return (
    <StyledFacebookicon
      className={`facebookicon ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 25 24"
      width="25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_720_2074)">
        <path
          className="path"
          d="M12.5 21C17.4706 21 21.5 16.9706 21.5 12C21.5 7.02944 17.4706 3 12.5 3C7.52944 3 3.5 7.02944 3.5 12C3.5 16.9706 7.52944 21 12.5 21Z"
        />
        <path
          className="path"
          d="M16.25 8.25H14.75C14.4542 8.24876 14.161 8.30612 13.8875 8.41875C13.6139 8.53138 13.3654 8.69707 13.1562 8.90625C12.9471 9.11543 12.7814 9.36396 12.6687 9.6375C12.5561 9.91104 12.4987 10.2042 12.5 10.5V21"
        />
        <path className="path" d="M9.5 13.5H15.5" />
      </g>
      <defs className="defs">
        <clipPath className="clip-path" id="clip0_720_2074">
          <rect className="rect" height="24" transform="translate(0.5)" width="24" />
        </clipPath>
      </defs>
    </StyledFacebookicon>
  );
};
