import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext"; // Assuming you have the AuthContext set up
import Layout from "../layouts/Layout"; // Import the AppLayout component

// Typing the PrivateRouteProps correctly
interface PrivateRouteProps {
  element: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const { token } = useAuth(); // Get token from context

  return token ? <Layout>{element}</Layout> : <Navigate to="/login" />;
};

export default PrivateRoute;
