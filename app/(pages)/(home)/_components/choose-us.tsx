import { Square, Star } from 'lucide-react'
import React from 'react'
import ChooseCard from './choose-card'
import CheckList from '@/components/check-list'
import Link from 'next/link'
import Image from 'next/image'
import chooseImg from '@/imgs/Image.webp'
import AnimationWrapper from '@/components/animation'

const ChooseUs = () => {
    return (
        <div className='w-full flex mt-32 bg-[#37393F]'>
            <AnimationWrapper classname='w-full flex'>
                <div className='flex flex-col w-full lg:w-3/5 text-white px-10 py-32 items-center lg:px-20 lg:items-end'>
                    <div className='flex flex-col'>
                        <div className='flex gap-1 items-center mb-3'>
                            <Square className='bg-[#40DDB6] w-3 h-3 text-[#40DDB6]' />
                            <p className='text-lg font-medium'>Why Choose Us</p>
                        </div>
                        <div className='flex flex-col max-w-xl gap-3'>
                            <h2 className='font-semibold text-3xl'>We Provide Solutions To <br /> Grow Your Business</h2>
                            <p className='text-lg'>Leverage agile frameworks to provide a robust synopsis for high level overviews. thinking to further the overall proposition. </p>
                        </div>
                        <div className='flex flex-col md:flex-row gap-3 mt-9'>
                            <ChooseCard title='Clients' subtitle='Quick Response' percentage={95} width='80' bgColor='#2E2F34' />
                            <ChooseCard title='Projects' subtitle='Finished Jobs' percentage={85} width='80' bgColor='#2E2F34' />
                        </div>
                        <div className='flex flex-col md:flex-row mt-9 gap-6'>
                            <div className='flex-col flex gap-6'>
                                <div className='flex w-max gap-3'>
                                    <CheckList bgColor='#40DDB6' checkColor='#37393F' p='2800+' textStyle='text-xl font-bold' />
                                    <p className='text-xl text-nowrap'>Active Clients</p>
                                </div>
                                <div className='flex items-center w-max gap-3'>
                                    <CheckList bgColor='#40DDB6' checkColor='#37393F' p='1670+' textStyle='text-xl font-bold' />
                                    <span className='flex items-center gap-1 text-xl text-[#FFB342]'>
                                        5 <Star className='h-5 w-5' /> stars
                                    </span>
                                    <p className='text-xl'>reviews</p>
                                </div>
                            </div>
                            <div className='flex flex-col gap-6'>
                                <CheckList bgColor='#40DDB6' checkColor='#37393F' p='106+' textStyle='text-xl font-bold' />
                                <Link href='/'>
                                    <p className='text-lg font-semibold text-[#40DDB6] underline'>Get In Touch</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='hidden lg:flex lg:w-2/5'>
                    <Image alt='photo' src={chooseImg} className='object-cover' />
                </div>
            </AnimationWrapper>
        </div>
    )
}

export default ChooseUs