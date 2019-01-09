import React from "react";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import IndexPage from "./IndexPage";
import Playground from "./Playground";
import Docs from "./Docs";

export default () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route path="/" exact>
        <IndexPage />
      </Route>
      <Route path="/tryit">
        <Playground />
      </Route>
      <Route path="/docs">
        <Docs />
      </Route>
    </Switch>
  </BrowserRouter>
);
