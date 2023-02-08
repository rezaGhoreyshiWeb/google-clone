import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";




export default function SearchResult() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchResult, setSearchResult] = useState([]);
  const term = searchParams.get("term");
  const searchType = searchParams.get("searchType");
  const search = async function () {
    const result = await getDataFromGoogle(term, searchType);
    setSearchResult(result);
  };
console.log(searchResult)
  useEffect(() => {
    search();
  }, []);
  return <div>SearchResult</div>;
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
