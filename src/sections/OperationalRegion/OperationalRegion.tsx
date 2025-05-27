"use client"; // Pakai client component karena pakai fetch dan useEffect

import React, { useEffect, useState } from "react";
import Region from "./Region";
// import Image from "next/image";

type RegionData = {
  isComingSoon: boolean;
  name: string;
  subtile: string;
  images: string[];
  location: string;
  locationURL: string;
};

const OperationalRegion = () => {
  const [regions, setRegions] = useState<RegionData[]>([]);

  useEffect(() => {
    const fetchRegions = async () => {
      const res = await fetch(
        "/assets/OperationalRegion/operationalRegion.resource.json"
      );
      const data = await res.json();
      setRegions(data);
    };

    fetchRegions();
  }, []);

  return (
    <div className="w-full py-20 bg-gradient-to-b from-iceBlue from-60% to-lightYellow to-90%">
      <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold text-navyPurple">
        Daerah Operasional kami...
      </h2>

      <div className="relative z-0 mt-20 w-full md:w-10/12 max-w-[1200px] mx-auto flex flex-wrap justify-center gap-10">
        {regions.map((region, index) => (
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
    </div>
  );
};

export default OperationalRegion;
