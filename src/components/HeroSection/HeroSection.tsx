import {
  HeroSectionWrapper,
  HeroImage,
  PlayIconWrapper,
  HeroContent,
  Heading,
} from "./styles";
import { Playicon } from "../../icons/Playicon";
import { usePlatform } from "../../hooks";

export const HeroSection = (): JSX.Element => {
  const platform = usePlatform();

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
