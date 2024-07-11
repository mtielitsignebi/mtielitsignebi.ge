import styled from "styled-components";

export const Section = styled.div<{ bg?: string; br?: string }>`
  width: 100%;
  max-width: 342px;
  padding: 48px 0;
  background: ${(props) => props.bg || "transparent"};
  border-radius: ${(props) => props.br || "0"};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  ${(props) => props.theme.platform.desktop} {
    max-width: 1400px;
    gap: 80px;
  }
`;

export const SectionTitle = styled.div`
  text-align: center;
  color: #00182c;
  font-size: 20px;
  font-family: "Noto Serif Georgian";
  font-weight: 600;
  line-height: 28px;
  word-wrap: break-word;

  ${(props) => props.theme.platform.desktop} {
    font-size: 24px;
  }
`;

export const SectionText = styled.div`
  text-align: center;
  color: #1e3346;
  font-size: 14px;
  font-family: "Noto Serif Georgian";
  font-weight: 400;
  line-height: 19.6px;
  word-wrap: break-word;

  ${(props) => props.theme.platform.desktop} {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const PhotoGrid = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  gap: 8px;
`;

export const Photo = styled.img`
  width: calc(33% - 16px);
  border-radius: 3.21px;
  object-fit: cover;
`;

export const PartnerList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;

  ${(props) => props.theme.platform.desktop} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 36px;
  }
`;

export const Button = styled.button`
  width: 140px;
  height: 44px;
  background: #1851b6;
  border-radius: 8px;
  color: white;
  font-family: "Noto Serif Georgian";
  font-size: 14px;
  font-weight: 500;
  line-height: 19.6px;
  text-align: center;
  padding: 10px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
