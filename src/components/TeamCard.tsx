import LikeActiveIcon from "../assets/LikeActiveIcon.tsx";
import LikeInactiveIcon from "../assets/LikeInactiveIcon.tsx";
import { Link } from "react-router-dom";
import { TUser } from "../types/userTypes.ts";
import { useState } from "react";

type TTeamCardProps = {
  user: TUser;
}

const TeamCard = ({ user }: TTeamCardProps) => {
  const { id, first_name, last_name, avatar } = user;
  const fullName = `${first_name} ${last_name}`;
  const [isLike, setIsLike] = useState<boolean>(false);

  return (
    <div className="min-w-[305px] pt-9 pb-5 px-5 flex flex-col gap-4 items-center rounded-[10px] shadow-md">
      <Link to={`/team/${id}`} className="flex flex-col gap-4">
        <img src={avatar} alt={fullName}
             className="w-[124px] h-[124px] object-cover rounded-[100px]"/>
        <h3 className="text-lg text-center">{fullName}</h3>
      </Link>
      <button
        onClick={() => setIsLike(!isLike)}
        type="button"
        aria-label="like"
        className="self-end rounded bg-gray-light hover:bg-white transition-all duration-500">
        {isLike ? <LikeActiveIcon/> : <LikeInactiveIcon/>}
      </button>
    </div>
  );
};

export default TeamCard;