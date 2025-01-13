import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-semibold text-gray-800">Demo App</span>
            </Link>
          </div>

          <div className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <Link 
                  href="/about" 
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="/login" 
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  Admin Login
                </Link>
              </li>
              <li>
                <Link 
                  href="/comments" 
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  Comments
                </Link>
              </li>
              <li>
                <Link 
                  href="/logout" 
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar