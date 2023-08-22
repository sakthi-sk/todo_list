import React from 'react'
import './serch.css'

const SearchItem = ({search,setSearch}) => {
  return (
    <form id='form' onSubmit={(e)=>e.preventDefault()}>
    <input id="search" type='text' placeholder='search' value={search} onChange={(e)=> setSearch(e.target.value)} ></input>

    </form>
  )
}

export default SearchItem
