import { BLUR_FADE_DELAY } from "@/app/page";
import BlurFade from "@/components/framework-components/blur-fade";
import { DATA } from "@/data/resume";
import Image from "next/image";

const formatCategory = (value: string) =>
  value
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

const Skills = () => {
  return (
    <section id="skills">
      <div className="flex min-h-0 flex-col gap-y-4">
        <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <h2 className="text-xl font-bold">Skills & Tools</h2>
        </BlurFade>
        <div className="grid gap-x-10 gap-y-5 md:grid-cols-1 md:items-start">
          {DATA.skills.map((group, groupIndex) => (
            <BlurFade
              key={group.category}
              delay={BLUR_FADE_DELAY * 10 + groupIndex * 0.08}
              className=""
            >
              <div className="grid grid-cols-5 space-x-2.5">
                <div className="col-span-5 md:col-span-2">
                  <h3 className="text-lg font-medium text-slate-400 dark:text-slate-500">
                    {formatCategory(group.category)}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2 col-span-5 md:col-span-3 ">
                  {group.items.map((skill, skillIndex) => (
                    <BlurFade
                      key={skill.name}
                      delay={
                        BLUR_FADE_DELAY * 10 +
                        groupIndex * 0.08 +
                        skillIndex * 0.03
                      }
                    >
                      <div className="flex h-7 w-fit items-center gap-2 rounded-lg border border-slate-700/70 bg-transparent px-4 text-sm text-slate-100 transition-colors hover:bg-transparent dark:border-slate-700/60 dark:text-slate-100">
                        {"icon" in skill &&
                          (typeof skill.icon === "string" ? (
                            <Image
                              width={16}
                              height={16}
                              src={skill.icon}
                              alt=""
                              className="size-4 rounded object-contain"
                            />
                          ) : (
                            <skill.icon className="size-4 overflow-hidden rounded object-contain text-black dark:text-white" />
                          ))}
                        <span className="whitespace-nowrap font-medium dark:text-white! text-black!">
                          {skill.name}
                        </span>
                      </div>
                    </BlurFade>
                  ))}
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
