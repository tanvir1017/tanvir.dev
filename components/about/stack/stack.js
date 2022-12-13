import Image from "next/image";
import React from "react";

function Stack() {
  return (
    <>
      <div className="">
        <div className="grid place-items-center ">
          <h1 className="font-jostBold uppercase text-4xl md:text-5xl mt-[12rem]">
            Technological skill
          </h1>
          <p className="mt-5">
            <span className="text-yellow-300">That</span>{" "}
            <span className="font-caveatRegular">I love to work with</span>
          </p>
        </div>

        <div className="card_container">
          <div className="grid grid-cols-3 place-item-center gap-7">
            <div className=" bg-white/5 backdrop:filter-[10px]  rounded-3xl">
              <Image
                className="rounded-t-3xl"
                width={500}
                height={100}
                src="/stack/jsThumbnail.jpg"
                alt=""
              />
              <div className="py-5 px-4 space-y-4">
                <h4 className="font-jostMedium">Javascript</h4>
                <p className="text-sm">
                  JavaScript, often abbreviated as JS, is a programming language
                  that is one of the core technologies of the World Wide Web,
                  alongside HTML and CSS. As of 2022, 98% of websites use
                  JavaScript on the client side for webpage behavior, often
                  incorporating third-party libraries.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className=" bg-white/5 backdrop:filter-[10px] grid place-items-center h-[12rem] p-3 rounded-3xl ">
                <Image
                  width={250}
                  height={100}
                  src="/stack/react.png"
                  alt="react-logo"
                />
              </div>
              <div className=" bg-white/5 backdrop:filter-[10px] grid place-items-center h-[12rem] p-3 rounded-3xl ">
                <Image
                  width={250}
                  height={100}
                  src="/stack/next.png"
                  alt="react-logo"
                />
              </div>

              <div className=" bg-white/5 backdrop:filter-[10px] col-span-2 h-[10rem] w-full rounded-3xl flex p-2">
                <div className="space-y-3 pl-3">
                  <h4 className="mt-2">Mongodb</h4>
                  <p className="text-sm ">
                    MongoDB is a source-available cross-platform
                    document-oriented database program.
                  </p>
                </div>
                <Image
                  className="rounded-3xl"
                  src="/stack/mongdb.png"
                  height={100}
                  width={120}
                  alt="mongodb-logo"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className=" bg-white/5 backdrop:filter-[10px] col-span-2 h-[10rem] w-full rounded-3xl flex p-2">
                <div className="space-y-3 pl-3">
                  <h4 className="mt-2">Express.js</h4>
                  <p className="text-sm ">
                    It&apos;is a back end web application framework for building
                    RESTful APIs with Node.js.
                  </p>
                </div>
                <Image
                  className="rounded-3xl"
                  src="/stack/expressjs.jpg"
                  height={100}
                  width={120}
                  alt="mongodb-logo"
                />
              </div>
              <div className=" bg-white/5 backdrop:filter-[10px] grid place-items-center h-[12rem] p-3 rounded-3xl ">
                <Image
                  width={250}
                  height={100}
                  src="/stack/tailwind.png"
                  alt="react-logo"
                />
              </div>
              <div className=" bg-white/5 backdrop:filter-[10px] grid place-items-center h-[12rem] p-3 rounded-3xl ">
                <Image
                  width={250}
                  height={100}
                  src="/stack/mui.png"
                  alt="react-logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Stack;
