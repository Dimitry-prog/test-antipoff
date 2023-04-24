import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks.ts";
import { getUsers } from "../api/userApi.ts";
import TeamCard from "./TeamCard.tsx";

const TeamList = () => {
  const userList = useAppSelector(state => state.user.userList);
  const status = useAppSelector(state => state.user.status);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  if (status === "loading") {
    return <h1>LOADING...</h1>
  }

  return (
    <ul className="px-2 lg:px-20 flex flex-wrap justify-center xl:justify-normal gap-5">
      {userList.map(user => (
        <li key={user.id}>
          <TeamCard user={user}/>
        </li>
      ))}
    </ul>
  );
};

export default TeamList;