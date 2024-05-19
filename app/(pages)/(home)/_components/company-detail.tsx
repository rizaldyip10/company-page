import Image from 'next/image'
import React from 'react'
import companyAboutImg from '@/imgs/company_about.webp'
import { Poppins } from 'next/font/google'
import Link from 'next/link'
import { Award, FileBadge, Square } from 'lucide-react'
import CheckList from '@/components/check-list'
import Card from '@/components/achievment-card'
import ColoredBtn from '@/components/colored-btn'
import AnimationWrapper from '@/components/animation'

const poppins = Poppins({
    weight: ['600', '700'],
    subsets: ['latin']
})

const CompanyDetail: React.FC = () => {
    return (
        <div className='w-full flex flex-col lg:flex-row'>
            <div className='w-full items-center md:gap-8 md:justify-center lg:w-[41.5%] flex flex-col md:flex-row lg:flex-col gap-2 lg:items-end bg-[#F4F4F4] py-36 lg:px-12'>
                <AnimationWrapper classname='w-full items-center md:gap-8 md:justify-center flex flex-col md:flex-row lg:flex-col gap-2 lg:items-end'>
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
                            <Link href='/'>
                                <p className='underline font-semibold text-lg'>Get in touch</p>
                            </Link>
                        </div>
                    </div>
                </AnimationWrapper>
            </div>
            <div className='bg-white w-full flex flex-col lg:w-[58.5%]'>
                <AnimationWrapper
                 classname='w-full flex flex-col px-6 py-36 lg:px-12'
                 transition={{ duration: 1, delay: .3}}
                >
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
                    <div className='flex flex-col mt-5 gap-6'>
                        <CheckList textStyle='text-[#37393F] text-xl' checkColor='#FFF' bgColor='#6B77E5' p='Components of a Business Strategy' />
                        <CheckList textStyle='text-[#37393F] text-xl' checkColor='#FFF' bgColor='#6B77E5' p='Business Consulting' />
                    </div>
                    <div className='mt-11 flex flex-col md:flex-row gap-5'>
                        <Card title='Experience' desc='Leverage frameworks toprovidee werment.' icon={FileBadge} />
                        <Card title='Awards Winner' desc='Leverage frameworks toprovidee werment.' icon={Award} />
                    </div>
                    <div className='mt-9 mb-10'>
                        <ColoredBtn 
                            href='/about'
                            text='More About Us' 
                            className='h-16 w-44 bg-[#6B77E5] hover:bg-[#40DDB6] text-white font-semibold text-base rounded-none'
                        />
                    </div>
                </AnimationWrapper>
            </div>
        </div>
    )
}

export default CompanyDetail