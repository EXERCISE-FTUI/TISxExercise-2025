"use client"

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'

export function Gallery() {
  const [emblaRef] = useEmblaCarousel({
    dragFree: true,
    loop: true,
    align: 'center',
    slidesToScroll: 1
  })

  const images = [
    '/assets/Gallery/images/IMG_1418.png',
    '/assets/Gallery/images/IMG_1411.png',
    '/assets/Gallery/images/IMG_1410.png',
    '/assets/Gallery/images/IMG_1416.png',
    '/assets/Gallery/images/IMG_1417.png',
    '/assets/Gallery/images/IMG_1421.png',
    '/assets/Gallery/images/IMG_0814 1.png',
    '/assets/Gallery/images/IMG_1419.png',
    '/assets/Gallery/images/IMG_1413.png',
    '/assets/Gallery/images/IMG_1414.png',
  ]

  // Define width classes for each image
  const imageWidths: Record<string, string> = {
    '/assets/Gallery/images/IMG_1418.png': 'w-2/5',
    '/assets/Gallery/images/IMG_1411.png': 'w-2/5',
    '/assets/Gallery/images/IMG_1410.png': 'w-2/5',
    '/assets/Gallery/images/IMG_1416.png': 'w-2/5',
    '/assets/Gallery/images/IMG_1417.png': 'w-2/5',
    '/assets/Gallery/images/IMG_1421.png': 'w-2/5',
    '/assets/Gallery/images/IMG_0814 1.png': 'w-2/5',
    '/assets/Gallery/images/IMG_1419.png': 'w-1/2',
    '/assets/Gallery/images/IMG_1413.png': 'w-2/5',
    '/assets/Gallery/images/IMG_1414.png': 'w-2/5',
  }

  return (
    <div className="embla overflow-hidden overflow-x-hidden w-4/5 mx-auto" ref={emblaRef}>
      <div className="embla__container flex">
        {images.map((src, index) => (
          <div key={index} className={`embla__slide flex-none ${imageWidths[src]} px-2 mr-11 relative h-[45vh] rounded-xl overflow-hidden`}>
            <Image 
              src={src}
              alt={`Gallery image ${index + 1}`}
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={index === 0}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery