import React, { useState } from "react";
import { AppPageWrapper } from "../Components/Modules/PageWrapper";
import { useAuthContext } from "../Providers/AuthProvider";
import { Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { errorMessageProps, userProdileUpdateFormProps } from "../Interfaces";
import { API } from "../Services";
import { APIURLS } from "../Config";
import { AxiosError, AxiosResponse } from "axios";
import { AppUserUpdateForm } from "../Components/Organisms/Users/AppUpdateForm";
import { AppErrorMessage } from "../Components/Atoms/AppErrorMessage";
import { AiOutlineArrowRight } from "react-icons/ai";
export const AppProfileScreen: React.FC = () => {
  const { isAuth, user, accessToken, setUser, setAccessToken, setIsAuth } =
    useAuthContext();
  if (!isAuth) {
    return <Navigate to="/signin" replace />;
  }
  const { control, handleSubmit, watch, setError } =
    useForm<userProdileUpdateFormProps>({
      mode: "onChange",
      defaultValues: {
        username: user?.username ? user.username : "",
        email: user?.email ? user.email : "",
        password: "",
        confirm_password: "",
      },
    });
  const [message, setmessage] = useState<string>("");
  const navigate = useNavigate();
  const SubmitForm = (data: userProdileUpdateFormProps) => {
    try {
      API.put(`${APIURLS.users.update}`, data, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
        .then((res: AxiosResponse) => {
          if (res.data) {
            setmessage(res.data.message);
          }
        })
        .catch((err: AxiosError) => {
          if (err.response?.status === 422 && err.response.data) {
            const errorMessages: any = err.response.data;
            const errorMsg: string | undefined = errorMessages.message;
            const errors: errorMessageProps[] = errorMessages.data;
            if (errorMsg) {
              setError("password", { type: "pattern", message: errorMsg });
            }
            errors.forEach((e: errorMessageProps) => {
              if (e.path === "email") {
                setError(e.path, { type: "pattern", message: e.msg });
              }
              if (e.path === "password") {
                setError(e.path, { type: "pattern", message: e.msg });
              }
              if (e.path === "username") {
                setError(e.path, { type: "pattern", message: e.msg });
              }
            });
          }
        })
        .finally(() => {
          console.log(`signup API done.`);
        });
    } catch (error) {
      console.log(`Signup error ${error}`);
    }
  };

  const LogoutUser = () => {
    localStorage.removeItem("pandora_access_token");
    setUser(undefined);
    setAccessToken("");
    setIsAuth(false);
    navigate("/");
  };
  return (
    <AppPageWrapper>
      <form onSubmit={handleSubmit(SubmitForm)} className="w-full">
        <AppUserUpdateForm watch={watch} control={control}>
          <AppErrorMessage message={message} />
          <div className="w-full flex flex-col my-5">
            <button
              type="button"
              onClick={() => LogoutUser()}
              className="form_btn"
            >
              <span className="flex-grow text-sm uppercase font-bold">
                Logout
              </span>
              <AiOutlineArrowRight className="w-auto h-6" />
            </button>
          </div>
        </AppUserUpdateForm>
      </form>
    </AppPageWrapper>
  );
};
