import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import LoginPage from "../Pages/Login";
import MakingProjectPage from "../Pages/MakingProject";
import MainPage from "../Pages/Main";
import ManagementPage from "../Pages/Management ";
import Test from "../Pages/Test";

const ProjectWrapper = styled.div`
  ${({ theme }) => theme.main_width}
  height: 740px;
  min-height: 100vh;
  margin: 0 auto;
`;

const Router = () => {
  return (
    <BrowserRouter>
      <ProjectWrapper>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/management" component={ManagementPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/make-project" component={MakingProjectPage} />
          <Route path="/test" component={Test} />
        </Switch>
      </ProjectWrapper>
    </BrowserRouter>
  );
};

export default Router;
