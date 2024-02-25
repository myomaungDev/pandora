import React, { useState } from "react";
import { AppPageWrapper } from "../Components/Modules/PageWrapper";
import { useForm } from "react-hook-form";
import { errorMessageProps, signupFormProps } from "../Interfaces";
import { AppSignupForm } from "../Components/Organisms/Users/AppSignupForm";
import { API } from "../Services";
import { APIURLS } from "../Config";
import { AxiosError, AxiosResponse } from "axios";
import { useAuthContext } from "../Providers/AuthProvider";
import { AppErrorMessage } from "../Components/Atoms/AppErrorMessage";
import { useNavigate } from "react-router-dom";
export const AppSignupScreen: React.FC = () => {
  const { setIsAuth, setUser, setAccessToken } = useAuthContext();
  const { control, handleSubmit, watch, setError } = useForm<signupFormProps>({
    mode: "onChange",
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirm_password: "",
    },
  });
  const [message, setmessage] = useState<string>("");
  const navigate = useNavigate();
  const SubmitForm = (data: signupFormProps) => {
    try {
      API.post(`${APIURLS.users.signup}`, data)
        .then((res: AxiosResponse) => {
          if (res.data) {
            setmessage(res.data.message);
            setIsAuth(true);
            setAccessToken(res.data.access_token);
            setUser(res.data.data);
            navigate("/");
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

  return (
    <AppPageWrapper>
      <React.Fragment>
        <form onSubmit={handleSubmit(SubmitForm)} className="w-full">
          <AppSignupForm watch={watch} control={control}>
            <AppErrorMessage message={message} />
          </AppSignupForm>
        </form>
      </React.Fragment>
    </AppPageWrapper>
  );
};
