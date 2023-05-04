import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../context/auth-context";

const PrivateRoute = ({ path, component: Component, ...rest }) => {
  const { auth } = useAuthContext();

  const isLoggedIn = auth.isLoggedIn;

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
