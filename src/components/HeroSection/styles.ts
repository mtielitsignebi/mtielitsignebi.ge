import styled, { css } from "styled-components";

export const HeroSectionWrapper = styled.div<{ platform: string }>`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 40px;
  padding: 64px 0px;
  position: relative;
  overflow: hidden;

  ${({ platform }) =>
    platform !== "web" &&
    css`
      padding: 32px 0px;
    `}
`;

export const HeroContent = styled.div<{ platform: string }>`
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
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

  ${({ platform }) =>
    platform !== "web" &&
    css`
      font-size: var(--headline-m-font-size);
    `}
`;

export const VideoWrapper = styled.div<{ platform: string }>`
  width: 100%;
  height: 100%;

  border-radius: 24px;
  overflow: hidden;

  ${({ platform }) =>
    platform !== "web" &&
    css`
      width: 90%;
      max-width: 600px;
    `}

  .video-js {
    display: block !important;
  }

  .vjs-big-play-button {
    cursor: pointer;

    ${({ platform }) =>
      platform !== "web" &&
      css`
        width: 24px;
        height: 24px;
      `}
  }
`;
