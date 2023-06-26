import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginHome from "../LoginHome/LoginHome";
import { FaRegSadTear } from "react-icons/fa";
import PrivateRoute from "../auth/privaterouter";
import EmpleadosBuscar from "../empleados/inicioe";
import ProductDescription from "../product-description/ProductDescription";

const AppRoutes = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path={["/empleados"]} component={EmpleadosBuscar} />
        <Route
          exact
          path={["/product-description/:nombreProducto"]}
          component={ProductDescription}
        />
        <Route exact path={["/"]} component={LoginHome} />
        <Route exact path="/*" component={NotFound} />
      </Switch>
    </Router>
  );
};

const NotFound = () => {
  return (
    <h1 className="titulo not-found">
      404 <br />
      Pagina no encontrada <br />
      {<FaRegSadTear />}
    </h1>
  );
};

export default AppRoutes;
