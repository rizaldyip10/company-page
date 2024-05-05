import React from 'react'
import NavbarItems from './navbar-items'
import AboutUsBtn from './about-us-button'
import ContactUsBtn from './contact-us-btn'

const routes = [
    {
        label: 'Home',
        href: '/'
    },
    {
        label: 'Services',
        href: '/services'
    },
    {
        label: 'Contact Us',
        href: '/contact'
    }
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
        <ContactUsBtn width='w-36' marginLeft='ml-10' textSize='text-lg' height='h-12' />
    </div>
  )
}

export default NavbarRoutes