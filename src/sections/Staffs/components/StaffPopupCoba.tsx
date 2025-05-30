"use client";
import React, { useEffect, useState, useRef, useCallback } from "react";

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
  onTabChange: (tab: TabType) => void;
}

const StaffPopup: React.FC<StaffPopupProps> = ({
  selectedTab,
  onTabChange,
}) => {
  const [currentDivisionIndex, setCurrentDivisionIndex] = useState(0);
  const [divisions, setDivisions] = useState<DivisionData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageLoadAttempt, setImageLoadAttempt] = useState(0); // Used to force re-render of image on error
  const prevTab = useRef<TabType | null>(null);
  const autoRotateTimer = useRef<NodeJS.Timeout | null>(null);

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
      // If 'image' is a single string for internal/external (not an array),
      // treat as no images for the carousel, or adjust if single image display is desired.
      // To display a single string image: return typeof image === 'string' ? [image] : [];
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
      setCurrentImageIndex(0); // Reset image index
      setImageLoadAttempt(0); // Reset load attempts

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
          // setError(`No divisions found for ${jsonKey}.`); // Optional: more specific error
          console.warn(`No divisions found for ${jsonKey}.`);
        }

        setDivisions(divisionsArray);

        // prevTab.current logic seems to be for resetting index, already handled above
        // if (prevTab.current !== selectedTab) {
        //   setCurrentDivisionIndex(0);
        //   prevTab.current = selectedTab;
        // }
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
    if (autoRotateTimer.current) {
      clearInterval(autoRotateTimer.current);
    }
    if (!isKepalaSekolah && images.length > 1) {
      autoRotateTimer.current = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 5000);
    }
    return () => {
      if (autoRotateTimer.current) {
        clearInterval(autoRotateTimer.current);
      }
    };
  }, [isKepalaSekolah, images]); // images itself can be a dependency

  useEffect(() => {
    // When currentDivision changes (e.g., user navigates or tab changes)
    // reset the current image in the carousel to the first one
    // and reset image load attempts.
    if (currentDivision) {
      // Check if currentDivision is defined
      setCurrentImageIndex(0);
      setImageLoadAttempt(0);
    }
  }, [currentDivision]);

  // Simplified Image Preloader: images is now string[]
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

  const ImagePaginationDots: React.FC = () => {
    const totalImages = images.length;
    if (totalImages <= 1) return null; // Hide if 0 or 1 image

    return (
      <div className="flex justify-center pt-2">
        {images.map((_, index: number) => (
          <span
            key={index}
            className={`w-2 h-2 mx-1 rounded-full cursor-pointer ${
              currentImageIndex === index ? "bg-[#383F96]" : "bg-[#A8ACD8]"
            }`}
            onClick={() => setCurrentImageIndex(index)} // Allow clicking dots
          />
        ))}
      </div>
    );
  };

  const DivisionPaginationDots: React.FC = () => {
    if (divisions.length <= 1) return null; // Hide if 0 or 1 division

    return (
      <div className={`flex justify-center pt-[2%]`}>
        {divisions.map((_, index) => (
          <span
            key={index}
            className={`w-2 h-2 mx-1 rounded-full cursor-pointer ${
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
    { id: "external", label: "Bidang External" },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-[50%] md:h-[85%] lg:h-[80%]">
      {/* Title */}
      <div className="hidden md:flex md:justify-center">
        <h1
          className="md:text-[clamp(10px,4vw,1000px)] font-bold leading-none text-[#383A85] drop-shadow-[0px_0px_5px_#000056] font-poppins"
          style={{
            WebkitTextStroke: `clamp(0.6px, 0.2vw + 0.4px, 3px) #FFF`,
          }}
        >
          PENGURUS TIS FTUI 2025
        </h1>
      </div>

      {/* Tabs */}
      <div className="w-full flex justify-center items-center">
        <div className="flex justify-between gap-[5%] lg:w-[40rem] md:w-[36rem] sm:w-lg xsm1:w-[70%] w-[80%] mt-4 text-sm md:text-md lg:text-lg">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                if (selectedTab !== tab.id) {
                  onTabChange(tab.id);
                }
              }}
              className={`font-bold md:w-[85%] w-1/2 lg:w-[70%] rounded-xl bg-[#C7E7F8] md:py-2 py-1 text-center font-poppins not-italic drop-shadow-[2px_5px_5px_#576972] transition-all duration-300 hover:bg-[#383F96] hover:text-white transform hover:scale-105 ${
                selectedTab === tab.id
                  ? "!bg-[#383F96] text-white"
                  : "text-[#383A85]" // Ensure text color contrast on non-selected
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Navigation Buttons for Divisions */}
      {divisions.length > 1 && (
        <>
          <button
            onClick={handlePrevDivision}
            className="w-[5%] ml-2 absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-10 rounded-full p-2 transition-all duration-300 hover:bg-[#bbbbbb65] text-[#676767] hover:text-[#547e99] hover:font-semibold text-2xl md:text-[300%] font-extralight"
            aria-label="Previous Division"
          >
            {"<"}
          </button>
          <button
            onClick={handleNextDivision}
            className="w-[5%] mr-2 absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-10 rounded-full p-2 transition-all duration-300 hover:bg-[#bbbbbb65] text-[#676767] hover:text-[#547e99] hover:font-semibold text-2xl md:text-[300%] font-extralight"
            aria-label="Next Division"
          >
            {">"}
          </button>
        </>
      )}
      {/* Content Container */}
      <div className="bg-white/10 relative mx-auto mt-5 mb-2 w-[95%] sm1:w-full max-w-full sm1:max-w-screen-sm1 md:max-w-screen-md lg:max-w-screen-lg rounded-xl  text-white backdrop-blur-sm1 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-4 px-2 md:pr-[6%] py-3 md:pt-3">
          {/* Mobile Title & Description */}
          <div className="md:hidden mb-3">
            <h1
              className="text-[#000056] pt-3 text-center italic sm1:text-[clamp(2px,2.5vw,32px)] xsm3:text-[clamp(2px,5vw,32px)] leading-normal"
              style={{
                fontFamily: "Poppins, sans-serif",
                textShadow:
                  "0px 6px 10px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.30)",
              }}
            >
              {isKepalaSekolah ? (
                <span className="font-bold">{currentDivision.name}</span>
              ) : (
                <>
                  <span className="font-normal">{bidangPart} </span>
                  <span className="font-bold">{restOfName}</span>
                </>
              )}
            </h1>
            <p className="text-[#383A85] pb-[1%] text-center font-normal leading-relaxed text-xs sm1:text-[clamp(2px,1.8vw,90px)] xsm1:text-[clamp(2px,2vw,90px)] xsm2:text-[clamp(2px,2.3vw,90px)] xsm3:text-[clamp(5px,2.4vw,90px)] font-poppins xsm1:px-10 px-1">
              {currentDivision.desc}
            </p>
          </div>

          {/* Image Placeholder & Mobile Image Pagination */}
          <div className="w-full flex flex-col items-center md:items-start sm1:h-[39vw] xsm1:h-[40vw] xsm2:h-[55vw] xsm22:h-[60vw] xsm3:h-[65vw] h-[70vw] md:w-full md:h-full relative">
            {images.length > 0 ? (
              <img
                id="staff-photo"
                key={`${currentDivisionIndex}-${currentImageIndex}-${imageLoadAttempt}`} // Force re-render
                src={getImageUrl(images[currentImageIndex])}
                alt={currentDivision.name}
                className='w-full flex justify-self-end rounded-xl border border-navyPurple'
                // className="md:flex md:justify-self-end md:w-[17vw] md:h-full h-[90%] sm1:w-[30%] xsm1:w-[30%] md:object-cover object-contain md:mx-0 mx-auto rounded-[30px] border border-[#383F96]"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  const currentSrc = target.src;
                  const defaultPng = "/assets/Staffs/images/default.png";

                  if (currentSrc.endsWith(defaultPng)) return; // Already fallback, do nothing

                  if (currentSrc.toLowerCase().includes(".jpg")) {
                    // Check for .jpg anywhere (case-insensitive)
                    // Attempt to replace .jpg with .png only once per image "slot"
                    // by checking against the intended source from `images` array
                    const originalSrcFilename = images[currentImageIndex]
                      ?.split(/[\\/]/)
                      .pop();
                    if (
                      originalSrcFilename &&
                      !originalSrcFilename.toLowerCase().endsWith(".png")
                    ) {
                      target.src = getImageUrl(
                        originalSrcFilename.replace(/\.(jpg|jpeg)$/i, ".png")
                      );
                    } else {
                      target.src = defaultPng; // If original wasn't jpg or already tried, go to default
                    }
                  } else {
                    // If not jpg and not default, assume it might be missing extension or other issue
                    target.src = defaultPng;
                  }
                  setImageLoadAttempt((prev) => prev + 1); // Increment to change key
                }}
              />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded-md text-gray-500 md:w-[17vw] md:max-h-full sm1:w-[30%] xsm1:w-[30%] mx-auto">
                No image
              </div>
            )}
            <div className="md:hidden w-full mt-1">
              {" "}
              {/* Ensure dots are below image on mobile */}
              <ImagePaginationDots />
            </div>
          </div>

          {/* Text Content Area (Responsibilities) */}
          <div className="md:col-span-2 col-span-1 flex flex-col gap-1 mt-3 md:mt-0 justify-center items-center">
            {/* Division Name Normal screen*/}
            <h1
              className="text-[#000056] text-center italic lg:text-[1.5rem] md:text-[1.375rem] leading-normal md:block hidden"
              style={{
                fontFamily: "Poppins, sans-serif",
                textShadow:
                  "0px 6px 10px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.30)",
              }}
            >
              {isKepalaSekolah ? (
                <span className="font-bold ">{currentDivision.name}</span>
              ) : (
                <>
                  <span className="font-normal">{bidangPart} </span>
                  <span className="font-bold">{restOfName}</span>
                </>
              )}
            </h1>

            {/* Description Normal screen */}
            <p className="text-[#383A85] text-center font-normal leading-relaxed md:text-sm lg:text-md font-poppins md:block hidden">
              {currentDivision.desc}
            </p>

            {/* Responsibilities Box */}
            <div className="flex flex-col gap-3 rounded-md p-2 font-poppins h-fit text-[#000056] md:mx-0 xsm1:mx-[10%]">
              <div className="bg-[#8ACCEF] w-fit h-fit text-[#000056] rounded-md p-1 mt-2 md:mt-4">
                <h2 className="text-sm md:text-md lg:text-lg sm1:text-[clamp(2px,1.4vw,90px)] xsm1:text-[clamp(2px,1.3vw,90px)] text-[clamp(10px,1.3vw,90px)] text-[#000056] font-bold">
                  Tugas
                </h2>
              </div>
              {currentDivision.responsibility &&
              currentDivision.responsibility.length > 0 ? (
                <div className="bg-[#8accef] rounded-lg pl-3">
                  <ol className="list-decimal p-4">
                    {currentDivision.responsibility.map(
                      (task: string, index: number) => (
                        <li
                          key={index} // If tasks can be reordered/changed, a unique ID would be better
                          className="text-sm md:text-md lg:text-lg sm1:text-[clamp(2px,1.4vw,90px)] xsm1:text-[clamp(2px,1.3vw,90px)] text-[clamp(10px,1.3vw,90px)] text-[#000056]"
                        >
                          {task}
                        </li>
                      )
                    )}
                  </ol>
                </div>
              ) : (
                <p className="text-xs text-center">
                  No responsibilities listed.
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Desktop Image Pagination (appears below image which is on the left) */}
        <div className="hidden md:flex md:flex-col md:items-start md:justify-end pt-2">
          {" "}
          {/* Aligned with image column */}
          <ImagePaginationDots />
        </div>

        {/* Division Pagination Dots (spans across bottom or centered) */}
        <div className="md:col-span-3 flex justify-center w-full mt-2 md:mt-1">
          {" "}
          {/* Central positioning for division dots */}
          <DivisionPaginationDots />
        </div>
      </div>
    </div>
  );
};

export default StaffPopup;
