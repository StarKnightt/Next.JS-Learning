import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className='flex justify-between px-4 py-4 bg-slate-800 text-white'>
            <div className="logo font-bold">Facebook</div>
            <ul className='flex gap-8'>
                <Link href='/'><li>Home</li></Link>
                <Link href='/about'><li>About</li></Link>
                <Link href='/contact'><li>Contact</li></Link>
            </ul>
        </nav>
    )
}

export default Navbar;