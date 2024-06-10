import React from "react";
import styled from "styled-components";

interface Props {
  className: any;
}

const StyledLocationicon3 = styled.svg`
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

export const Locationicon3 = ({ className }: Props): JSX.Element => {
  return (
    <StyledLocationicon3
      className={`locationicon-3 ${className}`}
      fill="none"
      height="36"
      viewBox="0 0 36 36"
      width="36"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_527_24610)">
        <path
          className="path"
          d="M18 19.125C20.4853 19.125 22.5 17.1103 22.5 14.625C22.5 12.1397 20.4853 10.125 18 10.125C15.5147 10.125 13.5 12.1397 13.5 14.625C13.5 17.1103 15.5147 19.125 18 19.125Z"
        />
        <path
          className="path"
          d="M29.25 14.625C29.25 24.75 18 32.625 18 32.625C18 32.625 6.75 24.75 6.75 14.625C6.75 11.6413 7.93526 8.77983 10.045 6.67005C12.1548 4.56026 15.0163 3.375 18 3.375C20.9837 3.375 23.8452 4.56026 25.955 6.67005C28.0647 8.77983 29.25 11.6413 29.25 14.625Z"
        />
      </g>
      <defs className="defs">
        <clipPath className="clip-path" id="clip0_527_24610">
          <rect className="rect" height="36" width="36" />
        </clipPath>
      </defs>
    </StyledLocationicon3>
  );
};
