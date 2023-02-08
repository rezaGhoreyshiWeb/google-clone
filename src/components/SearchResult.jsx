import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";




export default function SearchResult() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchResult, setSearchResult] = useState({});
  const term = searchParams.get("term");
  const searchType = searchParams.get("searchType");
  const search = async function () {
    const result = await getDataFromGoogle(term, searchType);
    setSearchResult(result);
  };
console.log(searchResult)


//   useEffect(() => {
//     search();
//   }, []);


  return (
    <main >
      <div className="w-full max-auto px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52">
        <p className="text-gray-600 text-sm mb-5 mt-3">
          About {searchResult?.searchInformation?.formattedTotalResults} results
          ({searchResult?.searchInformation?.formattedSearchTime}) seconds
        </p>
      </div>
    </main>
  );
}



async function getDataFromGoogle(term, searchType) {
  const data = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=AIzaSyA8Gu1ij-ehiWLYM2_odw9OEIsfuhOtvCM&cx=a46553b58c8e84672&q=${term}${
      searchType && "&searchType=image"
    }`
  );
  const result = await data.json();
  return result;
}
