import SectionTitle from '@/components/section-title'
import { Calendar, Puzzle, ShieldCheck } from 'lucide-react'
import React from 'react'
import WorkCard from './work-card'
import AnimationWrapper from '@/components/animation'

const process = [
    {
        icon: Calendar,
        title: 'Make Appointment',
        content: 'Leverage agile frameworks provide synopsis high level overviews value proposition.'
    },
    {
        icon: Puzzle,
        title: 'Consultation',
        content: 'Leverage agile frameworks provide synopsis high level overviews value proposition.'
    },
    {
        icon: ShieldCheck,
        title: 'Enjoy the Service',
        content: 'Leverage agile frameworks provide synopsis high level overviews value proposition.'
    },
]

const WorkProcess = () => {
    return (
        <div className='w-full flex justify-center py-20 md:py-36'>
            <div className='flex justify-center'>
                <div className='flex flex-col items-center gap-20'>
                    <AnimationWrapper classname='flex flex-col items-center gap-4'>
                        <SectionTitle title='Work Process' />
                        <h1 className='font-bold text-4xl'>How We Work</h1>
                    </AnimationWrapper>
                    <div className='grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3 px-5'>
                        {
                            process.map((item, index) => (
                                <AnimationWrapper key={index} transition={{ duration: 1, delay: index * .1}}>
                                    <WorkCard icon={item.icon} title={item.title} content={item.content} />
                                </AnimationWrapper>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkProcess