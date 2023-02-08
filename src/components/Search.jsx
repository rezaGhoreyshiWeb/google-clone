import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import SearchHeader from "./SearchHeader";
import SearchResult from "./SearchResult";

export default function Search() {

  
  return (
    <div>
      <SearchHeader />
      <SearchResult/>
    </div>
  );
}

