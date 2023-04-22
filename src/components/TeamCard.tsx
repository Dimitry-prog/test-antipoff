import LikeActiveIcon from "../assets/LikeActiveIcon.tsx";
import LikeInactiveIcon from "../assets/LikeInactiveIcon.tsx";

const TeamCard = () => {
  const isLike = false;
  return (
    <div className="max-w-[305px] pt-9 pb-5 px-5 flex flex-col gap-4 items-center rounded-[10px] shadow-md">
      <img src="https://reqres.in/img/faces/2-image.jpg" alt="partner"
           className="w-[124px] h-[124px] object-cover rounded-[100px]"/>
      <h3 className="text-lg">Артур Королёв</h3>
      <button type="button" aria-label="like"
              className="rounded bg-gray-light hover:bg-white transition-all duration-500">
        {isLike ? <LikeActiveIcon/> : <LikeInactiveIcon/>}
      </button>
    </div>
  );
};

export default TeamCard;