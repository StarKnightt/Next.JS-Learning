"use client"

import {useState, useEffect} from 'react'

export default function Home() {
  const [count, setcount] = useState(0)
  return (
   <div>
    <h1>Server Components {count}

    </h1>
   </div>
  );
}
