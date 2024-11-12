# Next.js API Routes

In Next.js, **API Routes** allow you to create backend endpoints within your app. These endpoints can handle requests, send or fetch data, perform server-side functions, and more. With API Routes, Next.js can function as both the frontend and backend, making it easy to build full-stack applications.

---

## Table of Contents
1. [What are API Routes?](#what-are-api-routes)
2. [Setting up an API Route](#setting-up-an-api-route)
3. [Example API Route: `api/add/route.js`](#example-api-route-apiaddroutejs)
4. [Frontend Example: `app/page.js`](#frontend-example-apppagejs)

---

## What are API Routes?

API routes in Next.js let you build backend endpoints without needing a separate backend server. These routes can:

1. Fetch or send data.
2. Connect to databases or external APIs.
3. Handle server-side functionality, such as authentication or form submission.

API routes are structured like any other Next.js route and are created as files within the `/pages/api` or `/app/api` directories, depending on your project structure.

---

## Setting up an API Route

API routes are defined within the `/pages/api` or `/app/api` directory. Each file within these directories becomes an individual endpoint, where:

- **File Path**: The path of the file becomes the endpoint’s URL path.
- **Handler Function**: Each API route exports a default handler function that receives the request (`req`) and response (`res`) objects.

In this example, we’ll create an API route at `api/add/route.js` to handle `POST` requests.

---

## Example API Route: `api/add/route.js`

This API route accepts a `POST` request, reads the incoming JSON data, and returns a response.

### Code

```javascript
// api/add/route.js

import { NextResponse } from "next/server";

export async function POST(request) {
    // Parse the JSON data from the request body
    let data = await request.json();
    console.log(data); // Log the data to the console for debugging
    
    // Return a JSON response with a success message and the received data
    return NextResponse.json({ success: true, data });
}
```

### Explanation

- Import NextResponse: We import NextResponse to send JSON responses from the API route.

- POST Method: This function only handles POST requests.
Receive Data: The data variable stores the parsed JSON data from the request body.

- Return Response: We return a JSON response that includes a success status and the received data.

## Frontend Example: `app/page.js`

- In this example, we create a button on the frontend to send a` POST `request to our API route (`/api/add`). When the button is clicked, the request is sent with JSON data.

### Code 

```javascript
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
```

### Explanation 

- Client-Side Function: `handleClick` is an async function that sends a `POST` request when called.

- Data Object: We create a `data` object with `name` and
`role` fields to send to the API.

- Fetch Request: The `fetch` function sends the request to `/api/add `with the `POST` method, `Content-Type` set to `application/json`, and the `data` object as the `body`.

- Response Handling: The response from the API is parsed as JSON and logged to the console.

- When the button is clicked, this component triggers a `POST` request to the API route. The API route then responds with `{ success: true, data }`, which is logged to the console.

### Summary: 

- With Next.js API routes, you can build backend functionality within your frontend application, making it easier to create full-stack applications without needing a separate backend server. This example demonstrates:

- How to set up an API route in `api/add/route.js` to receive and respond to requests.
How to create a frontend function to send data to the API route using the` fetch `API.