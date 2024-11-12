// app/page.js

"use client";
import Image from "next/image";

export default function Home() {
  const handleClick = async () => {
    // Define the data to send in the request
    let data = {
      name: "starknight",
      role: "Coder"
    };

    // Send a POST request to the API route
    let response = await fetch("/api/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    // Parse and log the JSON response from the server
    let result = await response.json();
    console.log(result);
  };

  return (
    <div>
      <h1 className="text-xl font-bold">Next.js API Routes Demo</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
