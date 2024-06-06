import React from "react";
import styled from "styled-components";

interface Props {
  className: any;
}

const StyledPlayicon = styled.svg`
  .circle {
    fill: #000d38;
  }

  .path {
    stroke: white;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 2.5;
  }
`;

export const Playicon = ({ className }: Props): JSX.Element => {
  return (
    <StyledPlayicon
      className={`playicon ${className}`}
      fill="none"
      height="64"
      viewBox="0 0 64 64"
      width="64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle className="circle" cx="32.0015" cy="32" r="32" />
      <path
        className="path"
        d="M20.7515 21.4216C20.7515 19.9949 22.2798 19.0916 23.5298 19.7782L42.7631 30.3582C43.0571 30.5201 43.3023 30.7579 43.473 31.0468C43.6437 31.3357 43.7338 31.6651 43.7338 32.0007C43.7338 32.3363 43.6437 32.6658 43.473 32.9547C43.3023 33.2436 43.0571 33.4814 42.7631 33.6432L23.5298 44.2216C23.2444 44.3785 22.923 44.4583 22.5974 44.4533C22.2717 44.4482 21.953 44.3584 21.6726 44.1928C21.3922 44.0271 21.1598 43.7912 20.9983 43.5084C20.8368 43.2256 20.7517 42.9056 20.7515 42.5799V21.4216Z"
      />
    </StyledPlayicon>
  );
};
