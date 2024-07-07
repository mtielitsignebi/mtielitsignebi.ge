import { AutoCarousel } from "@alsandre/responsive-image-carousel";
import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  flex-direction: column;
  padding: 0px 0px 32px;
  position: relative;
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const StyledCarousel = styled(AutoCarousel)<{ platform: string }>`
  width: 1440px !important;
  height: 828px !important;
  gap: 40px;

  & .children {
    width: 650px;
    height: 700px;
  }
  & .images {
    object-fit: cover;
  }
`;
