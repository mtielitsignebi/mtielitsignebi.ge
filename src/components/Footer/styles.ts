import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  display: inline-flex;
  flex-direction: column;
  gap: 48px;
  padding: 40px 0px;
`;

export const Logo = styled.img`
  height: 100px;
  position: relative;
  width: 90px;
`;

export const Actions = styled.div`
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  flex-wrap: wrap;
  gap: 32px 16px;
  justify-content: center;
`;

export const Copy = styled.p`
  color: var(--text);
  font-family: var(--body-m-regular-font-family);
  font-size: var(--body-m-regular-font-size);
  font-style: var(--body-m-regular-font-style);
  font-weight: var(--body-m-regular-font-weight);
  letter-spacing: var(--body-m-regular-letter-spacing);
  line-height: var(--body-m-regular-line-height);
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
`;
