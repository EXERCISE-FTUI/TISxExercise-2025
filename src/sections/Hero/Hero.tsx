"use client";
import React from "react";

const Hero = () => {
  return (
    <div
      id="beranda"
      className="relative w-screen h-screen max-w-[2100px] justify-center items-center -mb-12 overflow-visible"
    >
      <div className="absolute inset-0">
        <img
          src="https://res.cloudinary.com/dlbv6554z/image/upload/v1748368452/image_5_1_kyxv7t.png"
          alt="Hero Background"
          className="w-full h-full object-cover object-center max-w-[2100px]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-400/60 via-40% via-gray-300/40 via-60% via-blue-400/60 to-blue-900/90"></div>
      </div>

      {/* CloudLeft */}
      <div
        className="absolute"
        style={{
          left: 0,
          top: "53%",
          width: "13vw",
          minWidth: "120px",
          maxWidth: "260px",
          height: "auto",
          zIndex: 10,
        }}
      >
        <img
          src="https://res.cloudinary.com/dlbv6554z/image/upload/v1748104985/sxwpe4mrtkq8q6kzguy5.png"
          alt="Clouds left"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            opacity: 1,
          }}
        />
      </div>

      {/* CloudRight */}
      <div
        className="absolute md:right-0 right-[-4rem]"
        style={{
          left: "auto",
          top: "50%",
          transform: "translateY(-50%)",
          width: "25vw",
          minWidth: "200px",
          maxWidth: "420px",
          height: "auto",
          zIndex: 10,
        }}
      >
        <img
          src="https://res.cloudinary.com/dlbv6554z/image/upload/v1748107897/awan_kanan_k90wsh.png"
          alt="Clouds right"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            opacity: 1,
          }}
        />
      </div>

      <div className="relative z-30 flex flex-col items-center justify-center w-screen h-full text-left">
        <div className="mb-8 ml-[4%] flex flex-col text-start self-start w-full">
          {/* HEROText */}
          <h1
            className="text-6xl md:text-9xl font-black text-white tracking-tight leading-none pr-4 stroke"
            style={{
              WebkitTextStroke: "4.8px #1c465c",
              color: "white",
              textShadow: "0 8px 24px #171779",
            }}
          >
            TIS FTUI
            <br />
            {/* Year */}
            <span
              className="block"
              style={{
                fontSize: "66.6667%",
                lineHeight: "1",
                WebkitTextStroke: "4px #1c465c",
              }}
            >
              2025
            </span>
          </h1>
        </div>

        <div className="absolute bottom-[-3%] w-[65%] md:w-full h-fit flex flex-col items-center justify-center">
          <div
            className="text-black text-md md:text-xl mb-3 shadow-lg text-center"
            style={{
              backgroundColor: "#FFFD80",
              padding: "3px 20px",
              borderRadius: "16px",
              bottom: "45px",
              zIndex: 30,
            }}
          >
            Link modul KBM semester 1 dapat diakses di bawah:
          </div>
          <div>
            <button
              className="cursor-pointer text-white text-2xl md:text-3xl font-bold py-4 px-12 rounded-full shadow-2xl transform transition-all duration-200 hover:scale-105 hover:shadow-3xl"
              onClick={() => {
                window.open(
                  "https://drive.google.com/drive/folders/1iNvNzQn6kmHPS6gF0cUDucxWiCdHttBf?usp=sharing",
                  "_blank"
                );
              }}
              style={{
                background: "radial-gradient(circle, #F4B132 0%, #FFDD31 100%)",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLButtonElement).style.background =
                  "radial-gradient(circle, #E6A429 0%, #F0D028 100%)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLButtonElement).style.background =
                  "radial-gradient(circle, #F4B132 0%, #FFDD31 100%)";
              }}
            >
              MODUL KBM
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/20 to-transparent"></div>
    </div>
  );
};

export default Hero;
