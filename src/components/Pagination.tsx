import { Dispatch, SetStateAction } from "react";

type TPaginationProps = {
  page: number
  setPage: Dispatch<SetStateAction<number>>
  totalPage: number
}

const Pagination = ({ page, setPage, totalPage }: TPaginationProps) => {

  const handleSelectPage = (numOfPage: number): void => {
    if (numOfPage >= 1 && numOfPage <= totalPage) {
      setPage(numOfPage);
    }
  }

  return (
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
      {[...Array(totalPage)].map((_, i) => (
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
          disabled={page === totalPage}
          className={`${page < totalPage
            ? "hover:bg-violet"
            : "disabled:opacity-20"} w-8 h-8 flex items-center justify-center rounded-md transition-all duration-500`}
        >
          👉
        </button>
      </li>
    </ul>
  );
};

export default Pagination;