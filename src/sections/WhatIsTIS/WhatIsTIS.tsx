"use client";
import React from "react";
import LogoAndText from "./LogoAndText";
import CloudsAndSun from "./CloudsAndSun";

const WhatIsTIS = () => {
  return (
    <div
      id="tentang-kami"
      className="w-full min-h-screen flex gap-0 md:gap-2 flex-col items-center justify-center bg-gradient-to-b from-[#ADD0E8] to-[#F4FAFD] overflow-x-hidden"
    >
      <LogoAndText />
      <CloudsAndSun />
    </div>
  );
};

export default WhatIsTIS;
