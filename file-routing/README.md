# File routing in Next.JS

- In Next.js, the router is a component that helps with navigation and routing, while routing refers to the overall process of linking and navigating between routes

- In Next.js 13+, the app/ directory introduces a more powerful and flexible routing system. The App Router offers some cool new features like nested layouts, server components, and improved data fetching.

## How it works?

- The app/ folder structure follows the same principle: each folder and file represents a route.

- The main difference is that folders can represent routes too, and each folder can have multiple components like `page.js`, `layout.js`, and more.

## Example 

``` /my-next-app
 └── app
     ├── page.js      # Renders at "/"
     ├── about
     │   └── page.js  # Renders at "/about"
     └── blog
         └── [id]
             └── page.js  # Renders at "/blog/:id"
```

## Code Example- 

```
export default function AboutPage() {
  return <h1>About Us (App Router)</h1>;
}
```

- The file app/about/page.js corresponds to the route /about.
- Visiting [LocalAbout](http://localhost:3000/about) will show this page.

- So basically in file routing, we will create an another folder for different routes in the app folder.
- suppose I need an about page, so I'll go into app folder then create an folder named as `page`, and inside that, I'll create a `page.js`, now if I'll redirect to [Page](http://localhost:3000/page), I can see that page.

- We use "@" to import anything outside of the app folder in react js for example -

```
 import Navbar from "@/component/Navbar";
```

## Dynamic Routes in app/:

Just like in the pages/ directory, dynamic routes in the app/ directory are represented by files and folders wrapped in square brackets.

For example, to create a dynamic route for blog posts:

```
/app
 └── blog
     └── [id]
         └── page.js  # Dynamic route for /blog/:id
```
## Layouts in the app/ Directory:

The App Router allows you to define reusable layouts at different levels. You can use `layout.js` files in any folder to define a common layout that wraps around pages.


### For exmaple-
```
/app
 ├── layout.js      # Global layout for the entire app
 ├── page.js        # Homepage
 ├── about
 │   ├── layout.js  # Layout for /about pages
 │   └── page.js    # About page

```
### Code example for app/about/layout.js
```
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
           Navbar        
       {children}
      </body>
    </html>
  );
}
```

- This layout wraps around app/about/page.js and other about pages. The children prop refers to the content of the page being rendered.


## Summary of File Routing

- `pages/` Directory (Classic Method):

- Each file becomes a route.

- Folders can contain dynamic routes using [param].

- Special files like _app.js and _document.js are used for customizing the app layout.