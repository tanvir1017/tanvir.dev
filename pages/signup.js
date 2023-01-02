import Style from "@/styles/Home.module.css";
import Link from "next/link";
import { useState } from "react";
import { BiHide } from "react-icons/bi";
import { FiEye } from "react-icons/fi";

function Signup() {
  const [passType, setPassType] = useState("password");
  const [logInfo, setLogInfo] = useState(7);
  const passTypeHandle = () => {
    if (passType === "password") {
      setPassType("text");
    } else {
      setPassType("password");
    }
  };
  const saveLogInfo = () => {
    if (logInfo === 7) {
      setLogInfo(30);
    } else {
      setLogInfo(7);
    }
  };
  const handleOnLoad = (e) => {
    e.preventDefault();
  };
  return (
    <div className="font-jostRegular">
      <div className="lg:max-w-6xl max-w-7xl grid lg:large_container m_container lg:m-auto ">
        <div className="flex lg:flex-row flex-col-reverse justify-between items-center ">
          <div>
            <div className="my-5 mt-12 space-y-2">
              <h1 className="md:text-5xl text-4xl font-jostBold">
                Register yourself <span className="mx-[5.5px]"></span>
              </h1>
              <p className="font-jostRegular">
                Please enter your details to <strong>Sign-up</strong>{" "}
              </p>
            </div>

            <form onSubmit={handleOnLoad}>
              <div className="my-5 space-y-1">
                <label
                  htmlFor="email"
                  className="my-2 after:content-['*'] after:ml-0.5 after:text-red-500"
                >
                  Profile picture
                </label>
                <input
                  required
                  type="text"
                  className="text-white block w-full py-3 px-2 rounded-lg  border-[#121212] border-2 focus:border-[#ff008c] focus:outline-none bg-white/5"
                  placeholder="Mohammad"
                />
              </div>
              <div className="my-5 space-y-1">
                <label
                  htmlFor="email"
                  className="my-2 after:content-['*'] after:ml-0.5 after:text-red-500"
                >
                  First Name
                </label>
                <input
                  required
                  type="text"
                  className="text-white block w-full py-3 px-2 rounded-lg  border-[#121212] border-2 focus:border-[#ff008c] focus:outline-none bg-white/5"
                  placeholder="Mohammad"
                />
              </div>
              <div className="my-5 space-y-1">
                <label
                  htmlFor="email"
                  className="my-2 after:content-['*'] after:ml-0.5 after:text-red-500"
                >
                  Last Name
                </label>
                <input
                  required
                  type="text"
                  className="text-white block w-full py-3 px-2 rounded-lg  border-[#121212] border-2 focus:border-[#ff008c] focus:outline-none bg-white/5"
                  placeholder="Hossain"
                />
              </div>
              <div className="my-5 space-y-1">
                <label
                  htmlFor="email"
                  className="my-2 after:content-['*'] after:ml-0.5 after:text-red-500"
                >
                  Email
                </label>
                <input
                  required
                  type="text"
                  className="text-white block w-full py-3 px-2 rounded-lg  border-[#121212] border-2 focus:border-[#ff008c] focus:outline-none bg-white/5"
                  placeholder="you@example.com"
                />
              </div>
              <div className="my-5 space-y-1">
                <label
                  htmlFor="email"
                  className="my-2 after:content-['*'] after:ml-0.5 after:text-red-500"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type={passType}
                    className="text-white block w-full py-3 px-2 rounded-lg  border-[#121212] border-2 focus:border-[#ff008c] focus:outline-none bg-white/5"
                    placeholder="password"
                  />
                  <div
                    className="absolute -translate-x-[50%] -translate-y-[50%] left-[92%] top-[50%] 
                  bg-[#39393952] p-2 rounded-full hover:bg-[#393939b4] cursor-pointer focus:bg-[#393939b4]"
                  >
                    {passType === "password" ? (
                      <span onClick={passTypeHandle}>
                        <FiEye />
                      </span>
                    ) : (
                      <span onClick={passTypeHandle}>
                        <BiHide />
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex justify-between md:flex-row flex-col items-start space-y-3 md:space-y-0">
                <div className="flex items-center">
                  <input
                    onClick={saveLogInfo}
                    type="checkbox"
                    name="rememberMeFor30Days"
                    id="rememberMeFor30Days"
                    className={`${Style.checkBOX}`}
                  />
                  <label htmlFor="cache" className="ml-3 mt-1">
                    Remember me
                  </label>
                </div>
                <p className="cursor-not-allowed ">Forgot password</p>
              </div>
              <button
                type="submit"
                className="bg-[#ff008c] block w-full mt-8 p-2 rounded-lg"
              >
                Sign up
              </button>
            </form>
            <div className="mt-3 text-center">
              <small>
                Have an account?{" "}
                <Link className="decoration-1 underline" href="/signin">
                  Sign-in
                </Link>{" "}
              </small>
            </div>
          </div>
          <div className={`${Style.boxWrapper} p-5`}>
            <div className={`${Style.box}`}></div>
            <div className={`${Style.boxOverly}`}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
