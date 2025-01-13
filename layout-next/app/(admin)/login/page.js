import React from 'react'

const page = () => {
    return (
        <div>
            Admin Login
            <p>Feel free to login as an admin</p>
        </div>
    )
}

export default page

// or dynamic meta data

export async function generateMetadata(params) {
 return {
    title: 'Admin Login',
   description: 'Feel free to login as an admin',
   image: 'https://example.com/image.jpg',
   robots: 'noindex, nofollow',
 }   
}