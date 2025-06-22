import Image from "next/image";
import fullTeamImage from "/public/assets/Staffs/images/fullTeam.png";

const FullTeam = () => {
  return (
    <div className="w-full">
      <Image
        src={fullTeamImage}
        alt="Full Team"
        width={800}
        height={600}
        className="w-full h-auto"
      />
    </div>
  );
};

export default FullTeam;
