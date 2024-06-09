import {
  HeroSectionWrapper,
  HeroImage,
  PlayIconWrapper,
  HeroContent,
  Heading,
} from "./styles";
import { Playicon } from "../../icons/Playicon";

interface Props {
  platform: string;
}

export const HeroSection = ({ platform }: Props): JSX.Element => {
  return (
    <HeroSectionWrapper platform={platform} className="hero-section">
      <HeroImage platform={platform} className="hero-image">
        <PlayIconWrapper className="play-icon">
          <Playicon className="" />
        </PlayIconWrapper>
      </HeroImage>
      <HeroContent platform={platform} className="hero">
        <Heading platform={platform} className="heading">
          ჩვენი მიზანია, შევიძინოთ, შევაგროვოთ საინტერესო და სასურველი
          ლიტერატურა მთიელი მოზარდებისათვის.
        </Heading>
      </HeroContent>
    </HeroSectionWrapper>
  );
};
