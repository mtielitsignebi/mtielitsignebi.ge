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

  ${(props) => props.theme.platform.mobile} {
    width: 100% !important;
    height: 696px !important;
  }
  & .children {
    width: 650px;
    height: 700px;
    ${(props) => props.theme.platform.mobile} {
      width: 100%;
      height: 600px !important;
    }
  }
  & .images {
    object-fit: cover;
  }
`;
