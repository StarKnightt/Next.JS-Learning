# Authenitcation in Next.JS:

**Authentiaction:**

- It verifies the use is who they say they are.

- It requires the use to prove their identity with something they have, such as username and passoword.


**Session Management:**

- Tracks the user's auth state across requests.

**Authorization:**

- Decides what routes and data the user can access in your web app.


**The below diagram shows the authentication flow using React and Next.js Features:**

<br/>

![authentication](authentication-overview.avif)

It's a simple `authentication` process for baisc username and password.

If we need to increase security and to make it more better we should use other libraries for `auth`, such as `Auth.js` which we call as `next-auth`


## Why use Next.js with `next-auth`

1. `next-auth` is a popular library for adding authentication to Next.js applications. 

2. **Built For Next.js :**  Optimized for server-side rendering and the app directory.

3. **Multiple Providers :** Easily integrate OAuth providers (Google, GitHub) or use custom credentials.

4. **Secure Sessions :** Manages sessions securely with JSON Web Tokens (JWTs) or database-based sessions.

5. **Customizable** : Full flexibility to control authentication flow, callbacks, and appearance.

### Installation:

- Install `next-auth`:

```css
npm install next-auth
```
- Install the provider SDK you want to use (e.g. **Google** 😁)

```css
npm install @next-auth/providers
```

### Set-up

- Be careful while setup, it's a little bit different.

### Create API Route for next-auth

```css
app/api/auth/[...nextauth]/route.js
```

- It's better to write it manually and create it.

### Here's what you need to do -

- `app/page.js:` The main page with authentication UI.

- `app/component/SessionWrapper.js:` Wraps the app with the `SessionProvider.`

- `app/api/auth/[...nextauth]/route.js:` Configures NextAuth and GitHub Provider.

- `app/layout.js:` Root layout with session wrapper.

### These are the Next steps:

1. Create a GitHub OAuth App:

2. Go to GitHub Developer [Settings](https://github.com/settings/developers)

3. Set the callback URL to: 

```javascript
http://localhost:3000/api/auth/callback/github
  ``` 

4. Create and `.env.local` in you root folder, and set environment variables.

```jsx
GITHUB_ID=your_github_client_id
GITHUB_SECRET=your_github_client_secret
NEXTAUTH_SECRET=your_random_generated_secret
NEXTAUTH_URL=http://localhost:3000
```

## Code Explanation - 

### Authentication UI (`page.js`)

- Uses `useSession` from `next-auth/react` to manage session state.

- Displays either a "Sign In" or "Sign Out" button depending on the authentication state.

```jsx
"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function GitHubSignIn() {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return (
      <div>
        <p>Signed in as {session.user.email}</p>
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }

  return <button onClick={() => signIn("github")}>Sign in with GitHub</button>;
}
```

### Session wrapper (`SessionWrapper.js`)

- Wraps the application with `SessionProvider` to manage authentication globally.

```jsx
"use client";

import { SessionProvider } from "next-auth/react";

const SessionWrapper = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default SessionWrapper;
```

### NextAuth Route (`Route.js`)

- Configures GitHub Provider for authentication.

- Uses enivronment variables to store sensitive credentials securely.

```jsx
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
});

export { handler as GET, handler as POST };
```

### Root Layout(`layout.js`)

- Ensures `SessionProvider` is available globally.

```jsx
import { Inter } from "next/font/google";
import "./globals.css";
import SessionWrapper from "./component/SessionWrapper";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionWrapper>{children}</SessionWrapper>
      </body>
    </html>
  );
}
```

### How to use - 

1. **Start the development server:**
```bash
npm run dev
```

2. Open http://localhost:3000 in your browser.

3. Click "Sign in with GitHub" and see terminal, you can see those credentials.

### Output:

- **Logged Out:** Displays a "Sign in with GitHub" button.

- **Logged In:** Shows the authenticated user's email and a "Sign out" button.


### Your GitHub authentication setup is now ready to use! 
### You did it, Sir🚀