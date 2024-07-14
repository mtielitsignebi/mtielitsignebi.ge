import styled, { css } from "styled-components";
import { Burger, Button, Drawer, Group } from "@mantine/core";

export const StyledHeader = styled.header`
  height: 64px;
  padding: 48px 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.background};
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--primitives-bg-100-duplicate);
  width: 100%;
  min-width: 1100px;
  z-index: 1000;

  ${(props) => props.theme.platform.mobile} {
    padding: 36px 24px;
    min-width: 300px;
  }
`;

export const Logo = styled.img`
  height: 64px;
  cursor: pointer;

  ${(props) => props.theme.platform.mobile} {
    height: 48px;
  }
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const CenterSection = styled(Group)`
  flex-grow: 1;
  justify-content: center;
  gap: 20px;
  margin-right: -200px;
`;

export const RightSection = styled(Group)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const MobileMenuButton = styled(Burger)`
  margin-left: auto;
`;

export const StyledDrawer = styled(Drawer)`
  .mantine-Drawer-root {
    background-color: ${(props) => props.theme.colors.background};
    color: var(--text);
    margin-bottom: 200px;
    z-index: 2000;
  }

  .mantine-Drawer-title {
    color: var(--text);
  }
`;

export const DrawerButton = styled(Button)`
  margin-bottom: 10px;
  background-color: var(--background-100);
  color: var(--text);
  border: none;
  outline: none;
  box-shadow: none;

  &:hover {
    background-color: var(--background-100);
    color: var(--button-bg-hover);
  }

  & .mantine-Button-label {
    color: var(--text);
    font-family: var(--body-m-regular-font-family);
    font-size: var(--body-m-regular-font-size);
    font-style: var(--body-m-regular-font-style);
    font-weight: var(--body-m-regular-font-weight);
    letter-spacing: var(--body-m-regular-letter-spacing);
    line-height: var(--body-m-regular-line-height);
  }

  &:focus {
    outline: none;
    box-shadow: none;
  }

  &.mantine-Button-root {
    background-color: var(--background-100);
    color: var(--text);
    border: none;
    outline: none;
    box-shadow: none;

    &:hover {
      background-color: var(--background-100);
      color: var(--button-bg-hover);
    }

    & .mantine-Button-label {
      color: var(--text);
      font-family: var(--body-m-regular-font-family);
      font-size: var(--body-m-regular-font-size);
      font-style: var(--body-m-regular-font-style);
      font-weight: var(--body-m-regular-font-weight);
      letter-spacing: var(--body-m-regular-letter-spacing);
      line-height: var(--body-m-regular-line-height);
    }
  }
`;
