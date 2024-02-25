import React, { useCallback, useEffect, useState } from "react";
import { postProps } from "../Interfaces";
import { API } from "../Services";
import { APIURLS } from "../Config";
import { AxiosError, AxiosResponse } from "axios";
import { AppPagination } from "../Components/Atoms/AppPagination";
import { AppAllPostsComponent } from "../Components/Organisms/Posts/AllPosts";
import { AppNoData } from "../Components/Atoms/NoData";
import { AppPageWrapper } from "../Components/Modules/PageWrapper";

export const AppHomeScreen: React.FC = () => {
  const [posts, setPosts] = useState<postProps[]>();
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const fetchPosts = useCallback(() => {
    API.get(`${APIURLS.post.all}?page=${page}&limit=5`)
      .then((res: AxiosResponse) => {
        const { posts, totalPages } = res.data;
        setPosts(posts);
        setTotalPages(totalPages);
      })
      .catch((err: AxiosError) => {
        console.log(`Error fetching posts_${err}`);
      })
      .finally(() => {
        console.log(`Fetching posts done.`);
      });
  }, [page]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <React.Fragment>
      <AppPageWrapper>
        {posts && posts.length > 0 ? (
          <React.Fragment>
            <div className="w-full flex flex-col space-y-2">
              <AppAllPostsComponent posts={posts} />
              <AppPagination
                setPage={setPage}
                page={page}
                totalPages={totalPages}
              />
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <AppNoData message="No posts in database." />
          </React.Fragment>
        )}
      </AppPageWrapper>
    </React.Fragment>
  );
};
