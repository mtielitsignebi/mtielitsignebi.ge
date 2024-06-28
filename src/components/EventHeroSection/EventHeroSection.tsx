import React from "react";
import { Platform } from "../../hooks/usePlatform";
import * as SC from "./style";

interface Props {
  platform: Platform;
}

export const EventHeroSection = ({ platform }: Props): JSX.Element => {
  return (
    <SC.Container platform={platform}>
      <SC.Image
        platform={platform}
        alt="Image"
        src="https://c.animaapp.com/X9C4eF1s/img/image-2.png"
      />
      <SC.ScheduleCardInstance platform={platform} />
    </SC.Container>
  );
};
