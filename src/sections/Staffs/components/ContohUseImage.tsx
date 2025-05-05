"use client";
import type { Division, StaffData } from "@/types/staff";
import Image from "next/image";
import { useEffect, useState } from "react";

const ContohUseImage = () => {
  const [mediaDivision, setMediaDivision] = useState<Division | null>(null);

  useEffect(() => {
    fetch("/assets/Staffs/staffs.resource.json")
      .then((res) => res.json())
      .then((data: StaffData) => {
        const media = data["Eksternal"]?.divisions?.["Media"];
        if (media) setMediaDivision(media);
      });
  }, []);

  if (!mediaDivision) return <div>Loading...</div>;

  return (
    <div className="p-4 max-w-xl mx-auto">
      <div className="border rounded-xl p-4 shadow-md bg-white">
        {mediaDivision.image && (
          <div className="relative w-full h-60 mb-3">
            <Image
              src={`/assets/Staffs/images/${mediaDivision.image}`}
              alt={mediaDivision.name}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ContohUseImage;
