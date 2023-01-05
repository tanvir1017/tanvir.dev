import Style from "@/styles/Home.module.css";
import { Input, PasswordInput } from "components/shared/auth/Input";
import SunRise from "components/shared/auth/sunRise";
import Image from "next/legacy/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { toast, ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [pictureURL, setPictureURL] = useState("/userDemo.webp");
  const [rememberMeFor, setRememberMeFor] = useState(7);

  // todo : set the user login limit by swiping the remember me button
  const saveLogInfo = () => {
    if (rememberMeFor === 7) {
      setRememberMeFor(30);
    } else {
      setRememberMeFor(7);
    }
  };

  // todo : img upload to cloudinary
  const uploadImage = async (e) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    formData.append("upload_preset", "bkmmbkko");
    formData.append("cloud_name", "djbcnjkin");

    try {
      const res = await window.fetch(
        `https://api.cloudinary.com/v1_1/djbcnjkin/image/upload`,
        {
          method: "post",
          body: formData,
        }
      );
      const result = await res.json();

      if (result.url) {
        setPictureURL(result.url);
        setLoading(false);
        (async () => {
          toast.success("Picture upload successful ⚒", {
            theme: "colored",
          });
        })();
      } else {
        setLoading(false);
        (async () => {
          toast.error("Something went wrong", {
            theme: "colored",
            icon: "👎",
          });
        })();
      }
    } catch (error) {
      console.log(error);
      if (error) {
        (async () => {
          toast.error("Internal server error while uploading picture", {
            theme: "colored",
            icon: "⭕",
          });
        })();
      }
    }
  };

  // todo : send data to the database
  const handleOnLoad = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return toast.error("Password didn't matched", {
        theme: "colored",
      });
    } else {
      try {
        const res = await fetch(`/api/auth`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            email,
            pictureURL,
            password,
            rememberMeFor,
          }),
        });
        const result = await res.json();
        // todo : have to dow a lot of modal show case with this result variable
        if (result.success) {
          (async () => {
            toast.success(result.message, {
              theme: "light",
              icon: "✔",
            });
          })();
        }
      } catch (error) {
        if (error) {
          (async () => {
            toast.error("internal server error", {
              theme: "colored",
              icon: "⭕",
            });
          })();
        }
      }
    }
  };

  // todo : check react-toastify notification toast
  return (
    <div className="font-jostRegular">
      <ToastContainer transition={Zoom} />
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

            <div className="w-[145px] h-[144px] border-2 rounded-full m-auto relative overflow-hidden">
              {loading ? (
                <Image
                  className="absolute"
                  src="/loading.svg"
                  alt="user-avatar"
                  layout="fill"
                  objectFit="contain"
                  priority
                />
              ) : (
                <Image
                  className="absolute"
                  src={pictureURL}
                  alt="user-avatar"
                  layout="fill"
                  objectFit="cover"
                  priority
                />
              )}
              <div
                className="rounded-full absolute top-[100%] hover:top-[50%] transition-all
              duration-300 opacity-0 hover:opacity-100  left-[50%] -translate-x-[50%] -translate-y-[50%]"
              >
                <label className="absolute transition duration-200 p-4 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] rounded-full backdrop-blur-sm bg-white/5 border-2 border-white/30">
                  <AiOutlineCloudUpload />{" "}
                </label>
                <input
                  className="scale-150 p-8 opacity-0 cursor-pointer top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] absolute"
                  required={true}
                  type="file"
                  onChange={uploadImage}
                />
              </div>
            </div>
            <form onSubmit={handleOnLoad}>
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
