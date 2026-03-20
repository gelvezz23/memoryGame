import { Outlet, Navigate } from "react-router-dom";
import { managerTokenStorage } from "./managerToken";

export const PrivateRoute = () => {
  const auth = managerTokenStorage.isValid();
  return auth ? <Outlet /> : <Navigate to="/" />;
};

export const PublicRoute = () => {
  const isAuthenticated = !!managerTokenStorage.isValid();
  return isAuthenticated ? <Navigate to="/game" replace /> : <Outlet />;
};
