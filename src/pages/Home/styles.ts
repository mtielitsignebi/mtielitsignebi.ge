import { Carousel } from "@alsandre/responsive-image-carousel";
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

export const StyledCarousel = styled(Carousel)<{ platform: string }>`
  width: 100% !important;
  height: 828px !important;
  padding: 64px 0;
  gap: 40px;

  ${(props) => props.theme.platform.mobile} {
    width: 100% !important;
    height: 696px !important;
  }
  
  & .images {
    object-fit: cover;
  }
  & .animate {
    height: 100%;
    animation-duration:  1s;
  }

  & .slide-wrapper {
    height: 100%;
  }
  & .slide-image {
    width: auto;
    height: 100%;
  }
`;
