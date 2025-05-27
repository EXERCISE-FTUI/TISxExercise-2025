"use client";

import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { DotButton, useDotButton } from "./CarouselButton";
import Autoplay from "embla-carousel-autoplay";

type PropType = {
  options?: EmblaOptionsType;
  isComingSoon?: boolean;
  name?: string;
  subtile?: string;
  images: string[];
  location?: string;
  locationURL?: string;
};

const Region: React.FC<PropType> = (props) => {
  const {
    isComingSoon,
    name,
    subtile,
    images,
    options,
    location,
    locationURL,
  } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <div className="w-[60%] md:w-[45%] lg:w-[32%] min-h-fit md:h-full my-auto ">
      <div className="h-16">
        {!isComingSoon ? (
          <>
            <p className="text-navyPurple font-bold text-3xl md:text-4xl text-center textstroke-white textstrokewidth-[1px] ">
              {name}
            </p>
            <p className="text-navyPurple text-center text-xl font-semibold">
              ({subtile})
            </p>
          </>
        ) : (
          <p className="text-navyPurple text-center text-2xl font-semibold mt-auto">
            Akan mendatang
          </p>
        )}
      </div>

      <div className="embla overflow-hidden w-full rounded-xl relative my-5">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container h-[250px] flex rounded-xl">
            {images.map((value, index) => (
              <div
                className="embla__slide flex-none w-full h-full min-w-0"
                key={index}
              >
                <img
                  className={"embla__slide__img object-cover h-full w-full".concat(
                    isComingSoon ? " grayscale" : ""
                  )}
                  src={`/assets/OperationalRegion/images/${value}`}
                  alt={`Operational Region ${name} - ${index}`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="embla__dots absolute bottom-0 left-0 p-2">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              selected={selectedIndex === index}
            />
          ))}
        </div>
      </div>

      {!isComingSoon ? (
        <a href={locationURL}>
          <p className="text-center text-navyPurple underline">{location}</p>
        </a>
      ) : (
        <p className="text-center text-navyPurple">(dalam proses)</p>
      )}
    </div>
  );
};

export default Region;
