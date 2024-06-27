import styled, { css } from "styled-components";
import { ScheduleCard } from "../ScheduleCard";

export const Container = styled.div<{ platform: string }>`
  height: 486px;
  position: relative;
  width: 1280px;
  margin-top: 64px;

  ${({ platform }) =>
    platform !== "web" &&
    css`
      width: 87%;
      min-width: 342px;
    `}
`;

export const Image = styled.img<{ platform: string }>`
  height: 486px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 1280px;

  ${({ platform }) =>
    platform !== "web" &&
    css`
      width: 100%;
    `}
`;

export const ScheduleCardInstance = styled(ScheduleCard)<{ platform: string }>`
  left: 880px;
  position: absolute !important;
  top: 361px;

  ${({ platform }) =>
    platform !== "web" &&
    css`
      top: 320px;
      left: 0;
    `}
`;
