import styled, { css } from "styled-components";
import { Burger, Button, Drawer, Group } from "@mantine/core";

export const StyledHeader = styled.header<{ platform: string }>`
  height: 64px;
  padding: 36px 140px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #6ab271;
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--primitives-bg-100-duplicate);
  position: fixed;
  width: 100%;
  z-index: 1000;

  ${({ platform }) =>
    platform !== "web" &&
    css`
      padding: 36px 24px;
    `}
`;

export const Logo = styled.img`
  height: 64px;
  cursor: pointer;
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
`;

export const RightSection = styled(Group)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const MobileMenuButton = styled(Burger)`
  margin-left: auto;
`;

export const Actions = styled(Group)<{ platform: string }>`
  gap: 32px;
  ${({ platform }) =>
    platform !== "web" &&
    css`
      display: none;
    `}
`;

export const StyledDrawer = styled(Drawer)`
  .mantine-Drawer-root {
    background-color: #6ab271;
    color: var(--text);
    margin-bottom: 200px;
    z-index: 2000;
  }

  .mantine-Drawer-title {
    color: var(--text);
  }
`;

export const DrawerButton = styled(Button)<any>`
  margin-bottom: 10px;

  &.mantine-Button-root {
    background-color: var(--background-100);
    color: var(--text);
    border: none;

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
