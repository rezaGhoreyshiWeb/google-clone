import React from 'react'
import { useSearchParams } from 'react-router-dom'

export default function Search() {
    const [searchParams, setSearchParams]=useSearchParams()
  return (
    <div>{searchParams.get('term')}</div>
  )
}
