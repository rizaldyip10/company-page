import React from 'react'
import CircularIcon from './circular-icon'
import { LucideIcon } from 'lucide-react';

interface ContactCardProps {
    label: string;
    address: string;
    icon: LucideIcon;
    color: string;
    gap: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ label, address, icon, color, gap }) => {
    return (
        <div className={`max-w-[360px] flex items-center ${gap}`}>
            <CircularIcon icon={icon} iconStyle={`h-6 w-6 text-[${color}]`} containerStyle='h-16 w-16 rounded-full bg-[#F4F4F4]' />
            <div className='flex flex-col'>
                <h3 className='text-base text-[#7D7D7D]'>{ label }</h3>
                <p className='text-lg text-[#37393F]'>{ address }</p>
            </div>
        </div>
    )
}

export default ContactCard