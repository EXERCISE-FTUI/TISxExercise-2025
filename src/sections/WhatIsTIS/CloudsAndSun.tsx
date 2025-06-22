"use client";
import { useEffect, useState } from "react";

const CloudsAndSun = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="relative w-full ">
      <div
        className="z-[5] transition-transform duration-100 ease-out w-[220%] md:w-[150%]  "
        style={{
          transform: `translateX(${-scrollY * 0.3}px)`,
        }}
      >
        <img
          src="https://res.cloudinary.com/dlbv6554z/image/upload/v1748117524/l3u0espw0o0hgnzmaf69.png"
          alt="Cloud decoration"
          className="w-full h-full object-contain"
        />
      </div>
      <div
        className="absolute z-10 transition-transform duration-100 ease-out bottom-[20%] lg:bottom-[45%] right-[10%] w-[20%] height-[20%]"
        style={{
          transform: `translateX(${-scrollY * 0.1}px)`,
        }}
      >
        <img
          src="https://res.cloudinary.com/dlbv6554z/image/upload/v1748365567/Group_749_b1r4tq.png"
          alt="Sun decoration"
          className="object-contain scale-200 md:scale-[130%] lg:scale-120 md:opacity-100 opacity-80"
        />
      </div>
    </div>
  );
};

export default CloudsAndSun;
