import React from 'react';
import Home from '../pages/HomePage/Home'
import { BrowserRouter, Switch, Route } from "react-router-dom";



const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path ={"/"}>
                    <Home/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;