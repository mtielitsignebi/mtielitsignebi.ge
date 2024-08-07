import styled from "styled-components";

export const Container = styled.button`
  all: unset;
  align-items: center;
  border-radius: 8px;
  box-sizing: border-box;
  display: flex;
  gap: 4px;
  height: 44px;
  justify-content: center;
  overflow: hidden;
  padding: 10px 24px;
  position: relative;
  width: 100%;

  &:hover {
    cursor: pointer;
  }

  & .user-icon {
    height: 24px !important;
    position: relative !important;
    width: 24px !important;
  }

  &.default {
    background-color: var(--accent);
  }

  &.ghost .text-wrapper {
    color: var(--primitives-accent-duplicate);
  }

  &.outline {
    border: 1px solid var(--accent);
  }

  &.default .text-wrapper {
    color: #ffffff;
  }
`;

export const Text = styled.div`
  font-family: var(--label-m-font-family);
  font-size: var(--label-m-font-size);
  font-style: var(--label-m-font-style);
  font-weight: var(--label-m-font-weight);
  letter-spacing: var(--label-m-letter-spacing);
  line-height: var(--label-m-line-height);
  position: relative;
  white-space: nowrap;
  width: fit-content;
`;
