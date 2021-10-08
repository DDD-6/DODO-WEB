import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Test from "../Pages/Test";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route exact path="/" component={} /> */}
        <Route path="/test" component={Test} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
