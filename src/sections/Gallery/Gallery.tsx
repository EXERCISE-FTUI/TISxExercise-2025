"use client"

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'

export function Gallery() {
  const [emblaRef1] = useEmblaCarousel({
    dragFree: true,
    loop: true,
    align: 'center',
    slidesToScroll: 1
  })

  const [emblaRef2] = useEmblaCarousel({
    dragFree: true,
    loop: true,
    align: 'center',
    slidesToScroll: 1
  })

  const images1 = [
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

  const images2 = [
    '/assets/Gallery/images/IMG_1389.png',
    '/assets/Gallery/images/IMG_1391.png',
    '/assets/Gallery/images/IMG_1396.png',
    '/assets/Gallery/images/IMG_1400.png',
    '/assets/Gallery/images/IMG_1403.png',
    '/assets/Gallery/images/IMG_1390.png',
    '/assets/Gallery/images/IMG_1404.png',
    '/assets/Gallery/images/IMG_1405.png',
    '/assets/Gallery/images/IMG_1383.png',
    '/assets/Gallery/images/IMG_1388.png',
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
    '/assets/Gallery/images/IMG_1389.png': 'w-2/5',
    '/assets/Gallery/images/IMG_1391.png': 'w-2/5',
    '/assets/Gallery/images/IMG_1396.png': 'w-2/5',
    '/assets/Gallery/images/IMG_1400.png': 'w-2/5',
    '/assets/Gallery/images/IMG_1403.png': 'w-2/5',
    '/assets/Gallery/images/IMG_1390.png': 'w-2/5',
    '/assets/Gallery/images/IMG_1404.png': 'w-2/5',
    '/assets/Gallery/images/IMG_1405.png': 'w-2/5',
    '/assets/Gallery/images/IMG_1383.png': 'w-2/5',
    '/assets/Gallery/images/IMG_1388.png': 'w-2/5',
  }

  return (
    <div className="space-y-8">
      <div className="text-center text-8xl font-extrabold text-[#383A85] p-8">
        Galeri TIS FTUI 2025
      </div>
      <div className="embla overflow-hidden overflow-x-hidden w-full" ref={emblaRef1}>
        <div className="embla__container flex">
          {images1.map((src, index) => (
            <div key={index} className={`embla__slide flex-none ${imageWidths[src]} mr-11 relative h-[52vh] rounded-xl overflow-hidden`}>
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

      <div className="embla overflow-hidden overflow-x-hidden w-full" ref={emblaRef2}>
        <div className="embla__container flex">
          {images2.map((src, index) => (
            <div key={index} className={`embla__slide flex-none ${imageWidths[src]} mr-11 relative h-[52vh] rounded-xl overflow-hidden`}>
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
    </div>
  )
}

export default Gallery