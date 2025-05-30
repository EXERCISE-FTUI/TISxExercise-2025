import React from "react";
import Image from "next/image";

const History = () => {
  return (
    <div id="sejarah" className="w-full mt-7 md:mt-12">
      <div className="relative flex justify-center">
        <Image
          src="/assets/History/images/Group 809.png"
          alt="History Title"
          width={1000}
          height={500}
          className="w-68 md:w-[1000px] relative z-10 -mb-[30px] md:-mb-[110px] mr-25 md:mr-0 lg:mr-90"
        />
      </div>

      <div className="bg-[#DCF0FA] pt-[100px] pb-15 md:pb-35">
        <div className="flex flex-col items-center">
          <Image
            src="/assets/History/images/pensil.png"
            alt="Pencil"
            width={275}
            height={0}
            className="w-20 md:w-[275px] md:scale-60 scale-100 lg:scale-100 relative z-30 -mt-[115px] md:-mt-[100px] lg:-mt-[177px] ml-69 md:ml-[43rem] lg:ml-270"
          />
          {/* 1 */}
          <div className="flex flex-col items-center">
            <Image
              src="/assets/History/images/2005.png"
              alt="2005"
              width={180}
              height={180}
              className="w-17 md:w-[180px] mt-[-90px] md:-mt-[380px] lg:-mt-[300px] mr-58 md:mr-[32rem] lg:mr-245"
            />
            <div className="mr-12 md:mr-72 lg:mr-32 mt-0 lg:mt-0 md:mt-24">
              <div className="text-xl md:text-[2.5rem] lg:text-[3.5rem] font-bold text-shadow-lg text-[#383A85] ml-20 md:ml-0 mt-[-24px] md:-mt-[67px] text-left">
                Awal Mula TIS
              </div>
              <div className="text-xs md:text-[1.6rem] lg:text-[2rem] w-63 md:w-[400px] lg:w-[600px] text-[#383A85] mt-2.5 md:mt-0 leading-normal text-left">
                TIS didirikan pada tanggal 4 Februari 2005 di Depok, Jawa Barat.
                Kampung Lio, Depok merupakan daerah operasional pertama TIS
                FTUI.
              </div>
            </div>
          </div>
          <Image
            src="/assets/History/images/garis.png"
            alt="garis"
            width={1000}
            height={1000}
            className="h-12 md:h-max w-80 md:w-[1000px] relative z-10 -mt-[16px] md:-mt-[85px] ml-5 md:ml-85"
          />

          {/* 2 */}
          <div className="flex flex-col items-center md:mt-0 lg:mt-15 mr-10 md:mr-12 md:ml-20">
            <Image
              src="/assets/History/images/2013.png"
              alt="2013"
              width={180}
              height={180}
              className="w-15 md:w-[180px] ml-67 md:ml-[31rem] lg:ml-240 pb-24"
            />
            <div className="ml-2 md:ml-0 -mt-24 md:mt-0 lg:-mt-24">
              <div className="text-xl md:text-[2.5rem] lg:text-[3.5rem] font-bold text-shadow-lg text-[#383A85] mr-18 md:mr-0 -mt-[25px] md:-mt-[65px] text-right">
                Perpustakaan Terbuka
              </div>
              <div className="text-xs md:text-[1.6rem] lg:text-[2rem] w-[320px] md:w-[500px] text-[#383A85] md:ml-50 leading-normal mt-1 md:mt-0 text-right">
                TIS menjadikan Pondok Cina sebagai daerah operasional
                selanjutnya dengan salah satu fungsinya adalah sebagai
                perpustakaan terbuka.
              </div>
            </div>
          </div>

          <Image
            src="/assets/History/images/garis2.png"
            alt="garisKiri"
            width={1000}
            height={1000}
            className="h-8 md:h-max w-80 md:w-[1000px] relative z-10 mt-3 md:-mt-[85px] mr-23 md:mr-135"
          />

          <div className="flex flex-col items-center  md:mt-6">
            <Image
              src="/assets/History/images/2014.png"
              alt="2014"
              width={180}
              height={180}
              className="w-15 md:w-[180px] mr-59 md:mr-[34rem] lg:mr-245 mt-0 lg:mt-0 md:mt-[-24px]"
            />
            <div className=" md:mr-32 md:mt-20 lg:mt-0">
              <div className="text-xl md:text-[2.5rem] lg:text-[3.5rem] font-bold text-shadow-lg text-[#383A85] ml-20 md:ml-0 -mt-6 md:-mt-[67px] text-left">
                Pasar Minggu
              </div>
              <div className="text-xs md:text-[1.6rem] lg:text-[2rem] w-75 md:w-[600px] text-[#383A85] mt-1 md:mt-0 leading-normal text-left">
                TIS berganti daerah operasional dengan mendirikan sebuah saung
                kecil di daerah Karang Pola, Pasar Minggu.
              </div>
            </div>
          </div>

          <Image
            src="/assets/History/images/garis2.png"
            alt="garisKanan"
            width={1000}
            height={1000}
            className="h-8 md:h-max w-80 md:w-[1000px] relative z-10 -mt-4 md:-mt-[90px] ml-23 md:ml-127 transform scale-x-[-1]"
          />

          <div className="flex flex-col items-center ml-8 md:ml-20 md:mt-0 mr-10 md:mr-12">
            <Image
              src="/assets/History/images/2015.png"
              alt="2015"
              width={180}
              height={180}
              className="w-15 md:w-[180px] ml-50 md:ml-132 lg:ml-240"
            />
            <div className="ml-10 md:ml-15 mt-0 lg:mt-0 md:mt-22">
              <div className="text-xl md:text-[2.5rem] lg:text-[3.5rem] font-bold text-shadow-lg text-[#383A85] mr-17 md:mr-0 -mt-6 md:-mt-[72px] text-right">
                Promosi
              </div>
              <div className="text-xs md:text-[1.6rem] lg:text-[2rem] md:w-[450px] text-[#383A85] md:ml-50 leading-normal text-right">
                TIS menjadi Badan Otonom IKM FTUI.
              </div>
            </div>
          </div>

          <Image
            src="/assets/History/images/garis2.png"
            alt="garisKiri"
            width={1000}
            height={1000}
            className="h-8 md:h-max w-80 md:w-[1000px] relative z-10 -mt-1 md:-mt-[85px] mr-23 md:mr-135"
          />

          <div className="flex flex-col items-center md:mt-6">
            <Image
              src="/assets/History/images/2020.png"
              alt="2020"
              width={180}
              height={180}
              className="w-15 md:w-[180px] mr-59 md:mr-[34rem] lg:mr-245 mt-0 lg:mt-0 md:mt-[-24px]"
            />
            <div className="mr-24 md:mr-56 mt-0 lg:mt-0 md:mt-20">
              <div className="text-xl md:text-[2.5rem] lg:text-[3.5rem] font-bold text-shadow-lg text-[#383A85] ml-20 md:ml-0 -mt-6 md:-mt-[70px] text-left">
                Manara
              </div>
              <div className="text-xs md:text-[1.6rem] lg:text-[2rem] w-50 md:w-[500px] mt-1 md:mt-0 text-[#383A85] leading-normal text-left">
                Ditunjuknya Manara sebagai daerah operasional TIS yang kedua.
              </div>
            </div>
          </div>

          <Image
            src="/assets/History/images/garis2.png"
            alt="garisKanan"
            width={1000}
            height={1000}
            className="h-8 md:h-max w-80 md:w-[1000px] relative z-10 -mt-4 md:-mt-[90px] ml-23 md:ml-127 transform scale-x-[-1]"
          />

          <div className="flex flex-col items-center ml-8 md:ml-20 mt-1.5 md:mt-0 mr-10 md:mr-12">
            <Image
              src="/assets/History/images/2026.png"
              alt="2026"
              width={180}
              height={180}
              className="w-15 md:w-[180px] ml-50 md:ml-132 lg:ml-240"
            />
            <div className="ml-10 md:ml-15 mt-0 lg:mt-0 md:mt-22">
              <div className="text-xl md:text-[2.5rem] lg:text-[3.5rem] font-bold text-shadow-lg text-[#383A85] mr-21 md:mr-0 -mt-6 md:-mt-[70px] text-right">
                Daops Baru
              </div>
              <div className="text-xs md:text-[1.6rem] lg:text-[2rem] md:w-[450px] text-[#383A85] md:ml-50 leading-normal text-right">
                Daerah operasional {"Baru"} ditambahkan.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
