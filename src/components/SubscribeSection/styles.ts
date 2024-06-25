import styled, { css } from "styled-components";

export const StyledSubscribeSection = styled.div<{ platform: string }>`
  margin: 64px 0px;
  background-color: var(--background-200);
  border-radius: 20px;
  padding: 40px;
  position: relative;
  width: 1280px;

  & .SBC-wrapper {
    align-items: center;
    display: flex;
    flex: 0 0 auto;
    gap: 64px;
    justify-content: center;
    position: relative;
    width: 1200px;
  }

  & .SBC-content {
    align-items: flex-start;
    display: flex;
    flex: 1;
    flex-direction: column;
    flex-grow: 1;
    gap: 20px;
    position: relative;
  }

  & .SBC-heading {
    color: #000d38;
    font-family: var(--headline-l-font-family);
    font-size: var(--headline-l-font-size);
    font-style: var(--headline-l-font-style);
    font-weight: var(--headline-l-font-weight);
    letter-spacing: var(--headline-l-letter-spacing);
    line-height: var(--headline-l-line-height);
    margin-top: -1px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }

  & .SBC-text {
    align-self: stretch;
    color: #000d38cc;
    font-family: "Noto Serif Georgian", Helvetica;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 22.4px;
    position: relative;
  }

  & .SBC-form-wrapper {
    padding-top: 24px;
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 8px;
    justify-content: center;
    position: relative;
  }

  & .SBC-image {
    height: 400px;
    object-fit: cover;
    position: relative;
    width: 500px;
  }

  & .SBC-envelope-icon-wrapper {
    align-items: center;
    background-color: var(--white);
    border-radius: 100px;
    display: flex;
    height: 72px;
    justify-content: center;
    left: 40px;
    overflow: hidden;
    padding: 16px;
    position: absolute;
    top: -36px;
    width: 72px;
  }

  & .SBC-envelope-icon {
    height: 40px !important;
    position: relative !important;
    width: 40px !important;
  }
`;
