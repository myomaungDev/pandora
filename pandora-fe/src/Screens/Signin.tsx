import React, { useState } from "react";
import { AppPageWrapper } from "../Components/Modules/PageWrapper";
import { useForm } from "react-hook-form";
import { errorMessageProps, signinFormProps } from "../Interfaces";
import { AppSigninForm } from "../Components/Organisms/Users/AppSigninForm";
import { useAuthContext } from "../Providers/AuthProvider";
import { API } from "../Services";
import { APIURLS } from "../Config";
import { AxiosError, AxiosResponse } from "axios";
import { AppErrorMessage } from "../Components/Atoms/AppErrorMessage";

export const AppSigninScreen: React.FC = () => {
  const { control, handleSubmit, setError } = useForm<signinFormProps>({
    mode: "onChange",
    defaultValues: { email: "", password: "" },
  });
  const [message, setmessage] = useState<string>("");
  const { setIsAuth, setUser, setAccessToken } = useAuthContext();

  const SubmitForm = (data: signinFormProps) => {
    try {
      API.post(`${APIURLS.users.signin}`, data)
        .then((res: AxiosResponse) => {
          if (res.data) {
            setmessage(res.data.message);
            setIsAuth(true);
            setAccessToken(res.data.access_token);
            setUser(res.data.data);
          }
        })
        .catch((err: AxiosError) => {
          if (err.response?.status === 422 && err.response.data) {
            const errorMessages: any = err.response.data;
            const errors: errorMessageProps[] = errorMessages.data;
            errors.forEach((e: errorMessageProps) => {
              if (e.path === "email") {
                setError(e.path, { type: "pattern", message: e.msg });
              }
              if (e.path === "password") {
                setError(e.path, { type: "pattern", message: e.msg });
              }
            });
          }
        })
        .finally(() => {
          console.log(`Signin API done.`);
        });
    } catch (error) {
      console.log(`Signin error ${error}`);
    }
  };
  return (
    <AppPageWrapper>
      <React.Fragment>
        <form onSubmit={handleSubmit(SubmitForm)} className="w-full">
          <AppSigninForm  control={control} >
              <AppErrorMessage message={message} />
          </AppSigninForm>
        </form>
      </React.Fragment>
    </AppPageWrapper>
  );
};
