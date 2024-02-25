import React from "react";
import { postProps } from "../../../Interfaces";
import { AppPostCard } from "../../Atoms/PostCard";
interface props {
  post: postProps;
  refresh: () => void;
}
export const AppPostDetialComponent: React.FC<props> = ({ post, refresh }) => {
  return (
    <React.Fragment>
      <div className="w-full ">
        <AppPostCard refresh={refresh} post={post} />
      </div>
    </React.Fragment>
  );
};
