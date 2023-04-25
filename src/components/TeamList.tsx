import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks.ts";
import { getUsers } from "../api/userApi.ts";
import TeamCard from "./TeamCard.tsx";
import { PER_PAGE, TOTAL_PAGE } from "../utils/constants.ts";

const TeamList = () => {
  const userList = useAppSelector(state => state.user.userList);
  const status = useAppSelector(state => state.user.status);
  const [page, setPage] = useState<number>(1)
  const dispatch = useAppDispatch();

  const handleSelectPage = (numOfPage: number): void => {
    if (numOfPage >= 1 && numOfPage <= TOTAL_PAGE) {
      setPage(numOfPage);
    }
  }

  useEffect(() => {
    if (!userList.length) {
      dispatch(getUsers());
    }
  }, [userList]);

  if (status === "loading") {
    return <h1 className="flex items-center justify-center">LOADING...</h1>
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

      <ul className="px-2 lg:px-20 flex flex-wrap items-center justify-center gap-5">
        <li>
          <button
            onClick={() => handleSelectPage(page - 1)}
            type="button"
            aria-label="pagination"
            disabled={page === 1}
            className={`${page > 1
              ? "hover:bg-violet"
              : "disabled:opacity-20"} w-8 h-8 flex items-center justify-center rounded-md transition-all duration-500`}
          >
            👈
          </button>
        </li>
        {[...Array(TOTAL_PAGE)].map((_, i) => (
          <li key={i}>
            <button
              onClick={() => handleSelectPage(i + 1)}
              type="button"
              aria-label="pagination"
              className={`${page === i + 1
                ? "bg-violet text-white"
                : ""} w-8 h-8 flex items-center justify-center border border-violet rounded-md hover:bg-violet hover:text-white transition-all duration-500`}
            >
              {i + 1}
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={() => handleSelectPage(page + 1)}
            type="button"
            aria-label="pagination"
            disabled={page === TOTAL_PAGE}
            className={`${page < TOTAL_PAGE
              ? "hover:bg-violet"
              : "disabled:opacity-20"} w-8 h-8 flex items-center justify-center rounded-md transition-all duration-500`}
          >
            👉
          </button>
        </li>
      </ul>
    </div>
  );
};

export default TeamList;