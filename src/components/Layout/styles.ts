import styled from "styled-components";

export const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #6ab271;

  & .content {
    flex: 1;
  }
`;
