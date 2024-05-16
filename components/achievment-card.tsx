import { LucideIcon } from 'lucide-react';
import React from 'react'

interface CardProps {
    title: string;
    desc: string;
    icon: LucideIcon;
}

const Card: React.FC<CardProps> = ({ title, desc, icon: Icon }) => {
    return (
        <div className='flex w-full md:max-w-96 min-h-36 justify-start md:justify-center items-center border border-[#E3E3E3] p-8 gap-5'>
            <div className='h-full'>
                <Icon className='w-10 h-10 text-[#40DDB6]' />
            </div>
            <div className='flex flex-col h-full'>
                <h3 className='font-semibold text-xl text-[#37393F]'>{ title }</h3>
                <p className='text-base text=[#7D7D7D]'>{ desc }</p>
            </div>
        </div>
    )
}

export default Card