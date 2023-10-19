import React, { useContext } from "react";
import { AuthContext } from "../context/auth";
import { Navigate, Route } from "react-router-dom";

const PrivatRoute = ({ component: Component, ...rest }) => {
  const { user } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      exact
      render={(props) =>
        user ? <Component {...props} /> : <Navigate to="/Login" />
      }
    />
  );
};

export default PrivatRoute;