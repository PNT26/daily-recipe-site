import { Link } from "react-router-dom";
import { StyledSignIn } from "./sign-in.style";
import { auth } from "../../../firebase";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Input from "../../input/input";
import { Form, Field } from "react-final-form";
import { Validators } from "../../../utils/form-validators";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const signInUser = async (values: any) => {
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((response) => {
        alert("You have logged in successfully");
        navigate("/");
      })
      .catch((e) => {
        console.log("ERROR", e);
      });
  };
  return (
    <StyledSignIn>
      <div className="w-full md:w-[500px] flex flex-col gap-[16px] justify-center lg:justify-start px-[20px] py-[40px] bg-white rounded-[10px]">
        <h3>Login</h3>
        <div className="flex items-center">
          <p className="mr-[4px]">You don't have an account yet?</p>
          <Link to={"/sign-up"} className="text-secondary-500">
            Register
          </Link>
        </div>
        <Form
          onSubmit={signInUser}
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
                Login
              </button>
            </div>
          )}
        />
      </div>
    </StyledSignIn>
  );
}
