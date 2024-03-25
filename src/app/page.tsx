import ContactMe from "@/components/home/contact-me/contact";
import HomePageBlogSection from "@/layouts/HomePageLayout/Blog/blog";
import HomePageProjectsSections from "@/layouts/HomePageLayout/Projects/projects";
import Header from "@/layouts/HomePageLayout/Header/header";
import { getAllPostsMeta, getAllProjectsMeta } from "@/lib/utils/mdx/mdxUtils";
import { BlogContentProps, ProjectContentTypes } from "@/ts/type";
import { HeroScrollDemo } from "@/layouts/HomePageLayout/Scroll/hero";
import { BackgroundBeamsDemo } from "@/layouts/HomePageLayout/ContactWithMe/contact-beams";
import { DotBackgroundDemo } from "@/layouts/HomePageLayout/DotBackground";

export default async function Home() {
  const blogs = (await getAllPostsMeta()) as BlogContentProps[];
  const projects = (await getAllProjectsMeta()) as ProjectContentTypes[];

  return (
    <main>
      <DotBackgroundDemo />
      <Header />
      <HeroScrollDemo />
      <HomePageProjectsSections projects={projects} />
      <HomePageBlogSection blogs={blogs} />
      <ContactMe />
      <BackgroundBeamsDemo />
    </main>
  );
}
