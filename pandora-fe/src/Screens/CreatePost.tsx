import React from "react";
import { AppPageWrapper } from "../Components/Modules/PageWrapper";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../Providers/AuthProvider";
export const AppCreatePostScreen: React.FC = () => {
  const { isAuth } = useAuthContext();
  if (!isAuth) {
    return <Navigate to="/signin?path=create-post" replace />;
  }
  return (
    <React.Fragment>
      <AppPageWrapper>
        <React.Fragment>app create screen</React.Fragment>
      </AppPageWrapper>
    </React.Fragment>
  );
};
