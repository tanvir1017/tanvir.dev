import fs from "fs";
import path from "path";

export const blogsPath = path.join(process.cwd(), "pages", "mdx");
export const blogsFileNames = fs
  .readdirSync(blogsPath)
  .filter((fileName) => /\.mdx?$/.test(fileName));
