"use client"
import React from 'react'
import Image from 'next/image';

const LogoAndText = () => {
  return (
    <div className='w-full h-fit pb-[5%] pt-[10%] flex lg:flex-row flex-col items-center justify-center'>
      {/* image */}
        <Image src="/assets/Staffs/images/logo-tis.png" alt="logo-tis" width={240} height={240} className='mt-[13%] lg:mt-0'/>
      {/* text */}
      <div className="flex flex-col items-center justify-center text-center p-8 my-6 w-[90%] md:w-[40%] z-20">
        <h1
          className="font-extrabold inline-block md:self-start leading-none text-[28px] md:text-[40px] mb-6"
          style={{
            color: "#FCBB45",
            WebkitTextStroke: "1.4px white",
            filter: "drop-shadow(0 0 8px rgba(0,0,0,0.1))",
          }}
        >
          Apa itu TIS FTUI?
        </h1>
        <p className="font-medium lg:text-left text-center text-[#2B5AA0] text-[1.125rem] mb-6">
          <span className="font-bold">Technique Informal School</span>, badan
          otonom di{" "}
          <span className="font-bold">
            Fakultas Teknik Universitas Indonesia
          </span>
          , adalah jembatan mimpi untuk anak-anak dari keluarga marginal. Tanpa
          biaya, tanpa batas, kami hadir membawa asa pendidikan ke{" "}
          <span className="font-bold">
            Kampung Pemulung, Karang Pola, dan Manara Pasar Minggu
          </span>
          .
        </p>
      </div>
    </div>
  );
}

export default LogoAndText