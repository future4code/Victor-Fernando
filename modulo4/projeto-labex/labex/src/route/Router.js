import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage/HomePage';
import { ListTripsPage } from '../pages/ListTripsPage/ListTripsPage';
import { ApplicationFormPage } from '../pages/ApplicationFormPage/ApplicationFormPage';
import {LoginPage} from '../pages/LoginPage/LoginPage';
import {AdminHomePage} from '../pages/AdminHomePage/AdminHomePage';

export function Router (){



    return(
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"}>
                    <HomePage />
                </Route>
                <Route exact path={"/trips/list"}>
                    <ListTripsPage />
                </Route>
                <Route exact path={"/trips/application"}>
                    <ApplicationFormPage />
                </Route>
                <Route exact path={"/login"}>
                    <LoginPage />
                </Route>
                <Route exact path={"/admin/trips/list"}>
                    <AdminHomePage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
export default Router;