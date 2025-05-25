"use server";
import React from "react";
import Region from "./Region";
import fs from "fs/promises";

type OperationalRegionType = {
  isComingSoon?: boolean;
  name?: string;
  subtile?: string;
  images: string[];
  location?: string;
  locationURL?: string;
};

const OperationalRegion = async () => {
  try {
    const fileContent = await fs.readFile(
      "./public/assets/OperationalRegion/operationalRegion.resource.json",
      "utf-8"
    );
    const Regions: OperationalRegionType[] = JSON.parse(fileContent);
    return (
      <div
        id="operational-region"
        className="w-full px-0  overflow-hidden py-20 bg-linear-to-b from-iceBlue from-60% to-lightYellow to-90% relative -z-20"
      >
        <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold text-navyPurple relative z-0">
          Daerah Operasional kami...
        </h2>

        <div className="relative z-0 h-auto lg:h-[400px] mt-20 w-full md:w-10/12 max-w-[1200px] mx-auto flex flex-row md:flex-row flex-wrap justify-center lg:justify-between md:jutify-center gap-10 md:gap-5 lg:gap-0">
          {Regions.map((region, index) => (
            <Region
              key={index}
              isComingSoon={region.isComingSoon}
              name={region.name}
              subtile={region.subtile}
              images={region.images}
              options={{ loop: true }}
              location={region.location}
              locationURL={region.locationURL}
            />
          ))}
        </div>

        {/* Left Stars */}
        <div>
          <img src="/assets/OperationalRegion/star.svg" className="h-22 md:h-8 absolute left-[5vw] md:left-[1vw] top-[30vw] md:top-5 rotate-12 -z-10" alt="" />
          <img src="/assets/OperationalRegion/star.svg" className="h-12 md:h-6 absolute left-[5vw] top-[60vw] md:top-2 -rotate-90 -z-10" alt="" />
          <img src="/assets/OperationalRegion/star.svg" className="h-20 absolute -left-10 md:left-[8vw] top-[100vw] md:top-5 -rotate-12 -z-10" alt="" />
          <img src="/assets/OperationalRegion/star.svg" className="h-12 absolute left-[3vw] top-[130vw] md:top-14 rotate-12 -z-10" alt="" />
          <img src="/assets/OperationalRegion/star.svg" className="h-10 absolute -left-6 md:left-[7vw] top-[150vw] md:top-26 rotate-90 -z-10" alt="" />
          <img src="/assets/OperationalRegion/star.svg" className="hidden md:block h-12 absolute left-[1vw] top-34 rotate-45 -z-10" alt="" />
        </div>

        {/* Right Stars */}
        <div className="">
          <img src="/assets/OperationalRegion/star.svg" className="h-22 md:h-8 absolute right-[5vw] md:right-[1vw] top-[30vw] md:top-5 rotate-12 -z-10" alt="" />
          <img src="/assets/OperationalRegion/star.svg" className="h-12 md:h-6 absolute right-[5vw] top-[60vw] md:top-2 -rotate-90 -z-10" alt="" />
          <img src="/assets/OperationalRegion/star.svg" className="h-20 absolute -right-10 md:right-[8vw] top-[100vw] md:top-5 -rotate-12 -z-10" alt="" />
          <img src="/assets/OperationalRegion/star.svg" className="h-12 absolute right-[3vw] top-[130vw] md:top-14 rotate-12 -z-10" alt="" />
          <img src="/assets/OperationalRegion/star.svg" className="h-10 absolute -right-6 md:right-[7vw] top-[150vw] md:top-26 rotate-90 -z-10" alt="" />
          <img src="/assets/OperationalRegion/star.svg" className="hidden md:block h-12 absolute right-[1vw] top-34 rotate-45 -z-10" alt="" />

        </div>
      </div>
    );
  } catch (error) {
    console.error("Error reading file:", error);
    return <p>Erorr When Accessing Data</p>;
  }
};

export default OperationalRegion;
