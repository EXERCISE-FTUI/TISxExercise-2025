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
      style={{
        position: 'relative',
        width: '100vw',
        height: '145vh',
        background: 'linear-gradient(to bottom, #ADD0E8, #F4FAFD)',
        overflow: 'hidden'
      }}
    >
      {/* Sun decoration */}
      <div 
        style={{
          position: 'absolute',
          bottom: '25%',
          right: '10%',
          width: '30%',
          height: '30%',
          zIndex: '6',
          transform: `translateX(${-scrollY * 0.2}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <img 
          src="https://res.cloudinary.com/dlbv6554z/image/upload/v1748365567/Group_749_b1r4tq.png"
          alt="Sun decoration"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain'
          }}
        />
      </div>

      {/* Animated cloud decoration */}
      <div 
        style={{
          position: 'absolute',
          bottom: '0',
          left: '0',
          width: '200%',
          height: '50%',
          zIndex: '5',
          transform: `translateX(${-scrollY * 0.5}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <img 
          src="https://res.cloudinary.com/dlbv6554z/image/upload/v1748117524/l3u0espw0o0hgnzmaf69.png"
          alt="Cloud decoration"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain'
          }}
        />
      </div>

      {/* Main content wrapper */}
      <div style={{
        position: 'relative',
        zIndex: '10',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        paddingLeft: '32px',
        paddingRight: '32px',
        paddingTop: '0',
        paddingBottom: '480px'
      }}>
        {/* Content container with logo and text */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '32px',
          maxWidth: '900px'
        }}>
          {/* Logo section */}
          <div style={{ flexShrink: '0' }}>
            {/* Circular logo container with shadow */}
            <div style={{
              width: '240px',
              height: '240px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 48px rgba(0, 0, 0, 0.25)',
              backgroundColor: '#fff',
              borderRadius: '50%',
            }}>
              {/* TIS FTUI logo image */}
              <img 
                src="https://res.cloudinary.com/dlbv6554z/image/upload/v1748120319/Logo_TIS_FTUI_Original_1_ddwmx4.png"
                alt="TIS FTUI Logo"
                style={{
                  width: '240px',
                  height: '240px',
                  objectFit: 'contain'
                }}
              />
            </div>
          </div>

          {/* Text content section */}
          <div style={{ flex: '1', textAlign: 'left' }}>
            {/* Main heading with styled text */}
            <h1 style={{
              fontSize: '3rem',
              fontWeight: 'extra-bold',
              marginBottom: '24px',
              lineHeight: '1'
            }}>
              {/* Styled heading text with white outline using stroke */}
              <span
                style={{
                  color: '#FCBB45',
                  WebkitTextStroke: '2.3px white',
                  textStroke: '3px white',
                  fontWeight: 'bold',
                  display: 'inline-block',
                  filter: 'drop-shadow(0 0 8px rgba(0,0,0,0.1))'
                }}
              >
                Apa itu TIS FTUI?
              </span>
            </h1>
            
            {/* Description text container */}
            <div style={{ maxWidth: '520px' }}>
              {/* Main description paragraph */}
              <p style={{
                color: '#2B5AA0',
                fontSize: '1.125rem',
                lineHeight: '1.75',
                fontWeight: '500'
              }}>
                <span style={{ fontWeight: 'bold' }}>Technique Informal School</span>, badan otonom di <span style={{ fontWeight: 'bold' }}>Fakultas Teknik Universitas Indonesia</span>, adalah jembatan mimpi untuk anak-anak dari keluarga marginal. Tanpa biaya, tanpa batas, kami hadir membawa asa pendidikan ke <span style={{ fontWeight: 'bold' }}>Kampung Pemulung, Karang Pola, dan Manara Pasar Minggu</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhatIsTIS