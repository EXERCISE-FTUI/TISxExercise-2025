'use client';
import React, { useEffect, useState, useRef } from 'react';

type TabType = 'kepala' | 'internal' | 'external';

const tabKeyMap: Record<TabType, string> = {
  kepala: 'Kepala Sekolah',
  internal: 'Internal',
  external: 'Eksternal',
};

interface StaffPopupProps {
  selectedTab: TabType;
  onTabChange: (tab: TabType) => void;
}

const StaffPopup: React.FC<StaffPopupProps> = ({ selectedTab, onTabChange }) => {
const [currentDivisionIndex, setCurrentDivisionIndex] = useState(0);
const [divisions, setDivisions] = useState<any[]>([]);
const [isLoading, setIsLoading] = useState(true);
const [error, setError] = useState<string | null>(null);
const [strokeWidth, setStrokeWidth] = useState('0.6px');
const [currentImageIndex, setCurrentImageIndex] = useState(0);
const [isInitialLoad, setIsInitialLoad] = useState(true);
const [imageLoadAttempt, setImageLoadAttempt] = useState(0);
// const [isImageVisible, setIsImageVisible] = useState(true);
const prevTab = useRef<TabType | null>(null);
const autoRotateTimer = useRef<NodeJS.Timeout | null>(null);

const isKepalaSekolah = selectedTab === 'kepala';
const currentDivision = divisions[currentDivisionIndex];

const getImages = () => {
  if (!currentDivision) return [];
  return isKepalaSekolah
    ? [currentDivision.image].filter(Boolean)
    : Array.isArray(currentDivision.image)
      ? currentDivision.image.slice(0, 2)
      : [];
};

const images = getImages();

const getImageUrl = (imgPath: string | undefined): string => {
  const basePath = '/assets/Staffs/images/';
  const fallback = '/assets/Staffs/images/default.png';

  if (!imgPath || typeof imgPath !== 'string') return fallback;

  const filename = imgPath.split(/[\\/]/).pop() || '';
  if (!filename) return fallback;

  if (filename.includes('.')) {
    return `${basePath}${filename}`;
  }

  const pngPath = `${basePath}${filename}.png`;
  const jpgPath = `${basePath}${filename}.jpg`;

  return pngPath;
};

useEffect(() => {
  const updateStroke = () => {
    if (window.matchMedia('(min-width: 1024px)').matches) {
      setStrokeWidth('4px');
    } else if (window.matchMedia('(min-width: 768px)').matches) {
      setStrokeWidth('2px');
    } else if (window.matchMedia('(min-width: 640px)').matches) {
      setStrokeWidth('1px');
    } else {
      setStrokeWidth('0.6px');
    }
  };
  updateStroke();
  window.addEventListener('resize', updateStroke);
  return () => window.removeEventListener('resize', updateStroke);
}, []);

useEffect(() => {
  const fetchData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('/assets/Staffs/staffs.resource.json');
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const staffsResource = await response.json();
      const jsonKey = tabKeyMap[selectedTab];
      if (!jsonKey) {
        setError('Invalid tab selected.');
        setDivisions([]);
        return;
      }
      const tabData = staffsResource[jsonKey];
      const divisionsArray = tabData && tabData.divisions ? Object.values(tabData.divisions) : [];

      if (prevTab.current !== selectedTab) {
        setCurrentDivisionIndex(0);
        prevTab.current = selectedTab;
      }
      setDivisions(divisionsArray);
    } catch (err) {
      console.error('Failed to fetch staff data:', err);
      setError('Failed to load staff data.');
      setDivisions([]);
    } finally {
      setIsLoading(false);
    }
  };
  fetchData();
}, [selectedTab]);

useEffect(() => {
  if (autoRotateTimer.current) {
    clearInterval(autoRotateTimer.current);
  }
  if (!isKepalaSekolah && images.length > 1) {
    autoRotateTimer.current = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % images.length);
    }, 5000);
  }
  return () => {
    if (autoRotateTimer.current) {
      clearInterval(autoRotateTimer.current);
    }
  };
}, [isKepalaSekolah, images.length]);

useEffect(() => {
  if (currentDivision) {
    setCurrentImageIndex(0);
    setIsInitialLoad(true);
    setImageLoadAttempt(0);
  }
}, [currentDivision]);

// useEffect(() => {
//   setIsImageVisible(false);
//   const timeout = setTimeout(() => setIsImageVisible(true), 50);
//   return () => clearTimeout(timeout);
// }, [currentImageIndex]);

useEffect(() => {
  images.forEach((imgPath: string) => {
    const img = new Image();
    img.src = getImageUrl(imgPath);
  });
}, [images]);

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

  // pagination dots 
  const ImagePaginationDots: React.FC<{}> = () => {
    const totalPages = images.length;
    return (
      <div className={`flex justify-center pt-2 ${totalPages <= 1 ? 'hidden' : ''}`}>
        {images.map((_: string, index: number) => (
          <span
            key={index}
            className={`w-2 h-2 mx-1 rounded-full ${
              currentImageIndex === index ? 'bg-[#383F96]' : 'bg-[#A8ACD8]'
            }`}
          />
        ))}
      </div>
    );
  };

  const PaginationDots = () => {
    return (
      <div className={`flex justify-center pt-[2%] ${divisions.length <= 1 ? 'hidden' : ''}`}>
        {divisions.map((_, index) => (
          <span
            key={index}
            className={`w-2 h-2 mx-1 rounded-full ${
              currentDivisionIndex === index ? 'bg-[#383F96]' : 'bg-[#A8ACD8]'
            }`}
          />
        ))}
      </div>
    );
  };

  // Early returns
  if (!currentDivision) {
    return <div>No division found for this tab.</div>;
  }
  if (isLoading) {
    return <div>Loading divisions...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  const [bidangPart, ...restParts] = currentDivision.name.split(' ');
  const restOfName = restParts.join(' ');

  const tabs: { id: TabType; label: string }[] = [
    { id: 'kepala', label: 'Kepala Sekolah' },
    { id: 'internal', label: 'Bidang Internal' },
    { id: 'external', label: 'Bidang External' },
  ];

  return (
    <>
      {/* Title */}
      <div className="hidden md:flex md:justify-center">
        <h1
          className="md:text-[clamp(10px,4vw,10000px)]  font-bold leading-none text-[#383A85] drop-shadow-[0px_0px_5px_#000056] font-poppins"
          style={{
            WebkitTextStroke: `clamp(0.6px, 0.2vw + 0.4px, 3px) #FFF`,
          }}
        >
          PENGURUS TIS FTUI 2025
        </h1>
      </div>

      {/* Tabs */}
      <div className=" place-self-center md:mb-3 mb-[1%] md:mt-[3%]  mt-0 md:mx-[1%] md:max-h-8 max-h-[30px] w-full max-w-md sm1:max-w-[70%] md:max-w-2xl grid md:justify-normal justify-items-center grid-cols-3 text-[#383A85] md:text-[clamp(2px,1.2vw,100px)]  xsm1:text-[clamp(2px,2.15vw,100px)] text-[clamp(2px,2.7vw,100px)] md:gap-[6%] sm1:gap-[10%] gap-[3%]">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              if (selectedTab !== tab.id) {
                onTabChange(tab.id);
              }}}
            className={`font-bold md:w-[85%] w-[70%] rounded-md bg-[#C7E7F8] py-[2%] text-center font-poppins not-italic drop-shadow-[2px_5px_5px_#576972] transition-all duration-300 hover:bg-[#383F96] hover:text-white transform hover:scale-105 ${
              selectedTab === tab.id ? '!bg-[#383F96] text-white' : ''
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Navigation Buttons */}
      {divisions.length > 1 && (
        <>
          <button
            onClick={handlePrevDivision}
            className="w-[5%] ml-2 absolute left-4 top-1/2 transform -translate-y-1/2 z-10 rounded-full transition-all duration-300 hover:bg-[#bbbbbb65] text-[#676767] hover:text-[#547e99] hover:font-semibold text-[300%] font-extralight"
            aria-label="Previous Division"
          >
            {'<'}
          </button>
          <button
            onClick={handleNextDivision}
            className="w-[5%] mr-2 absolute right-4 top-1/2 transform -translate-y-1/2 z-10 rounded-full transition-all duration-300 hover:bg-[#bbbbbb65] text-[#676767] hover:text-[#547e99] hover:font-semibold text-[300%] font-extralight"
            aria-label="Next Division"
          >
            {'>'}
          </button>
        </>
      )}

      {/* Content Container */}
      <div className="relative mx-auto mt-5 max-w-full sm1:max-w-screen-sm1 md:max-w-screen-md lg:max-w-screen-lg rounded-xl bg-white/10 text-white backdrop-blur-sm1">
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-4 px-0 md:pr-[6%] md:pt-3">
          {/* If small screen */}
          <h1
              className="text-[#000056] pt-3 text-center italic sm1:text-[clamp(2px,2.5vw,32px)] xsm3:text-[clamp(2px,5vw,32px)] leading-normal md:hidden visible "
              style={{
                fontFamily: 'Poppins, sans-serif',
                textShadow: '0px 6px 10px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.30)',
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
            <p className="text-[#383A85] pb-[1%] text-center font-normal leading-relaxed md:text-[clamp(2px,1vw,90px)] sm1:text-[clamp(2px,1.8vw,90px)] xsm1:text-[clamp(2px,2vw,90px)] xsm2:text-[clamp(2px,2.3vw,90px)] xsm3:text-[clamp(5px,2.4vw,90px)] text-[clamp(5px,2vw,90px)]  font-poppins md:hidden visible xsm1:px-10 px-1">
              {currentDivision.desc}
            </p>

          {/* Image Placeholder */}
          <div className="w-full sm1:h-[39vw] xsm1:h-[40vw] xsm2:h-[55vw] xsm22:h-[60vw] xsm3:h-[65vw] h-[70vw] rounded-md aspect-auto md:aspect-square md:w-full md:h-full relative md:content-normal content-center">
            {/* actual iamge */}
            {images.length > 0 ? (
              <img
                id="staff-photo"
                key={`${currentDivisionIndex}-${currentImageIndex}-${imageLoadAttempt}`}
                src={getImageUrl(images[currentImageIndex])}
                alt={currentDivision.name}
                className="md:flex md:justify-self-end md:w-[17vw] md:h-full h-[100%] md:max-h-full sm1:w-[30%] xsm1:w-[30%] max-h-[90%] md:object-cover object-cover md:mx-0 mx-auto rounded-[30px] border border-[#383F96] shadow-[0px_0px_34.5px_0px_rgba(0,0,0,0.25)]" 
                style={{
                  opacity: 1,
                  // transition: 'opacity 200ms ease-in-out',
                  background: 'lightgray no-repeat',
                  backgroundPosition: '-59.171px -213.966px',
                  backgroundSize: '125.796% 142.286%',
                }}
                onError={(e) => {
                  const target = e.currentTarget;
                  const currentSrc = target.src;

                  if (currentSrc.endsWith('.jpg')) {
                    target.src = currentSrc.replace('.jpg', '.png');
                  } else if (!currentSrc.endsWith('default.png')) {
                    target.src = '/assets/Staffs/images/default.png';
                  }

                  setImageLoadAttempt(prev => prev + 1);
                }}
              />
            ) : (
              <div className=" bg-gray-200 flex items-center justify-center rounded-md">
                <span className="text-gray-500">No image available</span>
              </div>
            )}
            <div className='md:hidden block'><ImagePaginationDots /></div>
          </div>
          

          {/* Text Content Area */}
          <div className="md:col-span-2 col-span-1 flex flex-col gap-1">
            {/* Division Name Normal screen*/}
            <h1
              className="text-[#000056] text-center italic text-[clamp(2px,2vw,32px)] leading-normal md:block hidden"
              style={{
                fontFamily: 'Poppins, sans-serif',
                textShadow: '0px 6px 10px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.30)',
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
            <p className="text-[#383A85] text-center font-normal leading-relaxed text-[clamp(2px,1vw,20px)] font-poppins md:block hidden">
              {currentDivision.desc}
            </p>

            <div className="bg-[#8ACCEF] text-[#000056] rounded-md pl-2 pr-2 p-1 place-self-start md:mx-0 mx-auto mt-4">
              <h2 className="md:text-[clamp(2px,1.2vw,90px)] sm1:text-[clamp(2px,1.4vw,90px)] xsm1:text-[clamp(2px,1.3vw,90px)] text-[clamp(10px,1.3vw,90px)] text-[#000056] font-bold">Tugas</h2>
            </div>

            {/* Responsibilities Box */}
            <div className="bg-[#8ACCEF] rounded-md p-2 font-poppins h-[100%] content-center text-[#000056] md:mx-0 xsm1:mx-[10%]">
              <ol className="list-decimal md:pl-5 pl-[4%]">
                {currentDivision.responsibility.map((task: string, index: number) => (
                  <li key={index} className="md:text-[clamp(2px,1vw,90px)] sm1:text-[clamp(2px,1.4vw,90px)] xsm1:text-[clamp(2px,1.8vw,90px)] xsm2:text-[clamp(2px,2vw,90px)] xsm3:text-[clamp(5px,2.4vw,90px)] text-[clamp(5px,2.4vw,90px)] font-normal">
                    {task}
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <div className='md:block hidden mr-[30%]'><ImagePaginationDots /></div>
          <PaginationDots />
        </div>
      </div>


    </>
  );
};

export default StaffPopup;