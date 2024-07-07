import styled, { css } from "styled-components";

export const StyledCard = styled.div<{ platform: string }>`
  align-items: center;
  display: inline-flex;
  flex-direction: column;
  gap: 10px;
  padding: 64px 0px;
  position: relative;

  & .div-2 {
    align-items: flex-start;
    background-color: ${(props) => props.theme.colors.green[100]};
    border-radius: 20px;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    padding: 40px;
    position: relative;
    width: 1280px;

    &:hover {
      cursor: pointer;
    }

    ${(props) => props.theme.platform.mobile} {
      width: 100%;
      padding: 40px 16px;
    }
  }

  & .content {
    align-items: center;
    display: flex;
    flex: 0 0 auto;
    gap: 64px;
    justify-content: center;
    position: relative;
    width: 1200px;

    ${(props) => props.theme.platform.mobile} {
      flex-direction: column;
      width: 87%;
      gap: 24px;
    }
  }

  & .txt {
    align-items: flex-start;
    display: flex;
    flex: 1;
    flex-direction: column;
    flex-grow: 1;
    gap: 20px;
    position: relative;
  }

  & .heading {
    align-items: flex-start;
    display: inline-flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 8px;
    position: relative;
  }

  & .title {
    color: var(--text);
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

    ${(props) => props.theme.platform.mobile} {
      font-size: var(--headline-s-font-size);
    }
  }

  & .date {
    color: var(--primitives-text);
    font-family: var(--body-m-regular-font-family);
    font-size: var(--body-m-regular-font-size);
    font-style: var(--body-m-regular-font-style);
    font-weight: var(--body-m-regular-font-weight);
    letter-spacing: var(--body-m-regular-letter-spacing);
    line-height: var(--body-m-regular-line-height);
    opacity: 0.5;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }

  & .paragraph {
    align-self: stretch;
    color: #000d38cc;
    font-family: var(--body-m-regular-font-family);
    font-size: var(--body-m-regular-font-size);
    font-style: var(--body-m-regular-font-style);
    font-weight: var(--body-m-regular-font-weight);
    letter-spacing: var(--body-m-regular-letter-spacing);
    line-height: var(--body-m-regular-line-height);
    position: relative;
  }

  & .image {
    height: 400px;
    object-fit: cover;
    position: relative;
    width: 500px;

    ${(props) => props.theme.platform.mobile} {
      width: 310px;
      height: 200px;
      border-radius: 12px;
    }
  }

  & .icon {
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

    ${(props) => props.theme.platform.mobile} {
      width: 48px;
      height: 48px;
      border-radius: 100%;
      padding: 10px;
      top: -24px;
      left: 20px;
    }
  }

  & .hands-icon {
    height: 40px !important;
    position: relative !important;
    width: 40px !important;
  }
`;
