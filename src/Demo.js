import { useState } from "react"



function Demo() {
  let [item ,setItem] = useState([
    {
      id:1,
      checked:false,
      item:'coding'
    },

     {
      id:2,
      checked:false,
      item:'play game'
    },

     {
      id:3,
      checked:false,
      item:'go office'
    }
  ])
  let change = (id)=>{

    let listItem = item.map((item) =>
    item.id === id ? {...item ,checked:!item.checked} : item) 
    
   
    setItem(listItem)
  }

  let Delete =(id) =>{
    let listRemove = item.filter((item) =>
    item.id!==id)
    setItem(listRemove)

  }


  return(
    <main>
    {item.length ? (
      <ul>
        {item.map((item) => 
        <li>
          <input type="checkbox" checked={item.checked} onChange={()=> change(item.id)}></input>
          <label style={item.checked ? {textDecoration:'line-through'} : null} onDoubleClick={()=> change(item.id)  } >{item.item}</label>
          <button onClick={()=> Delete(item.id)}>Delete</button>
        </li>)}
      </ul>) : (<p>No list</p>)}
    </main>
  )

    
}

export default Demo