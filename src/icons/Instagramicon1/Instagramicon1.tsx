import React from "react";
import styled from "styled-components";

interface Props {
  className: any;
}

const StyledInstagramicon1 = styled.svg`
  & .path {
    stroke: #000d38;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 2.25;
  }

`;

export const Instagramicon1 = ({ className }: Props): JSX.Element => {
  return (
    <StyledInstagramicon1
      className={`instagramicon-1 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M12 15.1875C13.7604 15.1875 15.1875 13.7604 15.1875 12C15.1875 10.2396 13.7604 8.8125 12 8.8125C10.2396 8.8125 8.8125 10.2396 8.8125 12C8.8125 13.7604 10.2396 15.1875 12 15.1875Z"
      />
      <path
        className="path"
        d="M16.5 3H7.5C5.01472 3 3 5.01472 3 7.5V16.5C3 18.9853 5.01472 21 7.5 21H16.5C18.9853 21 21 18.9853 21 16.5V7.5C21 5.01472 18.9853 3 16.5 3Z"
      />
      <path
        className="path"
        d="M16.875 8.625C17.7034 8.625 18.375 7.95343 18.375 7.125C18.375 6.29657 17.7034 5.625 16.875 5.625C16.0466 5.625 15.375 6.29657 15.375 7.125C15.375 7.95343 16.0466 8.625 16.875 8.625Z"
      />
    </StyledInstagramicon1>
  );
};
