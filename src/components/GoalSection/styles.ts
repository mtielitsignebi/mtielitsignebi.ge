import styled from "styled-components";
import { theme } from "../../theme";

export const StyledGoalSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 100%;
  height: 100%;
  margin: 0 auto;

  ${(props) => props.theme.platform.mobile} {
    width: 100%;
  }
`;

export const OverlapGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 20px;
`;

export const Goal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.green[100]};
  border-radius: 20px;
  padding: 96px 0px 64px;
  width: 100%;
  gap: 48px;

  ${(props) => props.theme.platform.mobile} {
    padding: 36px 0px;
  }
`;

export const HeadingOur = styled.h2`
  color: ${(props) => props.theme.colors.text};
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
`;

export const Description = styled.p`
  color: ${(props) => props.theme.colors.text};
  font-size: 18px;
  font-weight: 300;
  text-align: center;
  width: 920px;

  ${(props) => props.theme.platform.mobile} {
    width: 310px;
  }
`;

export const Logo = styled.img`
  height: 100px;
  width: 120px;
  margin-bottom: -36px;
  z-index: 2;

  ${(props) => props.theme.platform.mobile} {
    width: 100px;
    height: 85px;
  }
`;
