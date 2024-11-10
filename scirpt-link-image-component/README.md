# Script, Link and Image Component

- Next.js has some built-in components that make working with JavaScript, links, and images easier, faster, and more efficient. 

- The Script, Link, and Image components each solve a common web development issue and help make websites more efficient and user-friendly.

## Link Component

- The Link component in Next.js is used to create internal links within the application. 

- It’s optimized to make page transitions fast and smooth.

- Built for client-side navigation (no full page reload).

- Websites don't reload when you navigate between pages.

- Automatically pre-fetches linked pages (only on production).

- check the 'components' folder for the usage of Link component.

- For example,

```
// Import the Link component
import Link from 'next/link';

function HomePage() {
  return (
    <div>
      <h1>Welcome to My Site</h1>
      <Link href="/about">
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}

export default HomePage;

```
### Explanation -> 

- Import Link: Import the Link component.

- Add Link: Wrap a link (/about) with the Link component.
- Anchor Tag: Inside the Link component, use an `<a>` tag for styling and accessibility.

- We can change the title and description of the page by using the metadata property.

- check the 'app/about/page.js' and 'app/contact/page.js' for the usage of metadata property.

## Script Component

- It is helpful to inject JavaScript into the page.

- To use it, we have to import it and then use it in the component.

- You need to `import Script from 'next/script'` to use it.

- For example,

```
import Script from 'next/script'

function ContactPage() {
  return (
    <div>
      <Script>
        {`alert("Welcome to contact page")`}
      </Script>
    </div>
  )
}

export default ContactPage;
```

### Explanation -> 

- Import Script: Import the Script component.

- Add Script: Wrap the JavaScript code inside the Script component.

- JavaScript Code: Write the JavaScript code inside the Script component.

- This code will prompt an alert when the page is loaded, means when you navigate to the contact page.

## Optional Props

- The loading strategy of the script. There are four different strategies that can be used:

- `beforeInteractive`: Load before any Next.js code and before any page hydration occurs.
- `afterInteractive`: (default) Load early but after some hydration on the page occurs.
- `lazyOnload`: Load during browser idle time.
- `worker`: (experimental) Load in a web worker.


### `lazyOnload`

- This is the default strategy.

- `lazyOnload` scripts can be placed inside of any page or layout and will only load and execute when that page (or group of pages) is opened in the browser.

- We can use it on Goolge Ad loading mostly, like it will load in the last after loading other components in the page.

## Image Component

- The Image component is used to optimize and display images on web pages.

- It automatically optimizes images for different screen sizes and devices, improving performance and reducing load times.

- It also handles lazy loading, which means images are loaded only when they are needed, not all at once.

- We need to configure the Image component by using the `next.config.js` file.