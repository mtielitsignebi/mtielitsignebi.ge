import styled, { css } from "styled-components";

export const StyledEventPage = styled.div<{ platform: string }>`
  align-items: center;
  background-color: ${(props) => props.theme.colors.background};

  flex-direction: column;
  padding: 0px 0px 32px;
  position: relative;
  flex: 1;
  display: flex;
  justify-content: center;

  & .header-instance {
    border-left-style: none !important;
    border-right-style: none !important;
    border-top-style: none !important;
    flex: 0 0 auto !important;
  }

  & .heading-get-wrapper {
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    padding: 64px 0px;
    position: relative;

    ${(props) => props.theme.platform.mobile} {
      padding: 48px 0;
    }
  }

  & .heading-get {
    color: var(--text);
    font-family: var(--title-l-font-family);
    font-size: var(--title-l-font-size);
    font-style: var(--title-l-font-style);
    font-weight: var(--title-l-font-weight);
    letter-spacing: var(--title-l-letter-spacing);
    line-height: var(--title-l-line-height);
    margin-top: -1px;
    position: relative;
    white-space: nowrap;
    width: fit-content;

    ${(props) => props.theme.platform.mobile} {
      font-size: var(--title-m-medium-font-size);
      font-weight: var(--title-m-medium-font-weight);
    }
  }

  & .card-instance {
    flex: 0 0 auto !important;
  }

  & .footer-instance {
    background-color: transparent !important;
    flex: 0 0 auto !important;
  }

  & .facebookicon-1 {
    margin-left: -0.5px !important;
    position: relative !important;
    width: 24px !important;
  }

  & .instagramicon-instance {
    height: 24px !important;
    margin-left: -3px !important;
    position: relative !important;
    width: 24px !important;
  }
`;
