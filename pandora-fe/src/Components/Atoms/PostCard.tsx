import React from "react";
import { postProps } from "../../Interfaces";
import { useAuthContext } from "../../Providers/AuthProvider";
import { RiEditLine, RiHistoryLine } from "react-icons/ri";
import moment from "moment";
import { Link } from "react-router-dom";
interface props {
  post: postProps;
 
}
export const AppPostCard: React.FC<props> = ({ post }) => {
  const { user, isAuth } = useAuthContext();
  return (
    <React.Fragment>
      <div
       
        className="w-full relative group border border-slate-300 bg-white shadow-md px-4 py-4 flex flex-col space-y-2"
      >
        {user && isAuth && user.id === post.user.id ? (
          <React.Fragment>
            <Link
              to={`/edit/${post.id}`}
              className="absolute top-0 bg-secondary hover:bg-primary right-0 px-2 py-2"
            >
              <RiEditLine className="w-auto h-6 text-white" />
            </Link>
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
