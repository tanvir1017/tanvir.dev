import { BLUR_FADE_DELAY } from "@/app/page";
import BlurFade from "@/components/framework-components/blur-fade";
import WorkSection from "@/components/pages/home/work-section";
const Work = () => {
  return (
    <section id="work">
      <div className="flex min-h-0 flex-col gap-y-6">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <h2 className="text-xl font-bold">Work Experience</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 6}>
          <WorkSection />
        </BlurFade>
      </div>
    </section>
  );
};

export default Work;
