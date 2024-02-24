import React from "react";
import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./Screens/Router";
import { AppAuthContextProvider } from "./Providers/AuthProvider";

export const AppRoot: React.FC = () => {
  return (
    <React.Fragment>
      <AppAuthContextProvider>
        <RouterProvider router={AppRouter} />
      </AppAuthContextProvider>
    </React.Fragment>
  );
};
