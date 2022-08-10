import React from "react";
// import "./style.css";
// import theme from "./constants/theme";
import Router from "./router/Router";
import { ThemeProvider } from "@mui/material";
import GlobalEstado from "./global/GlobalEstado";

function App() {
  return (
    <>
      <GlobalEstado>
        <ThemeProvider>
          <Router />
        </ThemeProvider>
      </GlobalEstado>
    </>
  );
}

export default App;