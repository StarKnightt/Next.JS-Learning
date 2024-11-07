# Server Components

- It renders on the server and sent to the client as static HTML, reducing the need for JavaScript on the Client side.

- It means it will run on the server first then will reach to the client as static HTML.

- But if you still want to use client side code, you can use `use client` directive.


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
