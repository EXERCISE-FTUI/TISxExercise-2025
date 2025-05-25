type MissionListProps = {
  order: number;
  point: string;
};

const MissionList = ({ order, point }: MissionListProps) => {
  return (
    <div className="relative flex h-30">
      <div className="absolute -left-5 top-0 h-full bg-linear-to-t from-skyBlue/75 to-softBlue/75 rounded-full aspect-square flex items-center">
        <div className="text-7xl bg-white font-bold mx-auto text-center w-[80%] aspect-square rounded-full my-auto italic pe-[8px] text-navyPurple flex items-center">
          <p className="w-full textstroke-white textstrokewidth-[2px]">{order}</p>
        </div>
      </div>

      <div className="w-full flex h-8/12 my-auto bg-navyPurple font-semibold ps-28 p-3  rounded-3xl items-center shadow-softBlue shadow-md">
        <p className="text-white text-sm">{point}</p>
          </div>
    </div>
  );
};

export default MissionList;
