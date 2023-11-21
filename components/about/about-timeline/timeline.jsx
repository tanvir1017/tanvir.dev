import { Mouse } from "lucide-react";
import TimeLineTextContent from "./time-line-text-content";
import TimeLineMap from "./timeline-map";

const TimeLine = () => {
  return (
    <div className="h-screen flex">
      <div className="m-auto">
        <div className="grid lg:grid-cols-5 sm:grid-cols-3 grid-cols-1 gap-2 items-center md:container">
          <div className="lg:col-span-2 sm:col-span-1 sm:block hidden relative">
            <TimeLineTextContent />
          </div>
          <div
            className="lg:col-span-3 sm:col-span-2 overflow-auto h-[37.5rem] relative"
            id="TIME-LINE-EXPLAIN-TREE"
          >
            <TimeLineMap />
            <div className="inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-white pt-32 pb-8 pointer-events-none dark:from-[#15192F] sticky">
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              >
                <Mouse className="mr-2 animate-bounce" />
                Scroll Down
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
