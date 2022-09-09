import React from "react";
import Router from "./route/Router";
import GlobalEstado from "./global/GlobalEstado";

const App = () => {
  
  return(
    <GlobalEstado>
      <Router />
    </GlobalEstado>
  );
   
} 

export default App;


