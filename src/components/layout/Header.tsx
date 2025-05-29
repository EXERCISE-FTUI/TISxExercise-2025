"use client";
import React, { useState, useEffect } from "react";
import Mobile from "./Mobile";
import { List, X } from "@phosphor-icons/react";
import Image from "next/image";
import { usePopup } from "@/contexts/PopupContext";

const dropdownMenuItems = [
  { id: "tentang", label: "Tentang Kami", href: "#tentang-kami" },
  { id: "pengurus", label: "Pengurus", href: "#pengurus" },
  { id: "galeri", label: "Galeri", href: "#galeri" },
  { id: "sejarah", label: "Sejarah", href: "#sejarah" },
];

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeButton, setActiveButton] = useState<string | null>(null);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const { popupVisible } = usePopup();

  const toggleMenu = () => {
    if (!isMenuOpen) {
      setIsDropdownVisible(true);
      setIsMenuOpen(true);
    } else {
      setIsMenuOpen(false);
      // delay hiding for animation
      setTimeout(() => setIsDropdownVisible(false), 200);
    }
  };


  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

useEffect(() => {
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const isScrollingUp = currentScrollPos < prevScrollPos;

    if (Math.abs(prevScrollPos - currentScrollPos) > 10) {
      setVisible(isScrollingUp);
      setIsMenuOpen(false);
    }

    setPrevScrollPos(currentScrollPos);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, [prevScrollPos]);

  const handleButtonClick = (id: string) => {
    setActiveButton(id);
    setTimeout(() => setActiveButton(null), 300);
  };

  if (isMobile) return <Mobile />;
  
  if (popupVisible) return null; // Hide header when popup is visible

  return (
    <header
      className={`fixed max-w-[2100px] top-[-5px] z-[1000] w-full bg-white shadow-md transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex items-center justify-between px-6">
        <div className="flex justify-center items-center gap-4">
          <Image
            src="/assets/staffs/images/Logo TIS FTUI.png"
            alt="TIS FTUI Logo"
            width={140}
            height={140}
            className="ml-4"
          />
        </div>

        <div className="flex gap-4 pr-6">
          {/* Button Component */}
          <HoverButton
            label="Download Booklet"
            color="bg-[#C7E7F8]"
            id="booklet"
            active={activeButton}
            onClick={() => handleButtonClick("booklet")}
          />
          <HoverButton
            label="Kontak"
            color="bg-[#C7E7F8]"
            id="kontak"
            active={activeButton}
            onClick={() => handleButtonClick("kontak")}
          />

          {/* Dropdown */}
          <div className="relative">
            <div className="flex gap-1 items-center rounded-full bg-[#FFFD80] px-6 pr-14 py-2 shadow-md z-100">
              <button
                onClick={toggleMenu}
                className="absolute right-0 flex flex-col gap-[2px] h-12 w-12 items-center justify-center rounded-full bg-[#383A85] transition-transform hover:rotate-90"
              >
                {isMenuOpen ? (
                  <X size={32} className="text-[#f3b334]" />
                ) : (
                  <List size={32} className="text-[#f3b334]" />
                )}
              </button>

              <div className="font-bold text-lg text-[#383A85]">
                TIS FTUI
              </div>
            </div>

            {isDropdownVisible && (
              <div
                className={`absolute right-0 mt-0.5 w-56 rounded-2xl bg-[#FFFD80] shadow-lg z-50 transform transition-all duration-200 ease-out overflow-x-hidden
      ${
        isMenuOpen
          ? "opacity-100 scale-100"
          : "opacity-0 scale-95 pointer-events-none"
      }`}
              >
                {dropdownMenuItems.map((item, index) => (
                  <React.Fragment key={item.id}>
                    <a
                      href={item.href}
                      onClick={() => {
                        setIsMenuOpen(false);
                        setTimeout(() => setIsDropdownVisible(false), 200);
                        handleButtonClick(item.id);
                      }}
                      className={`block px-5 py-2.5 text-[#383A85] font-semibold transition-colors duration-150 hover:bg-[#f0edd4] ${
                        activeButton === item.id ? "bg-[#f0edd4]" : ""
                      }`}
                    >
                      {item.label}
                    </a>
                    {index < dropdownMenuItems.length - 1 && (
                      <hr className="border-t border-[#383A85]/30 mx-4 my-0.5" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
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
        ${color} rounded-full px-6 py-2 text-lg font-bold text-[#383A85] shadow-md transition-transform hover:scale-105
        ${active === id ? "scale-95 text-[#1a1c5a]" : ""}
      `}
    >
      {label}
    </button>
  );
};

export default Header;
