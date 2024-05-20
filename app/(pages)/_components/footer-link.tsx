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
                href: '/teams'
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
                label: 'Financial Consultancy',
                href: '/services/financial-consultancy'
            },
            {
                label: 'Business Management',
                href: '/services/bussiness-management'
            },
            {
                label: 'Consultant Program',
                href: '/services/consultant-program'
            },
            {
                label: 'Company Management',
                href: '/services/company-management'
            },
            {
                label: 'Financial & Insurance Jobs',
                href: '/services/financial-and-insurance-jobs'
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