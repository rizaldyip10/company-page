import React from 'react'
import LinkSection from './link-section'
import SubscribeFooter from './subscribe-footer'

const links = [
    {
        title: 'Quick Link',
        children: [
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
            },
            {
                label: 'Our Team',
                href: '/team'
            },
            {
                label: 'About Us',
                href: '/about'
            }
        ]
    },
    {
        title: 'Our Services',
        children: [
            {
                label: 'Financial Consulting',
                href: '/'
            },
            {
                label: 'Business Management',
                href: '/'
            },
            {
                label: 'Consultant & Program',
                href: '/'
            },
            {
                label: 'Company Management',
                href: '/'
            },
            {
                label: 'Insurance & Finance',
                href: '/'
            },
        ]
    }
]

const FooterLink = () => {
    return (
        <div className='w-full flex flex-wrap gap-20'>
            {
                links.map((item, index) => (
                    <LinkSection key={index} title={item.title} content={item.children} />
                ))
            }
            <SubscribeFooter />
        </div>
    )
}

export default FooterLink