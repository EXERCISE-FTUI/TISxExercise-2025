import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      backgroundImage: 'url("/assets/staffs/images/Background.png")',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      padding: '2rem 0',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'flex-start',
      gap: '2rem',
      flexWrap: 'wrap'
    }}>
      <div style={{
        flex: '0 0 180px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <img
          src="/assets/staffs/images/Logo TIS FTUI.png"
          alt="Technique Informal School Logo"
          style={{ width: 150, height: 130 }}
        />
      </div>
      <div style={{
        flex: '1 1 350px',
        color: '#222',
        fontFamily: 'inherit',
        fontSize: '1.1rem'
      }}>

        <div style={{
          marginBottom: '1rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <img src="/assets/staffs/images/LocationLogo.png" alt="Location" style={{ width: 24, height: 24 }} />
          <a
            style={{
              color: '#222',
              textDecoration: 'underline'
            }}
            target="_blank" rel="noopener noreferrer"
            href="https://goo.gl/maps/someLocationLink"
          >
            Faculty of Engineering, University of Indonesia, Jl. Prof. DR. Ir Roosseno, Kukusan, Beji, Depok City, West Java 16425
          </a>
        </div>
        <div style={{
          marginBottom: '0.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <img src="/assets/staffs/images/EmailLogo.png" alt="Email" style={{ width: 24, height: 24 }} />
          <span>tistui2025@gmail.com</span>
        </div>
        <div style={{
          marginBottom: '1rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <img src="/assets/staffs/images/WhatsAppLogo.png" alt="WhatsApp" style={{ width: 24, height: 24 }} />
          <span>085388277808</span>
        </div>
        <div style={{ fontWeight: 600, marginTop: '2rem', color: '#222', fontSize: '1.1rem' }}>
          © 2025 Technique Informal School FTUI
        </div>
      </div>
      <div style={{
        flex: '0 0 200px',
        textAlign: 'center'
      }}>
        <div style={{
          fontWeight: 700,
          fontSize: '1.15rem',
          marginBottom: '1rem',
          color: '#222'
        }}>
          Sosial Media Kami
        </div>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <a href="#" aria-label="YouTube">
            <img src="/assets/staffs/images/YoutubeLogo.png" alt="YouTube" style={{ width: 36, height: 36 }} />
          </a>
          <a href="#" aria-label="TikTok">
            <img src="/assets/staffs/images/TikTokLogo.png" alt="TikTok" style={{ width: 36, height: 36 }} />
          </a>
          <a href="#" aria-label="LinkedIn">
            <img src="/assets/staffs/images/LinkedInLogo.png" alt="LinkedIn" style={{ width: 36, height: 36 }} />
          </a>
          <a href="#" aria-label="Instagram">
            <img src="/assets/staffs/images/InstagramLogo.png" alt="Instagram" style={{ width: 36, height: 36 }} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
