// components/Vision.tsx
import React from "react";
import Image from "next/image";

const Vision: React.FC = () => {
  return (
    <section
      id="vision"
      className="relative isolate w-screen overflow-hidden bg-[#FFF86F]"
    >
      {/* -------------- side clouds ---------------- */}
      {/* LEFT side (flipped) */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-[120px] overflow-hidden relative z-10">
        <Image
          src="/assets/Staffs/images/cloud.png"
          alt="cloud"
          fill
          className="object-contain object-left rotate-180 select-none"
          priority
        />
      </div>


      {/* RIGHT side (normal) */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-[120px] overflow-hidden relative z-10">
        <Image
          src="/assets/Staffs/images/cloud.png"
          alt="cloud"
          fill
          className="object-contain object-right select-none"
        />
      </div>

      {/* -------------- banner content ------------- */}
      <div className="mx-auto max-w-5xl px-4 py-12 md:py-20 flex flex-col md:flex-row md:items-center gap-6">
      {/* Heading Container */}
      <div className="shrink-0 flex flex-col items-start">
        <div className="text-[5rem] leading-none italic font-extrabold uppercase text-indigo-900 drop-shadow-sm text-outline-shadow text-outline-visi">
          Visi
        </div>
        <div className="text-2xl font-semibold text-indigo-900 drop-shadow-sm">
          TIS&nbsp;FTUI&nbsp;2025
        </div>
      </div>


        {/* Paragraph */}
        <p className="text-lg md:text-xl font-medium leading-relaxed text-gray-800">
          Terciptanya TIS FTUI sebagai lembaga pengabdian masyarakat yang
          berdedikasi penuh untuk menjembatani asa dengan partisipasi
          kolaboratif guna mewujudkan dampak yang menyeluruh dan penuh makna.
        </p>
      </div>
    </section>
  );
};

export default Vision;
