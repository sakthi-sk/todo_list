import React from 'react'
import {FaTrashAlt}  from 'react-icons/fa'

const ListItems = ({ item, change , hdelete}) => {
  return (
     <li className='item'  >
        
          <input type='checkbox'checked={item.checked} onChange={ () => change (item.id)}></input>
          <label style={item.checked ? {textDecoration:'line-through'}:null} onClick={() => change (item.id)}>{item.item}</label>
         <FaTrashAlt role='button' onClick={ ()=> hdelete(item.id)} / >
        
   </li>
  )
}

export default ListItems
