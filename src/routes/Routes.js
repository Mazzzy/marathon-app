import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../containers/home/Home";
import MSLogin from "../containers/login/MSLogin";
import NotFound from "../containers/notfound/NotFound";
import AppliedRoute from "../components/applied-route/AppliedRoute";

export default function Routes({ appProps }) {
  return (
    <Switch>
      <AppliedRoute path="/" exact component={MSLogin} appProps={appProps} />
      <AppliedRoute path="/dashboard" exact component={Home} appProps={appProps} />
      <Route component={NotFound} />
    </Switch>
  );
}