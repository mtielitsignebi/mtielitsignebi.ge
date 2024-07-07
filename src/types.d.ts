import "styled-components";

type ColorShades = {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
};

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
      green: ColorShades;
      zinc: ColorShades;
      red: ColorShades;
      blue: ColorShades;
    };
    fonts: {
      primary: string;
      secondary: string;
    };
    sizes: {
      mobile: string;
      tablet: string;
      laptop: string;
      desktop: string;
    };
    platform: {
      mobile: string;
      tablet: string;
      laptop: string;
      desktop: string;
    };
  }
}
