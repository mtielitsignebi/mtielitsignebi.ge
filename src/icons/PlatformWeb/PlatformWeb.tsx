import React from "react";
import styled from "styled-components";

interface Props {
  className: any;
}

const StyledPlatformWeb = styled.svg`
  .path {
    stroke: white;
    stroke-linecap: round;
    stroke-width: 2;
  }
`;

export const PlatformWeb = ({ className }: Props): JSX.Element => {
  return (
    <StyledPlatformWeb
      className={`platform-web ${className}`}
      fill="none"
      height="100"
      viewBox="0 0 1282 100"
      width="1282"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M1 67.4544C5.41778 67.3312 10.3956 66.5982 14.2356 66.0637C31.6916 63.6351 47.8302 60.4902 64.5849 57.7203C98.1662 52.1673 132.566 47.419 168.786 43.3267C198.382 39.9824 228.202 36.8456 259.816 35.3441C294.873 33.6795 335.959 32.4395 370.505 35.3982C431.297 40.6047 478.035 54.0207 536.475 60.5736C585.17 66.0336 640.146 66.6451 691.478 64.1314C727.35 62.3746 763.328 60.0719 798.34 57.2869C852.592 52.9721 903.151 46.1276 955.293 40.2563C987.631 36.6151 1021.02 33.2762 1055.99 32.4182C1080.98 31.8066 1107.14 31.5797 1131.25 33.7912C1154.45 35.9185 1176.81 38.582 1200.41 40.4008C1226.89 42.4412 1253.72 43.1397 1281 43.7247"
      />
    </StyledPlatformWeb>
  );
};
