"use client"

import React from 'react'
import NavbarItems from './navbar-items'
import AboutUsBtn from './about-us-button'
import ColoredBtn from '@/components/colored-btn'

const routes = [
    {
        label: 'Home',
        href: '/'
    },
    {
        label: 'Services',
        href: '/services'
    },
]

const NavbarRoutes = () => {
    return (
        <div className='flex items-center'>
            {
                routes.map((item, index) => (
                    <NavbarItems key={index} href={item.href} label={item.label} variant='link' textSize='text-lg' />
                ))
            }
            <AboutUsBtn />
            <ColoredBtn
                className='w-36 ml-10 text-lg h-12 bg-[#6B78E5] text-white hover:bg-[#40DDB6] font-normal rounded-none'
                text='Contact Us'
                href='/contact'
            />
        </div>
    )
}

export default NavbarRoutes