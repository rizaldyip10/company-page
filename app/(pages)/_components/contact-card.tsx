import { LucideIcon } from 'lucide-react'
import React from 'react'

interface ContactCardFooterProps {
    icon: LucideIcon;
    title: string;
    content: string;
}

const ContactCardFooter: React.FC<ContactCardFooterProps> = ({ icon: Icon, title, content }) => {
    return (
        <div className='flex items-center gap-2'>
            <div className='rounded-full flex items-center justify-center w-16 h-16 bg-[#4C4D52]'>
                <Icon className='h-6 w-6 text-[#40DDB6]' />
            </div>
            <div className='flex flex-col gap-1'>
                <h1 className='text-xl font-semibold'>{ title }</h1>
                <p className='text-lg'>{ content }</p>
            </div>
        </div>
    )
}

export default ContactCardFooter