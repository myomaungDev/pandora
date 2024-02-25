import React, { useState } from "react";
import { AppPageWrapper } from "../Components/Modules/PageWrapper";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../Providers/AuthProvider";
import { useForm } from "react-hook-form";
import { errorMessageProps, postFormProps } from "../Interfaces";
import { APIURLS } from "../Config";
import { API } from "../Services";
import { AxiosError, AxiosResponse } from "axios";
import { AppCreatePostForm } from "../Components/Organisms/Posts/CreatePostForm";
import { AppErrorMessage } from "../Components/Atoms/AppErrorMessage";
export const AppCreatePostScreen: React.FC = () => {
  const { isAuth } = useAuthContext();
  if (!isAuth) {
    return <Navigate to="/signin?path=create-post" replace />;
  }

  const { control, handleSubmit, setError } = useForm<postFormProps>({
    mode: "onChange",
    defaultValues: { title: "", content: "" },
  });
  const [message, setmessage] = useState<string>("");
  const { accessToken } = useAuthContext();

  const SubmitForm = (data: postFormProps) => {
    try {
      API.post(`${APIURLS.post.create}`, data, {
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
            const errors: errorMessageProps[] = errorMessages.data;
            const errorMsg: string | undefined = errorMessages.message;
            if (errorMsg) {
              setError("content", { type: "pattern", message: errorMsg });
            }
            errors.forEach((e: errorMessageProps) => {
              if (e.path === "title") {
                setError(e.path, { type: "pattern", message: e.msg });
              }
              if (e.path === "content") {
                setError(e.path, { type: "pattern", message: e.msg });
              }
            });
          }
        })
        .finally(() => {
          console.log(`Post create API done.`);
        });
    } catch (error) {
      console.log(`Post create error ${error}`);
    }
  };
  return (
    <React.Fragment>
      <AppPageWrapper>
        <form onSubmit={handleSubmit(SubmitForm)} className="w-full">
          <AppCreatePostForm control={control}>
            <AppErrorMessage message={message} />
          </AppCreatePostForm>
        </form>
      </AppPageWrapper>
    </React.Fragment>
  );
};
