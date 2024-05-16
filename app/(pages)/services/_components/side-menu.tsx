import React from 'react'
import SideMenuItem from './side-menu-item'

const menus = [
    {
        label: 'Financial Consultancy',
        href: '/services/financial-consultancy'
    },
    {
        label: 'Bussiness Management',
        href: '/services/bussiness-management'
    },
    {
        label: 'Consultant Programs',
        href: '/services/consultant-programs'
    },
    {
        label: 'Company Management',
        href: '/services/company-management'
    },
    {
        label: 'Financial & Insurance Jobs',
        href: '/services/financial-and-insurance-jobs'
    },
    {
        label: 'Bank Management',
        href: '/services/bank-management'
    },
]

const SideMenu = () => {
    return (
        <div className='w-full flex flex-col py-14 px-8 bg-[#F4F4F4] gap-3'>
            <h1 className='font-semibold text-lg'>Service</h1>
            <div className='w-full flex flex-col'>
                {
                    menus.map((item, index) => (
                        <SideMenuItem key={index} label={item.label} href={item.href} />
                    ))
                }
            </div>
        </div>
    )
}

export default SideMenu