import React from "react";
import MissionList from "./MissionList";

const MissionData: string[] = [
  "Menciptakan rasa kekeluargaan yang tulus, hangat, dan erat antara setiap anggota TIS FTUI tanpa terkecuali.",
  "Menyajikan program kerja yang berbasis penguatan pada kualitas, relevansi, serta berkelanjutannya.",
  "Membina hubungan yang erat dengan pihak eksternal TIS FTUI.",
  "Menyalurkan dampak positif bagi warga daerah operasional atau eksternal melalui kegiatan belajar mengajar maupun kegiatan yang menyebarkan kebermanfaatan.",
  "Memberikan wadah dan kegiatan partisipatif bagi keseluruhan mahasiswa FTUI agar turut merasa dan tersalurkan asa.",
];

const Mission = () => {
  return (
    <div id="mission" className="w-full bg-iceBlue py-15 relative">
      <h2 className="text-center text-5xl md:text-6xl lg:text-7xl italic font-extrabold textstroke-navyPurple textstrokewidth-[8px] textstrokefill text-white">
        MISI
      </h2>
      <p className="text-xl md:text-2xl lg:text-4xl text-center text-navyPurple font-semibold pb-5">
        TIS FTUI 2025
      </p>

      <div className="w-10/12 md:w-7/12 max-w-[800px] mx-auto flex flex-col gap-2 relative z-10">
        {MissionData.map((value: string, index: number) => (
          <MissionList key={index} order={index + 1} point={value} />
        ))}
      </div>

      <div className="">
        <img src="/assets/Mission/airplane-flare.svg" alt="" className="absolute w-[20vw] lg:w-[25vw] top-20 md:top-24 lg:top-28 left-0 "/>
        <img src="/assets/Mission/paper-airplane.svg" alt="" className="absolute h-20 md:h-32 lg:h-46 top-20 md:top-24 lg:top-28 left-[20vw] lg:left-[25vw] -translate-y-[70%] -translate-x-5"/>
      </div>
    </div>
  );
};

export default Mission;
