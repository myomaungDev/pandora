import React, { useState } from "react";
import { userProps } from "../Interfaces";

interface authContextType {
  user?: userProps;
  accessToken?: string;
  isAuth: boolean;
  setUser: React.Dispatch<React.SetStateAction<userProps | undefined>>;
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
  setAccessToken: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const AuthContext = React.createContext<authContextType | undefined>(undefined);

export const useAuthContext = (): authContextType => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error(`useAuthContext must be within a AuthContextProvider.`);
  } else {
    return context;
  }
};

interface props {
  children: React.ReactNode;
}

export const AppAuthContextProvider: React.FC<props> = ({ children }) => {
  const storedToken = localStorage.getItem("pandora_access_token");
  const [isAuth, setisAuth] = useState<boolean>(false);
  const [accessToken, setaccessToken] = useState<string | undefined>(
    storedToken || ""
  );
  const [user, setuser] = useState<userProps>();
  return (
    <React.Fragment>
      <AuthContext.Provider
        value={{
          user: user,
          setUser: setuser,
          accessToken: accessToken,
          setAccessToken: setaccessToken,
          isAuth: isAuth,
          setIsAuth: setisAuth,
        }}
      >
        {children}
      </AuthContext.Provider>
    </React.Fragment>
  );
};
