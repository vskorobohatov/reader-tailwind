import { Outlet, Navigate } from "react-router";
import { getAccessToken } from "~/helpers/tokenhelper";

const AuthLayout = () => {
  const token = getAccessToken(); // Use the function from tokenhelper.ts
  const isAuthenticated = !!token; // Check if the token exists

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default AuthLayout;