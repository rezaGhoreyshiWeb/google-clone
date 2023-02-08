import React from 'react'
import { useSearchParams } from 'react-router-dom'
import SearchHeader from './SearchHeader'

export default function Search() {
    const [searchParams, setSearchParams]=useSearchParams()
  return (
    <div>
      <SearchHeader inputValueFromParams={searchParams.get('term')} setSearchParams={setSearchParams}/>
    </div>
  );
}
