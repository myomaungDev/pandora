import React from "react";
import { AiOutlineDatabase } from "react-icons/ai";
interface props {
  message?: string;
}
export const AppNoData: React.FC<props> = ({ message }) => {
  return (
    <React.Fragment>
      <div className="w-full flex flex-col justify-center items-center content-center h-96">
        <AiOutlineDatabase className="w-auto h-32 text-secondary" />
        <h5>{message ? message : `No data in database.`}</h5>
      </div>
    </React.Fragment>
  );
};
