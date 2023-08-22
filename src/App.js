import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import './index.css' ;
import Demo from "./Demo";
import { useEffect, useState } from 'react'
import Additem from "./Additem";
import SearchItem from "./SearchItem";
  


function App(){
  const APLI_URL ="http://localhost:3500/items"

  const [items, setItems] = useState([])
    

   const [newItem,setNewItem] =useState('')

   const [search,setSearch] = useState('')

   useEffect(()=>{
   const fetchItems = async ()=>{
    try {
      const response =  await fetch(APLI_URL)
      const listItem = await response.json()
      setItems(listItem)

    }
      catch(err){
        console.log(err.stack);
    
   }
   

   }  
      (async () => await fetchItems())()
 

   },[])

   const addItem = (item)=>{
    const id = items.length ? items[items.length-1].id+1 :1

     let addNewItem = { id, checked:false, item}
     let listItem =[...items,addNewItem]
     setItems(listItem)
  
     localStorage.setItem('todo_list',JSON.stringify(listItem))
   }
    
   let change = (id) =>{
     let  listItem = items.map( (item) => 

      item.id===id ? { ...item,  checked: !item.checked }: item)
        
     setItems(listItem)
     localStorage.setItem('todo_list',JSON.stringify(listItem))
    
   
   }

   

   function hdelete(id) {
    let listItem = items.filter((item)=> 
      item.id !==id )
      setItems(listItem)
     localStorage.setItem('todo_list',JSON.stringify(listItem))
    
  
   }
    

   const handelSumit =(e)=>{
    e.preventDefault()
    if(!newItem) return;
    console.log(newItem)
    addItem(newItem)
   setNewItem('')
   }

   

   




 
  return(
   <div>

    <Header
    lenght = {items.length}
     />
     <Additem
      newItem={newItem}
      setNewItem ={setNewItem}
      handelSumit={handelSumit}
      addItem={addItem}
     />
     
     <SearchItem
     search={search}
      setSearch={setSearch}
     />

     <Content
     items = {items.filter(item=> ((item.item).toLowerCase()).includes(search.toLowerCase()))}
     
     change ={ change}
     hdelete = {hdelete}
     
    


     /> 

   
    <Footer/>

     {/* <Demo/> */}
   
     
      
    </div>

    
  );
}
 
export default App;



