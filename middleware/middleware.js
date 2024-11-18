// This is the first method- 

/* import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
    return NextResponse.json({ message: 'Hello from middleware!' })  // it's like before reaching the destination "page.json" file, this middleware will be executed and will change accordingly
}
*/
 
// See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/about/:path*',
// } // if you're not wrting this, then middleware will be executed for all the pages

// This is the second method (if-else method)

import { NextResponse } from 'next/server'
 
export function middleware(request) {
  if (request.nextUrl.pathname.startsWith('/about')) {
    return NextResponse.rewrite(new URL('/', request.url))
  }
 
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/about.js', request.url))
  }
}