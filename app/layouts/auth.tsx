import { Outlet, Navigate } from "react-router";

const AuthLayout = () => {
  const isAuthenticated = false; // Replace with your authentication logic

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default AuthLayout;