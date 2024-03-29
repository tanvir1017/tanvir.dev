"use client";
import { TextStyled, Typo } from "@/components/Typo";
import React from "react";
import Blur from "./blur";
import { Button } from "@/components/ui/button";
import { ChevronDown, DownloadIcon, Eye } from "lucide-react";

export function Header() {
  return (
    <div className="relative h-screen grid place-items-center w-full dark:bg-black bg-white dark:bg-dot-white/[0.4] bg-dot-black/[0.5]  overflow-hidden">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="container">
        <div className="max-w-xl m-auto text-center">
          <h4 className="text-2xl font-semibold text-neutral-300">
            Hello! I'm Tanvir
          </h4>
          <Typo.NeutralGradientH1 className="my-4">
            Web Developer
          </Typo.NeutralGradientH1>
          <div className="max-w-lg m-auto">
            <p className="text-neutral-300 tracking-wider">
              Focused on{" "}
              <TextStyled.TextUnderline>
                JavaScript (React)
              </TextStyled.TextUnderline>
              - based technologies, Love to keep{" "}
              <TextStyled.TextUnderline> code clean</TextStyled.TextUnderline>,
              Passionate about{" "}
              <TextStyled.TextUnderline>Python</TextStyled.TextUnderline> also.
            </p>
          </div>
          <div className="flex justify-center items-center gap-2 mt-11">
            <Button className="border bg-white hover:bg-gray-200 text-black w-44 relative overflow-hidden">
              <span className="absolute left-2">
                <Eye strokeWidth={0.7} className="text-black" />
              </span>
              Resume
              <span className="absolute right-8 h-full w-[0.5px] bg-black/50"></span>
              <span className="absolute right-1">
                <ChevronDown strokeWidth={0.7} className="text-black" />
              </span>
            </Button>

            <Button className="border bg-black hover:bg-black text-white w-44">
              Blogs
            </Button>
          </div>
        </div>
      </div>
      {/* <Blur /> */}
    </div>
  );
}
