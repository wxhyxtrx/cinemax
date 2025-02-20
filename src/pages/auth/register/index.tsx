import { InputGroup } from "@/components/molecules/inputgroup";
import { Button } from "@/components/ui/button";
import Text from "@/components/ui/text";
import { RegisterFormValues } from "@/types/typesAuth";
import { registerValidationSchema } from "@/types/validationsForm";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaAt, FaKey, FaUnlock, FaUser } from "react-icons/fa";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: yupResolver(registerValidationSchema),
  });

  const onSubmit = (data: RegisterFormValues) => {
    console.log("Register Data:", data);
    navigate({ to: "/SignIn" })
  };

  return (
    <div className="flex flex-col gap-5 justify-center items-center h-screen">
      <div className="my-16 px-5 w-full m-auto max-w-md">
        <div className="text-center my-10">
          <h3 className="text-2xl">{"Let’s get started"}</h3>
          <label>The latest movies and series are here</label>
        </div>
        <form className="my-5" onSubmit={handleSubmit(onSubmit)}>
          <InputGroup
            label="Username"
            prefix
            iconPrefix={<FaUser />}
            placeholder="johndoe"
            {...register("username")}
          />
          {errors.username && <p className="text-red-500 text-sm m-1.5">{errors.username.message}</p>}
          <br />

          <InputGroup
            label="Email"
            prefix
            iconPrefix={<FaAt />}
            placeholder="example@gmail.com"
            {...register("email")}
          />
          {errors.email && <p className="text-red-500 text-sm m-1.5">{errors.email.message}</p>}
          <br />

          <InputGroup
            type={showPassword ? "text" : "password"}
            prefix
            iconPrefix={<FaKey />}
            label="Password"
            subfix
            iconSubfix={
              showPassword ? (
                <FiEye onClick={() => setShowPassword((prev) => !prev)} />
              ) : (
                <FiEyeOff onClick={() => setShowPassword((prev) => !prev)} />
              )
            }
            placeholder="* * * * *"
            {...register("password")}
          />
          {errors.password && <p className="text-red-500 text-sm m-1.5">{errors.password.message}</p>}
          <br />

          <InputGroup
            type={showPasswordConfirm ? "text" : "password"}
            prefix
            iconPrefix={<FaUnlock />}
            label="Confirm Password"
            subfix
            iconSubfix={
              showPasswordConfirm ? (
                <FiEye onClick={() => setShowPasswordConfirm((prev) => !prev)} />
              ) : (
                <FiEyeOff onClick={() => setShowPasswordConfirm((prev) => !prev)} />
              )
            }
            placeholder="* * * * *"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm m-1.5">{errors.confirmPassword.message}</p>
          )}
          <br />

          <div className="text-base flex items-start gap-2 px-3 my-3 text-line-gray text-start">
            <input type="checkbox" className="w-6 h-6 m-1" />
            <label>
              I agree to the
              <span className="text-primary-purple-500"> Terms and Services</span> and
              <span className="text-primary-purple-500"> Privacy Policy</span>
            </label>
          </div>

          <Button className="w-full my-5" type="submit">
            Sign up
          </Button>
        </form>
        <div className="text-center text-sm mb-5">
          <Text>
            I have an account,{" "}
            <Link to={"/signin"} className="text-primary-purple-500">
              Sign in
            </Link>
          </Text>
        </div>
      </div>
    </div>
  );
};

export default Register;
