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

```bash 
npm install next-auth
```
- Install the provider SDK you want to use (e.g. **Google** 😁)

```bash
npm install @next-auth/providers
```

### Set-up

- Be careful while setup, it's a little bit different.

### Create API Route for next-auth

```
app/api/auth/[...nextauth]/route.js
```

- It's better to write it manually and create it.

