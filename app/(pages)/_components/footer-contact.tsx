import React from 'react'
import Logo from './logo'
import { Mail, MapPin, Phone } from 'lucide-react'
import ContactCardFooter from './contact-card'
import Link from 'next/link'

const contact = [
    {
        title: 'Call Us',
        content: '+01 567 896 654',
        icon: Phone
    },
    {
        title: 'Mail Us',
        content: 'email@example.com',
        icon: Mail
    },
    {
        title: 'Location',
        content: 'Amsterdam, 109-74',
        icon: MapPin
    },
]

const FooterContact = () => {
    return (
        <div className='w-full flex flex-col md:flex-row gap-10 md:gap-44 pb-11 border-b border-[#6C6D72]'>
            <Link href='/' className='flex items-center gap-2 cursor-pointer'>
                <Logo />
                <div>
                    <h1 className='text-2xl font-bold text-white'>
                        WhiteCo<span className='text-[#6B78E5]'>ll</span>ar
                    </h1>
                    <h1 className='text-sm italic font-bold text-[#6B77E5]'>#EmpoweringBusinessSuccess</h1>
                </div>
            </Link>
            <div className='flex flex-wrap gap-14 items-start md:items-center text-white'>
                {
                    contact.map((item, index) => (
                        <ContactCardFooter icon={item.icon} title={item.title} content={item.content} key={index} />
                    ))
                }
            </div>
        </div>
    )
}

export default FooterContact