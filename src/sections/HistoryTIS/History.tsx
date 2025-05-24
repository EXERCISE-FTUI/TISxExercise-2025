import React from 'react'
import Image from 'next/image'

const History = () => {
  return (
    <div id="historytis" className="w-screen mt-12">
      <div className="relative flex justify-center">
        <Image
          src="/assets/History/images/Group 809.png"
          alt="History Title"
          width={1000}
          height={500}
          className="max-w-[1000px] relative z-10 -mb-[110px] mr-90"
        />
      </div>


      <div className="bg-[#DCF0FA] pt-[100px] pb-25">
        <div className="flex flex-col items-center">
          <Image
            src="/assets/History/images/pensil.png"
            alt="Pencil"
            width={275}
            height={0}
            className="relative z-30 -mt-[177px] ml-270"
          />


          <div className="flex flex-col items-center">
            <Image
              src="/assets/History/images/2005.png"
              alt="2005"
              width={180}
              height={180}
              className="-mt-[300px] mr-245"
            />
            <div className="mr-32">
              <div className="text-6xl font-bold text-shadow-lg text-[#383A85] -mt-[60px] text-left">
                Awal Mula TIS
              </div>
              <div className="text-3xl w-[600px] text-[#383A85] mt-4 leading-relaxed text-left">
                TIS didirikan pada tanggal 4 Februari 2005 di Depok, Jawa Barat. Kampung Lio, Depok merupakan daerah operasional pertama TIS FTUI.
              </div>
            </div>
          </div>


          <Image
            src="/assets/History/images/garis.png"
            alt="garis"
            width={1000}
            height={1000}
            className="relative z-10 -mt-[85px] ml-85"
          />
          
          
          <div className="flex flex-col items-center mt-15 ml-20">
            <Image
              src="/assets/History/images/2013.png"
              alt="2013"
              width={180}
              height={180}
              className="ml-240"
            />
            <div className="">
              <div className="text-6xl font-bold text-shadow-lg text-[#383A85] -mt-[60px] text-right">
                Perpustakaan Terbuka
              </div>
              <div className="text-3xl w-[500px] text-[#383A85] mt-4 ml-50 leading-relaxed text-right">
                TIS menjadikan Pondok Cina sebagai daerah operasional selanjutnya dengan salah satu fungsinya adalah sebagai perpustakaan terbuka.
              </div>
            </div>
          </div>
          

          <Image
            src="/assets/History/images/garis2.png"
            alt="garisKiri"
            width={1000}
            height={1000}
            className="relative z-10 -mt-[90px] mr-127"
          />


          <div className="flex flex-col items-center mt-6">
            <Image
              src="/assets/History/images/2014.png"
              alt="2014"
              width={180}
              height={180}
              className=" mr-245"
            />
            <div className="mr-45">
              <div className="text-6xl font-bold text-shadow-lg text-[#383A85] -mt-[60px] text-left">
                Pasar Minggu
              </div>
              <div className="text-3xl w-[550px] text-[#383A85] mt-4 leading-relaxed text-left">
                TIS berganti daerah operasional dengan mendirikan sebuah saung kecil di daerah Karang Pola, Pasar Minggu.
              </div>
            </div>
          </div>

          
          <Image
            src="/assets/History/images/garis2.png"
            alt="garisKanan"
            width={1000}
            height={1000}
            className="relative z-10 -mt-[90px] ml-127 transform scale-x-[-1]"
          />

          
          <div className="flex flex-col items-center ml-20">
            <Image
              src="/assets/History/images/2015.png"
              alt="2015"
              width={180}
              height={180}
              className="ml-240"
            />
            <div className="ml-15">
              <div className="text-6xl font-bold text-shadow-lg text-[#383A85] -mt-[60px] text-right">
                Promosi
              </div>
              <div className="text-3xl w-[450px] text-[#383A85] mt-4 ml-50 leading-relaxed text-right">
                TIS menjadi Badan Otonom IKM FTUI.
              </div>
            </div>
          </div>


          <Image
            src="/assets/History/images/garis2.png"
            alt="garisKiri"
            width={1000}
            height={1000}
            className="relative z-10 -mt-[85px] mr-127"
          />


          <div className="flex flex-col items-center mt-6">
            <Image
              src="/assets/History/images/2020.png"
              alt="2020"
              width={180}
              height={180}
              className=" mr-245"
            />
            <div className="mr-58">
              <div className="text-6xl font-bold text-shadow-lg text-[#383A85] -mt-[60px] text-left">
                Manara
              </div>
              <div className="text-3xl w-[500px] text-[#383A85] mt-4 leading-relaxed text-left">
                Ditunjuknya Manara sebagai daerah operasional TIS yang kedua.
              </div>
            </div>
          </div>  


          <Image
            src="/assets/History/images/garis2.png"
            alt="garisKanan"
            width={1000}
            height={1000}
            className="relative z-10 -mt-[90px] ml-127 transform scale-x-[-1]"
          />


          <div className="flex flex-col items-center ml-20">
            <Image
              src="/assets/History/images/2026.png"
              alt="2026"
              width={180}
              height={180}
              className="ml-240"
            />
            <div className="ml-15">
              <div className="text-6xl font-bold text-shadow-lg text-[#383A85] -mt-[60px] text-right">
                Daops Baru
              </div>
              <div className="text-3xl w-[450px] text-[#383A85] mt-4 ml-50 leading-relaxed text-right">
                Daerah operasional “Baru” ditambahkan.
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default History;
