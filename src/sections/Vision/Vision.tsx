// components/Vision.tsx
import React from "react";
import Image from "next/image";

const Vision: React.FC = () => {
  return (
    <section id="vision" className="relative w-full overflow-hidden bg-[#FFF86F]">
      {/* -------------- Side Clouds ---------------- */}
      {/* LEFT cloud - adjusted position */}
      <div className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 z-0 w-[110px] h-[225px] sm:w-[180px] sm:h-[180px] md:w-[250px] md:h-[300px]">
        <Image
          src="/assets/Staffs/images/cloud.png"
          alt="cloud left"
          fill
          className="object-cover object-left scale-x-[-1] select-none opacity-95"
        />
      </div>

      {/* RIGHT cloud - adjusted position and size */}
      <div className="pointer-events-none absolute right-0 md:top-1/7 top-1/2 -translate-y-1/2 translate-x-15 md:translate-x-0 md:-translate-y-10 z-0 w-[190px] h-[300px] sm:w-[150px] sm:h-[150px] md:w-[300px] md:h-[290px]">
        <Image
          src="/assets/Staffs/images/cloud.png"
          alt="cloud right"
          fill
          className="object-contain object-right select-none opacity-95"
        />
      </div>

      {/* -------------- banner content ------------- */}
      <div className="relative z-10 mx-auto max-w-5xl px-5 py-4 md:py-12 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
        {/* Modified heading container with safer margins */}
        <div className="shrink-0 flex flex-row items-end gap-2 md:flex-col md:items-start md:text-left">
          <div className="text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] leading-none italic font-extrabold uppercase text-indigo-900 text-outline-visi">
            VISI
          </div>
          <div className="text-lg sm:text-2xl md:text-3xl font-semibold text-indigo-900 md:pb-0 md:ml-0 md:pl-1"> {/* Changed from -ml-7 to pl-1 */}
            TIS&nbsp;FTUI&nbsp;2025
          </div>
        </div>

        {/* Paragraph container with adjusted max-width */}
        <div className="md:pl-6 w-full max-w-[90%] sm:max-w-[95%] md:max-w-none">
          <p className="text-xs sm:text-sm md:text-lg font-semibold leading-tight sm:leading-normal text-indigo-900 text-justify">
            Terciptanya TIS FTUI sebagai lembaga pengabdian masyarakat yang
            berdedikasi penuh untuk menjembatani asa dengan partisipasi
            kolaboratif guna mewujudkan dampak yang menyeluruh dan penuh makna.
          </p>
        </div>
      </div>
  
    </section>
  );
};

export default Vision;