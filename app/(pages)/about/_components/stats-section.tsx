import { BriefcaseBusiness, FileCode, Handshake, Users2 } from 'lucide-react'
import React from 'react'
import StatsCard from './stats-card'

const stats = [
    {
        icon: BriefcaseBusiness,
        stats: '10+',
        title: 'Years of Experiences',
        content: 'Synopsishigh level overviews value proposition.'
    },
    {
        icon: Handshake,
        stats: '5960',
        title: 'Satisfied Clients',
        content: 'Synopsishigh level overviews value proposition.'
    },
    {
        icon: FileCode,
        stats: '50k',
        title: 'IT Problems Solved',
        content: 'Synopsishigh level overviews value proposition.'
    },
    {
        icon: Users2,
        stats: '25+',
        title: 'Pro Team Members',
        content: 'Synopsishigh level overviews value proposition.'
    },
]

const StatsSection = () => {
    return (
        <div className='flex justify-center items-center w-full bg-gray-100 py-16'>
            <div className='flex justify-center items-center flex-wrap gap-10'>
                {
                    stats.map((item, index) => (
                        <StatsCard icon={item.icon} title={item.title} stats={item.stats} content={item.content} key={index} />
                    ))
                }
            </div>
        </div>
    )
}

export default StatsSection