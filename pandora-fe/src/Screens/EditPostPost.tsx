import React, { useCallback, useEffect, useState } from "react";
import { AppPageWrapper } from "../Components/Modules/PageWrapper";
import { Navigate, useParams } from "react-router-dom";
import { useAuthContext } from "../Providers/AuthProvider";
import { useForm } from "react-hook-form";
import { errorMessageProps, postFormProps } from "../Interfaces";
import { APIURLS } from "../Config";
import { API } from "../Services";
import { AxiosError, AxiosResponse } from "axios";
import { AppEditPostForm } from "../Components/Organisms/Posts/EditPostForm";
import { AppErrorMessage } from "../Components/Atoms/AppErrorMessage";

export const AppEditPostScreen: React.FC = () => {
  const { accessToken } = useAuthContext();
  const { id } = useParams();

  const { control, handleSubmit, setError,setValue } = useForm<postFormProps>({
    mode: "onChange",
    defaultValues: { title: "", content: "" },
  });

  const syncPost = useCallback(() => {
    if (id) {
      API.get(`${APIURLS.post.single}/${id}`).then((res:AxiosResponse)=>{
        if(res.data){
         const {data} = res.data;
         if(data && data.title){
          setValue('title',data.title)
         }
         if(data && data.content){
          setValue('content',data.content)
         }
        }
      }).catch((err:AxiosError)=>{
        console.log(`Fetching post error ${err}`)
      })
    }
  }, [id]);

  useEffect(() => {
    syncPost();
  }, [syncPost]);

  const [message, setmessage] = useState<string>("");

  const SubmitForm = (data: postFormProps) => {
    try {
      API.put(`${APIURLS.post.update}/${id}`, data, {
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
  const { isAuth } = useAuthContext();
  if (!isAuth) {
    return <Navigate to="/signin?path=edit-post" replace />;
  }
  return (
    <React.Fragment>
      <AppPageWrapper>
        <form onSubmit={handleSubmit(SubmitForm)} className="w-full">
          <AppEditPostForm control={control}>
            <AppErrorMessage message={message} />
          </AppEditPostForm>
        </form>
      </AppPageWrapper>
    </React.Fragment>
  );
};
