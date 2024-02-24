import { createBrowserRouter } from "react-router-dom";
import { AppHomeScreen } from "./Home";
import { AppSinglePostScreen } from "./Post";
import { AppSignupScreen } from "./Signup";
import { AppSigninScreen } from "./Signin";
import { AppProfileScreen } from "./Auth";
import { AppCreatePostScreen } from "./CreatePost";
export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppHomeScreen />,
  },
  {
    path: "/post/:id",
    element: <AppSinglePostScreen />,
  },
  {
    path: "/signup",
    element: <AppSignupScreen />,
  },
  {
    path: "/signin",
    element: <AppSigninScreen />,
  },
  {
    path: "/auth",
    element: <AppProfileScreen />,
  },
  {
    path: "/create-post",
    element: <AppCreatePostScreen />,
  },
]);
