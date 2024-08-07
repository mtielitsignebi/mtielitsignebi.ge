import React from "react";
import { ControlX, Page } from "@etlyn/control-x";
import { HomePage } from "./pages/Home";
import IntroPage from "./pages/Intro/IntroPage";
import DonatePage from "./pages/Donate/DonatePage";
import { EventPage } from "./pages/EventPage";
import { EventDetailPage } from "./pages/EventDetailPage";
import { AboutPage } from "./pages/AboutPage";
import { ErrorPage } from "./pages/ErrorPage";

function App() {
  return (
    <ControlX>
      <Page route="/" component={<IntroPage />} />
      <Page route={"/home"} component={<HomePage />} />
      <Page route={"/about"} component={<AboutPage />} />
      <Page route="/donate" component={<DonatePage />} />
      <Page route="/events" component={<EventPage />} />
      <Page route="/events/:eventID" component={<EventDetailPage />} />
      <Page route="*" component={<ErrorPage />} />
    </ControlX>
  );
}

export default App;
