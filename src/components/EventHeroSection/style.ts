import styled from "styled-components";
import { ScheduleCard } from "../ScheduleCard";

export const Container = styled.div`
  height: 771px;
  position: relative;
  width: 1280px;
  margin-top: 64px;

  & .schedule-card-instance {
    left: 880px !important;
    position: absolute !important;
    top: 361px !important;
  }
`;

export const Image = styled.img`
  height: 486px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 1280px;
`;

export const ScheduleCardInstance = styled(ScheduleCard)`
  left: 880px !important;
  position: absolute !important;
  top: 361px !important;
`;
