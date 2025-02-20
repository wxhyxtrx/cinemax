import Text from "@/components/ui/text";
import { Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { FaFacebook, FaKey, FaUser, FaWhatsapp } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { InputGroup } from "@/components/molecules/inputgroup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginFormValues } from "@/types/typesAuth";
import { loginValidationSchema } from "@/types/validationsForm";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: yupResolver(loginValidationSchema),
  });

  const onSubmit = (data: LoginFormValues) => {
    console.log("Form Data:", data);
    localStorage.setItem('key', JSON.stringify(data))
    router({ to: "/home" })
  };

  return (
    <div className="flex flex-col gap-5 justify-center items-center h-screen">
      <div className="px-5 flex flex-col gap-5 w-full max-w-md">
        <div className="text-center my-0">
          <Text variant="h3">Hello Everyone!</Text>
          <Text>Welcome back! Please enter your details</Text>
        </div>

        <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
          {/* Username Input */}
          <InputGroup
            label="Username"
            prefix
            iconPrefix={<FaUser />}
            placeholder="Mr. Downy"
            {...register("username")}
          />
          {errors.username && <p className="text-red-500 text-sm m-1.5">{errors.username.message}</p>}
          <br />

          {/* Password Input */}
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

          <div className="text-sm px-3 my-2 text-primary-purple-500 text-end">
            Forgot Password?
          </div>

          <Button className="w-full my-5" type="submit">
            Sign in
          </Button>
        </form>

        <div className="text-center text-sm mb-5">
          <Text>
            I don't have an account,{" "}
            <Link to="/signup" className="text-primary-purple-500">
              Sign up
            </Link>
          </Text>
        </div>

        <div className="flex items-center gap-6 m-auto w-fit">
          <div className="rounded-full bg-white p-2.5">
            <FcGoogle size={25} />
          </div>
          <div className="rounded-full bg-blue-900 p-2.5">
            <FaFacebook size={25} />
          </div>
          <div className="rounded-full bg-green-600 p-2.5">
            <FaWhatsapp size={25} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
