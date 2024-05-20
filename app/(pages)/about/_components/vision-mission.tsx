import React from 'react'
import Image from 'next/image'
import companyAboutImg from '@/imgs/company_about.webp'
import { Poppins } from 'next/font/google'
import Link from 'next/link'
import { Award, FileBadge, Square } from 'lucide-react'
import ColoredBtn from '@/components/colored-btn'
import CheckList from '@/components/check-list'
import Card from '@/components/achievment-card'
import VisionMisionCard from './vision-mission-card'
import AnimationWrapper from '@/components/animation'

const poppins = Poppins({
    weight: ['600', '700'],
    subsets: ['latin']
})

const VisionMision = () => {
    return (
        <div className='w-full flex flex-col lg:flex-row'>
            <div className='w-full items-center md:gap-8 md:justify-center lg:w-[41.5%] flex flex-col md:flex-row lg:flex-col gap-2 lg:items-end bg-[#F4F4F4] py-36 lg:px-12'>
                <AnimationWrapper>
                    <Image alt='company-about' src={companyAboutImg} className='object-fit h-80 w-80 lg:w-[408px] lg:h-[446px]'/>
                    <div className='max-w-80 md:max-w-[408px]'>
                        <div className='text-3xl max-w-[408px] mt-5'>
                            <h3 className={poppins.className + ' text-wrap font-semibold'}>
                                We&apos;re Ready To Grow Your Business With Us
                            </h3>
                        </div>
                        <div className='max-w-[408px] mt-3'>
                            <p className='text-lg text-[#7D7D7D]'>
                                Leverage agile frameworks to provide a robust synopsis for high level overviews. thinking to further the overall value proposition. 
                            </p>
                        </div>
                        <div className='max-w-[408px] mt-3'>
                            <Link href='/contact'>
                                <p className='underline font-semibold text-lg'>Get in touch</p>
                            </Link>
                        </div>
                    </div>
                </AnimationWrapper>
            </div>
            <div className='bg-white w-full flex flex-col px-6 lg:w-[58.5%] py-36 lg:px-12'>
                <AnimationWrapper transition={{ duration: 1, delay: .3 }}>
                    <div className='flex items-center gap-2'>
                        <Square className='bg-[#40DDB6] w-3 h-3 text-[#40DDB6]' />
                        <p className='font-semibold text-lg text-[#37393F]'>Welcome to Whitecollar Solution</p>
                    </div>
                    <div className='mt-4 max-w-96 '>
                        <h1 className={poppins.className + ' text-[#37393F] text-4xl max-w-96 font-bold'}>We Care About Your Business Plan.</h1>
                    </div>
                    <div className='mt-5 max-w-[673px] flex flex-col gap-4'>
                        <p className='text-lg text-[#7D7D7D]'>Leverage agile frameworks to provide a robust synopsis for high level overviews.Iterative approaches to corporate strategy foster collaborative thinking to further the overall.</p>
                        <p className='text-lg text-[#7D7D7D]'>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy </p>
                    </div>
                    <div className='w-full flex flex-col gap-7 mt-12'>
                        <VisionMisionCard title='Our Vision' text='Capitalize on low hanging fruit to identify a ballpark value added activity to beta clickthroughs.' />
                        <VisionMisionCard title='Our Mission' text='Capitalize on low hanging fruit to identify a ballpark value added activity to beta clickthroughs.' />
                        <h1 className='text-xl italic font-bold text-[#6B77E5]'>#EmpoweringBusinessSuccess</h1>
                    </div>
                </AnimationWrapper>
            </div>
        </div>
    )
}

export default VisionMision