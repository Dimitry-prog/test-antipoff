import LikeActiveIcon from "../assets/LikeActiveIcon.tsx";
import LikeInactiveIcon from "../assets/LikeInactiveIcon.tsx";
import { TMember } from "../types";
import { Link } from "react-router-dom";

type TTeamCardProps = TMember;

const TeamCard = ({ id, imgSrc, name }: TTeamCardProps) => {
  const isLike = false;

  return (
    <div className="min-w-[305px] pt-9 pb-5 px-5 flex flex-col gap-4 items-center rounded-[10px] shadow-md">
      <Link to={`/team/${id}`} className="flex flex-col gap-4">
        <img src={imgSrc} alt={name}
             className="w-[124px] h-[124px] object-cover rounded-[100px]"/>
        <h3 className="text-lg">{name}</h3>
      </Link>
      <button type="button" aria-label="like"
              className="self-end rounded bg-gray-light hover:bg-white transition-all duration-500">
        {isLike ? <LikeActiveIcon/> : <LikeInactiveIcon/>}
      </button>
    </div>
  );
};

export default TeamCard;