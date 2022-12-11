/* eslint-disable @next/next/no-img-element */
import { blogLocData } from "../components/localData/localData";

function Blog() {
  return (
    <>
      <div className={` headingSection`}>
        <div className="grid place-items-center">
          {/* <h1 className="font-[600] uppercase text-4xl">&#x3E;_ Latest blog</h1> */}
          <h1 className="font-[600] uppercase text-4xl">Latest blog</h1>
          <p className="">
            <span className={` text-green-700 font-semibold`}>MY</span>{" "}
            <span className={``}>Articles & Advices</span>{" "}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-5 my-14 lg:mx-[135px] ">
          {blogLocData.map((blogs, index) => {
            return (
              <div
                key={index}
                className={`rounded-2xl p-5 space-y-5 bg-white/5 backdrop:filter(16px)`}
              >
                <h6 className="uppercase font-medium">{blogs.time}</h6>
                <h4 className="text-2xl font-semibold">{blogs.title}</h4>
                <p>{blogs.desc}</p>
                <span className="font-semibold block">Reade more...</span>

                <div>
                  <img
                    className="m-auto transition duration-500 rounded-3xl w-[100%] h-[180px] object-cover"
                    src={blogs.thumb}
                    alt={blogs.title}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid place-items-center">
          <button className="hover:bg-white/5 hover:backdrop-blur-lg border px-12 py-3 rounded-3xl">
            View more...
          </button>
        </div>
      </div>
    </>
  );
}

export default Blog;
