import React, { useCallback, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./Screens/Router";

import Aos from "aos";
import "aos/dist/aos.css";
import { useAuthContext } from "./Providers/AuthProvider";
import { API } from "./Services";
import { APIURLS } from "./Config";
import { AxiosError, AxiosResponse } from "axios";
export const AppRoot: React.FC = () => {
  Aos.init();
  const { accessToken, setUser, setIsAuth } = useAuthContext();
  const syncUser = useCallback(() => {
    if (accessToken) {
      API.get(`${APIURLS.users.profile}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
        .then((res: AxiosResponse) => {
          const { data } = res.data;
          setUser(data);
          setIsAuth(true);
        })
        .catch((err: AxiosError) => {
          console.log(`GET PROFILE_ ${err}`);
        });
    }
  }, [accessToken]);
  useEffect(() => {
    syncUser();
  }, [syncUser]);

  return (
    <React.Fragment>
      <RouterProvider router={AppRouter} />
    </React.Fragment>
  );
};
