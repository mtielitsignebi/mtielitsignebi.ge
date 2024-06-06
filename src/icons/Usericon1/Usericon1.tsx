import React from "react";
import styled from "styled-components";

interface Props {
  className: any;
}

const StyledUsericon1 = styled.svg`
  .path {
    stroke: #1851b6;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 1.6;
  }
`;

export const Usericon1 = ({ className }: Props): JSX.Element => {
  return (
    <StyledUsericon1
      className={`usericon-1 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 25 24"
      width="25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M20.4962 21C20.4962 19.6044 20.4962 18.9067 20.324 18.3389C19.9362 17.0605 18.9358 16.06 17.6574 15.6722C17.0896 15.5 16.3918 15.5 14.9962 15.5H9.99622C8.60065 15.5 7.90287 15.5 7.33507 15.6722C6.05667 16.06 5.05626 17.0605 4.66846 18.3389C4.49622 18.9067 4.49622 19.6044 4.49622 21M16.9962 7.5C16.9962 9.98528 14.9815 12 12.4962 12C10.0109 12 7.99622 9.98528 7.99622 7.5C7.99622 5.01472 10.0109 3 12.4962 3C14.9815 3 16.9962 5.01472 16.9962 7.5Z"
      />
    </StyledUsericon1>
  );
};
