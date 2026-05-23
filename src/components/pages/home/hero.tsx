"use client";
import { BLUR_FADE_DELAY } from "@/app/page";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";

import BlurFade from "@/components/framework-components/blur-fade";
import { PopUpDialog } from "@/components/framework-components/dialog";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { calculateYearWithDays } from "@/lib/year-calc";
import { MapPin } from "lucide-react";
import React from "react";
import BlurFadeText from "../../framework-components/blur-fade-text";

const Hero = () => {
  const [showFullAge, setShowFullAge] = React.useState(false);
  const { ageText, years } = calculateYearWithDays("2002-10-17");

  const ageLabel = showFullAge
    ? ageText
    : `${years} year${years !== 1 ? "s" : ""}`;

  const handleAgeClick = () => {
    setShowFullAge((currentValue) => !currentValue);
  };

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
              text={DATA.name}
            />
            <BlurFadeText
              className="text-blue-400 max-w-150 md:text-lg lg:text-xl"
              delay={BLUR_FADE_DELAY}
              text={DATA.description}
            />

            <div className="flex flex-wrap gap-2">
              {[
                {
                  key: "age",
                  element: ageLabel,
                  onClick: handleAgeClick,
                },
                {
                  key: "location",
                  element: (
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      <span>{DATA.location}</span>
                    </span>
                  ),
                },
                {
                  key: "contact-card",
                  element: <PopUpDialog />,
                },
              ].map((badge, index) => (
                <BlurFade
                  key={badge.key}
                  delay={BLUR_FADE_DELAY * 10 + index * 0.05}
                >
                  <Badge
                    className={cn(
                      "text-[11px] font-medium border border-border h-6 w-fit cursor-pointer",
                      {
                        "px-0!": badge.key === "contact-card",
                      },
                    )}
                    variant="outline"
                    onClick={badge.onClick}
                  >
                    {badge.element}
                  </Badge>
                </BlurFade>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
