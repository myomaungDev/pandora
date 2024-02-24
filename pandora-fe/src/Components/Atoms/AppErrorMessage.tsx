import React from "react";
interface props {
  message?: string;
}
export const AppErrorMessage: React.FC<props> = ({ message }) => {
  return (
    <React.Fragment>
      {message ? (
        <p className="text-xs text-primary font-light">{message}</p>
      ) : null}
    </React.Fragment>
  );
};
