import Logo from "/assets/image/logo.png";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebookF } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "@tanstack/react-router";
const Authentication = () => {
  const route = useNavigate()
  return (
    <div>
      <div className=" w-full flex flex-wrap justify-center mt-20 mb-10 ">
        <div className=" relative flex justify-center">
          <div
            id="shape"
            className="w-40 h-40 bg-indigo-900/60 blur-xl rounded-full"
          ></div>
          <img src={Logo} className=" absolute bottom-5 top-5 w-32" />
        </div>
        <h3 className=" w-full text-center text-3xl text-primary-purple-500 font-bold">
          CINEMAX
        </h3>
        <label className=" w-4/6 text-center text-line-dark leading-tight my-2">
          Reserve Your Seat, Experience the Magic. Anytime, Anywhere!
        </label>
      </div>
      <div className=" w-full flex flex-wrap justify-center">
        <Button className="w-9/12 mb-7" onClick={() => route({ to: "/signup" })}>
          <span>Sign up</span>
        </Button>
        <label className=" text-line-dark ">
          I already have an account?{" "}
          <Link to="/signin" className="text-primary-purple-500">
            Sign in
          </Link>
        </label>
      </div>
      <div>
        <div className=" w-2/3 text-center m-auto py-4 my-6">
          <label className="left-0 right-0 w-fit m-auto px-2 py-1 bg-primary-dark rounded-full absolute text-line-gray text-sm">
            Or Sign up with
          </label>
          <hr className=" my-3 border-primary-purple" />
        </div>
        <div className=" flex w-fit m-auto gap-6">
          <div className="flex justify-center h-fit">
            <a href="#" className=" p-2.5 rounded-full bg-white">
              <FcGoogle size={20} />
            </a>
          </div>
          <div className="flex justify-center h-fit">
            <a href="#" className=" p-2.5 rounded-full bg-gray-700">
              <FaApple size={20} color="#ffff" />
            </a>
          </div>
          <div className="flex justify-center h-fit">
            <a href="#" className=" p-2.5 rounded-full bg-blue-800">
              <FaFacebookF size={20} color="#ffff" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
