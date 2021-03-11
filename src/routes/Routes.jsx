import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Login } from "../pages/Login/Login";
import { SuppliersList } from "../pages/SuppliersList/SuppliersList";
import { SupplierDetails } from "../pages/SupplierDetails/SupplierDetails";

import { isAuthenticated } from "../utils/auth";
import { Header } from "../components/Header/Header";
import { ThemeProvider } from "../context/ThemeContext";

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  return auth ? (
    <Route {...rest}>
      <Component />
    </Route>
  ) : (
    <Redirect to="/login" />
  );
};

export const Routes = () => {
  const [auth, setAuth] = useState(isAuthenticated());

  return (
    <ThemeProvider>
        {auth && <Header setAuth={setAuth} />}
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Redirect to="/suppliers" />
            </Route>
            <PrivateRoute
              path="/suppliers"
              auth={auth}
              component={() => <SuppliersList />}
            />
            <PrivateRoute
              path="/supplier-details/:id"
              auth={auth}
              component={() => <SupplierDetails />}
            />
            <Route path="/login">
              <Login setAuth={setAuth} />
            </Route>
          </Switch>
        </BrowserRouter>
    </ThemeProvider>
  );
};
