import React from "react";
import { postProps } from "../../../Interfaces";
import { AppPostCard } from "../../Atoms/PostCard";
interface props {
  posts: postProps[];
}
export const AppAllPostsComponent: React.FC<props> = ({ posts }) => {
  return (
    <React.Fragment>
      <div className="w-full grid grid-cols-12 gap-3">
        {posts.map((post: postProps, index: number) => (
          <div
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            key={index}
            className="col-span-12 md:col-span-12"
          >
            <AppPostCard post={post} />
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};
