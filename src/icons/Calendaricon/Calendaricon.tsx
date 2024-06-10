import React from "react";
import styled from "styled-components";

interface Props {
  className: any;
}

const StyledCalendaricon = styled.svg`
  & .path {
    stroke: #000d38;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 2.25;
  }

  & .defs .rect {
    fill: white;
  }
`;

export const Calendaricon = ({ className }: Props): JSX.Element => {
  return (
    <StyledCalendaricon
      className={`calendaricon ${className}`}
      fill="none"
      height="36"
      viewBox="0 0 36 36"
      width="36"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_527_24609)">
        <path
          className="path"
          d="M29.25 5.625H6.75C6.12868 5.625 5.625 6.12868 5.625 6.75V29.25C5.625 29.8713 6.12868 30.375 6.75 30.375H29.25C29.8713 30.375 30.375 29.8713 30.375 29.25V6.75C30.375 6.12868 29.8713 5.625 29.25 5.625Z"
        />
        <path
          className="path"
          d="M24.75 3.375V7.875"
        />
        <path
          className="path"
          d="M11.25 3.375V7.875"
        />
        <path
          className="path"
          d="M5.625 12.375H30.375"
        />
        <path
          className="path"
          d="M23.0625 18L16.4953 24.1875L12.9375 20.8125"
        />
      </g>
      <defs className="defs">
        <clipPath className="clip-path" id="clip0_527_24609">
          <rect className="rect" height="36" width="36" />
        </clipPath>
      </defs>
    </StyledCalendaricon>
  );
};
