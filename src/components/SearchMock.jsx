import React from "react";

export default function SearchMock() {
    const searchResult = new Array(10).fill(null)
    return (
      <div className="row-start-2  w-full max-auto px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52  h-full animate-pulse ">
        <>
          <p className=" mb-5 mt-5 max-w-sm h-6 rounded-lg  bg-gray-200"></p>
          {/* TODO: change to searchResult. item */}
          {searchResult.map((result, index) => {
            return (
              <div
                key={index}
                className="animate-pulse max-w-xl mb-8 h-44 rounded-lg"
              >
                <div className=" h-16 bg-gray-200 rounded-lg mb-2">
                  
                </div>
                <p className="  h-28 bg-gray-300  rounded-lg"></p>
              </div>
            );
          })}
        </>
      </div>
    );
}