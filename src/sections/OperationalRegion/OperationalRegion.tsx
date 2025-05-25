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
        className="w-full px-0 overflow-hidden py-20 bg-linear-to-b from-iceBlue from-60% to-lightYellow to-90% relative"
      >
        <h2 className="text-center text-5xl font-bold text-navyPurple">
          Daerah Operasional kami...
        </h2>

        <div className="h-[400px] mt-20 w-10/12 mx-auto flex flex-wrap justify-between">
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
          <img src="/assets/OperationalRegion/star.svg" className="h-8 absolute left-[1vw] top-5 rotate-12" alt="" />
          <img src="/assets/OperationalRegion/star.svg" className="h-6 absolute left-[5vw] top-2 -rotate-90" alt="" />
          <img src="/assets/OperationalRegion/star.svg" className="h-20 absolute left-[8vw] top-5 -rotate-12" alt="" />
          <img src="/assets/OperationalRegion/star.svg" className="h-12 absolute left-[3vw] top-14 rotate-12" alt="" />
          <img src="/assets/OperationalRegion/star.svg" className="h-10 absolute left-[7vw] top-26 rotate-90" alt="" />
          <img src="/assets/OperationalRegion/star.svg" className="h-12 absolute left-[1vw] top-34 rotate-45" alt="" />
        </div>

        {/* Right Stars */}
        <div className="">
          <img src="/assets/OperationalRegion/star.svg" className="h-8 absolute right-[1vw] top-5 rotate-12" alt="" />
          <img src="/assets/OperationalRegion/star.svg" className="h-6 absolute right-[5vw] top-2 -rotate-90" alt="" />
          <img src="/assets/OperationalRegion/star.svg" className="h-20 absolute right-[8vw] top-5 -rotate-12" alt="" />
          <img src="/assets/OperationalRegion/star.svg" className="h-12 absolute right-[3vw] top-14 rotate-12" alt="" />
          <img src="/assets/OperationalRegion/star.svg" className="h-10 absolute right-[7vw] top-26 rotate-90" alt="" />
          <img src="/assets/OperationalRegion/star.svg" className="h-12 absolute right-[1vw] top-34 rotate-45" alt="" />

        </div>
      </div>
    );
  } catch (error) {
    console.error("Error reading file:", error);
    return <p>Erorr When Accessing Data</p>;
  }
};

export default OperationalRegion;
