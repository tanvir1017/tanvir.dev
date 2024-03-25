import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";

const rootDirectory = path.join(
  process.cwd(),
  "src/app",
  "MDX-CONTENT/BlogPost"
);

export const getPostBySlug = async (slug: string) => {
  const realSlug = slug.replace(/\.mdx$/, "");
  const filePath = path.join(rootDirectory, `${realSlug}.mdx`);

  const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });

  const { frontmatter, content } = await compileMDX({
    source: fileContent,
    options: { parseFrontmatter: true },
  });

  return { meta: { ...frontmatter, slug: realSlug }, content };
};

export const getAllPostsMeta = async () => {
  const files = fs.readdirSync(rootDirectory);

  let posts = [];

  for (const file of files) {
    const { meta } = await getPostBySlug(file);
    posts.push(meta);
  }

  return posts;
};

/** PROJECT README.MD */

const pRootDirectory = path.join(
  process.cwd(),
  "src/app",
  "MDX-CONTENT/ProjectShowCase"
);

export const getProjectsBySlug = async (slug: string) => {
  const realSlug = slug.replace(/\.mdx$/, "");
  const filePath = path.join(pRootDirectory, `${realSlug}.mdx`);

  const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });

  const { frontmatter, content } = await compileMDX({
    source: fileContent,
    options: { parseFrontmatter: true },
  });

  return { meta: { ...frontmatter, slug: realSlug }, content };
};

export const getAllProjectsMeta = async () => {
  const files = fs.readdirSync(pRootDirectory);

  let projects = [];

  for (const file of files) {
    const { meta } = await getProjectsBySlug(file);
    projects.push(meta);
  }

  return projects;
};
