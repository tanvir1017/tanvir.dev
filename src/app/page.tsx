import ContactMe from "@/components/home/contact-me/contact";
import HomePageBlogSection from "@/layouts/HomePageLayout/Blog/blog";
import HomePageProjectsSections from "@/layouts/HomePageLayout/Projects/projects";
// import Header from "@/layouts/HomePageLayout/Header/header";
import { getAllPostsMeta, getAllProjectsMeta } from "@/lib/utils/mdx/mdxUtils";
import { BlogContentProps, ProjectContentTypes } from "@/ts/type";
import { HeroScrollDemo } from "@/layouts/HomePageLayout/Scroll/hero";
import { BackgroundBeamsDemo } from "@/layouts/HomePageLayout/ContactWithMe/contact-beams";
import { Header } from "@/layouts/HomePageLayout/Header/header";
import { GainedSkilled } from "@/layouts/HomePageLayout/GainedSkills/gained-skills";
import { TabsDemo } from "@/layouts/HomePageLayout/ProjectShowCaseTabs/project-tabs";
import { StyledComponent } from "@/components/StyledCoponent";

export default async function Home() {
  const blogs = (await getAllPostsMeta()) as BlogContentProps[];
  const projects = (await getAllProjectsMeta()) as ProjectContentTypes[];

  return (
    <main className="App">
      <Header />
      <StyledComponent.SectionPadding>
        <GainedSkilled />
      </StyledComponent.SectionPadding>
      {/* <Header /> */}
      <HeroScrollDemo />
      <TabsDemo />
      <HomePageProjectsSections projects={projects} />
      <HomePageBlogSection blogs={blogs} />
      <ContactMe />
      <BackgroundBeamsDemo />
    </main>
  );
}
