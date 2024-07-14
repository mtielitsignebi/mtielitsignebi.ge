import PropTypes from "prop-types";
import styled from "styled-components";
import { usePlatform } from "../../hooks";

const StyledHistorySection = styled.div<{ platform: string }>`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 64px 0px;
  position: relative;
  width: 1280px;

  ${(props) => props.theme.platform.mobile} {
    width: 100%;
    padding: 0;
    flex-direction: column;
    gap: 24px;
  }

  & .image {
    height: ${({ platform }) => (platform === "web" ? "700px" : "500px")};
    position: relative;
  }

  & .frame {
    align-items: flex-start;
    display: inline-flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 24px;
    position: relative;
    width: ${({ platform }) => (platform === "web" ? "700px" : "342px")};
  }

  & .title {
    color: var(--text);
    font-family: var(--title-m-font-family);
    font-size: var(--title-m-font-size);
    font-style: var(--title-m-font-style);
    font-weight: var(--title-m-font-weight);
    letter-spacing: var(--title-m-letter-spacing);
    line-height: var(--title-m-line-height);
    margin-top: -1px;
    position: relative;
    width: fit-content;
    text-align: center;
  }

  & .paragraph {
    color: var(--text);
    font-family: "Noto Serif Georgian", Helvetica;
    font-size: 18px;
    font-weight: 300;
    letter-spacing: 0;
    line-height: 25.2px;
    position: relative;
    width: fit-content;
  }
`;

export const HistorySection = (): JSX.Element => {
  const platform = usePlatform();
  return (
    <StyledHistorySection platform={platform} className="history-section">
      <img
        className="image"
        alt="Image"
        src="https://c.animaapp.com/9E1pYK5V/img/image-1.png"
      />
      <div className="frame">
        <div className="title">“მთიელი წიგნების” შესახებ</div>
        <p className="paragraph">
          ბოლო რამდენიმე წელია ტრადიციად გვექცა სამეგობროს, რომ მოგზაურობის,
          ლაშქრობის დროს მთაში მცხოვრები ბავშვებისთვის წიგნები წაგვეყოლებინა.
          მიღებულმა შედეგებმა გვაფიქრებინა, რომ უფრო მასშტაბური გაგვეხადა ეს
          ყველაფერი. ახლა კი, მთიელი წიგნების მიზანია, შევიძინოთ, შევაგროვოთ
          საინტერესო და სასურველი ლიტერატურა მთიელი მოზარდებისათვის.
        </p>
      </div>
    </StyledHistorySection>
  );
};

HistorySection.propTypes = {
  platform: PropTypes.oneOf(["web"]),
};
