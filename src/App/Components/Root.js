import * as React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../Config/theme";
import DataProvider from "./DataProvider";
import App from "./App";

function Root() {
  return (
    <DataProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </DataProvider>
  );
}

export default Root;
