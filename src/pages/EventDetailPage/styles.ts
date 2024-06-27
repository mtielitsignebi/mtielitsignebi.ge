import styled from "styled-components";

export const StyledEventDetailPage = styled.div`
  background-color: var(--background-300);
  height: 2200px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & .overlap {
    height: 1450px;
    width: 1280px;
    position: relative;
  }

  & .event-description {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 48px;
    left: 0;
    position: absolute;
    top: 616px;
    width: 800px;
  }

  & .div-2 {
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 24px;
    position: relative;
    width: 100%;
  }

  & .text-wrapper-4 {
    align-self: stretch;
    color: var(--text);
    font-family: var(--title-l-font-family);
    font-size: var(--title-l-font-size);
    font-style: var(--title-l-font-style);
    font-weight: var(--title-l-font-weight);
    letter-spacing: var(--title-l-letter-spacing);
    line-height: var(--title-l-line-height);
    margin-top: -1px;
    position: relative;
  }

  & .div-3 {
    align-self: stretch;
    color: var(--text);
    font-family: var(--body-m-regular-font-family);
    font-size: var(--body-m-regular-font-size);
    font-style: var(--body-m-regular-font-style);
    font-weight: var(--body-m-regular-font-weight);
    letter-spacing: var(--body-m-regular-letter-spacing);
    line-height: var(--body-m-regular-line-height);
    position: relative;
  }

  & .text-wrapper-5 {
    align-self: stretch;
    color: var(--text);
    font-family: var(--title-m-font-family);
    font-size: var(--title-m-font-size);
    font-style: var(--title-m-font-style);
    font-weight: var(--title-m-font-weight);
    letter-spacing: var(--title-m-letter-spacing);
    line-height: var(--title-m-line-height);
    margin-top: -1px;
    position: relative;
  }

  & .flexcontainer {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  & .span {
    color: #000d38;
    font-family: var(--body-m-regular-font-family);
    font-size: var(--body-m-regular-font-size);
    font-style: var(--body-m-regular-font-style);
    font-weight: var(--body-m-regular-font-weight);
    letter-spacing: var(--body-m-regular-letter-spacing);
    line-height: var(--body-m-regular-line-height);
  }

  & .divider {
    height: 100px !important;
    left: 79px !important;
    position: absolute !important;
    top: 1600px !important;
    width: 1282px !important;
  }
`;
