import PropTypes from "prop-types";
import React from "react";
import { PartnerCard } from "../PartnerCard";
import styled from "styled-components";
import { Platform } from "../../hooks/usePlatform";

interface Props {
  platform: Platform;
  className: any;
  partnerCardLogo: string;
  partnerCardImg: string;
  partnerCardLogo1: string;
  partnerCardLogo2: string;
  partnerCardLogo3: string;
  partnerCardLogo4: string;
  partnerCardLogo5: string;
  partnerCardLogo6: string;
  partnerCardLogo7: string;
  partnerCardLogo8: string;
  partnerCardLogo9: string;
  partnerCardLogo10: string;
  partnerCardLogo11: string;
  partnerCardLogo12: string;
  partnerCardLogo13: string;
  partnerCardLogo14: string;
  partnerCardLogo15: string;
  partnerCardLogo16: string;
  partnerCardLogo17: string;
  partnerCardLogo18: string;
  partnerCardLogo19: string;
  partnerCardLogo20: string;
  partnerCardLogo21: string;
  partnerCardLogo22: string;
}

const StyledPartnerSection = styled.div`
  align-items: center;
  background-color: var(--green-300);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 48px;
  padding: 64px 0px;
  position: relative;
  width: 1280px;

  & .heading-our {
    color: var(--blue-900);
    font-family: var(--title-m-font-family);
    font-size: var(--title-m-font-size);
    font-style: var(--title-m-font-style);
    font-weight: var(--title-m-font-weight);
    letter-spacing: var(--title-m-letter-spacing);
    line-height: var(--title-m-line-height);
    margin-top: -1px;
    position: relative;
    text-align: center;
    white-space: nowrap;
    width: fit-content;
  }

  & .p {
    color: var(--blue-900);
    font-family: var(--body-m-regular-font-family);
    font-size: var(--body-m-regular-font-size);
    font-style: var(--body-m-regular-font-style);
    font-weight: var(--body-m-regular-font-weight);
    letter-spacing: var(--body-m-regular-letter-spacing);
    line-height: var(--body-m-regular-line-height);
    position: relative;
    text-align: center;
    width: 916px;
  }

  & .companies {
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    flex-wrap: wrap;
    gap: 20px 20px;
    justify-content: center;
    padding: 0px 20px;
    position: relative;
    width: 100%;
  }

  & .partner-card-instance {
    flex: 0 0 auto !important;
  }

  & .design-component-instance-node {
    object-fit: unset !important;
  }

  & .partner-card-2 {
    height: 48px !important;
    margin-bottom: -4px !important;
    margin-left: -4px !important;
    margin-top: -4px !important;
    object-fit: unset !important;
    width: 48px !important;
  }

  & .partner-card-3 {
    height: 48px !important;
    margin-bottom: -4px !important;
    margin-left: -4px !important;
    margin-top: -4px !important;
    width: 48px !important;
  }
`;

export const PartnerSection = ({
  platform,
  className,
  partnerCardLogo = "https://c.animaapp.com/rsy2ONkj/img/logo-1@2x.png",
  partnerCardImg = "https://c.animaapp.com/rsy2ONkj/img/logo-2@2x.png",
  partnerCardLogo1 = "https://c.animaapp.com/rsy2ONkj/img/logo-3@2x.png",
  partnerCardLogo2 = "https://c.animaapp.com/rsy2ONkj/img/logo-4@2x.png",
  partnerCardLogo3 = "https://c.animaapp.com/rsy2ONkj/img/logo-5@2x.png",
  partnerCardLogo4 = "https://c.animaapp.com/rsy2ONkj/img/logo-6@2x.png",
  partnerCardLogo5 = "https://c.animaapp.com/rsy2ONkj/img/logo-7@2x.png",
  partnerCardLogo6 = "https://c.animaapp.com/rsy2ONkj/img/logo-8@2x.png",
  partnerCardLogo7 = "https://c.animaapp.com/rsy2ONkj/img/logo-9@2x.png",
  partnerCardLogo8 = "https://c.animaapp.com/rsy2ONkj/img/logo-10@2x.png",
  partnerCardLogo9 = "https://c.animaapp.com/rsy2ONkj/img/logo-11@2x.png",
  partnerCardLogo10 = "https://c.animaapp.com/rsy2ONkj/img/logo-12@2x.png",
  partnerCardLogo11 = "https://c.animaapp.com/rsy2ONkj/img/logo-13@2x.png",
  partnerCardLogo12 = "https://c.animaapp.com/rsy2ONkj/img/logo-14@2x.png",
  partnerCardLogo13 = "https://c.animaapp.com/rsy2ONkj/img/logo-15@2x.png",
  partnerCardLogo14 = "https://c.animaapp.com/rsy2ONkj/img/logo-16@2x.png",
  partnerCardLogo15 = "https://c.animaapp.com/rsy2ONkj/img/logo-17@2x.png",
  partnerCardLogo16 = "https://c.animaapp.com/rsy2ONkj/img/logo-18@2x.png",
  partnerCardLogo17 = "https://c.animaapp.com/rsy2ONkj/img/logo-19@2x.png",
  partnerCardLogo18 = "https://c.animaapp.com/rsy2ONkj/img/logo-20@2x.png",
  partnerCardLogo19 = "https://c.animaapp.com/rsy2ONkj/img/logo-21@2x.png",
  partnerCardLogo20 = "https://c.animaapp.com/rsy2ONkj/img/logo-22@2x.png",
  partnerCardLogo21 = "https://c.animaapp.com/rsy2ONkj/img/logo-23@2x.png",
  partnerCardLogo22 = "https://c.animaapp.com/rsy2ONkj/img/logo-24@2x.png",
}: Props): JSX.Element => {
  return (
    <StyledPartnerSection className={`partner-section ${className}`}>
      <div className="heading-our">ჩვენი პარტნიორები</div>
      <p className="p">
        გვიხარია, რომ ჩვენი პარტნიორი კომპანიების სია სულ უფრო იზრდება. მადლობას
        ვუხდით მათ ჩვენდამი ნდობისა და გაწეული დახმარებისთვის!
      </p>
      <div className="companies">
        <PartnerCard
          className="partner-card-instance"
          isMob={false}
          logo={partnerCardLogo}
          text="სულაკაურის გამომცემლობა"
        />
        <PartnerCard
          className="partner-card-instance"
          isMob={false}
          logo={partnerCardImg}
          text="სმარტ გამომცემლობა"
        />
        <PartnerCard
          className="partner-card-instance"
          isMob={false}
          logo={partnerCardLogo1}
          text="Scoot Scoot"
        />
        <PartnerCard
          className="partner-card-instance"
          isMob={false}
          logo={partnerCardLogo2}
          text="გამომცემლობა პალიტრა L"
        />
        <PartnerCard
          className="partner-card-instance"
          isMob={false}
          logo={partnerCardLogo3}
          text="გამომცემლობა ინტელექტი"
        />
        <PartnerCard
          className="partner-card-instance"
          isMob={false}
          logo={partnerCardLogo4}
          text="ქარჩხაძის გამომცემლობა"
        />
        <PartnerCard
          className="partner-card-instance"
          isMob={false}
          logo={partnerCardLogo5}
          text="გამომცემლობა „დიოგენე“"
        />
        <PartnerCard
          className="partner-card-instance"
          isMob={false}
          logo={partnerCardLogo6}
          text="ფაზი"
        />
        <PartnerCard
          className="partner-card-instance"
          isMob={false}
          logo={partnerCardLogo7}
          text="ეკოSide"
        />
        <PartnerCard
          className="partner-card-instance"
          isMob={false}
          logo={partnerCardLogo8}
          text="ბაგა-ბაღი &#34;ნებიერა&#34;"
        />
        <PartnerCard
          className="partner-card-instance"
          isMob={false}
          logo={partnerCardLogo9}
          text="მწვანე სკოლა"
        />
        <PartnerCard
          className="partner-card-instance"
          isMob={false}
          logo={partnerCardLogo10}
          text="21-ე საჯარო სკოლა"
        />
        <PartnerCard
          className="partner-card-instance"
          isMob={false}
          logo={partnerCardLogo11}
          text="ორბელიანი მეტი"
        />
        <PartnerCard
          className="partner-card-instance"
          isMob={false}
          logo={partnerCardLogo12}
          text="ლიბერთი ბანკი"
        />
        <PartnerCard
          className="partner-card-instance"
          isMob={false}
          logo={partnerCardLogo13}
          text="მჭევრის დამოუკიდებელი ბიზნეს სკოლა"
        />
        <PartnerCard
          className="partner-card-instance"
          isMob={false}
          logo={partnerCardLogo14}
          text="The Guivy Zaldastanishvili American Academy"
        />
        <PartnerCard
          className="partner-card-instance"
          isMob={false}
          logo={partnerCardLogo15}
          text="Combined Ratio Solutions"
        />
        <PartnerCard
          className="partner-card-instance"
          isMob={false}
          logo={partnerCardLogo16}
          text="Swiss Capital"
        />
        <PartnerCard
          className="partner-card-instance"
          isMob={false}
          logo={partnerCardLogo17}
          text="თეგეტა მოტორსი"
        />
        <PartnerCard
          className="partner-card-instance"
          isMob={false}
          logo={partnerCardLogo18}
          text="USAID Civil Society Engagement Program"
        />
        <PartnerCard
          className="partner-card-instance"
          isMob={false}
          logo={partnerCardLogo19}
          text="გაეროს გლობალური შეთანხმების საქართველოს ქსელი"
        />
        <PartnerCard
          className="partner-card-instance"
          isMob={false}
          logo={partnerCardLogo20}
          text="აკაკი კივილაძის სახელობის თბილისის N8 საჯარო სკოლა"
        />
        <PartnerCard
          className="partner-card-instance"
          isMob={false}
          logo={partnerCardLogo21}
          text="წმ.გიორგის სახელობის საერთაშორისო სკოლა"
        />
        <PartnerCard
          className="partner-card-instance"
          isMob={false}
          logo={partnerCardLogo22}
          text="GELi . საქართველოს ეკონომიკური წიგნიერების ინიციატივა"
        />
      </div>
    </StyledPartnerSection>
  );
};

PartnerSection.propTypes = {
  platform: PropTypes.oneOf(["web"]),
  partnerCardLogo: PropTypes.string,
  partnerCardImg: PropTypes.string,
  partnerCardLogo1: PropTypes.string,
  partnerCardLogo2: PropTypes.string,
  partnerCardLogo3: PropTypes.string,
  partnerCardLogo4: PropTypes.string,
  partnerCardLogo5: PropTypes.string,
  partnerCardLogo6: PropTypes.string,
  partnerCardLogo7: PropTypes.string,
  partnerCardLogo8: PropTypes.string,
  partnerCardLogo9: PropTypes.string,
  partnerCardLogo10: PropTypes.string,
  partnerCardLogo11: PropTypes.string,
  partnerCardLogo12: PropTypes.string,
  partnerCardLogo13: PropTypes.string,
  partnerCardLogo14: PropTypes.string,
  partnerCardLogo15: PropTypes.string,
  partnerCardLogo16: PropTypes.string,
  partnerCardLogo17: PropTypes.string,
  partnerCardLogo18: PropTypes.string,
  partnerCardLogo19: PropTypes.string,
  partnerCardLogo20: PropTypes.string,
  partnerCardLogo21: PropTypes.string,
  partnerCardLogo22: PropTypes.string,
};
