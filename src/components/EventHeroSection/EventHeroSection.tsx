import React from "react";
import { Platform } from "../../hooks/usePlatform";
import * as SC from "./style";

interface Props {
  platform: Platform;
  className: any;
}

export const EventHeroSection = ({
  platform,
  className,
}: Props): JSX.Element => {
  return (
    <SC.Container className={className}>
      <SC.Image
        alt="Image"
        src="https://c.animaapp.com/X9C4eF1s/img/image-2.png"
      />
      <SC.ScheduleCardInstance />
    </SC.Container>
  );
};
