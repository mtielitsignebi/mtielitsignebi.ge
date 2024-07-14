import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const HeaderWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 0 80px;
  overflow-y: auto;

  ${(props) => props.theme.platform.mobile} {
    margin: 0 24px;
    min-width: 300px;
  }
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 64px;
`;
