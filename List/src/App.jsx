import { useState,useEffect } from 'react'
import './App.css'
import User from './User';

function App() {

  let [arr, setArr] = useState([]);
  let [input,setInput] =useState("")


  useEffect( ()=>{
    fetch("https://5ea5ca472d86f00016b4626d.mockapi.io/brotherhood")
    .then( res => res.json())
    .then( data => {
      setArr(data.filter((e)=> e.name.startsWith(input) || e.department.startsWith(input) ))
   } )
  },[input])

  return (
    <>
     <input type="search" 
            name="name" 
            onChange={ e => setInput(e.target.value)} 
            placeholder='Search'/>
     {arr.map( (e)=>{
      return <User e={e} key={e.id} />})}
    </>
  )
}

export default App
