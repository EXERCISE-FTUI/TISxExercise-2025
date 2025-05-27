"use client";

import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { DotButton, useDotButton } from "./CarouselButton";
import Autoplay from "embla-carousel-autoplay";

type RegionProps = {
  options?: EmblaOptionsType;
  isComingSoon?: boolean;
  name?: string;
  subtile?: string;
  images: string[];
  location?: string;
  locationURL?: string;
};

const Region: React.FC<RegionProps> = ({
  options,
  isComingSoon = false,
  name = "",
  subtile = "",
  images,
  location,
  locationURL,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <div className="w-[60%] md:w-[45%] lg:w-[30%] min-h-fit md:h-full my-auto">
      <div className="h-16 text-center">
        {!isComingSoon ? (
          <>
            <h2 className="text-navyPurple font-bold text-3xl md:text-4xl textstroke-white textstrokewidth-[1px] truncate">
              {name || "Unnamed Region"}
            </h2>
            <p className="text-navyPurple text-xl font-semibold truncate">
              {subtile || "(No subtitle)"}
            </p>
          </>
        ) : (
          <p className="text-navyPurple text-2xl font-semibold mt-auto">
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
                  className={`embla__slide__img object-cover h-full w-full${
                    isComingSoon ? " grayscale" : ""
                  }`}
                  src={`/assets/OperationalRegion/images/${encodeURIComponent(
                    value
                  )}`}
                  alt={`Operational Region ${name || "unknown"} - ${index + 1}`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {scrollSnaps.length > 1 && (
          <div className="embla__dots absolute bottom-0 left-0 p-2 flex gap-1">
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

      <div className="text-center text-navyPurple">
        {!isComingSoon ? (
          locationURL ? (
            <a
              href={locationURL}
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {location || "Location not available"}
            </a>
          ) : (
            <p>{location || "Location not available"}</p>
          )
        ) : (
          <p>(dalam proses)</p>
        )}
      </div>
    </div>
  );
};

export default Region;
