import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Notes from "./containers/Notes";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import NewNote from "./containers/NewNote";
import NotFound from "./containers/NotFound";
import AppliedRoute from "./components/AppliedRoute";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";

export default ({ childProps }) =>
  <Switch>
    <AppliedRoute path="/cloud-ams-public/index.html" exact component={Home} props={childProps} />
    <UnauthenticatedRoute path="/cloud-ams-public/login" exact component={Login} props={childProps} />
    <UnauthenticatedRoute path="/cloud-ams-public/signup" exact component={Signup} props={childProps} />
    <AuthenticatedRoute path="/notes/new" exact component={NewNote} props={childProps} />
    <AuthenticatedRoute path="/notes/:id" exact component={Notes} props={childProps} />
    { /* Finally, catch all unmatched routes */ }
    <Route component={NotFound} />
  </Switch>;
