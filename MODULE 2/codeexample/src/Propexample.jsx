import React from 'react'
import { useState } from 'react'
import Diwali from './Diwali'
export default function Propexample() {
    const [uName, setUname] = useState("")
  return (
    <div>
     <h1>Good Morning! {uName}</h1>
           <h1>Have a nice Day {uName}!</h1>
           <input type='text' 
           onChange={(e)=>setUname(e.target.value)}/>
           <Diwali user={uName}/>
    </div>
  )
}