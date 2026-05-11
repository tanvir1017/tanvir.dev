import { BLUR_FADE_DELAY } from "@/app/page";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";

import BlurFade from "@/components/framework-components/blur-fade";
import BlurFadeText from "../../framework-components/blur-fade-text";

const Hero = () => {
  return (
    <section id="hero">
      <div className="mx-auto w-full max-w-2xl space-y-8">
        <div className="gap-6 flex flex-col md:flex-row justify-start items-center">
          <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-1">
            <Avatar className="size-24 md:size-32 border rounded-full shadow-lg ring-4 ring-muted">
              <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
              <AvatarFallback>{DATA.initials}</AvatarFallback>
            </Avatar>
          </BlurFade>

          <div className="gap-2 flex flex-col order-2 md:order-2 ">
            <BlurFadeText
              delay={BLUR_FADE_DELAY}
              className="text-3xl font-semibold tracking-tighter sm:text-2xl lg:text-3xl"
              yOffset={8}
              text={`Hi, I'm ${DATA.name.split(" ")[0]}`}
            />
            <BlurFadeText
              className="text-blue-400 max-w-150 md:text-lg lg:text-xl"
              delay={BLUR_FADE_DELAY}
              text={DATA.description}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
