import { LucideIcon } from 'lucide-react'
import React from 'react'

interface StatsCardProps {
    icon: LucideIcon;
    stats: string;
    title: string;
    content: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ icon: Icon, stats, title, content }) => {
    return (
        <div className='max-w-64 h-full flex flex-col items-center text-center gap-3'>
            <div className='w-[72px] h-[72px] bg-white flex justify-center items-center rounded-full'>
                <Icon className='w-10 h-10 text-[#6B77E5]' />
            </div>
            <h1 className='font-bold text-4xl text-[#40DDB6]'>{ stats }</h1>
            <h2 className='text-lg font-semibold text-[#37393F]'>{ title }</h2>
            <p className='text-lg text-[#7D7D7D]'>{ content }</p>
        </div>
    )
}

export default StatsCard