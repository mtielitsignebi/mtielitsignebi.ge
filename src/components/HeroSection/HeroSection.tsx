import React, { useEffect } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import "videojs-youtube";
import {
  HeroSectionWrapper,
  HeroContent,
  Heading,
  VideoWrapper,
} from "./styles";
import { usePlatform } from "../../hooks";

export const HeroSection = () => {
  const platform = usePlatform();

  useEffect(() => {
    const videoElement = document.getElementById("my-video");
    if (videoElement) {
      videojs(videoElement, {
        techOrder: ["youtube"],
        fluid: true,
        controls: true,
        sources: [
          {
            src: "https://www.youtube.com/watch?v=nc-2p1AaTX4",
            type: "video/youtube",
          },
        ],
        controlBar: {
          volumePanel: {
            inline: false,
          },
        },
      });
    }
  }, []);

  return (
    <HeroSectionWrapper platform={platform} className="hero-section">
      <VideoWrapper platform={platform}>
        <video
          id="my-video"
          className="video-js vjs-big-play-centered"
          controls
          preload="auto"
        />
      </VideoWrapper>

      <HeroContent platform={platform} className="hero">
        <Heading platform={platform} className="heading">
          ჩვენი მიზანია, შევიძინოთ, შევაგროვოთ საინტერესო და სასურველი
          ლიტერატურა მთიელი მოზარდებისათვის.
        </Heading>
      </HeroContent>
    </HeroSectionWrapper>
  );
};
