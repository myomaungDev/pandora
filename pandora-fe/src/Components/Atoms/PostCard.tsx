import React from "react";
import { postProps } from "../../Interfaces";
interface props {
  post: postProps;
}
export const AppPostCard: React.FC<props> = ({ post }) => {
  return (
    <React.Fragment>
      <pre>{JSON.stringify(post)}</pre>
    </React.Fragment>
  );
};
