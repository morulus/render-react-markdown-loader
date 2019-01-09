import React from "react";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import IndexPage from "./IndexPage";
import Playground from "./Playground";
import Docs from "./Docs";
import Page404 from "./Page404";

console.log("process.env.PUBLIC_URL", process.env.PUBLIC_URL);

export default () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path="/">
        <IndexPage />
      </Route>
      <Route path="/tryit">
        <Playground />
      </Route>
      <Route path="/docs">
        <Docs />
      </Route>
      <Route>
        <Page404 />
      </Route>
    </Switch>
  </BrowserRouter>
);
