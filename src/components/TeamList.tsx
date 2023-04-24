import LogoutIcon from "../assets/LogoutIcon.tsx";
import { useEffect, useState } from "react";
import { BREAKPOINT_DESKTOP } from "../utils/constants.ts";
import ArrDownIcon from "../assets/ArrDownIcon.tsx";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks.ts";
import { getUsers } from "../api/userApi.ts";
import TeamCard from "./TeamCard.tsx";

const TeamList = () => {
  const [resize, setResize] = useState<number | null>(null);
  const isDesktop = resize !== null && resize >= BREAKPOINT_DESKTOP;
  const userList = useAppSelector(state => state.user.userList);
  const status = useAppSelector(state => state.user.status);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  useEffect(() => {
    const handleResize = () => setResize(window.innerWidth);
    window.addEventListener('resize', handleResize);

    const timeOut = setTimeout(() => {
      handleResize();
    }, 3000);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeOut);
    }
  }, []);

  if (status === "loading") {
    return <h1>LOADING...</h1>
  }

  return (
    <section className="pb-8 lg:pb-16 flex flex-col gap-8 lg:gap-12">
      <div
        className="relative px-5 py-16 flex flex-col gap-4 items-center bg-violet"
      >
        <button type="button" aria-label="back"
                className="lg:px-4 lg:py-2 absolute top-4 right-4 lg:top-[15%] lg:right-[5%] text-gray-light lg:border border-gray-light rounded-lg hover:opacity-70 transition-all duration-500">
          {isDesktop ? 'Выход' : <LogoutIcon/>}
        </button>
        <h1 className="text-2xl text-white lg:text-3xl">Наша команда</h1>
        <p className="text-base leading-[19px] text-center text-gray-light lg:text-lg">
          Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые
          ложатся на их
          плечи, и умеющие находить выход из любых, даже самых сложных ситуаций.
        </p>
      </div>
      <ul className="px-2 lg:px-20 flex flex-wrap justify-center xl:justify-normal gap-5">
        {userList.map(user => (
          <li key={user.id}>
            <TeamCard user={user}/>
          </li>
        ))}
      </ul>
      <button type="button" aria-label="load more"
              className="lg:mt-3 px-4 py-2 self-center flex items-center gap-3 border rounded-lg hover:opacity-70 transition-all duration-500">
        Показать еще
        <ArrDownIcon/>
      </button>
    </section>
  );
};

export default TeamList;