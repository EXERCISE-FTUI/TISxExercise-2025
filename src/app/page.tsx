"use client";
import Hero from "@/sections/Hero/Hero";
import WhatIsTIS from "@/sections/WhatIsTIS/WhatIsTIS";
import Values from "@/sections/Values/Values";
import Vision from "@/sections/Vision/Vision";
import Mission from "@/sections/Mission/Mission";
import OperationalRegion from "@/sections/OperationalRegion/OperationalRegion";
import Staffs from "@/sections/Staffs/Staffs";
import Gallery from "@/sections/Gallery/Gallery";
import History from "@/sections/HistoryTIS/History";
const Page = () => {
  return (
    <div className="w-full flex justify-center items-center max-w-[2100px] overflow-x-hidden">
      <div className="w-full flex flex-col scroll-smooth">
        <Hero />
        <WhatIsTIS />
        <Values />
        <Vision />
        <Mission />
        <OperationalRegion />
        <Staffs />
        <Gallery />
        <History />
      </div>
    </div>
  );
};
export default Page;