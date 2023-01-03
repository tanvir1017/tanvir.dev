import Style from "@/styles/Home.module.css";
import { Input, PasswordInput } from "components/shared/auth/Input";
import SunRise from "components/shared/auth/sunRise";
import Link from "next/link";
import { useState } from "react";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logInfo, setLogInfo] = useState(7);
  const saveLogInfo = () => {
    if (logInfo === 7) {
      setLogInfo(30);
    } else {
      setLogInfo(7);
    }
  };
  const handleOnLoad = (e) => {
    e.preventDefault();
    console.log(email, password);
  };
  return (
    <div className="font-jostRegular">
      <div className="lg:max-w-6xl max-w-7xl grid lg:large_container m_container lg:m-auto ">
        <div className="flex lg:flex-row flex-col-reverse justify-between items-center">
          <div>
            <div className="my-5 mt-12 space-y-2">
              <h1 className="md:text-5xl text-4xl font-jostBold">
                Welcome back! <span className="mx-[8px]"></span>
                <span className="text-black">.</span>
              </h1>
              <p className="font-jostRegular">
                Please enter your details for <strong>Sign-in</strong>{" "}
              </p>
            </div>

            <form onSubmit={handleOnLoad}>
              <Input
                handleValue={(e) => setEmail(e.target.value)}
                label="Email"
                placeholder="you@gmail.com"
                hFor="email"
                required={true}
                type="text"
              />
              <PasswordInput
                handleValue={(e) => setPassword(e.target.value)}
                hFor="password"
                label="Password"
                placeholder="Password"
              />

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
                Sign in
              </button>
            </form>
            <div className="mt-3 text-center">
              <small>
                Don&#39;t have any account?{" "}
                <Link className="decoration-1 underline" href="/signup">
                  Sign-up
                </Link>{" "}
              </small>
            </div>
          </div>
          <SunRise />
        </div>
      </div>
    </div>
  );
}

export default Signin;
