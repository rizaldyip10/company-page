import ColoredBtn from '@/components/colored-btn'
import { Input } from '@/components/ui/input'
import React from 'react'

const SubscribeFooter = () => {
    return (
        <div className='max-w bg-[#474950] flex flex-col px-9 py-10 gap-1 xl:ml-auto'>
            <h1 className='text-white text-xl font-semibold'>Subscribe</h1>
            <div className='flex flex-col gap-5'>
                <p className='text-lg text-white'>Join Our Mailing List & To Get Our News</p>
                <div className='flex flex-col md:flex-row gap-2 md:gap-0'>
                    <Input placeholder='Your email address' className='max-w-60 h-14 rounded-none' />
                    <ColoredBtn className='h-14 max-w-40 rounded-none bg-[#6B77E5] text-white text-lg font-semibold' href='/' text='Subscribe' />
                </div>
            </div>
        </div>
    )
}

export default SubscribeFooter