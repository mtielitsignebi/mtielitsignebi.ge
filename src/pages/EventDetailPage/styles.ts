import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--background-300);
  height: 2200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Article = styled.article`
  align-items: flex-start;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  width: 800px;
`;

export const Heading = styled.h2`
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
`;

export const SubHeading = styled.h3`
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
`;

export const Paragraph = styled.p`
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
`;
