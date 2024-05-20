import CheckList from '@/components/check-list'
import React from 'react'
interface VisionMisionCardProps {
    title: string;
    text: string;
}

const VisionMisionCard: React.FC<VisionMisionCardProps> = ({ title, text }) => {
    return (
        <div className='w-full flex flex-col gap-3 items-center p-7 border border-[#E3E3E3]'>
            <div className='w-full'>
                <CheckList p={ title } bgColor='#6B77E5' textStyle='text-lg font-semibold' checkColor='#fff' />
            </div>
            <div className='w-full'>
                <p className='text-base text-[#7D7D7D]'>{ text }</p>
            </div>
        </div>
    )
}

export default VisionMisionCard