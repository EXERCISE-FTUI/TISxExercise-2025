"use client";
import { CaretLeft, CaretRight, X } from "@phosphor-icons/react";
import React, { useCallback, useEffect, useRef, useState } from "react";
import StaffImage from "./StaffImage";

type TabType = "kepala" | "internal" | "external";

const tabKeyMap: Record<TabType, string> = {
  kepala: "Kepala Sekolah",
  internal: "Internal",
  external: "Eksternal",
};

interface DivisionData {
  name: string;
  desc: string;
  image: string | string[]; // Image data from JSON
  responsibility: string[];
}

interface StaffPopupProps {
  selectedTab: TabType;
  onTabChange: (tab: TabType | null) => void;
}

const StaffPopup: React.FC<StaffPopupProps> = ({
  selectedTab,
  onTabChange,
}) => {
  const [currentDivisionIndex, setCurrentDivisionIndex] = useState(0);
  const [divisions, setDivisions] = useState<DivisionData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const prevTab = useRef<TabType | null>(null);
  // const autoRotateTimer = useRef<NodeJS.Timeout | null>(null);

  const isKepalaSekolah = selectedTab === "kepala";
  const currentDivision = divisions[currentDivisionIndex];

  // Stable getImageUrl function using useCallback to ensure it's referentially stable if passed as dependency
  const getImageUrl = useCallback((imgPath: string | undefined): string => {
    const basePath = "/assets/Staffs/images/";
    const fallback = "/assets/Staffs/images/default.png";

    if (!imgPath || typeof imgPath !== "string") return fallback;

    const filename = imgPath.split(/[\\/]/).pop(); // Get filename
    if (!filename) return fallback; // Handle empty filename (e.g. if path ends with '/')

    // If filename already has an extension, use it directly
    if (filename.includes(".")) {
      return `${basePath}${filename}`;
    }

    // If no extension, assume .png (as per original logic)
    // The onError handler can try .jpg -> .png if this assumption is wrong for some files
    return `${basePath}${filename}.png`;
  }, []);

  // Refined getImages to always return string[]
  const getImages = useCallback((): string[] => {
    if (!currentDivision || !currentDivision.image) {
      return [];
    }
    const { image } = currentDivision;

    if (isKepalaSekolah) {
      // For 'kepala', expect one primary image.
      // If 'image' is an array, take the first valid string. Otherwise, use the string directly.
      if (Array.isArray(image)) {
        return image.length > 0 && typeof image[0] === "string"
          ? [image[0]]
          : [];
      }
      return typeof image === "string" ? [image] : [];
    } else {
      // For 'internal'/'external', we expect an array of images for a carousel, show up to 2.
      if (Array.isArray(image)) {
        // Filter for actual strings before slicing
        return image.filter((img) => typeof img === "string").slice(0, 2);
      }
      return []; // Current behavior: only arrays of images for internal/external carousel
    }
  }, [currentDivision, isKepalaSekolah]);

  const images = getImages(); // images is now always string[]

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      setDivisions([]); // Clear previous divisions
      setCurrentDivisionIndex(0); // Reset index for new tab
      try {
        const response = await fetch("/assets/Staffs/staffs.resource.json");
        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);
        const staffsResource = await response.json();
        const jsonKey = tabKeyMap[selectedTab];

        if (!jsonKey) {
          setError("Invalid tab selected.");
          return;
        }

        const tabData = staffsResource[jsonKey];
        const divisionsArray: DivisionData[] =
          tabData && tabData.divisions
            ? (Object.values(tabData.divisions) as DivisionData[])
            : [];

        if (divisionsArray.length === 0) {
          console.warn(`No divisions found for ${jsonKey}.`);
        }

        setDivisions(divisionsArray);

      } catch (err) {
        console.error("Failed to fetch staff data:", err);
        if (err instanceof Error) {
          setError(`Failed to load staff data: ${err.message}`);
        } else {
          setError("Failed to load staff data due to an unknown error.");
        }
      } finally {
        setIsLoading(false);
        prevTab.current = selectedTab; // Update prevTab after fetch completes
      }
    };
    fetchData();
  }, [selectedTab]); // Only re-fetch when selectedTab changes

  useEffect(() => {
    images.forEach((imgPath: string) => {
      if (imgPath) {
        // Ensure imgPath is not null or empty
        const img = new Image();
        img.src = getImageUrl(imgPath); // getImageUrl is stable due to useCallback
      }
    });
  }, [images, getImageUrl]);

  const handlePrevDivision = () => {
    setCurrentDivisionIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : divisions.length - 1
    );
  };

  const handleNextDivision = () => {
    setCurrentDivisionIndex((prevIndex) =>
      prevIndex < divisions.length - 1 ? prevIndex + 1 : 0
    );
  };

  const DivisionPaginationDots: React.FC = () => {
    if (divisions.length <= 1) return null; // Hide if 0 or 1 division

    return (
      <div className={`flex justify-center pt-[2%]`}>
        {divisions.map((_, index) => (
          <span
            key={index}
            className={`w-1.5 h-1.5 mx-1 rounded-full cursor-pointer ${
              currentDivisionIndex === index ? "bg-[#383F96]" : "bg-[#A8ACD8]"
            }`}
            onClick={() => setCurrentDivisionIndex(index)} // Allow clicking dots
          />
        ))}
      </div>
    );
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-full">
        Loading divisions...
      </div>
    );
  }
  if (error) {
    return (
      <div className="flex justify-center items-center h-full text-red-500">
        Error: {error}
      </div>
    );
  }
  // This condition should ideally be met if divisions.length is 0 after loading.
  if (!currentDivision && divisions.length === 0 && !isLoading) {
    return (
      <div className="flex justify-center items-center h-full">
        No divisions found for this tab.
      </div>
    );
  }
  // If divisions array is populated but currentDivisionIndex is somehow out of bounds (should not happen with current logic)
  if (!currentDivision && divisions.length > 0) {
    return (
      <div className="flex justify-center items-center h-full">
        Error: Division data issue.
      </div>
    );
  }
  // If there's somehow no currentDivision but also no error and not loading, and divisions exist.
  // This is a fallback, the above conditions should catch most states.
  if (!currentDivision) {
    return (
      <div className="flex justify-center items-center h-full">
        No content available.
      </div>
    );
  }

  const [bidangPart, ...restParts] = currentDivision.name.split(" ");
  const restOfName = restParts.join(" ");

  const tabs: { id: TabType; label: string }[] = [
    { id: "kepala", label: "Kepala Sekolah" },
    { id: "internal", label: "Bidang Internal" },
    { id: "external", label: "Bidang Eksternal" },
  ];

  return (
    <div className="relative z-50 group flex flex-col gap-2 items-center justify-center h-[85%] md:h-[75%] lg:h-fit w-screen md:w-9/10  max-w-screen mx-auto my-auto overflow-hidden rounded-xl p-1 md:p-6 xl:p-10 xl:px-3 bg-[#F4FAFD]">
      {/* judul */}
      <div className="hidden md:flex md:justify-center md:mt-4 lg:mt-1">
        <h1
          className="md:text-5xl lg:text-4xl xl:text-[60px] font-bold leading-none text-[#383A85] drop-shadow-[0px_2px_3px_#000056] font-poppins"
          style={{
            WebkitTextStroke: `clamp(0.2px, 0.16vw + 0.2px, 2.3px) #FFF`,
          }}
        >
          PENGURUS TIS FTUI 2025
        </h1>
      </div>
      {/* tabs bidang */}
      <div className="flex justify-center items-center gap-[5%] w-full text-[10px] md:text-[12px] xl:text-[16px] mt-12 md:mt-0">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              if (selectedTab !== tab.id) {
                onTabChange(tab.id);
              }
            }}
            className={`font-bold w-fit px-2 py-1 rounded-xl bg-[#C7E7F8] text-center font-poppins not-italic drop-shadow-[2px_5px_5px_#576972] transition-all duration-300 hover:bg-[#383F96] hover:text-white transform hover:scale-105 ${
              selectedTab === tab.id
                ? "!bg-[#383F96] text-white"
                : "text-[#383A85]" // Ensure text color contrast on non-selected
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {/* content */}
      <div className="flex flex-col lg:flex-row mt-1.5 lg:mt-0 items-center justify-start lg:justify-center w-9/10 h-full p-1  text-navyPurple">
        {/* nama bidang mobile*/}
        <div className="text-center text-[18px] md:text-[24px] mb-1 italic block lg:hidden">
          {isKepalaSekolah ? (
            <span className="font-bold">{currentDivision.name}</span>
          ) : (
            <>
              <span className="font-normal">{bidangPart} </span>
              <span className="font-bold">{restOfName}</span>
            </>
          )}
        </div>
        {/* desc bidang mobile*/}
        <div className="block lg:hidden w-2/3 mb-1">
          <h1 className="text-[9px] md:text-[12px] text-center font-normal mb-1">
            {currentDivision.desc}
          </h1>
        </div>
        {/* gambar */}
        <div className="flex flex-col items-center justify-center w-2/3 lg:w-1/3">
          {images.length > 0 ? (
            <StaffImage images={images.map((image) => getImageUrl(image))} />
          ) : null}
        </div>
        {/* desc divisi */}
        <div className="w-9/10">
          {/* nama bidang */}
          <div className="text-center text-md italic lg:text-[24px] xl:text-[40px] hidden lg:block">
            {isKepalaSekolah ? (
              <span className="font-extrabold text-[#000056]">
                {currentDivision.name}
              </span>
            ) : (
              <>
                <span className="font-normal">{bidangPart} </span>
                <span className="font-extrabold text-[#000056]">
                  {restOfName}
                </span>
              </>
            )}
          </div>
          {/* desc bidang */}
          <div className="hidden lg:block">
            <h1 className="text-[5px] md:text-[12px] lg:text-[11px] xl:text-[16px] text-center font-normal">
              {currentDivision.desc}
            </h1>
          </div>
          {/* box "tugas" */}
          <div className="w-full flex justify-center lg:justify-start items-center mt-1">
            <div className="w-fit text-[8px] md:text-[12px] lg:text-[11px] xl:text-[16px] font-semibold text-[#000056]">
              <div className="bg-skyBlue p-1 rounded-md mt-1">Tugas</div>
            </div>
          </div>
          {/* responsibilities */}
          <div className="bg-skyBlue p-1 px-2.5 rounded-md w-full text-justify mt-1 text-[8px] leading-none md:text-[12px] lg:text-[10px] xl:text-[16px]">
            <ol className="list-decimal px-4 py-2">
              {currentDivision.responsibility.map(
                (task: string, index: number) => (
                  <li key={index} className="font-normal mb-0.5 text-[#000056]">
                    {task}
                  </li>
                )
              )}
            </ol>
          </div>
          {/* division dot */}
          <div className="md:col-span-3 flex justify-center w-full mt-2 md:mt-1">
            <DivisionPaginationDots />
          </div>
        </div>
      </div>

      {/* Navigation Buttons for Divisions */}
      {divisions.length > 1 && (
        <>
          <button
            onClick={handlePrevDivision}
            className="lg:group-hover:block cursor-pointer lg:hidden w-8 h-8 flex justify-center items-center border border-navyPurple/60 absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-10 rounded-full p-0.5 transition-all duration-300 hover:bg-navyPurple/60 text-navyPurple/60 hover:text-white hover:border-none text-xl font-normal"
            aria-label="Previous Division"
          >
            <CaretLeft size={25} />
          </button>
          <button
            onClick={handleNextDivision}
            className="lg:group-hover:block cursor-pointer lg:hidden w-8 h-8 flex justify-center items-center border border-navyPurple/60 absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-10 rounded-full p-0.5 transition-all duration-300 hover:bg-navyPurple/60 text-navyPurple/60 hover:text-white hover:border-none text-xl font-normal"
            aria-label="Next Division"
          >
            <CaretRight size={25} />
          </button>
        </>
      )}
      <button
        onClick={() => onTabChange(null)}
        className="w-[10%] lg:w-[5%] absolute right-0 lg:right-2 top-6 transform -translate-y-1/2 z-10 rounded-full p-2 transition-all duration-300  text-[#676767] hover:text-navyPurple text-xl font-light hover:font-normal"
        aria-label="Close Popup"
      >
        <X size={24} className="cursor-pointer" />
      </button>
    </div>
  );
};

export default StaffPopup;
