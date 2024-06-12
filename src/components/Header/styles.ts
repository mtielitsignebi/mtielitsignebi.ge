import styled, { css } from "styled-components";

export const StyledHeader = styled.div<{ platform: string }>`
  align-items: center;
  background-color: var(--background-300);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: var(--primitives-bg-100-duplicate);
  display: flex;
  justify-content: space-between;
  padding: 16px 80px;
  position: relative;
  margin-left: 140px;
  margin-right: 140px;

  ${({ platform }) =>
    platform !== "web" &&
    css`
      padding: 16px 20px;
    `}
`;

export const Logo = styled.img`
  height: 64px;
  object-fit: cover;
  position: relative;
  width: 70px;
`;

export const Actions = styled.div<{ platform: string }>`
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 32px;
  justify-content: flex-end;
  position: relative;

  ${({ platform }) =>
    platform !== "web" &&
    css`
      display: none;
    `}
`;

export const UserIconWrapper = styled.div`
  height: 24px !important;
  position: relative !important;
  width: 24px !important;
`;

export const Hamburger = styled.div<{ platform: string }>`
  cursor: pointer;
  display: none;
  flex-direction: column;
  gap: 5px;

  span {
    background-color: var(--text);
    border-radius: 2px;
    height: 3px;
    width: 25px;
  }

  ${({ platform }) =>
    platform !== "web" &&
    css`
      display: flex;
    `}
`;

export const Menu = styled.div<{ platform: string; isOpen: boolean }>`
  align-items: center;
  display: flex;
  gap: 48px;
  justify-content: center;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);

  ${({ platform, isOpen }) =>
    platform !== "web" &&
    css`
      display: ${isOpen ? "flex" : "none"};
      flex-direction: column;
      gap: 20px;
      left: auto;
      right: 20px;
      top: 70px;
      transform: none;
      background-color: var(--background-300);
      border: 1px solid var(--primitives-bg-100-duplicate);
      padding: 20px;
      z-index: 10;
    `}
`;

export const MenuItem = styled.div`
  color: var(--text);
  font-family: var(--body-m-semibold-font-family);
  font-size: var(--body-m-semibold-font-size);
  font-style: var(--body-m-semibold-font-style);
  font-weight: var(--body-m-semibold-font-weight);
  letter-spacing: var(--body-m-semibold-letter-spacing);
  line-height: var(--body-m-semibold-line-height);
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
`;

export const MenuDiv = styled.div`
  color: var(--text);
  font-family: var(--body-m-regular-font-family);
  font-size: var(--body-m-regular-font-size);
  font-style: var(--body-m-regular-font-style);
  font-weight: var(--body-m-regular-font-weight);
  letter-spacing: var(--body-m-regular-letter-spacing);
  line-height: var(--body-m-regular-line-height);
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
`;
