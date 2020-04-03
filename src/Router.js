import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import SignInPage from "./Project/SignIn/SignInPage/SignInPage";
import SignUpPage from "./Project/SignIn/SignUpPage/SignUpPage";
import HomePage  from "./Project/SignIn/HomePage/HomePage"
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={SignInPage} />
                    <Route path="/SignUpPage" component={SignUpPage} />
                    <Route path="/HomePage/:name/:email/:id" component={HomePage} />
                </Switch>
            </Router>
        )
    }
}