'use client';

import React, { useState } from 'react'
import Logo from './logo'
import NavbarRoutes from './navbar-routes'
import { Button } from '@/components/ui/button';
import { Ghost, Menu } from 'lucide-react';
import MobileMenu from './mobile-menu';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const onMenuOpen = () => {
        setIsMenuOpen(true)
    }

    const onMenuClose = () => {
        setIsMenuOpen(false)
    }

    return (
        <div className='w-full h-20 bg-[#f5f5f5] flex items-center px-20 justify-center lg:justify-between'>
            <div className='flex items-center gap-2'>
                <Logo />
                <h1 className='text-2xl font-bold'>
                    WhiteCo<span className='text-[#6B78E5]'>ll</span>ar
                </h1>
            </div>
            <div className='hidden lg:block'>
                <NavbarRoutes />
            </div>
            <div className='absolute right-0 mr-2 lg:hidden'>
                <Button variant='ghost' onClick={onMenuOpen}>
                    <Menu />
                </Button>
            </div>
            <MobileMenu isMenuOpen={isMenuOpen} onMenuClose={onMenuClose} />
        </div>
    )
}

export default Navbar