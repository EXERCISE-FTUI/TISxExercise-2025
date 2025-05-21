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

  return (
    <div>
      <div className="flex justify-center p-7 md:p-20">
        <Image
          src="/assets/Gallery/images/Galeri TIS FTUI 2025.png"
          alt="Gallery Title"
          width={1000}
          height={500}
          className="w-3/4 max-w-[900px]"
        />
      </div>
      
      <div className="embla overflow-hidden overflow-x-hidden w-full mb-9 md:mb-23 cursor-grab active:cursor-grabbing" ref={emblaRef1}>
        <div className="embla__container flex">
          {images1.map((src, index) => (
            <div key={index} className="embla__slide flex-none w-[20vh] md:w-[73vh] mr-3.5 md:mr-11 relative h-[14vh] md:h-[46vh] rounded-sm md:rounded-xl overflow-hidden">
              <Image 
                src={src}
                alt={`Gallery image ${index + 1}`}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 80vw, 40vw"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="italic font-extrabold text-[#383A85] text-xs md:text-5xl inline-block p-1 md:p-3 px-2 pr-4 md:px-4 ml-4 md:ml-12 relative mb-2 md:mb-8">
        <div className="absolute inset-0 rounded-md md:rounded-3xl bg-gradient-to-r from-[#F2B134] to-[#FFDD31]"></div>
        <div className="absolute inset-0.5 md:inset-1.5 rounded-md md:rounded-2xl bg-white"></div>
        <span className="relative">Dari tahun ke tahun... </span>
      </div>

      <div className="embla overflow-hidden overflow-x-hidden w-full cursor-grab active:cursor-grabbing" ref={emblaRef2}>
        <div className="embla__container flex">
          {images2.map((src, index) => (
            <div key={index} className="embla__slide flex-none w-[20vh] md:w-[73vh] mr-3.5 md:mr-11 relative h-[14vh] md:h-[46vh] rounded-sm md:rounded-xl overflow-hidden">
              <Image 
                src={src}
                alt={`Gallery image ${index + 1}`}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 80vw, 40vw"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="w-full px-4 md:px-12">
        <div className="italic py-2 md:py-12 font-extrabold text-[#383A85] text-xs md:text-4xl text-right">
          ... Dan untuk banyaknya{" "}
          <span className="inline-block pr-1 md:px-1 md:py-1 md:pr-3 md:pb-2 rounded-md md:rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-300">
            kenangan yang akan datang!
          </span>
        </div>
      </div>

    </div>
  )
}

export default Gallery