import React, { useRef } from 'react'
import {FaPlus} from 'react-icons/fa'

const Additem = ({newItem, setNewItem ,handelSumit} ) => {
  const inputRef = useRef() 
  return (
   <form className='addForm' onSubmit={ handelSumit}>
     <input type='text' id='addItem' ref={inputRef} placeholder='Add Item' value={newItem} onChange={(e) => setNewItem(e.target.value)}></input>
     <button type='submit' aria-label='Add Item' onClick  ={()=> inputRef.current.focus()}> <FaPlus/></button>

   </form>
  )
}

export default Additem
  