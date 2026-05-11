import { BLUR_FADE_DELAY } from "@/app/page";
import BlurFade from "@/components/framework-components/blur-fade";
import ProjectsSection from "./projects-section";

const Project = () => {
  return (
    <section id="projects">
      <BlurFade delay={BLUR_FADE_DELAY * 11}>
        <ProjectsSection />
      </BlurFade>
    </section>
  );
};

export default Project;
