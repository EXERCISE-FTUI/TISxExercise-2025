"use client";
import React from "react";
import Image from "next/image";
import {
  MapPin,
  EnvelopeSimple,
  WhatsappLogo,
  InstagramLogo,
  YoutubeLogo,
  TiktokLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";

const socialMediaLinks = [
  {
    href: "https://www.youtube.com/@techniqueinformalschoolftui",
    icon: (
      <YoutubeLogo
        className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8"
        weight="bold"
      />
    ),
  },
  {
    href: "https://www.tiktok.com/@tisftui",
    icon: (
      <TiktokLogo
        className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8"
        weight="bold"
      />
    ),
  },
  {
    href: "https://www.linkedin.com/company/tisftui",
    icon: (
      <LinkedinLogo
        className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8"
        weight="bold"
      />
    ),
  },
  {
    href: "https://www.instagram.com/tisftui",
    icon: (
      <InstagramLogo
        className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8"
        weight="bold"
      />
    ),
  },
];

const Footer = () => {
  return (
    <div className="relative w-full max-w-[2100px] bg-[#DCF0FA] overflow-hidden">
      {/* Gelombang Awan */}
      <div className="w-[150%] ml-[-40%] mb-[-1%] leading-none">
        <Image
          width={2000}
          height={500}
          src="/assets/gelombangs.svg"
          alt="Gelombang Awan"
          className="w-full"
        />
      </div>

      {/* Konten Utama */}
      <div className="flex flex-col md:flex-row justify-around items-center gap-4 px-4 py-6 bg-[#FFFD80] text-[#383A85] font-poppins">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image
            src="/assets/Staffs/images/logo-tis.png"
            alt="logo-tis"
            width={120}
            height={120}
            className="md:w-[140px] md:h-[140px] lg:w-[160px] lg:h-[160px]"
          />
        </div>

        {/* Info Kontak */}
        <div className="text-xs md:text-sm lg:text-base flex flex-col gap-2 max-w-md">
          <div className="flex items-start gap-2">
            <MapPin weight="bold" className="w-10 h-4 md:w-11 md:h-10" />
            <a
              href="https://maps.app.goo.gl/Cftv5g9Z4Ha78byo7"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              <p>
                Faculty of Engineering, University of Indonesia, Jl. Prof. DR.
                Ir R Roosseno, Kukusan, Beji, Depok City, West Java 16425
              </p>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <EnvelopeSimple weight="bold" className="w-5 h-5" />
            <a href="mailto:tisftui2025@gmail.com" className="hover:underline">
              <p>tisftui2025@gmail.com</p>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <WhatsappLogo weight="bold" className="w-5 h-5" />
            <a
              href="https://wa.me/6285388277808"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              085388277808
            </a>
          </div>
        </div>

        {/* Sosial Media */}
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-xs md:text-base font-bold text-center">
            Sosial Media Kami
          </h2>
          <div className="flex flex-wrap gap-3">
            {socialMediaLinks.map((media, index) => (
              <a
                key={index}
                href={media.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-navyPurple rounded-lg text-white"
              >
                {media.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#FFFD80] text-center text-navyPurple text-xs lg:text-base pb-4 font-bold">
        <h1>&copy; 2025 Technique Informal School FTUI</h1>
        <h1>In collaboration with EXERCISE FTUI</h1>
      </div>
    </div>
  );
};

export default Footer;
