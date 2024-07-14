import styled from "styled-components";

export const HeroSectionWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  padding: 0;

  ${(props) => props.theme.platform.mobile} {
    padding: 0;
  }
`;

export const HeroContent = styled.div`
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  margin-top: 40px;
  gap: 20px;
  justify-content: center;
  padding: 0 20px;
  z-index: 2;

  ${(props) => props.theme.platform.mobile} {
    padding: 0 24px;
  }
`;

export const Heading = styled.p`
  color: #000;
  font-family: var(--headline-l-font-family);
  font-size: var(--headline-l-font-size);
  font-style: var(--headline-l-font-style);
  font-weight: var(--headline-l-font-weight);
  letter-spacing: var(--headline-l-letter-spacing);
  line-height: var(--headline-l-line-height);
  text-align: center;
  width: 100%;

  ${(props) => props.theme.platform.mobile} {
    font-size: var(--headline-m-font-size);
    margin: 10px 24px;
    object-fit: cover;
  }
`;

export const VideoWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 24px;
  overflow: hidden;

  ${(props) => props.theme.platform.mobile} {
    border-radius: 24px;
    height: 80%;
    margin: 0px 24px !important;
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
