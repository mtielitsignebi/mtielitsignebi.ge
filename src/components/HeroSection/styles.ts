import styled, { css } from "styled-components";

export const HeroSectionWrapper = styled.div<{ platform: string }>`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 40px;
  padding: 64px 0px;

  ${({ platform }) =>
    platform !== "web" &&
    css`
      padding: 32px 0px;
    `}
`;

export const HeroImage = styled.div<{ platform: string }>`
  background-image: url(https://c.animaapp.com/9E1pYK5V/img/heroimage-1.png);
  background-position: 50% 50%;
  background-size: cover;
  height: 700px;
  position: relative;
  width: 100%;
  max-width: 1280px;

  ${({ platform }) =>
    platform !== "web" &&
    css`
      height: 400px;
    `}
`;

export const PlayIconWrapper = styled.div`
  height: 64px !important;
  position: absolute !important;
  width: 64px !important;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const HeroContent = styled.div<{ platform: string }>`
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  padding: 0px 20px;

  ${({ platform }) =>
    platform === "web" &&
    css`
      padding: 0px 80px;
    `}
`;

export const Heading = styled.p<{ platform: string }>`
  color: #000d38;
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
