import fs from "fs";
import path from "path";

// Blogs mdx functionality
export const blogsPath = path.join(process.cwd(), "pages", "mdx");
export const blogsFileNames = fs
  .readdirSync(blogsPath)
  .filter((fileName) => /\.mdx?$/.test(fileName));

// Project mdx functionality
export const projectShowCasePath = path.join(
  process.cwd(),
  "pages",
  "projects"
);
export const projectsFileNames = fs
  .readdirSync(projectShowCasePath)
  .filter((fileName) => /\.mdx?$/.test(fileName));
