import { Dispatch, SetStateAction } from "react";

interface PaginationProps {
  pageNumber: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  currentPage: number;
}

export function Pagination({
  pageNumber,
  setCurrentPage,
  currentPage,
}: PaginationProps) {
  return (
    <div className="flex items-center justify-center mt-6 ">
      <span className="text-md font-semibold text-default-color mr-2 sm:text-lg">
        Página{" "}
      </span>
      <div className="flex justify-center">
        {Array.from(Array(pageNumber), (_, index) => {
          return (
            <button
              value={index}
              className={`mx-1 text-md font-semibold rounded-lg px-3 py-1 border-2  transition-colors duration-300 hover:border-blue-border hover:text-blue sm:text-lg ${
                currentPage === index
                  ? "border-blue-border text-blue"
                  : "border-transparent text-default-color"
              }`}
              onClick={(e) => setCurrentPage(Number(index))}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
}
