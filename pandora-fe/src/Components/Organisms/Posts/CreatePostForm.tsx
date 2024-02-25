import React from "react";
import { Control, Controller } from "react-hook-form";
import { postFormProps } from "../../../Interfaces";
import { AiOutlineArrowRight } from "react-icons/ai";
interface props {
  control: Control<postFormProps, any>;
  children: React.ReactNode;
}
export const AppCreatePostForm: React.FC<props> = ({ control, children }) => {
  return (
    <React.Fragment>
      <div className="w-full flex flex-col justify-center items-center content-center ">
        <div className="w-full max-w-screen-lg px-4 py-4 bg-white shadow-lg">
          <div className="w-full flex flex-col space-y-2">
            <label htmlFor="title" className="text-secondary font-thin text-sm">
              Title
            </label>
            <Controller
              control={control}
              name="title"
              rules={{
                required: {
                  value: true,
                  message: "Don't leave it blank.",
                },
              }}
              render={({
                formState: { errors },
                field: { value, onBlur, onChange, ref },
              }) => (
                <React.Fragment>
                  <input
                    ref={ref}
                    placeholder="Enter title"
                    value={value}
                    onBlur={onBlur}
                    onChange={(e) => onChange(e.target.value)}
                    type="text"
                    className="w-full form-input text-sm text-secondary"
                  />
                  {errors && errors.title && errors.title.message ? (
                    <React.Fragment>
                      <span className="text-xs text-primary font-light">
                        {errors.title.message}
                      </span>
                    </React.Fragment>
                  ) : null}
                </React.Fragment>
              )}
            />
          </div>

          <div className="w-full flex flex-col space-y-2">
            <label
              htmlFor="content"
              className="text-secondary font-thin text-sm"
            >
              Content
            </label>
            <Controller
              control={control}
              name="content"
              rules={{
                required: {
                  value: true,
                  message: "Don't leave it blank.",
                },
              }}
              render={({
                formState: { errors },
                field: { value, onBlur, onChange, ref },
              }) => (
                <React.Fragment>
                  <textarea
                    ref={ref}
                    placeholder="Enter content"
                    value={value}
                    onBlur={onBlur}
                    onChange={(e) => onChange(e.target.value)}
                    rows={10}

                    className="w-full form-textarea text-sm text-secondary"
                  />
                  {errors && errors.content && errors.content.message ? (
                    <React.Fragment>
                      <span className="text-xs text-primary font-light">
                        {errors.content.message}
                      </span>
                    </React.Fragment>
                  ) : null}
                </React.Fragment>
              )}
            />
          </div>
          {children}
          <div className="my-5 flex w-full justify-end items-center content-center">
            <button className="form_btn max-w-xs">
              <span className="flex-grow text-sm uppercase font-bold">
                Post
              </span>
              <AiOutlineArrowRight className="w-auto h-6" />
            </button>
          </div>
          
        </div>
      </div>
    </React.Fragment>
  );
};
