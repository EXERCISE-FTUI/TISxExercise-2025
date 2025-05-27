'use client';
import React, { useEffect, useState } from 'react';

const WhatIsTIS = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // Background container with gradient
    <div 
      id="what-is-tis" 
      className="relative w-full overflow-hidden"
      style={{ 
        height: '160vh',
        background: 'linear-gradient(to bottom, #ADD0E8, #F4FAFD)'
      }}
    >
      {/* Sun decoration */}
      <div 
        className="absolute z-10 transition-transform duration-100 ease-out"
        style={{
          bottom: '25%',
          right: '5%',
          width: '30%',
          height: '30%',
          transform: `translateX(${-scrollY * 0.15}px)`
        }}
      >
        <img 
          src="https://res.cloudinary.com/dlbv6554z/image/upload/v1748365567/Group_749_b1r4tq.png"
          alt="Sun decoration"
          className="object-contain"
        />
      </div>

      {/* Animated cloud decoration */}
      <div 
        className="absolute bottom-0 left-50 z-[5] transition-transform duration-100 ease-out"
        style={{
          width: '150%',
          transform: `translateX(${-scrollY * 0.3}px)`
        }}
      >
        <img 
          src="https://res.cloudinary.com/dlbv6554z/image/upload/v1748117524/l3u0espw0o0hgnzmaf69.png"
          alt="Cloud decoration"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Main content wrapper */}
      <div 
        className="relative z-20 flex items-center justify-center h-full px-8"
        style={{ paddingBottom: '560px' }}
      >
        {/* Content container with logo and text */}
        <div 
          className="flex items-center"
          style={{ maxWidth: '900px', gap: '32px' }}
        >
          {/* Logo section */}
          <div className="flex-shrink-0">
            {/* Circular logo container with shadow */}
            <div 
              className="flex items-center justify-center bg-white rounded-full"
              style={{
                width: '240px',
                height: '240px',
                boxShadow: '0 0 48px rgba(0, 0, 0, 0.25)'
              }}
            >
              {/* TIS FTUI logo image */}
              <img 
                src="https://res.cloudinary.com/dlbv6554z/image/upload/v1748120319/Logo_TIS_FTUI_Original_1_ddwmx4.png"
                alt="TIS FTUI Logo"
                className="object-contain"
                style={{ width: '240px', height: '240px' }}
              />
            </div>
          </div>

          {/* Text content section */}
          <div className="flex-1 text-left">
            {/* Main heading with styled text */}
            <h1 
              className="font-extrabold leading-none"
              style={{ fontSize: '3rem', marginBottom: '24px' }}
            >
              {/* Styled heading text with white outline using stroke */}
              <span
                className="font-bold inline-block"
                style={{
                  color: '#FCBB45',
                  WebkitTextStroke: '2.3px white',
                  textStroke: '3px white',
                  filter: 'drop-shadow(0 0 8px rgba(0,0,0,0.1))'
                }}
              >
                Apa itu TIS FTUI?
              </span>
            </h1>
            
            {/* Description text container */}
            <div style={{ maxWidth: '520px' }}>
              {/* Main description paragraph */}
              <p 
                className="font-medium"
                style={{
                  color: '#2B5AA0',
                  fontSize: '1.125rem',
                  lineHeight: '1.75'
                }}
              >
                <span className="font-bold">Technique Informal School</span>, badan otonom di <span className="font-bold">Fakultas Teknik Universitas Indonesia</span>, adalah jembatan mimpi untuk anak-anak dari keluarga marginal. Tanpa biaya, tanpa batas, kami hadir membawa asa pendidikan ke <span className="font-bold">Kampung Pemulung, Karang Pola, dan Manara Pasar Minggu</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhatIsTIS