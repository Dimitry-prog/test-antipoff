import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks.ts";
import { getUsers } from "../api/userApi.ts";
import TeamCard from "./TeamCard.tsx";
import { PER_PAGE } from "../utils/constants.ts";
import Loader from "./Loader.tsx";
import Pagination from "./Pagination.tsx";

const TeamList = () => {
  const userList = useAppSelector(state => state.user.userList);
  const status = useAppSelector(state => state.user.status);
  const [page, setPage] = useState<number>(1)
  const dispatch = useAppDispatch();
  const totalPage = userList.length / PER_PAGE;

  useEffect(() => {
    if (!userList.length) {
      dispatch(getUsers());
    }
  }, [userList]);

  if (status === "loading") {
    return <Loader/>
  }

  return (
    <div className="flex-grow flex flex-col gap-8">
      <ul className="px-2 lg:px-20 flex flex-wrap justify-center xl:justify-normal gap-5">
        {userList.slice(page * PER_PAGE - PER_PAGE, page * PER_PAGE).map(user => (
          <li key={user.id}>
            <TeamCard user={user}/>
          </li>
        ))}
      </ul>

      <Pagination page={page} setPage={setPage} totalPage={totalPage}/>
    </div>
  );
};

export default TeamList;