import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import Cart from "../features/cart";
import List from "../features/list";
import { PageNotFound } from "../features/shared/pages/PageNotFound";
import { ERROR_404, CART } from "./urlMappings";

const MainRouter = () => (
  <div className="animate">
    <Switch>
      <Route exact path={"/"} component={List} />
      <Route exact path={CART} component={Cart} />
      <Route exact path={ERROR_404} component={PageNotFound} />
      <Redirect path="*" to={ERROR_404} />
    </Switch>
  </div>
);

export default MainRouter;
