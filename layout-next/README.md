# 📚 What are Layouts?

- **Layouts** in Next.js provide a way to share common UI across multiple pages, such as navigation bars, footers, or a global state wrapper like a session provider. **With the App Router, layouts are powerful and hierarchica.** 

- In simple words, Think of layouts like frames around your pictures. They're the parts of your website that stay the same when different pages load - like headers, footers, and navigation bars.

### Key Concepts of Layouts

1. **Hierarchy:** Layouts can be nested, allowing for specific layouts for different parts of the app.

2. **Server-rendered by default:** Layouts run on the server unless explicitly marked as client components.

3. **Persistent UI:** Layouts persist across route changes, enabling smooth transitions.


## How Layouts work.

- **Metadata:** Defines the title and description for SEO purposes.
- **{children}:** Represents the content of child pages.

- **Root layout** (Must Have!)
```javascript
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <nav>Common Navigation</nav>
        {children}
        <footer>Common Footer</footer>
      </body>
    </html>
  );
}
```

## Example Folder Structure :