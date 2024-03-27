"use client";
import { Typo } from "@/components/Typo";
import React from "react";

export function DotBackgroundDemo() {
  return (
    <div className="h-screen grid place-items-center w-full dark:bg-black bg-white dark:bg-dot-white/[0.4] bg-dot-black/[0.5] relative ">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="container">
        <div className="max-w-xl m-auto text-center">
          <h4 className="text-2xl font-semibold text-neutral-300">
            Hello! This is Tanvir
          </h4>
          <Typo.NeutralGradientH1 className="my-4">
            Frontend Dev
          </Typo.NeutralGradientH1>
          <div className="max-w-lg m-auto">
            <p className="text-neutral-300 tracking-wider">
              A developer focused on JavaScript-based technologies, Love to keep
              code clean, Passionate about AI
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
