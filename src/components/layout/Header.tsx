'use client'
import React, { useState, useEffect } from 'react';
import Mobile from './Mobile';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeButton, setActiveButton] = useState<String | null>(null);
  const [hoverStates, setHoverStates] = useState<{
    booklet: boolean;
    kontak: boolean;
    menu: boolean;
    dropdownItems: { [key: string]: boolean };
  }>({
    booklet: false,
    kontak: false,
    menu: false,
    dropdownItems: {},
  });
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
    setTimeout(() => setActiveButton(null), 300);
  };

  const handleHover = (buttonName: string, isHovering: boolean) => {
    setHoverStates(prev => ({ ...prev, [buttonName]: isHovering }));
  };

  const handleDropdownHover = (item: string, isHovering: boolean) => {
    setHoverStates(prev => ({
      ...prev,
      dropdownItems: {
        ...prev.dropdownItems,
        [item]: isHovering,
      },
    }));
  };

  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      
      
      if (currentScrollPos <= 0) {
        setVisible(true);
        setPrevScrollPos(currentScrollPos);
        return;
      }

      
      setVisible(
        (prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || 
        currentScrollPos < 10
      );

      
      if (Math.abs(prevScrollPos - currentScrollPos) > 10) {
        setIsMenuOpen(false);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible]);

    const [isMobile, setIsMobile] = useState(false);

  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); 
    };

    checkMobile(); 

    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) {
    return <Mobile />; 
  }

  return (
    <header
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '1rem',
        paddingTop: '2rem',
        backgroundColor: 'white',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'transform 0.3s ease-in-out',
        transform: visible ? 'translateY(0)' : 'translateY(-100%)',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '1.5rem',
          marginRight: 'auto',
          paddingRight: '5rem',
          height: '4rem',
        }}
      >
        <div
          style={{
            paddingRight: '30rem',
            paddingLeft: '2rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            src="/assets/staffs/images/Logo TIS FTUI.png"
            alt="TIS FTUI Logo"
            width={140}
            height={140}
          />
        </div>

        
        <div
          style={{
            height: '3rem',
            width: '18rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#C7E7F8',
            borderRadius: '3rem',
            boxShadow: hoverStates.booklet
              ? '6px 6px 12px rgba(0, 0, 0, 0.4)'
              : '4px 4px 10px rgba(0, 0, 0, 0.3)',
            transition: 'transform 0.2s, box-shadow 0.2s',
            transform:
              activeButton === 'booklet'
                ? 'scale(0.95)'
                : hoverStates.booklet
                ? 'scale(1.05)'
                : 'none',
          }}
          onMouseEnter={() => handleHover('booklet', true)}
          onMouseLeave={() => handleHover('booklet', false)}
        >
          <button
            style={{
              color: hoverStates.booklet ? '#1a1c5a' : '#383A85',
              fontWeight: 'bold',
              fontSize: '1.3rem',
              transition: 'color 0.2s',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
            onClick={() => handleButtonClick('booklet')}
          >
            Download Booklet
          </button>
        </div>

        
        <div
          style={{
            height: '3rem',
            width: '10rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#C7E7F8',
            borderRadius: '3rem',
            boxShadow: hoverStates.kontak
              ? '6px 6px 12px rgba(0, 0, 0, 0.4)'
              : '4px 4px 10px rgba(0, 0, 0, 0.3)',
            transition: 'transform 0.2s, box-shadow 0.2s',
            transform:
              activeButton === 'kontak'
                ? 'scale(0.95)'
                : hoverStates.kontak
                ? 'scale(1.05)'
                : 'none',
          }}
          onMouseEnter={() => handleHover('kontak', true)}
          onMouseLeave={() => handleHover('kontak', false)}
        >
          <button
            style={{
              color: hoverStates.kontak ? '#1a1c5a' : '#383A85',
              fontWeight: 'bold',
              fontSize: '1.3rem',
              transition: 'color 0.2s',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
            onClick={() => handleButtonClick('kontak')}
          >
            Kontak
          </button>
        </div>

        
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <div
            style={{
              position: 'relative',
              height: '3rem',
              zIndex: 2,
              width: '14rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#FFFD80',
              borderRadius: '3rem',
              boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.3)',
              padding: '0 0.5rem',
              transition: 'transform 0.2s',
              transform:
                activeButton === 'menu'
                  ? 'scale(0.95)'
                  : hoverStates.menu
                  ? 'scale(1.02)'
                  : 'none',
            }}
            onMouseEnter={() => handleHover('menu', true)}
            onMouseLeave={() => handleHover('menu', false)}
          >
            <button
              style={{
                borderRadius: '1rem',
                border: 'none',
                zIndex: 2,
                marginRight: '1.5rem',
                color: hoverStates.menu ? '#1a1c5a' : '#383A85',
                fontWeight: 'bold',
                fontSize: '1.3rem',
                transition: 'color 0.2s',
                background: 'none',
                cursor: 'pointer',
              }}
            >
              TIS FTUI
            </button>

            <button
              onClick={toggleMenu}
              style={{
                position: 'absolute',
                right: '0rem',
                backgroundColor: '#383A85',
                borderRadius: '2rem',
                border: 'none',
                padding: '0.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '2px',
                height: '3rem',
                width: '3rem',
                cursor: 'pointer',
                transition: 'transform 0.3s',
                transform: hoverStates.menu ? 'rotate(90deg)' : 'none',
              }}
            >
              <div
                style={{
                  width: '1.2rem',
                  height: '2.5px',
                  backgroundColor: '#F3B334',
                  transform: isMenuOpen
                    ? 'rotate(45deg) translate(4px, 4px)'
                    : 'none',
                  transition: 'transform 0.3s',
                }}
              />
              <div
                style={{
                  width: '1.2rem',
                  height: '2.5px',
                  backgroundColor: '#F3B334',
                  opacity: isMenuOpen ? 0 : 1,
                  transition: 'opacity 0.3s',
                }}
              />
              <div
                style={{
                  width: '1.2rem',
                  height: '2.5px',
                  backgroundColor: '#F3B334',
                  transform: isMenuOpen
                    ? 'rotate(-45deg) translate(4px, -4px)'
                    : 'none',
                  transition: 'transform 0.3s',
                }}
              />
            </button>
          </div>

          
          {isMenuOpen && (
            <div
              style={{
                position: 'absolute',
                top: '-2%',
                left: 0,
                backgroundColor: '#FFFD80',
                borderRadius: '2rem',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                padding: '0.5rem 0',
                zIndex: 1,
                animation: 'fadeIn 0.3s ease-out',
                width: '13.5rem',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {['M', 'Tentang Kami', 'Pengurus', 'Galeri', 'Sejarah'].map(
                (item, index, arr) => (
                  <React.Fragment key={item}>
                    <div
                      onMouseEnter={() => handleDropdownHover(item, true)}
                      onMouseLeave={() => handleDropdownHover(item, false)}
                      style={{
                        padding: '0.5rem 1rem',
                        cursor: 'pointer',
                        color: '#383A85',
                        fontWeight: 'bold',
                        transition: 'background-color 0.2s',
                        userSelect: 'none',
                      }}
                    >
                      {item}
                    </div>
                    {index < arr.length - 1 && (
                      <div
                        style={{
                          height: '1px',
                          backgroundColor: '#383A85',
                          margin: '0 1rem',
                          opacity: 0.3,
                        }}
                      />
                    )}
                  </React.Fragment>
                )
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;