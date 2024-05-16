import { BarChart3, Monitor, NotebookPen, Ruler, Square } from 'lucide-react'
import React from 'react'
import OfferCard from './offer-card'

const offers = [
    {
        icon: Monitor,
        title: 'Product Development',
        content: 'Level overviews proposition'
    },
    {
        icon: Ruler,
        title: 'UI/UX Designing',
        content: 'Level overviews proposition'
    },
    {
        icon: BarChart3,
        title: 'Data Analysis',
        content: 'Level overviews proposition'
    },
    {
        icon: NotebookPen,
        title: 'Content Management',
        content: 'Level overviews proposition'
    },
]

const OffersSection = () => {
    return (
        <div className='w-full flex justify-center items-center bg-[#37393F] py-36 px-10 lg:px-20'>
            <div className='w-full flex flex-col items-center gap-12'>
                <div className='w-full flex flex-col gap-4 lg:gap-0 lg:flex-row justify-between items-center xl:px-52'>
                    <div className='flex flex-col gap-2'>
                        <div className='w-max flex gap-1 items-center'>
                            <Square className='bg-[#40DDB6] w-3 h-3 text-[#40DDB6]' />
                            <p className='font-semibold text-base lg:text-sm xl:text-base text-white'>What We&apos;re Offering</p>
                        </div>
                        <h1 className='font-semibold text-2xl text-white'>Services We&apos;re Offering to Our Customers</h1>
                    </div>
                    <div className='max-w-[450px] lg:w-[500px]'>
                        <p className='text-lg text-white'>
                            Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with service for state of the art customer service.
                        </p>
                    </div>
                </div>
                <div className='w-full flex flex-wrap justify-center gap-7'>
                    {
                        offers.map((item, index) => (
                            <OfferCard icon={item.icon} title={item.title} content={item.content} key={index} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default OffersSection