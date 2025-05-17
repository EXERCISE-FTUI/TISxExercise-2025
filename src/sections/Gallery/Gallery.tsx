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
      <div className="flex justify-center p-12">
        <Image
          src="/assets/Gallery/images/Galeri TIS FTUI 2025.png"
          alt="Gallery Title"
          width={1000}
          height={500}
        />
      </div>
      
      <div className="embla overflow-hidden overflow-x-hidden w-full mb-23 cursor-grab active:cursor-grabbing" ref={emblaRef1}>
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

      <div className="italic font-extrabold text-[#383A85] text-5xl inline-block p-3 px-4 ml-12 relative">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#F2B134] to-[#FFDD31]"></div>
        <div className="absolute inset-1.5 rounded-xl bg-white"></div>
        <span className="relative">Dari tahun ke tahun...</span>
      </div>

      <div className="embla overflow-hidden overflow-x-hidden w-full cursor-grab active:cursor-grabbing" ref={emblaRef2}>
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

      <div className="italic  ml-140 py-4 font-extrabold text-[#383A85] text-4xl inline-block">
        ... Dan untuk banyaknya{" "}
        <span className="inline-block py-1 px-1 pr-3 pb-2 rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-300">
          kenangan yang akan datang!
        </span>
      </div>

    </div>
  )
}

export default Gallery