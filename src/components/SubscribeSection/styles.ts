import styled from "styled-components";

export const StyledSubscribeSection = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 64px 0px;

  & .card-2 {
    align-items: flex-start;
    background-color: var(--background-200);
    border-radius: 20px;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    padding: 40px;
    position: relative;
    width: 1280px;
  }

  & .content-2 {
    align-items: center;
    display: flex;
    flex: 0 0 auto;
    gap: 64px;
    justify-content: center;
    position: relative;
    width: 1200px;
  }

  & .txt-2 {
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

  & .title-3 {
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

  & .paragraph {
    align-self: stretch;
    color: #000d38cc;
    font-family: "Noto Serif Georgian", Helvetica;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 22.4px;
    position: relative;
  }

  & .form {
    align-items: flex-start;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    justify-content: center;
    padding: 24px 0px 0px;
    position: relative;
    width: 613.33px;
  }

  & .form-2 {
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 8px;
    justify-content: center;
    position: relative;
  }

  & .input-instance {
    flex: 0 0 auto !important;
  }

  & .pencilicon-2 {
    height: 20px !important;
    position: relative !important;
    width: 20px !important;
  }

  & .button-3 {
    align-self: stretch !important;
    height: unset !important;
  }

  & .image-2 {
    height: 400px;
    object-fit: cover;
    position: relative;
    width: 500px;
  }

  & .envelope-icon-wrapper {
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

  & .envelope-icon {
    height: 40px !important;
    position: relative !important;
    width: 40px !important;
  }
`;
