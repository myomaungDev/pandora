import React from "react";
import { AppPageWrapper } from "../Components/Modules/PageWrapper";
import { useAuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";
export const AppProfileScreen: React.FC = () => {
  const { isAuth } = useAuthContext();
  if (!isAuth) {
    return <Navigate to="/signin" replace />;
  }
  return (
    <AppPageWrapper>
      <React.Fragment>app profile screen</React.Fragment>
    </AppPageWrapper>
  );
};
