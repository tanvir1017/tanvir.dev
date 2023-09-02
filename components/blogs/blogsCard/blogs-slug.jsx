import { CalendarRange, Clock } from "lucide-react";
import Image from "next/legacy/image";
import Link from "next/link";
import { formatShortDate } from "utils/timeFormatter/timeFormatter";
export default function BlogsCard({ blog }) {
  const { title, publishedAt, bannerUrl } = blog.frontmatter;

  return (
    <Link key={blog?.slug} href={`/blog/${blog?.slug}`}>
      <div className="dark:border-gray-700 border-slate-200 border-[1px] border-t-0  h-[30rem] overflow-hidden">
        <div className="relative h-[17.5rem] w-[32.6875rem]">
          {/* Picture size should be  h-[1.09375px] w-[523px]*/}
          <Image
            className="absolute"
            layout="fill"
            objectFit="cover"
            src={bannerUrl}
            alt={title}
          />
        </div>
        <div className="px-4 py-3 ">
          <span className="flex items-center justify-between mb-6">
            <h6 className=" font-firaSansItalic flex items-center">
              <CalendarRange className="w-4 h-4 text-[#08AEEA] mr-2" />{" "}
              {formatShortDate(publishedAt)}
            </h6>
            <h6 className=" font-firaSansLight flex items-center">
              <Clock className="w-4 h-4 text-[#2AF598] mr-2" /> -- min read
            </h6>
          </span>
          <h4 className="text-2xl font-firaSansRegular ">{title}</h4>
        </div>
      </div>
    </Link>
  );
}
