# Server Components

- It renders on the server and sent to the client as static HTML, reducing the need for JavaScript on the Client side.

- It means it will run on the server first then will reach to the client as static HTML.

- But if you still want to use client side code, you can use `use client` directive.

## Why to use Server Components?

- Better performance: Since Server Components don’t need JavaScript on the client, they reduce the amount of JavaScript sent to the user. This makes pages load faster, especially for users on slower networks.

- Less JavaScript for the client:Reduces the "JavaScript bundle" size, making the client code much lighter and improving loading speed and responsiveness.

- Improved SEO and accessibility: Server-rendered content is ready for search engines, improving SEO. It’s also fully accessible by the time it reaches the user.

- Easier data fetching:Server Components can directly fetch data from your server or database, making data fetching more efficient and reducing the complexity of using client-side libraries for the same.


## Digram: How it works in Next.js

                ┌────────────────────────────────────────────────────────┐
                │               Next.js Application                     │
                └────────────────────────────────────────────────────────┘
                                   │
                                   ▼
                    ┌────────────────────────────────────────┐
                    │            Page Request               │
                    └────────────────────────────────────────┘
                                   │
                                   ▼
        ┌──────────────────────────────────────────────────────────────────┐
        │                        Server Components                         │
        │                                                                  │
        │ - Components run on the server only                              │
        │ - Directly fetches data (e.g., from database, APIs)              │
        │ - Generates static HTML to send to the client                    │
        │                                                                  │
        └──────────────────────────────────────────────────────────────────┘
                                   │
                                   ▼
                    ┌────────────────────────────────────────┐
                    │          HTML with Server Data        │
                    └────────────────────────────────────────┘
                                   │
                                   ▼
                ┌────────────────────────────────────────────────────────┐
                │                       Client                          │
                │                                                      │
                │ - Receives static HTML from Server Components        │
                │ - Minimal JavaScript for fast loading                │
                │ - Interactivity added by Client Components only      │
                └────────────────────────────────────────────────────────┘
                                   │
                                   ▼
                   ┌──────────────────────────────────────────┐
                   │               Client Components          │
                   │    (Runs in the Browser only)            │
                   └──────────────────────────────────────────┘



### Explantion.

1. Page Request: When a user requests a page, the Next.js app receives the request.

2.  Server Components:

    - Server Components are rendered on the server.
    - They fetch data directly from databases or APIs if needed.
    - These components don’t have interactivity, so they’re converted to plain HTML with data.

3. HTML with Server Data:

    - The generated HTML is sent to the client.
    - This HTML is ready to display as soon as it reaches the browser, which speeds up load times.

4. Client:

    - The client (browser) displays the HTML immediately.
    - Client Components handle any interactive parts that need to run in the browser.

5. Client Components:

    - Only these components are sent as JavaScript to the browser.
    - They handle user interactions, like button clicks or form inputs.


## Where to use Server Components?

- Server Components are best for static content that doesn’t need interactivity.
- They’re perfect for pages that are mostly static and don’t require much client-side processing.
- Use them for components that don’t need to change based on user interactions.


## How to use Server Components?

- Basically, In Next.js, Server Components are automatically detected if they are in the `app` directory.
- If you want to use Server Components in other directories, you need to export them as default.    
- Everything is Server component in Next.js by default.

## When to use server components?

- Your component doesn’t need interactivity and only displays data.
- You need to fetch data directly from the server or database.
- You want to optimize the performance of your Next.js app by reducing client-side JavaScript.


- But be careful, if you use server components, then you should remember where you used the client components, because those are going to be rendered on the client side.

- Using it for backend is good, because it will reduce the client side JavaScript.+