/* eslint-disable @next/next/no-img-element */
import Education from "@/components/pages/home/education";
import Hero from "@/components/pages/home/hero";
import Project from "@/components/pages/home/project";
import Skills from "@/components/pages/home/skills";
import Work from "@/components/pages/home/work";
import { NoiseTextures } from "@/components/pages/shared/noise-contact";

export const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="min-h-dvh flex flex-col gap-14 relative">
      <Hero />
      {/* <About /> */}
      <Work />
      <Skills />
      <Project />
      <Education />
      {/* <Contacts /> */}
      <NoiseTextures />
    </main>
  );
}
