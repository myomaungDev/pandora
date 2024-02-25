import React from "react";
import { postProps } from "../../Interfaces";
import { useAuthContext } from "../../Providers/AuthProvider";
import { RiDeleteBinLine, RiEditLine, RiHistoryLine } from "react-icons/ri";
import moment from "moment";
import { Link } from "react-router-dom";
import { API } from "../../Services";
import { APIURLS } from "../../Config";
import { AxiosError, AxiosResponse } from "axios";
interface props {
  post: postProps;
  refresh: () => void;
}
export const AppPostCard: React.FC<props> = ({ post, refresh }) => {
  const { user, isAuth, accessToken } = useAuthContext();
  const handleDestroyPost = () => {
    try {
      if (accessToken && post) {
        const isConfirm: boolean = confirm(
          "Are you sure to destory this post."
        );
        if (isConfirm) {
          API.delete(`${APIURLS.post.destroy}/${post.id}`, {
            headers: { Authorization: `Bearer ${accessToken}` },
          })
            .then((res: AxiosResponse) => {
              if (res.data) {
                refresh();
              }
            })
            .catch((err: AxiosError) => {
              console.log(`Axios error ${err}`);
            });
        }
      }
    } catch (error) {
      console.log(`destroy post error-${error}`);
    }
  };
  return (
    <React.Fragment>
      <div className="w-full relative group border border-slate-300 bg-white shadow-md px-4 py-4 flex flex-col space-y-2">
        {user && isAuth && user.id === post.user.id ? (
          <React.Fragment>
            <div className="absolute top-0 right-0 flex flex-row space-x-2">
              <Link
                to={`/edit-post/${post.id}`}
                className=" bg-secondary hover:bg-primary right-0 px-2 py-2"
              >
                <RiEditLine className="w-auto h-6 text-white" />
              </Link>
              <button
                type="button"
                onClick={() => handleDestroyPost()}
                className=" bg-secondary hover:bg-primary right-0 px-2 py-2"
              >
                <RiDeleteBinLine className="w-auto h-6 text-white" />
              </button>
            </div>
          </React.Fragment>
        ) : null}
        <Link to={`/post/${post.id}`}>
          <React.Fragment>
            <h6 className="text-lg font-bold text-secondary underline underline-offset-8 ">
              {post.title}
            </h6>
            <div className="px-2 py-2">
              <p className="text-sm font-normal text-slate-800">
                {post.content}
              </p>
            </div>
            <hr />
            <div className="w-full flex flex-row justify-end items-center content-center">
              <RiHistoryLine className="w-auto h-4 text-slate-600" />
              <span className="text-xs text-primary font-thin">
                {moment(new Date(post.updated_at)).fromNow()}
              </span>
            </div>
          </React.Fragment>
        </Link>
      </div>
    </React.Fragment>
  );
};
