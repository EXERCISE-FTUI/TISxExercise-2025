// components/Vision.tsx
import React from "react";
import Image from "next/image";

const Vision: React.FC = () => {
  return (
    <section id="vision" className="relative isolate w-screen overflow-hidden bg-[#FFF86F]">
      {/* -------------- Side Clouds ---------------- */}
      {/* LEFT cloud - adjusted position */}
      <div className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 z-0 w-[110px] h-[225px] sm:w-[180px] sm:h-[180px] md:w-[250px] md:h-[300px]">
        <Image
          src="/assets/Staffs/images/cloud.png"
          alt="cloud left"
          fill
          className="object-cover object-left scale-x-[-1] select-none opacity-90"
        />
      </div>

      {/* RIGHT cloud - adjusted position and size */}
      <div className="pointer-events-none absolute right-0 top-1/7 -translate-y-1/2 z-0 w-[150px] h-[300px] sm:w-[150px] sm:h-[150px] md:w-[220px] md:h-[260px]">
        <Image
          src="/assets/Staffs/images/cloud.png"
          alt="cloud right"
          fill
          className="object-contain object-right select-none opacity-90"
        />
      </div>

      {/* -------------- banner content ------------- */}
      <div className="relative z-10 mx-auto max-w-5xl px-8 py-8 md:py-12 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
        {/* Content remains the same */}
        <div className="shrink-0 flex flex-col items-center md:items-start text-center md:text-left">
          <div className="text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] leading-none italic font-extrabold uppercase text-indigo-900 text-outline-visi">
            VISI
          </div>
          <div className="text-xl sm:text-2xl md:text-4xl font-semibold text-indigo-900 mt-1 md:mt-2">
            TIS&nbsp;FTUI&nbsp;2025
          </div>
        </div>

        <div className="md:pl-8">
          <p className="text-sm sm:text-base md:text-lg font-base leading-snug sm:leading-relaxed text-indigo-900 text-justify">
            <strong>Terciptanya TIS FTUI sebagai lembaga pengabdian masyarakat yang
            berdedikasi penuh untuk menjembatani asa dengan partisipasi
            kolaboratif guna mewujudkan dampak yang menyeluruh dan penuh makna.</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Vision;