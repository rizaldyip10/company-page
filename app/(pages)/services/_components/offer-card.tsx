import { LucideIcon } from 'lucide-react'
import React from 'react'

interface OfferCardProps {
    icon: LucideIcon;
    title: string;
    content: string;
}

const OfferCard: React.FC<OfferCardProps> = ({ icon: Icon, title, content }) => {
    return (
        <div className='w-[240px] p-12 flex flex-col items-center text-center gap-3 border border-[#636363]'>
            <Icon className='w-14 h-14 text-[#40DDB6]' />
            <h1 className='font-semibold text-2xl text-white'>{ title }</h1>
            <p className='text-white text-lg'>{ content }</p>
        </div>
    )
}

export default OfferCard