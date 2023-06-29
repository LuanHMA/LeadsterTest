import { Dispatch, SetStateAction } from "react";

interface PaginationProps {
  pageNumber: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

export function Pagination({ pageNumber, setCurrentPage }: PaginationProps) {
  return (
    <div className="flex items-center justify-center mt-10 ">
      <span>Página </span>
      <div className="flex justify-center">
        {Array.from(Array(pageNumber), (_, index) => {
          return (
            <button
              value={index}
              className="m-3"
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
