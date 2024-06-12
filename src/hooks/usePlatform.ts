import { useEffect, useState } from "react";

export enum Platform {
  Web = "web",
  Mobile = "mobile",
}

export const usePlatform = (): Platform => {
  const [platform, setPlatform] = useState<Platform>(Platform.Web);

  useEffect(() => {
    const handleResize = () => {
      setPlatform(window.screen.width < 768 ? Platform.Mobile : Platform.Web);
    };

    handleResize(); // Set the initial value
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return platform;
};
