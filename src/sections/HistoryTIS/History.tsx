import React from 'react'
import Image from 'next/image'

const History = () => {
  return (
    <div id="historytis" className="w-screen mt-12">
      <div className="relative">
        <Image
          src="/assets/History/images/Group 809.png"
          alt="History Title"
          width={1000}
          height={500}
          className="ml-21 max-w-[1000px] relative z-10 -mb-[110px]"
        />
      </div>
      <div className="bg-[#DCF0FA] pt-[100px]">
        <div className="flex flex-col items-end">
          <Image
            src="/assets/History/images/pensil.png"
            alt="Pencil"
            width={275}
            height={0}
            className="mr-25 relative z-30 -mt-[177px]"
          />

          <div>
            <Image
              src="/assets/History/images/2005.png"
              alt="2005"
              width={200}
              height={200}
              className="mr-290 -mt-[300px]"
            />

            <div className="text-6xl font-bold text-shadow-lg text-[#383A85] -mt-[60px] ml-55">
              Awal Mula TIS
            </div>

            <div className="text-3xl w-150 text-[#383A85] mt-4 mr-134 leading-relaxed ml-55">
              TIS didirikan pada tanggal 4 Februari 2005 di Depok, Jawa Barat. Kampung Lio, Depok merupakan daerah operasional pertama TIS FTUI.
            </div>
          </div>

          <Image
            src="/assets/History/images/garis.png"
            alt="garis"
            width={1000}
            height={1000}
            className="mr-27 relative z-10 -mt-[85px]"
          />
          
          <div className="mr-16 mt-25">
            <div className="flex items-start justify-between gap-9">
              <div className="text-right">
                <div className="text-6xl font-bold text-shadow-lg text-[#383A85] -mt-[67px]">
                  Perpustakaan Terbuka
                </div>
                <div className="text-3xl w-130 text-[#383A85] mt-4 leading-relaxed ml-45">
                TIS menjadikan Pondok Cina sebagai daerah operasional selanjutnya dengan salah satu fungsinya adalah sebagai perpustakaan terbuka.
                </div>
              </div>
              <Image
                src="/assets/History/images/2013.png"
                alt="2013"
                width={160}
                height={160}
                className="mr-25 -mt-[70px]"
              />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default History;
