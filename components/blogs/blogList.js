import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";

export default function BlogList({ blogs }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {blogs.map((blog) => (
        <Link key={blog.slug} href={`/blog/${blog.slug}`}>
          <div className="border-2 p-5">
            <Image
              className="m-auto"
              src={blog.frontmatter.bannerUrl}
              alt={blog.frontmatter.title}
              width={500}
              height={100}
            />
            <div>
              <span> {format(new Date(blog.frontmatter.date), "PPP")} </span>
              <h2>{blog.frontmatter.title}</h2>

              <p>{blog.frontmatter.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
