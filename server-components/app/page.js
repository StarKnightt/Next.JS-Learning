// "use client" //to use client components

// import {useState, useEffect} from 'react'
import fs from "fs/promises"
import Navbar from '@/component/Navbar'

export default function Home() {
  // const [count, setcount] = useState(0)
  console.log("hey I'm prasen");
  let a = fs.readFile("jsconfig.json");
  a.then(e=>{console.log(e.toString())})
  return (
   <div>
    <Navbar/>
    <h1>Server Components
       {/* {count} */}
    {/* <button onClick={() => setcount(count + 1)}> <br/> (Increment) </button> */}
    </h1>
   </div>
  );
}
