import React from "react";
import { Link } from "react-router-dom";

export const AppNavBar: React.FC = () => {
  return (
    <React.Fragment>
      <nav className="w-full top-0 sticky bg-white px-2 py-2 shadow-md z-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-lg font-semibold">[Logo]</span>
              </div>
            </div>
            <div className="flex items-center">
              <div className="hidden md:block">
                <div className="ml-4 flex space-x-3 items-center md:ml-6">
                  <Link
                    to={"/"}
                    className="text-lg font-bold  text-slate-700 hover:text-slate-900"
                  >
                    Home
                  </Link>
                  <Link
                    to={"/create-post"}
                    className="text-lg font-bold  text-slate-700 hover:text-slate-900"
                  >
                    Add Post
                  </Link>
                  <Link
                    to={"/profile"}
                    className="text-lg font-bold  text-slate-700 hover:text-slate-900"
                  >
                    Profile
                  </Link>
                  <Link
                    to={"/profile"}
                    className="text-lg font-bold  text-slate-700 hover:text-slate-900"
                  >
                    Login
                  </Link>
                  <Link
                    to={"/profile"}
                    className="text-lg font-bold  text-slate-700 hover:text-slate-900"
                  >
                    Signup
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};
