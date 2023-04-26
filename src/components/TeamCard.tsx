import LikeActiveIcon from "../assets/LikeActiveIcon.tsx";
import LikeInactiveIcon from "../assets/LikeInactiveIcon.tsx";
import { Link } from "react-router-dom";
import { TUserCurrent } from "../types/userTypes.ts";
import { useAppDispatch } from "../hooks/reduxHooks.ts";
import { userActions } from "../store/slices/userSlice.ts";

type TTeamCardProps = {
  user: TUserCurrent;
}

const TeamCard = ({ user }: TTeamCardProps) => {
  const { id, fullName, avatar, isLike } = user;
  const dispatch = useAppDispatch();

  const handleToggleLike = (id: number): void => {
    dispatch(userActions.toggleLike({ id }));
  }

  return (
    <div className="min-w-[305px] pt-9 pb-5 px-5 flex flex-col gap-4 items-center rounded-[10px] shadow-md">
      <Link to={`/team/${id}`} className="flex flex-col gap-4">
        <img src={avatar} alt={fullName}
             className="w-[124px] h-[124px] object-cover rounded-[100px]"/>
        <h3 className="text-lg text-center">{fullName}</h3>
      </Link>
      <button
        onClick={() => handleToggleLike(id)}
        type="button"
        aria-label="like"
        className="self-end rounded bg-gray-light hover:bg-white transition-all duration-500"
      >
        {isLike ? <LikeActiveIcon/> : <LikeInactiveIcon/>}
      </button>
    </div>
  );
};

export default TeamCard;