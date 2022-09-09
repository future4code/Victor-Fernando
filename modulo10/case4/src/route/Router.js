import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Detalhe from "../pages/Detalhe";


const Router = () => {


  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
            <HomePage />
        </Route>
        <Route exact path={"/detalhe"}>
            <Detalhe />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default Router;
