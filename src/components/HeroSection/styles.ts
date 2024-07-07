import styled, { css } from "styled-components";

export const HeroSectionWrapper = styled.div<{ platform: string }>`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 64px 0px;
  position: relative;
  overflow: hidden;

  ${(props) => props.theme.platform.mobile} {
    padding: 0px 0px;
  }
`;

export const HeroContent = styled.div<{ platform: string }>`
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  margin-top: 40px;
  gap: 20px;
  justify-content: center;
  padding: 0px 20px;
  position: relative;
  z-index: 2;

  ${({ platform }) =>
    platform === "web" &&
    css`
      padding: 0px 80px;
    `}
`;

export const Heading = styled.p<{ platform: string }>`
  color: #000;
  font-family: var(--headline-l-font-family);
  font-size: var(--headline-l-font-size);
  font-style: var(--headline-l-font-style);
  font-weight: var(--headline-l-font-weight);
  letter-spacing: var(--headline-l-letter-spacing);
  line-height: var(--headline-l-line-height);
  text-align: center;
  margin: 0;
  width: 100%;
  max-width: 1294px;

  ${(props) => props.theme.platform.mobile} {
    font-size: var(--headline-m-font-size);
  }
`;

export const VideoWrapper = styled.div<{ platform: string }>`
  width: 100%;
  height: 100%;
  border-radius: 24px;
  overflow: hidden;

  ${(props) => props.theme.platform.mobile} {
    border-radius: 0px;
    width: 100%;
    height: 500px;
    max-width: 100vw;
    aspect-ratio: 4 / 3; /* Tall aspect ratio for mobile */
  }

  .video-js {
    display: block !important;
    width: 100% !important;
    height: 500px !important;
  }

  .vjs-big-play-button {
    cursor: pointer;

    ${(props) => props.theme.platform.mobile} {
      width: 24px;
      height: 24px;
    }
  }
`;
