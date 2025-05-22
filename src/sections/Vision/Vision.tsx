// components/Vision.tsx
import React from "react";
import Image from "next/image";

const Vision: React.FC = () => {
  return (
    <section
      id="vision"
      className="relative isolate w-screen overflow-hidden bg-[#FFF86F]"
    >
      {/* -------------- Side Clouds ---------------- */}

      {/* LEFT side (mirrored horizontally) */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-[450px]">
        <Image
          src="/assets/Staffs/images/cloud.png"
          alt="cloud left"
          fill
          className="object-cover object-left scale-x-[-1] select-none"
          priority
        />
      </div>

      {/* RIGHT side (normal) */}
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-[300px]">
        <Image
          src="/assets/Staffs/images/cloud.png"
          alt="cloud right"
          fill
          className="object-cover object-right select-none"
        />
      </div>

            {/* -------------- banner content ------------- */}
      <div className="mx-auto max-w-5xl px-4 py-6 md:py-10 flex flex-col md:flex-row md:items-center gap-6">

        {/* Heading Container */}
        <div className="shrink-0 flex flex-col items-center md:items-start text-center md:text-left">
          <div className="text-[5rem] leading-none pl-7 italic font-extrabold uppercase text-indigo-900 drop-shadow-sm text-outline-shadow text-outline-visi">
            Visi
          </div>
          <div className="text-4xl font-semibold text-indigo-900 drop-shadow-sm mt-2">
            TIS&nbsp;FTUI&nbsp;2025
          </div>
        </div>

        {/* Paragraph */}
        <div className="md:pl-30">
          <p className="text-lg md:text-lg font-bold leading-relaxed text-indigo-900 text-justify">
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
