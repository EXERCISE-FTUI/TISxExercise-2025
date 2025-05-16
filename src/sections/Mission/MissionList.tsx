import "./Mission.css";

type MissionListProps = {
  order: number;
  point: string;
};

const MissionList = ({ order, point }: MissionListProps) => {
  return (
    <div className="relative h-30">
      <div className="absolute -left-5 top-0 h-full bg-skyBlue/75 rounded-full aspect-square flex items-center">
        <div className="text-7xl bg-white font-bold mx-auto text-center w-[80%] aspect-square rounded-full my-auto italic pe-[8px] textstroke-white text-navyPurple flex items-center">
          <p className="w-full">{order}</p>
        </div>
      </div>

      <div className="w-full flex items-center justify-center h-full">
        <p className="text-white h-[60%] w-full bg-navyPurple font-semibold p-3 ps-28 rounded-2xl text-sm my-auto">
          {point}
        </p>
      </div>
    </div>
  );
};

export default MissionList;
