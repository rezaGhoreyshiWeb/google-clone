import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ImageResults from "./ImageResults";
import SearchMock from "./SearchMock";
import SearchImageMock from "./SearchImageMock";

export default function SearchResult() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchResult, setSearchResult] = useState(null);
  const term = searchParams.get("term");
  const searchType = searchParams.get("searchType") || '';
  const startIndex = searchParams.get("start") || "1";
  const search = async function () {
    const result = await getDataFromGoogle(term, searchType, startIndex);
    setSearchResult(result);
    
  };

  useEffect(() => {
    search();
  }, [term, startIndex, searchType]);

  if (searchType === "image" && !searchResult) {
    return <SearchImageMock />;
  }

  if (searchType === "image") {
    return <ImageResults searchResult={searchResult} />;
  }

  if (searchType === "" && !searchResult) {
    return <SearchMock />;
  }

  return (
    <div className="row-start-2  w-full max-auto px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52  h-full">
      <>
        <p className="text-gray-600 text-sm mb-5 ">
          About {searchResult?.searchInformation?.formattedTotalResults} results
          ({searchResult?.searchInformation?.formattedSearchTime}) seconds
        </p>
        {/* TODO: change to searchResult. item */}
        {searchResult?.items?.map((result) => {
          return (
            <div key={result.link} className="max-w-xl mb-8">
              <div className="group ">
                <a
                  className="text-sm truncate "
                  href={result.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {result.formattedUrl}
                </a>
                <a
                  className="group-hover:underline decoration-blue-800"
                  href={result.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h2 className="truncate text-xl font-medium text-blue-800 ">
                    {result.title}
                  </h2>
                </a>
              </div>
              <p className="text-gray-600 ">{result.snippet|| 'nist'}</p>
            </div>
          );
        })}
      </>
    </div>
  );
}

async function getDataFromGoogle(term, searchType, startIndex) {
  const data = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=AIzaSyA8Gu1ij-ehiWLYM2_odw9OEIsfuhOtvCM&cx=a46553b58c8e84672&q=${term}${
      searchType && "&searchType=image"
    }&start=${startIndex}`
  );
  const result = await data.json();
 
  if (300 < result.status > 200) {
    return null;
  }
  return result;
}
