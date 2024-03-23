import BlogsSearch from "../blogsSearch/blogsSearch";

export default function BlogFilter({ allTagSet, titles }) {
  return (
    <div className="mb-20">
      <BlogsSearch titles={titles} />
      <div className="flex items-center space-x-3 justify-center flex-wrap">
        {[...allTagSet].map((tag, index) => {
          return (
            <button
              className="px-4 py-2 border-2 hover:-translate-y-2 duration-300 focus:scale-110 capitalize"
              key={index}
              style={{
                borderImage:
                  "linear-gradient(to bottom, #2AF598, rgba(0, 0, 0, 0)) 1 1 1 10%",
              }}
            >
              {tag}
            </button>
          );
        })}
      </div>
    </div>
  );
}
