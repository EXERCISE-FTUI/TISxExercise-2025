"use client";

import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { DotButton, useDotButton } from "./CarouselButton";
import Autoplay from "embla-carousel-autoplay";

type StaffProps = {
  options?: EmblaOptionsType;
  images: string[];
};

const StaffImage: React.FC<StaffProps> = ({
  options,
  images,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <div className="w-4/5 lg:w-3/4 lg:h-full my-auto flex flex-col items-start">
      <div className="embla overflow-hidden w-full rounded-xl my-5">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container h-[210px] md:h-[330px] lg:h-[250px] flex rounded-xl">
            {images.map((value, index) => (
              <div
                className="embla__slide flex-none w-full h-full min-w-0 cursor-grab"
                key={index}
              >
                <img
                  className="embla__slide__img object-cover h-full w-full border-[1.2px] border-navyPurple rounded-xl"
                  src={value} // Corrected: Use 'value' from the map function
                  alt={`Carousel image ${index + 1}`} // Added a more descriptive alt text
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {scrollSnaps.length > 1 && (
        <div className="embla__dots -mt-2 flex gap-1/2">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              selected={selectedIndex === index}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default StaffImage;