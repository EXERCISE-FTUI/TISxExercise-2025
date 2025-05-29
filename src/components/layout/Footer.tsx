'use client'
import React from 'react'
import Image from 'next/image';
import {
  MapPin,
  EnvelopeSimple,
  WhatsappLogo,
  InstagramLogo,
  YoutubeLogo,
  TiktokLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";

const Footer = () => {
  return (
    <div className="flex w-full overflow-x-hidden overflow-y-visible bg-[#FFFD80] text-[#383A85] font-poppins max-w-[2100px] justify-between items-center lg:px-24 py-2">
      <Image
        src="/assets/staffs/images/Logo TIS FTUI.png"
        alt="logo-tis"
        width={160}
        height={160}
      />

      <div className="w-[40%]">
        <div className="flex gap-2 items-center">
          <MapPin size={48} weight="bold" />
          <h2>
            Faculty of Engineering, University of Indonesia, Jl. Prof. DR. Ir R
            Roosseno, Kukusan, Beji, Depok City, West Java 16425
          </h2>
        </div>
        <div className="flex gap-2 items-center">
          <EnvelopeSimple size={32} weight="bold" />
          <h2>tisftui2025@gmail.com</h2>
        </div>
        <div className="flex gap-2 items-center">
          <WhatsappLogo size={32} weight="bold" />
          <h2>085388277808</h2>
        </div>
      </div>

      <div className="flex flex-col gap-2 items-center">
        <h2 className="text-lg font-bold">Sosial Media Kami</h2>
        <div className="flex gap-4 text-white">
          <a
            href="https://www.youtube.com/@tisftui"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 rounded-lg bg-navyPurple"
          >
            <YoutubeLogo size={32} weight="bold" />
          </a>
          <a
            href="https://www.youtube.com/@tisftui"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 rounded-lg bg-navyPurple"
          >
            <TiktokLogo size={32} weight="bold" />
          </a>
          <a
            href="https://www.youtube.com/@tisftui"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 rounded-lg bg-navyPurple"
          >
            <LinkedinLogo size={32} weight="bold" />
          </a>
          <a
            href="https://www.instagram.com/tisftui/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 rounded-lg bg-navyPurple"
          >
            <InstagramLogo size={32} weight="bold" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer