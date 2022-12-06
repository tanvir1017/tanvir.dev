import Image from "next/image";
import React from "react";
import homeStyle from "../../styles/Home.module.css";
import style from "./heading.module.css";

function HeaderSection() {
  return (
    <>
      {/* <div className={`mt-7 rounded-t-lg ${style.headingSection}`}> */}
      <div className={`${style.headingSection} ${homeStyle.container}`}>
        <div className="flex justify-between items-center">
          <div className="space-y-2 ">
            <p>Hi there beautiful people on the internet</p>
            <h4 className="font-semibold text-2xl">Tanvir here</h4>
            <h1 className="text-6xl  font-bold">
              {" "}
              <span className={`${style.animatedText} font-black`}>
                Frontend
              </span>
              Developer
            </h1>
            <p className="pt-5">
              Mainly i am play with javascript and explore with this language
              some
              <br />
              frontend framework as like as React
            </p>
            <div className="space-x-2 pt-12">
              <button className="p-3 rounded-lg backdrop-blur-0 bg-white/5 border-t-purple-500 border border-b-white/5 border-r-purple-500 border-l-white/5 active:-translate-y-2 transition duration-150">
                Get my resume
              </button>
              <button className="p-3 rounded-lg backdrop-blur-0 bg-white/5 border-b-purple-500 border border-t-white/5 border-l-purple-500 border-r-white/5 active:-translate-y-2 transition duration-150">
                Read blogs
              </button>
            </div>
          </div>
          <div className="profile-image">
            <Image
              src="/avatar.png"
              width={350}
              height={350}
              alt="avatar"
            ></Image>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderSection;
