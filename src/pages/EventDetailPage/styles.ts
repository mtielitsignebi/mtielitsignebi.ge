import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Article = styled.article<{ platform: string }>`
  align-items: flex-start;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  width: 800px;

  ${(props) => props.theme.platform.mobile} {
    width: 87%;
    margin: auto;
  }
`;

export const Heading = styled.h2<{ platform: string }>`
  align-self: stretch;
  color: var(--text);
  font-family: var(--title-l-font-family);
  font-size: var(--title-l-font-size);
  font-style: var(--title-l-font-style);
  font-weight: var(--title-l-font-weight);
  letter-spacing: var(--title-l-letter-spacing);
  line-height: var(--title-l-line-height);
  margin-top: 50px;
  position: relative;

  ${(props) => props.theme.platform.mobile} {
    margin-top: 170px;
    font-family: var(--title-m-font-family);
    font-size: var(--title-m-font-size);
    font-style: var(--title-m-font-style);
    font-weight: var(--title-m-font-weight);
    letter-spacing: var(--title-m-letter-spacing);
    line-height: var(--title-m-line-height);
  }
`;

export const SubHeading = styled.h3<{ platform: string }>`
  align-self: stretch;
  color: var(--text);
  font-family: var(--title-m-font-family);
  font-size: var(--title-m-font-size);
  font-style: var(--title-m-font-style);
  font-weight: var(--title-m-font-weight);
  letter-spacing: var(--title-m-letter-spacing);
  line-height: var(--title-m-line-height);
  margin-top: 40px;
  margin-bottom: 20px;
  position: relative;

  ${(props) => props.theme.platform.mobile} {
    font-family: var(--title-s-font-family);
    font-size: var(--title-s-font-size);
    font-style: var(--title-s-font-style);
    font-weight: var(--title-s-font-weight);
    letter-spacing: var(--title-s-letter-spacing);
    line-height: var(--title-s-line-height);
  }
`;

export const Paragraph = styled.p<{ platform: string }>`
  align-self: stretch;
  color: var(--text);
  font-family: var(--body-m-regular-font-family);
  font-size: var(--body-m-regular-font-size);
  font-style: var(--body-m-regular-font-style);
  font-weight: var(--body-m-regular-font-weight);
  letter-spacing: var(--body-m-regular-letter-spacing);
  line-height: var(--body-m-regular-line-height);
  margin-top: 8px;
  position: relative;

  ${(props) => props.theme.platform.mobile} {
    font-family: var(--body-s-regular-font-family);
    font-size: var(--body-s-regular-font-size);
    font-style: var(--body-s-regular-font-style);
    font-weight: var(--body-s-regular-font-weight);
    letter-spacing: var(--body-s-regular-letter-spacing);
    line-height: var(--body-s-regular-line-height);
  }
`;
