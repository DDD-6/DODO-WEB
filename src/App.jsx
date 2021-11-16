import React from "react";
import { ThemeProvider } from "styled-components";
import Router from "./Router/Router";
import GlobalCss from "./Assets/Globalcss";
import "./Assets/fonts/pretendardvariable.css";
import theme from "./Assets/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalCss />
      <Router />
    </ThemeProvider>
  );
}

export default App;
