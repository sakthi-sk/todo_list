import React from 'react'


import ListItems from './ListItems'

const Content = ({items , change , hdelete}) => {

   

  
  
  return (
<main>

  {items.length ? (
   
   <ul>
       {items.map( (item) => (
       <ListItems
        item={item}
        key = {item.id}
         change ={ change}
        hdelete = {hdelete}
        
       
       />
       ))}

   </ul>

   ): (
    <p> NO item </p>
   )}
   
</main>
   
        
    
  )
}

export default Content