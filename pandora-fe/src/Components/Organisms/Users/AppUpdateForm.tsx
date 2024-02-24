import React from "react";
import { Control, Controller, UseFormWatch } from "react-hook-form";
import { userProdileUpdateFormProps } from "../../../Interfaces";
import { AiOutlineArrowRight } from "react-icons/ai";
interface props {
  control: Control<userProdileUpdateFormProps, any>;
  watch: UseFormWatch<userProdileUpdateFormProps>;
  children:React.ReactNode;
}
export const AppUserUpdateForm: React.FC<props> = ({ control, watch,children }) => {
  return (
    <React.Fragment>
      <div className="w-full flex flex-col justify-center items-center content-center h-screen">
        <div className="w-full max-w-screen-sm px-4 py-4 bg-white shadow-lg">
          <div className="w-full flex flex-col space-y-2">
            <label
              htmlFor="username"
              className="text-secondary font-thin text-sm"
            >
              Your Name :
            </label>
            <Controller
              control={control}
              name="username"
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
                    placeholder="Enter your name"
                    value={value}
                    onBlur={onBlur}
                    onChange={(e) => onChange(e.target.value)}
                    type="text"
                    className="w-full form-input text-sm text-secondary"
                  />
                  {errors && errors.username && errors.username.message ? (
                    <React.Fragment>
                      <span className="text-xs text-primary font-light">
                        {errors.username.message}
                      </span>
                    </React.Fragment>
                  ) : null}
                </React.Fragment>
              )}
            />
          </div>
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
          <div className="w-full flex flex-col space-y-2">
            <label htmlFor="email" className="text-secondary font-thin text-sm">
              Confirm Password :
            </label>
            <Controller
              control={control}
              name="confirm_password"
              rules={{
                required: "Don't leave it blank.",
                validate: (value) =>
                  value === watch("password") || "Passwords do not match.",
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
                  {errors &&
                  errors.confirm_password &&
                  errors.confirm_password.message ? (
                    <React.Fragment>
                      <span className="text-xs text-primary font-light">
                        {errors.confirm_password.message}
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
                Signup
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
