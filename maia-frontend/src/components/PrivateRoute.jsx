import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../api/useAuth";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
