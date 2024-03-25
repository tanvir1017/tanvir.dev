import React from "react";

export const NeutralGradientH1 = ({ children }: { children: string }) => {
  return (
    <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
      {children}
    </h1>
  );
};
export const SoftNeutralGradientH1 = ({ children }: { children: string }) => {
  return (
    <h1 className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
      {children}
    </h1>
  );
};