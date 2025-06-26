"use client";

import { usePopup } from "@/contexts/PopupContext";
import { useEffect, useState } from "react";
import FullTeam from "./components/FullTeam";
import StaffPopup from "./components/StaffPopup";

type TabType = "kepala" | "internal" | "external" | null;

const Staffs = () => {
  const [strokeWidth, setStrokeWidth] = useState("2px");
  const [selectedTab, setSelectedTab] = useState<TabType | null>(null);
  const { setPopupVisible } = usePopup();

  useEffect(() => {
    const handleResize = () => {
      setPopupVisible(false); // reset popup visibility on resize
    };
    handleResize(); // run on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleTabClick = (tabName: TabType | null) => {
    setSelectedTab((prev) => (prev === tabName ? null : tabName));
  };

  useEffect(() => {
    setPopupVisible(!!selectedTab);
    return () => setPopupVisible(false); // reset saat unmount
  }, [selectedTab]);

  useEffect(() => {
    const updateStroke = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        setStrokeWidth("4px");
      } else if (window.matchMedia("(min-width: 768px)").matches) {
        setStrokeWidth("2px");
      } else if (window.matchMedia("(min-width: 640px)").matches) {
        setStrokeWidth("0.8px");
      } else {
        setStrokeWidth("0.6px");
      }
    };
    updateStroke();
    window.addEventListener("resize", updateStroke);
    return () => window.removeEventListener("resize", updateStroke);
  }, []);

  useEffect(() => {
    if (selectedTab) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    };
  }, [selectedTab]);

  return (
    <>
      <div id="pengurus" className="min-h-[50%] w-full">
        {/* JUDUL */}
        <div className="flex justify-center px-3 pb-3 bg-[#FFFD80]">
          <h1
            className="text-3xl md:text-5xl lg:text-[90px] text-center font-bold leading-none text-[#383A85] drop-shadow-[0px_1px_2px_#000056] md:drop-shadow-[0px_2px_7px_#000056] font-poppins"
            style={{
              WebkitTextStroke: `${strokeWidth} #FFF`,
            }}
          >
            PENGURUS TIS FTUI 2025
          </h1>
        </div>
        {/* GROUP OPTIONS + IMAGE */}
        <div className="mx-auto mt-[4%] max-w-[86%] h-auto font-bold">
          {/* OPTIONS BAR */}
          <div className="sm:mx-[14%] flex justify-center items-center text-[#383A85] text-xs lg:text-xl xl:text-2xl md:gap-[5%] gap-[8%]">
            <button
              onClick={() => handleTabClick("kepala")}
              className={`rounded-lg bg-[#C7E7F8] p-2 text-center font-poppins not-italic drop-shadow-[2px_5px_5px_#576972] transition-all duration-300 hover:bg-[#383F96] hover:text-white transform hover:scale-105`}
            >
              Kepala Sekolah
            </button>
            <button
              onClick={() => handleTabClick("internal")}
              className={`rounded-lg bg-[#C7E7F8] p-2 text-center font-poppins not-italic drop-shadow-[2px_5px_5px_#576972] transition-all duration-300 hover:bg-[#383F96] hover:text-white transform hover:scale-105`}
            >
              Bidang Internal
            </button>
            <button
              onClick={() => handleTabClick("external")}
              className={`rounded-lg bg-[#C7E7F8] p-2 text-center font-poppins not-italic drop-shadow-[2px_5px_5px_#576972] transition-all duration-300 hover:bg-[#383F96] hover:text-white transform hover:scale-105`}
            >
              Bidang Eksternal
            </button>
          </div>
          {/* CONDITIONAL POPUP */}
          {selectedTab && (
            <div className="fixed inset-0 flex items-center justify-center backdrop-blur-xs bg-black/30 z-40">
              <div
                className="w-screen h-screen flex flex-col items-center justify-center overflow-y-auto overflow-x-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <StaffPopup
                  selectedTab={selectedTab}
                  onTabChange={handleTabClick}
                />
              </div>
            </div>
          )}
          {/* PICTURE */}
          <div className="bg-amber-900 md:rounded-[25.36px] rounded-[7.91px] mt-[7%]">
            <FullTeam />
          </div>
        </div>
      </div>
    </>
  );
};

export default Staffs;
