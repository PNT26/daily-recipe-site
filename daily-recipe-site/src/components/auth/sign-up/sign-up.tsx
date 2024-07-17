import { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Field } from "react-final-form";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/outline";
import { StyledSignUp } from "./sign-up.style";
import Input from "../../input/input";
import { auth } from "../../../firebase";
import { Validators } from "../../../utils/form-validators";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const registerUser = async (values: any) => {
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((response) => {
        console.log("This user has registered", response);
      })
      .catch((e) => {
        console.log("This user has already registered", e);
      });
  };
  return (
    <StyledSignUp>
      <div className="w-full md:w-[500px] flex flex-col gap-[16px] justify-center lg:justify-start px-[20px] py-[40px] bg-white rounded-[10px]">
        <h3>Create Your Account</h3>
        <div className="flex items-center">
          <p className="mr-[4px]">You already have an account?</p>
          <Link to={"/sign-in"} className="text-secondary-500">
            Log in
          </Link>
        </div>
        <Form
          onSubmit={registerUser}
          render={({ handleSubmit }) => (
            <div className="flex flex-col justify-start gap-[16px]">
              <Field
                name="email"
                validate={(val: string) => {
                  return Validators.email(val);
                }}
                render={({ input, meta }) => (
                  <Input
                    {...input}
                    id="email"
                    type="email"
                    placeholder="Email"
                    errorMsg={meta.touched && meta.error && meta.error}
                  />
                )}
              />
              <div className="relative w-full">
                <Field
                  name="password"
                  validate={(val: string) => {
                    return Validators.required(val);
                  }}
                  render={({ input, meta }) => (
                    <Input
                      {...input}
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      errorMsg={meta.touched && meta.error && meta.error}
                    />
                  )}
                />
                {showPassword ? (
                  <EyeSlashIcon
                    className="absolute right-[16px] top-[16px] w-[18px] text-black/[0.6] cursor-pointer hover:scale-[1.2]"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                ) : (
                  <EyeIcon
                    className="absolute right-[16px] top-[16px] w-[18px] text-black/[0.6] cursor-pointer hover:scale-[1.2]"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                )}
              </div>
              <button
                type="submit"
                className="btn btn--primary mt-[20px]"
                onClick={handleSubmit}
              >
                Create Account
              </button>
            </div>
          )}
        />
      </div>
    </StyledSignUp>
  );
}
