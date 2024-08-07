import styled, { css } from "styled-components";
import { IconEnvelope } from "../../icons";

export const Content = styled.div<{ platform: string }>`
  align-items: flex-start;
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-grow: 1;
  gap: 20px;
  position: relative;

  ${(props) => props.theme.platform.mobile} {
    width: 100%;
  }
`;

export const Heading = styled.h3<{ platform: string }>`
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

  ${(props) => props.theme.platform.mobile} {
    font-family: var(--headline-s-font-family);
    font-size: var(--headline-s-font-size);
    font-style: var(--headline-s-font-style);
    font-weight: var(--headline-s-font-weight);
    letter-spacing: var(--headline-s-letter-spacing);
    line-height: var(--headline-s-line-height);
    line-height: 19px;
  }
`;

export const Text = styled.p<{ platform: string }>`
  align-self: stretch;
  color: #000d38cc;
  font-family: var(--body-m-regular-font-family);
  font-size: var(--body-m-regular-font-size);
  font-weight: var(--body-m-regular-font-weight);
  letter-spacing: var(--body-m-regular-letter-spacing);
  line-height: var(--body-m-regular-line-height);
  position: relative;

  ${(props) => props.theme.platform.mobile} {
    font-family: var(--body-s-regular-font-family);
    font-size: var(--body-s-regular-font-size);
    font-weight: var(--body-s-regular-font-weight);
    letter-spacing: var(--body-s-regular-letter-spacing);
    line-height: var(--body-s-regular-line-height);
    line-height: 19px;
  }
`;

export const Form = styled.div<{ platform: string }>`
  width: 100%;
  padding-top: 24px;
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 8px;
  justify-content: flex-start;
  position: relative;

  ${(props) => props.theme.platform.mobile} {
    flex-direction: column;
  }

  & .form-input {
    width: 342px;

    ${(props) => props.theme.platform.mobile} {
      width: 100%;
    }
  }
  & .form-button {
    width: 140px;

    ${(props) => props.theme.platform.mobile} {
      width: 100%;
    }
  }
`;

export const Image = styled.img<{ platform: string }>`
  height: 400px;
  object-fit: cover;
  position: relative;
  width: 500px;

  ${(props) => props.theme.platform.mobile} {
    width: 310px;
    height: 200px;
    border-radius: 23px;
  }
`;

export const IconWrapper = styled.span<{ platform: string }>`
  align-items: center;
  background-color: var(--white);
  border-radius: 100px;
  display: flex;
  height: 72px;
  justify-content: center;
  left: 40px;
  overflow: hidden;
  position: absolute;
  padding: 16px;
  top: -36px;
  width: 72px;

  ${(props) => props.theme.platform.mobile} {
    padding: 5px;
    width: 48px;
    height: 48px;
    top: -24px;
    left: 20px;
  }
`;

export const Container = styled.div<{ platform: string }>`
  display: flex;
  gap: 64px;
  align-items: center;
  margin: 64px 0px;
  background-color: ${(props) => props.theme.colors.green[100]};

  border-radius: 20px;
  padding: 40px;
  position: relative;
  max-width: 1280px;

  ${(props) => props.theme.platform.mobile} {
    flex-direction: column;
    max-width: 87%;
    padding: 40px 16px 16px 16px;
  }
`;
