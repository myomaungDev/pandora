import React from "react";
import { Control, Controller } from "react-hook-form";
import { signinFormProps } from "../../../Interfaces";
import { AiOutlineArrowRight } from "react-icons/ai";
interface props {
  control: Control<signinFormProps, any>;
  children:React.ReactNode;
}
export const AppSigninForm: React.FC<props> = ({ control,children }) => {
  return (
    <React.Fragment>
      <div className="w-full flex flex-col justify-center items-center content-center h-screen">
        <div className="w-full max-w-screen-sm px-4 py-4 bg-white shadow-lg">
          <div className="w-full flex flex-col space-y-2">
            <label htmlFor="email" className="text-secondary font-thin text-sm">
              Your Email :
            </label>
            <Controller
              control={control}
              name="email"
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
                    placeholder="Enter your email"
                    value={value}
                    onBlur={onBlur}
                    onChange={(e) => onChange(e.target.value)}
                    type="email"
                    className="w-full form-input text-sm text-secondary"
                  />
                  {errors && errors.email && errors.email.message ? (
                    <React.Fragment>
                      <span className="text-xs text-primary font-light">
                        {errors.email.message}
                      </span>
                    </React.Fragment>
                  ) : null}
                </React.Fragment>
              )}
            />
          </div>
          <div className="w-full flex flex-col space-y-2">
            <label htmlFor="email" className="text-secondary font-thin text-sm">
              Your Password :
            </label>
            <Controller
              control={control}
              name="password"
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
                    placeholder="Enter your password"
                    value={value}
                    onBlur={onBlur}
                    onChange={(e) => onChange(e.target.value)}
                    type="password"
                    className="w-full form-input text-sm text-secondary"
                  />
                  {errors && errors.password && errors.password.message ? (
                    <React.Fragment>
                      <span className="text-xs text-primary font-light">
                        {errors.password.message}
                      </span>
                    </React.Fragment>
                  ) : null}
                </React.Fragment>
              )}
            />
          </div>

          <div className="w-full my-5 flex flex-col space-y-2">
            <button className="form_btn">
              <span className="flex-grow text-sm uppercase font-bold">
                Signin
              </span>
              <AiOutlineArrowRight className="w-auto h-6" />
            </button>
          </div>
          {children}
        </div>
       
      </div>
    </React.Fragment>
  );
};
