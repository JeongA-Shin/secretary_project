import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line

import { HashRouter } from "react-router-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HostingCloudLandingPage from "demos/HostingCloudLandingPage";

import SensorPage from "components/hero/SensorPage";
import SwitchPage from "components/hero/SwitchPage";
import BriefingPage from "components/hero/BriefingPage";
import SignInPage from "components/hero/SignInPage";
import SignUpPage from "components/hero/SignUpPage";

export default function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/signup">
          <SignUpPage />
        </Route>
        <Route path="/signin">
          <SignInPage />
        </Route>
        <Route path="/briefing">
          <BriefingPage />
        </Route>
        <Route path="/switches">
          <SwitchPage />
        </Route>
        <Route path="/sensors">
          <SensorPage />
        </Route>
        <Route path="/">
          <HostingCloudLandingPage />
        </Route>
      </Switch>
    </HashRouter>
  );
}
