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
    <div id="mission" className="w-screen bg-iceBlue py-15 relative">
      <h2 className="text-center text-7xl italic font-extrabold textstroke-navyPurple textstrokewidth-[8px] textstrokefill text-white">
        MISI
      </h2>
      <p className="text-2xl text-center text-navyPurple font-semibold">
        TIS FTUI 2025
      </p>

      <div className="w-7/12 mx-auto flex flex-col gap-2 relative z-10">
        {MissionData.map((value: string, index: number) => (
          <MissionList key={index} order={index + 1} point={value} />
        ))}
      </div>

      <div className="">
        <img src="/assets/Mission/airplane-flare.svg" alt="" className="absolute w-[25vw] top-28 left-0 "/>
        <img src="/assets/Mission/paper-airplane.svg" alt="" className="absolute h-48 top-28 left-[25vw] -translate-y-[70%] -translate-x-5"/>
      </div>
    </div>
  );
};

export default Mission;
