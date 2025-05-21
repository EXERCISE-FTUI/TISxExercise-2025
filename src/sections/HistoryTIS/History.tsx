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
        <div className="flex justify-end">
          <Image
            src="/assets/History/images/pensil.png"
            alt="Pencil"
            width={275}
            height={0}
            className="mr-25 relative z-10 -mt-[185px]"
          />
        </div>
      </div>
    </div>
  );
};

export default History;
