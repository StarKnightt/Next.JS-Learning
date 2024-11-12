# Next.Js API routes

- In Next.js, API Routes allow you to create backend API endpoints directly within your app. These endpoints can handle requests for data, perform server-side actions, and more.

## What are API Routes?

- API routes in Next.js let you create your own backend endpoint.s These endpoints can: 

1. Fetch or send Data.

2. Connect with Databases.

3. Perform server-side functions.

- Since Next.js supports both frontend and backend code, API routes are helpful for creating server-side code without needing a separate backend server.

## Setting up an API Route

- API routes are files that live inside the /pages/api directory. Each file in this folder becomes an API endpoint.

- Here I created `api/add/route.js` for more detail point.

- Default export: Each file exports a function that handles the request and response.