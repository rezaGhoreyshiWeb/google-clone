import React from "react";
import { useSearchParams } from "react-router-dom";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

export default function Pagination() {
  const [searchParams, setSearchParams] = useSearchParams();
  const startIndex = +searchParams.get("start") || 1;

  return (
    <div className="text-blue-700 flex max-auto  sm:pl-[5%] md:pl-[14%] lg:pl-52 px-9 pb-4  justify-between sm:justify-start sm:space-x-44 sm:px-0 ">
      {startIndex > 10 && (
        <div
          className="cursor-pointer flex flex-col items-center hover:underline"
          onClick={() =>
            setSearchParams({
              term: searchParams.get("term"),
              searchType: searchParams.get("searchType"),
              start: `${startIndex - 10}`,
            })
          }
        >
          <ChevronLeftIcon className="h-5" />
          <p>Previous</p>
        </div>
      )}

      {startIndex < 90 && (
        <div
          className="cursor-pointer flex flex-col items-center hover:underline"
          onClick={() =>
            setSearchParams({
              term: searchParams.get("term"),
              searchType: searchParams.get("searchType"),
              start: `${startIndex + 10}`,
            })
          }
        >
          <ChevronRightIcon className="h-5" />
          <p>Next</p>
        </div>
      )}
    </div>
  );
}
