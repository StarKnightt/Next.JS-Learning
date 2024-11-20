import NextAuth from 'next-auth'
import GithubProvider from "next-auth/providers/github"

const handler = NextAuth({
  providers: [
    // OAuth authentication providers...
    GithubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
    }),
]
})

console.log('GitHub client ID:', process.env.GITHUB_ID);
console.log('GitHub client secret:', process.env.GITHUB_SECRET);
export {handler as GET, handler as POST}