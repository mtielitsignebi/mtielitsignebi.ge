import React from "react";
import styled from "styled-components";

interface Props {
  className: any;
}

const StyledInstagramicon2 = styled.svg`
  & .path {
    stroke: #00182C;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 2.25;
  }

  & .path.fill {
    fill: #00182C;
  }
`;

export const Instagramicon2 = ({ className }: Props): JSX.Element => {
  return (
    <StyledInstagramicon2
      className={`instagramicon-2 ${className}`}
      fill="none"
      height="25"
      viewBox="0 0 24 25"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M12 15.4707C13.7604 15.4707 15.1875 14.0436 15.1875 12.2832C15.1875 10.5228 13.7604 9.0957 12 9.0957C10.2396 9.0957 8.8125 10.5228 8.8125 12.2832C8.8125 14.0436 10.2396 15.4707 12 15.4707Z"
      />
      <path
        className="path"
        d="M16.5 3.2832H7.5C5.01472 3.2832 3 5.29792 3 7.7832V16.7832C3 19.2685 5.01472 21.2832 7.5 21.2832H16.5C18.9853 21.2832 21 19.2685 21 16.7832V7.7832C21 5.29792 18.9853 3.2832 16.5 3.2832Z"
      />
      <path
        className="path fill"
        d="M16.875 8.9082C17.7034 8.9082 18.375 8.23663 18.375 7.4082C18.375 6.57978 17.7034 5.9082 16.875 5.9082C16.0466 5.9082 15.375 6.57978 15.375 7.4082C15.375 8.23663 16.0466 8.9082 16.875 8.9082Z"
      />
    </StyledInstagramicon2>
  );
};
