# Dynamic Routes in Next.js 🚀

- In Next.js Dynamic routes allow you to create flexible pages based on URL parameters.


---

## Examples of Dynamic Routes

### 1. **Catch-All Dynamic Route**

**File**: `app/about/[...val]/page.js`

```javascript
export default function Page({ params }) {
  console.log(params); // Logs the dynamic parameters in the URL
  return <div>I'm about page</div>;
}
```

## How it works

- The `[...val]` syntax captures multiple parameters in the URL.
- For example:
- `/about/nextjs` → `params = { val: ["nextjs"] }`

- `/about/nextjs/routing` → `params = { val: ["nextjs", "routing"] }`

### 2. **Static**
