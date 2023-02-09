import React from "react";

export default function SearchImageMock() {
  const searchResult = new Array(10).fill(1);
  return (
    <div className="mt-4 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 space-x-4 space-y-3">
        {searchResult?.map((result, index) => (
          <div className=" animate-pulse" key={index}>
            <div className=" w-full bg-gray-300 h-60 " />

            <div className="mt-3 h-14 bg-gray-200 "></div>
          </div>
        ))}
      </div>
    </div>
  );
}
