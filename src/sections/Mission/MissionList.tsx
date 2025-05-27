type MissionListProps = {
  order: number;
  point: string;
};

const MissionList = ({ order, point }: MissionListProps) => {
  return (
    <div className="relative flex h-auto md:h-28 lg:h-30 mb-5">
      <div className="absolute -left-5 top-1/2 -translate-y-1/2 md:translate-y-0 md:top-0 h-20 md:h-full bg-linear-to-t from-skyBlue/75 to-softBlue/75 rounded-full aspect-square flex items-center">
        <div className="text-5xl md:text-6xl lg:text-7xl bg-white font-bold mx-auto text-center w-[80%] aspect-square rounded-full my-auto italic pe-[8px] text-navyPurple flex items-center">
          <p className="w-full textstroke-white textstrokewidth-[2px]">{order}</p>
        </div>
      </div>

      <div className="w-full flex h-11/12  md:h-10/12 lg:h-8/12 my-auto bg-navyPurple font-semibold ps-18 md:ps-24 lg:ps-28 p-3  rounded-3xl items-center shadow-softBlue shadow-md">
        <p className="text-white text-sm md:text-md">{point}</p>
          </div>
    </div>
  );
};

export default MissionList;
