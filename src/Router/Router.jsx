import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import LoginPage from "../Pages/Login";
import Test from "../Pages/Test";

const ProjectWrapper = styled.div`
  width: 360px;
  min-height: 100vh;
  margin: 0 auto;
`;

const Router = () => {
  return (
    <BrowserRouter>
      <ProjectWrapper>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/test" component={Test} />
        </Switch>
      </ProjectWrapper>
    </BrowserRouter>
  );
};

export default Router;
