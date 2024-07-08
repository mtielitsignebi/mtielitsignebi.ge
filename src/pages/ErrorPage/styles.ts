import styled from "styled-components";
import { Button } from "../../components/Button";

export const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 120px 0;
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const ErrorTitle = styled.h2`
  color: var(--blue-900);
  font-family: var(--title-m-font-family);
  font-size: var(--title-m-font-size);
  font-style: var(--title-m-font-style);
  font-weight: var(--title-m-font-weight);
  letter-spacing: var(--title-m-letter-spacing);
  line-height: var(--title-m-line-height);
`;
export const ErrorText = styled.p`
  width: 562px;
  text-align: center;
  font-family: var(--body-s-regular-font-family);
  font-size: var(--body-s-regular-font-size);
  font-style: var(--body-s-regular-font-style);
  font-weight: var(--body-s-regular-font-weight);
  letter-spacing: var(--body-s-regular-letter-spacing);
  line-height: var(--body-s-regular-line-height);

  ${(props) => props.theme.platform.mobile} {
    width: 342px;
  }
`;
export const ErrorAction = styled(Button)`
  width: 204px !important;
  font-family: var(--label-m-font-family);
  font-size: var(--label-m-font-size);
  font-style: var(--label-m-font-style);
  font-weight: var(--label-m-font-weight);
  letter-spacing: var(--label-m-letter-spacing);
  line-height: var(--label-m-line-height);
`;
