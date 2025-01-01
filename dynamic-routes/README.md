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

**File**: `app/blog/page.js`

```javascript 
import React from 'react';

const page = () => {
  return <div>All Blogs:</div>;
};

export default page;
```

### How it works

- This route is static and simply displays a list of blogs.

- Accessible at `/blog`


### 3. **Dynamic Blog Post Route**
**File**: `app/blogpost/[slug]/page.js`

```javascript
import { notFound } from 'next/navigation';

export default async function Page({ params }) {
  const languages = ["python", "javascript", "java", "c++"];
  
  if (!languages.includes(params.slug)) {
    notFound(); // Redirect to the not-found page
  }
  
  return <div>My Post: {params.slug}</div>;
}
```

### How it works

- The `[slug]` in the folder name makes this a dynamic route.

- The `notFound()` function is called if the `slug` isn't in the predefined list `(languages)`.

### Examples:
- `/blogpost/python` → ✅ Valid: Displays My Post: python
- `/blogpost/ruby` → ❌ Invalid: Redirects to not-found.js

## 4. Custom Error Handling
**File**: `app/error.js`

```javascript
'use client';

export default function Error({ error, reset }) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try Again</button>
    </div>
  );
}
```

### How It Works
- Displays a custom error message when something goes wrong.

- Includes a "Try Again" button to retry the action.

## 5. Custom Not FoundPage
