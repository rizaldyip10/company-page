import React from 'react'
import Logo from './logo'
import NavbarRoutes from './navbar-routes'
import MobileMenuBtn from './mobile-menu-btn';
import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <div className='w-full fixed h-20 bg-[#f5f5f5] flex items-center px-20 justify-center lg:justify-between z-50 border-b border-slate-200'>
            <Link href='/' className='flex items-center gap-2 cursor-pointer'>
                <Logo />
                <h1 className='text-2xl font-bold'>
                    WhiteCo<span className='text-[#6B78E5]'>ll</span>ar
                </h1>
            </Link>
            <div className='hidden lg:block'>
                <NavbarRoutes />
            </div>
            <MobileMenuBtn />
            
        </div>
    )
}

export default Navbar