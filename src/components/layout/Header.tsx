"use client";
import { usePopup } from "@/contexts/PopupContext";
import { X } from "@phosphor-icons/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Mobile from "./Mobile";

const dropdownMenuItems = [
  { id: "tentang", label: "Tentang Kami", href: "#tentang-kami" },
  { id: "pengurus", label: "Pengurus", href: "#pengurus" },
  { id: "galeri", label: "Galeri", href: "#galeri" },
  { id: "sejarah", label: "Sejarah", href: "#sejarah" },
];

const Header = () => {
  const [activeButton, setActiveButton] = useState<string | null>(null);
  const [visible, setVisible] = useState(true);
  const { popupVisible } = usePopup();
  const timeoutId = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let prevScroll = window.pageYOffset;

    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      const isScrollingUp = currentScroll < prevScroll;

      if (Math.abs(currentScroll - prevScroll) > 10) {
        setVisible(isScrollingUp);
      }

      prevScroll = currentScroll;

      if (timeoutId.current) clearTimeout(timeoutId.current);

      timeoutId.current = setTimeout(() => {
        setVisible(true);
      }, 3000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId.current) clearTimeout(timeoutId.current);
    };
  }, []);

  const handleButtonClick = (id: string) => {
    setActiveButton(id);
    setTimeout(() => setActiveButton(null), 300);
  };

  if (popupVisible) return null;

  return (
    <div>
      <div
        className={`fixed hidden lg:block max-w-[2100px] top-[-5px] z-[1000] w-full bg-white shadow-md transition-transform duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex items-center justify-between px-6">
          {/* logo */}
          <div className="flex xl:p-1 justify-center items-center ml-2 xl:ml-4">
            <Image
              src="/assets/Staffs/images/logo-tis.png"
              alt="TIS FTUI Logo"
              width={90}
              height={90}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="scale-70 xl:scale-100"
            />
            <X size={18} weight="bold" className="text-[#15394A]" />
            <Image
              src="/assets/Staffs/images/logo-exer.png"
              alt="TIS FTUI Logo"
              width={90}
              height={90}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="ml-1 xl:ml-3 scale-70 xl:scale-100"
            />
          </div>

          {/* navmenus */}
          <div className="w-fit flex items-center justify-center gap-8 text-navyPurple font-bold text-sm lg:text-[13px] xl:text-xl">
            {dropdownMenuItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.querySelector(item.href);
                  if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                  }
                  handleButtonClick(item.id);
                }}
                className={`hover:text-[#1a1c5a] hover:underline transition-colors duration-150 ${
                  activeButton === item.id ? "text-[#1a1c5a]" : ""
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* button kontak booklet */}
          <div className="flex gap-4 pr-6">
            {/* Button Component */}
            <HoverButton
              label="Download Booklet"
              color="bg-[#C7E7F8]"
              id="booklet"
              active={activeButton}
              onClick={() => {
                window.open(
                  "https://drive.google.com/drive/folders/1bWBgFXwuoodlvGAO4BKrAJTEPMG9GkLM",
                  "_blank"
                );
                handleButtonClick("booklet");
              }}
            />
            <HoverButton
              label="Kontak"
              color="bg-[#C7E7F8]"
              id="kontak"
              active={activeButton}
              onClick={() => {
                window.open("https://shor.by/TISFTUI", "_blank");
                handleButtonClick("kontak");
              }}
            />
          </div>
        </div>
      </div>
      <Mobile />
    </div>
  );
};

const HoverButton = ({
  label,
  color,
  id,
  active,
  onClick,
}: {
  label: string;
  color: string;
  id: string;
  active: string | null;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        ${color} rounded-full lg:px-4 xl:px-6 lg:py-2 lg:text-[12px] xl:text-lg font-bold text-[#383A85] shadow-md cursor-pointer transition-transform hover:scale-105
        ${active === id ? "scale-95 text-[#1a1c5a]" : ""}
      `}
    >
      {label}
    </button>
  );
};

export default Header;
