import Image from "next/legacy/image";
import Link from "next/link";
import BlurImageWithBlurHash from "utils/blur-able-image/blur-hash";
import { formatShortDate } from "utils/timeFormatter/timeFormatter";
export default function BlogsCard({ blog }) {
  const { title, publishedAt, bannerUrl, blurHash } = blog.frontmatter;

  return (
    <Link key={blog?.slug} href={`/blog/${blog?.slug}`}>
      <div className="dark:border-gray-700 border-slate-200 border-[1px] border-t-0  h-[27rem] overflow-hidden shadow-md">
        <div className="relative h-[17.5rem] w-[32.6875rem] ">
          <BlurImageWithBlurHash
            className="absolute"
            layout="fill"
            objectFit="cover"
            src={bannerUrl}
            alt={title}
            placeholder="blur"
            blurDataURL={blurHash}
          />
        </div>
        <div className="px-4 py-3">
          <div className="flex items-center mt-2">
            <div className="rounded-full bg-gradient-to-tl  from-[#08AEEA] to-[#2AF598] shadow-lg p-[3px] ring-[5px] ring-slate-200/80 dark:ring-gray-600/25">
              <div className="h-[2rem] w-[2rem] relative rounded-full overflow-clip">
                <Image
                  className="absolute"
                  layout="fill"
                  src="/author.webp"
                  priority
                  alt={title}
                />
              </div>
            </div>
            <div className="ml-4">
              <h6 className="text-base">Tanvir Hossain</h6>
              <p className="text-xs">{formatShortDate(publishedAt)}</p>
            </div>
          </div>
          <h4 className="text-xl font-firaSansRegular mt-4">{title}</h4>
        </div>
      </div>
    </Link>
  );
}
