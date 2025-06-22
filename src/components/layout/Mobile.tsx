"use client";
import { usePopup } from "@/contexts/PopupContext";
import { List, X } from "@phosphor-icons/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const dropdownMenuItems = [
  { id: "tentang", label: "Tentang Kami", href: "#tentang-kami" },
  { id: "pengurus", label: "Pengurus", href: "#pengurus" },
  { id: "galeri", label: "Galeri", href: "#galeri" },
  { id: "sejarah", label: "Sejarah", href: "#sejarah" },
];

const Mobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [activeButton, setActiveButton] = useState<string | null>(null);
  const [hoverStates, setHoverStates] = useState({
    kontak: false,
    booklet: false,
  });
  const [showHeader, setShowHeader] = useState(true);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastScrollY = useRef(0);

  const { popupVisible } = usePopup();

  const toggleMenu = () => {
    if (!isMenuOpen) {
      setMenuVisible(true);
      setIsMenuOpen(true);
    } else {
      setIsMenuOpen(false);
    }
  };

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
    setTimeout(() => setActiveButton(null), 300);
  };

  const handleHover = (buttonName: string, isHovering: boolean) => {
    setHoverStates((prev) => ({ ...prev, [buttonName]: isHovering }));
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY.current;

      if (Math.abs(currentScrollY - lastScrollY.current) > 10) {
        const shouldHideHeader = isScrollingDown && currentScrollY > 50;
        setShowHeader(!shouldHideHeader);
        if (isMenuOpen) setIsMenuOpen(false); // tutup menu di scroll atas/bawah
      }

      // Clear and reset timeout
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setShowHeader(true);
      }, 3000);

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [isMenuOpen]);

  const onMenuTransitionEnd = () => {
    if (!isMenuOpen) {
      setMenuVisible(false);
    }
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (popupVisible) return null;

  return (
    <>
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        .header-transition {
          transition: transform 0.3s ease, opacity 0.3s ease;
        }
        .menu-transition {
          transition: transform 0.3s ease, opacity 0.3s ease;
        }
      `}</style>

      <header
        className={`flex items-center justify-between p-1 bg-white fixed top-0 left-0 right-0 z-100 shadow-md header-transition lg:hidden`}
        style={{
          transform: showHeader ? "translateY(0)" : "translateY(-100%)",
          opacity: showHeader ? 1 : 0,
        }}
      >
        <div
          className="flex justify-center items-center pl-4"
          onClick={scrollToTop}
        >
          <Image
            src="/assets/Staffs/images/logo-tis.png"
            alt="TIS FTUI Logo"
            width={64}
            height={64}
          />
          <X size={14} weight="bold" className="text-[#15394A]" />
          <Image
            src="/assets/Staffs/images/logo-exer.png"
            alt="TIS FTUI Logo"
            width={64}
            height={64}
            className="ml-2"
          />
        </div>

        <button
          onClick={toggleMenu}
          className={`border-none p-2 flex flex-col justify-center items-center gap-px h-12 w-12 cursor-pointer transition-transform duration-300 mr-4 ${
            isMenuOpen ? "rotate-90" : ""
          }`}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <div className="bg-navyPurple w-full h-full rounded-md">
              <X size={32} className="text-[#f3b334]" />
            </div>
          ) : (
            <List size={36} className="text-[#f3b334]" />
          )}
        </button>
      </header>

      {menuVisible && (
        <div
          onTransitionEnd={onMenuTransitionEnd}
          className="fixed top-0 left-0 right-0 bg-white z-40 flex flex-col items-start justify-start pt-22 pb-4 overflow-y-auto rounded-lg menu-transition"
          style={{
            maxHeight: "calc(100vh - 4rem)",
            transform: isMenuOpen ? "translateY(0)" : "translateY(-20px)",
            opacity: isMenuOpen ? 1 : 0,
            pointerEvents: isMenuOpen ? "auto" : "none",
          }}
        >
          <div className="absolute top-3 right-3 z-50">
            <button
              onClick={toggleMenu}
              className="bg-[#383A85] rounded-full border-none p-1.5 flex flex-col justify-center items-center gap-[1px] h-8 w-8 cursor-pointer transition-transform duration-300"
              aria-label="Close menu"
            >
              <div className="w-5 h-[2px] bg-[#F3B334] rotate-45 translate-x-[0.2px] translate-y-[0.2px]" />
              <div className="w-5 h-[2px] bg-[#F3B334] -rotate-45 translate-x-[0.2px] -translate-y-[0.2px]" />
            </button>
          </div>

          <div className="flex flex-col gap-1 mt-6 w-full px-4">
            {dropdownMenuItems.map((item, index) => (
              <a
                key={index}
                className="py-1.5 text-sm font-semibold text-[#383A85] cursor-pointer hover:text-[#1a1c5a] transition-colors duration-200 w-full text-left"
                href={item.href}
              >
                {item.label}
              </a>
            ))}

            <div
              className={`mt-4 h-9 w-full flex justify-start items-center bg-[#C7E7F8] rounded-full transition-transform duration-200 shadow-[3px_3px_8px_rgba(0,0,0,0.3)] ${
                hoverStates.kontak
                  ? "shadow-[4px_4px_10px_rgba(0,0,0,0.4)] scale-105"
                  : ""
              } ${activeButton === "kontak" ? "scale-95" : ""}`}
              onMouseEnter={() => handleHover("kontak", true)}
              onMouseLeave={() => handleHover("kontak", false)}
              onClick={toggleMenu}
            >
              <a
                href="https://shor.by/TISFTUI"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleButtonClick("kontak")}
                className={`text-sm font-semibold transition-colors duration-200 bg-none border-none cursor-pointer px-3 ${
                  hoverStates.kontak ? "text-[#1a1c5a]" : "text-[#383A85]"
                }`}
              >
                Kontak
              </a>
            </div>

            <div
              className={`mt-2 h-9 w-full flex justify-start items-center bg-[#C7E7F8] rounded-full transition-transform duration-200 shadow-[3px_3px_8px_rgba(0,0,0,0.3)] ${
                hoverStates.booklet
                  ? "shadow-[4px_4px_10px_rgba(0,0,0,0.4)] scale-105"
                  : ""
              } ${activeButton === "booklet" ? "scale-95" : ""}`}
              onMouseEnter={() => handleHover("booklet", true)}
              onMouseLeave={() => handleHover("booklet", false)}
              onClick={toggleMenu}
            >
              <a
                href="https://drive.google.com/drive/folders/1bWBgFXwuoodlvGAO4BKrAJTEPMG9GkLM"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm font-semibold transition-colors duration-200 bg-none border-none cursor-pointer px-3 ${
                  hoverStates.booklet ? "text-[#1a1c5a]" : "text-[#383A85]"
                }`}
                onClick={() => handleButtonClick("booklet")}
              >
                Download Booklet
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Mobile;
