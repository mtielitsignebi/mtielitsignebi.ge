import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Route, Routes, HashRouter as Router } from "react-router-dom";
import { HomePage } from "./pages/Home";
import IntroPage from "./pages/Intro/IntroPage";
import DonatePage from "./pages/Donate/DonatePage";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path={"/"} element={<IntroPage />} />
          <Route path={"/demo"} element={<HomePage />} />
          <Route path={"/donate"} element={<DonatePage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
