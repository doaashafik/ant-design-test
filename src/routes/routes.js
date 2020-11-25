import React, { Suspense } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { browserHistory } from "./history";
import Loading from "../components/Loading/Loading";
import PrivateRoute from "./PrivateRoute";
import { Home, Login } from '../utils/Lazyload'
export default function Routes() {
  return (
    <Router history={browserHistory}>
      <Suspense fallback={<Loading />}>
        <Switch>
        <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Suspense>
    </Router>
  );
}
