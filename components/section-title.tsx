import { Square } from 'lucide-react'
import React from 'react'

interface SectionTitleProps {
    title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
    return (
        <div className='w-max flex gap-1 items-center'>
            <Square className='bg-[#40DDB6] w-3 h-3 text-[#40DDB6]' />
            <p className='font-semibold text-base lg:text-sm xl:text-base'>{ title }</p>
        </div>
    )
}

export default SectionTitle