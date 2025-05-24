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
    console.log(JSON.parse(fileContent));
    const Regions: OperationalRegionType[] = JSON.parse(fileContent);
    return (
      <div
        id="operational-region"
        className="w-screen py-20 bg-linear-to-b from-iceBlue from-60% to-lightYellow to-90%"
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

          {/* <Region
            isComingSoon={false}
            name={"RPTRA Seruni"}
            subtile={"Karang Pola"}
            images={images}
            options={{ loop: true }}
          /> */}
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error reading file:", error);
    return <p>Erorr When Accessing Data</p>;
  }
};

export default OperationalRegion;
