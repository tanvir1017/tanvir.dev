import Image from "next/legacy/image";
import { FaMapLocationDot } from "react-icons/fa6";
const TimeLineMap = () => {
  return (
    <div className="md:p-10 px-9 py-2">
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        <li className="mb-12 ms-12">
          <span className="absolute flex items-center justify-center w-12 h-12 rounded-full -start-6 ring-8 dark:ring-[#08aeea35] ring-[#2af59a25] bg-gradient-to-tl to-[#08AEEA] from-[#2AF598]">
            <svg
              className="w-6 h-6 text-white  lucide lucide-graduation-cap"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
          </span>
          <div>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Completed Diploma In CSE
              <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">
                Recently
              </span>
            </h3>
            <time className="block mb-2 text-sm font-normal leading-normal text-gray-400 dark:text-gray-500">
              From July 1, 2019 - Present
            </time>
            <p className="mb-4 md:text-base text-xs font-normal text-gray-500 dark:text-gray-400 md:leading-normal leading-5">
              I successfully graduated with a diploma in Computer Science
              Engineering from Dhaka Polytechnic Institute, the premier
              educational establishment in Bangladesh. This prestigious
              institute has equipped me with extensive knowledge and hands-on
              skills in the field of computer science, enabling me to thrive in
              this dynamic industry.
            </p>
          </div>
        </li>{" "}
        <li className="mb-12 ms-12">
          <span className="absolute flex items-center justify-center w-12 h-12 rounded-full -start-6 ring-8 dark:ring-[#08aeea35] ring-[#2af59a25] bg-gradient-to-tl to-[#08AEEA] from-[#2AF598]">
            <FaMapLocationDot className="text-white w-5 h-5" />
          </span>
          <div>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Moved To Dhaka
            </h3>
            <time className="block mb-2 text-sm font-normal leading-normal text-gray-400 dark:text-gray-500">
              June 2, 2019
            </time>
            <p className="mb-4 md:text-base text-xs font-normal text-gray-500 dark:text-gray-400 md:leading-normal leading-5">
              In May 2019, I began my engineering journey in Dhaka, a pivotal
              move that marked the start of my academic pursuit in this vibrant
              city.
            </p>
          </div>
        </li>{" "}
        <li className="mb-12 ms-12">
          <span className="absolute flex items-center justify-center w-12 h-12 rounded-full -start-6 ring-8 dark:ring-[#08aeea35] ring-[#2af59a25] bg-gradient-to-tl to-[#08AEEA] from-[#2AF598]">
            <svg
              className="w-6 h-6 text-white lucide lucide-graduation-cap"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
          </span>
          <div>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Passed Secondary School Certificate
            </h3>
            <time className="block mb-2 text-sm font-normal leading-normal text-gray-400 dark:text-gray-500">
              May 6, 2019
            </time>
            <p className="mb-4 md:text-base text-xs font-normal text-gray-500 dark:text-gray-400 md:leading-normal leading-5">
              Complete Secondary School Certificate in 2019.
            </p>
          </div>
        </li>{" "}
        <li className="mb-12 ms-12">
          <span className="overflow-hidden absolute flex items-center justify-center w-12 h-12 rounded-full -start-6 ring-8 dark:ring-[#08aeea35] ring-[#2af59a25] bg-gradient-to-tl to-[#08AEEA] from-[#2AF598 z-10">
            <Image
              src="/author/birth.jpg"
              alt="Me at the age of 1 or 0.5 year"
              layout="fill"
            />
          </span>
          <div>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Appear In Earth
            </h3>
            <time className="block mb-2 text-sm font-normal leading-normal text-gray-400 dark:text-gray-500">
              May 2, 2003
            </time>
          </div>
        </li>{" "}
      </ol>
    </div>
  );
};

export default TimeLineMap;
