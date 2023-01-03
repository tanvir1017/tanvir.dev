import Style from "@/styles/Home.module.css";
import { Input, PasswordInput } from "components/shared/auth/Input";
import SunRise from "components/shared/auth/sunRise";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Signup() {
  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [picture, setPicture] = useState("");
  const [pictureURL, setPictureURL] = useState("");
  const [logInfo, setLogInfo] = useState(7);
  const saveLogInfo = () => {
    if (logInfo === 7) {
      setLogInfo(30);
    } else {
      setLogInfo(7);
    }
  };

  const handleOnLoad = async (e) => {
    e.preventDefault();

    // todo : upload picture to hosted server
    const formData = new FormData();
    formData.append("file", picture[0]);
    formData.append("upload_preset", "bkmmbkko");
    formData.append("cloud_name", "djbcnjkin");

    setLoading(true);
    const imgUploaded = await fetch(
      `https://api.cloudinary.com/v1_1/djbcnjkin/image/upload`,
      {
        method: "post",
        body: formData,
      }
    )
      .then((resp) => resp.json())
      .then((data) => {
        setPictureURL(data.url);
        setLoading(false);
      })
      .catch((err) => console.log(err));

    const data = {
      firstName,
      lastName,
      email,
      confirmPassword,
      password,
      pictureURL,
      picture,
    };
    console.log(data);
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

            <div className="w-[150px] h-[144px] border-2 rounded-full relative overflow-hidden">
              <Image
                className="absolute"
                src="/userDemo.webp"
                alt="user-avatar"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <form onSubmit={handleOnLoad}>
              <Input
                label="Choose profile photo"
                placeholder="picture"
                required={true}
                type="file"
                handleValue={(e) => setPicture(e.target.files)}
              />
              <Input
                label="First Name"
                placeholder="Mohammad"
                hFor="first name"
                required={true}
                type="text"
                handleValue={(e) => setFirstName(e.target.value)}
              />
              <Input
                label="Last Name"
                placeholder="Hossain"
                hFor="last name"
                required={true}
                type="text"
                handleValue={(e) => setLastName(e.target.value)}
              />
              <Input
                label="Email"
                placeholder="you@gmail.com"
                hFor="email"
                required={true}
                type="text"
                handleValue={(e) => setEmail(e.target.value)}
              />

              <PasswordInput
                hFor="password"
                label="Password"
                placeholder="Password"
                handleValue={(e) => setPassword(e.target.value)}
              />
              <PasswordInput
                hFor="confirm password"
                label="Confirm Password"
                placeholder="Confirm Password"
                handleValue={(e) => setConfirmPassword(e.target.value)}
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
                {loading ? "loading..." : "Sign up"}
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
          <SunRise />
        </div>
      </div>
    </div>
  );
}

export default Signup;
