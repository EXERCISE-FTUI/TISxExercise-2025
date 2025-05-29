'use client'
import React, { useState, useEffect, useRef } from 'react';
import { List, X } from '@phosphor-icons/react';

const Mobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false); 
  const [activeButton, setActiveButton] = useState<string | null>(null);
  const [hoverStates, setHoverStates] = useState<{ kontak: boolean; booklet: boolean }>({
    kontak: false,
    booklet: false,
  });

  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);

  
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

      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        
        setShowHeader(false);
        if (isMenuOpen) {
          setIsMenuOpen(false); 
        }
      } else {
        
        setShowHeader(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen]);

  
  const onMenuTransitionEnd = () => {
    if (!isMenuOpen) {
      setMenuVisible(false);
    }
  };

  return (
    <>
      <style jsx global>{`
        .header-transition {
          transition: transform 0.3s ease, opacity 0.3s ease;
        }
        .menu-transition {
          transition: transform 0.3s ease, opacity 0.3s ease;
        }
      `}</style>

      <header
        className={`flex items-center justify-between p-1 bg-white fixed top-0 left-0 right-0 z-50 shadow-md header-transition`}
        style={{
          transform: showHeader ? 'translateY(0)' : 'translateY(-100%)',
          opacity: showHeader ? 1 : 0,
        }}
      >
        
        <div className="flex justify-center items-center pl-4">
          <img
            src="/assets/staffs/images/Logo TIS FTUI.png"
            alt="TIS FTUI Logo"
            width={100}
            height={100}
            className="w-24 h-24 object-contain"
          />
        </div>

        
        <button
          onClick={toggleMenu}
          className={`border-none p-2 flex flex-col justify-center items-center gap-px h-12 w-12 cursor-pointer transition-transform duration-300 mr-4 ${
            isMenuOpen ? 'rotate-90' : ''
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
            maxHeight: 'calc(100vh - 4rem)',
            transform: isMenuOpen ? 'translateY(0)' : 'translateY(-20px)',
            opacity: isMenuOpen ? 1 : 0,
            pointerEvents: isMenuOpen ? 'auto' : 'none', 
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
            
            {['Tentang Kami', 'Pengurus', 'Galeri', 'Sejarah'].map((item) => (
              <div
                key={item}
                className="py-1.5 text-sm font-semibold text-[#383A85] cursor-pointer hover:text-[#1a1c5a] transition-colors duration-200 w-full text-left"
                onClick={toggleMenu}
              >
                {item}
              </div>
            ))}

            <div
              className={`mt-4 h-9 w-full flex justify-start items-center bg-[#C7E7F8] rounded-full transition-transform duration-200 shadow-[3px_3px_8px_rgba(0,0,0,0.3)] ${
                hoverStates.kontak ? 'shadow-[4px_4px_10px_rgba(0,0,0,0.4)] scale-105' : ''
              } ${activeButton === 'kontak' ? 'scale-95' : ''}`}
              onMouseEnter={() => handleHover('kontak', true)}
              onMouseLeave={() => handleHover('kontak', false)}
              onClick={toggleMenu}
            >
              <button
                className={`text-sm font-semibold transition-colors duration-200 bg-none border-none cursor-pointer px-3 ${
                  hoverStates.kontak ? 'text-[#1a1c5a]' : 'text-[#383A85]'
                }`}
                onClick={() => handleButtonClick('kontak')}
              >
                Kontak
              </button>
            </div>

            <div
              className={`mt-2 h-9 w-full flex justify-start items-center bg-[#C7E7F8] rounded-full transition-transform duration-200 shadow-[3px_3px_8px_rgba(0,0,0,0.3)] ${
                hoverStates.booklet ? 'shadow-[4px_4px_10px_rgba(0,0,0,0.4)] scale-105' : ''
              } ${activeButton === 'booklet' ? 'scale-95' : ''}`}
              onMouseEnter={() => handleHover('booklet', true)}
              onMouseLeave={() => handleHover('booklet', false)}
              onClick={toggleMenu}
            >
              <button
                className={`text-sm font-semibold transition-colors duration-200 bg-none border-none cursor-pointer px-3 ${
                  hoverStates.booklet ? 'text-[#1a1c5a]' : 'text-[#383A85]'
                }`}
                onClick={() => handleButtonClick('booklet')}
              >
                Download Booklet
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Mobile;
