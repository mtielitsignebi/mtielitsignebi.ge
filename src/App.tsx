import React from "react";
import { ControlX, Page } from "@etlyn/control-x";
import { HomePage } from "./pages/Home";
import IntroPage from "./pages/Intro/IntroPage";
import DonatePage from "./pages/Donate/DonatePage";

function App() {
  return (
    <ControlX>
      <Page route="/" component={<IntroPage />} />
      <Page route={"/home"} component={<HomePage />} />
      <Page route="/donate" component={<DonatePage />} />
    </ControlX>
  );
}

export default App;
