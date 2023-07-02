import React from "react";
import { Provider } from "react-redux";
import { store, history } from "./redux/store";
import { HistoryRouter as Router } from "redux-first-history/rr6";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home";
import IntroPage from "./pages/Intro/IntroPage";

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes>
          <Route path={"/"} element={<IntroPage />} />
          <Route path={"/demo"} element={<HomePage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
