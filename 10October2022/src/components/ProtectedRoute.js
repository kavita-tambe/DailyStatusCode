import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
const ProtectedRoute = /*istanbul ignore next*/ ({ children }) => {
  //   let auth = false;
  const { user } = useUserAuth();

  console.log("Check user in Private: ", user);
  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;
