import React, { useCallback, useEffect, useState } from "react";
import { AppPageWrapper } from "../Components/Modules/PageWrapper";
import { postProps } from "../Interfaces";
import { AppPostDetialComponent } from "../Components/Organisms/Posts/PostDetial";
import { AppNoData } from "../Components/Atoms/NoData";
import { useParams } from "react-router-dom";
import { API } from "../Services";
import { APIURLS } from "../Config";
import { AxiosError, AxiosResponse } from "axios";

export const AppSinglePostScreen: React.FC = () => {
  const [post, setpost] = useState<postProps>();
  const { id } = useParams();
  const fetchPost = useCallback(() => {
    if(id){
      API.get(`${APIURLS.post.single}/${id}`)
      .then((res: AxiosResponse) => {
        const { data } = res.data;
        setpost(data);
      })
      .catch((err: AxiosError) => {
        console.log(`Fetch post error ${err}`);
      });
    }
  }, [id]);

  useEffect(() => {
    fetchPost();
  }, [fetchPost]);

  return (
    <AppPageWrapper>
      <React.Fragment>
        {post ? (
          <AppPostDetialComponent refresh={fetchPost} post={post} />
        ) : (
          <AppNoData message="This post has been destroyed." />
        )}
      </React.Fragment>
    </AppPageWrapper>
  );
};
