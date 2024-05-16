import React from 'react'
import heroImg from '@/imgs/home_hero.webp'
import Image from 'next/image'
import { Square } from 'lucide-react'
import { Poppins } from 'next/font/google'
import ColoredBtn from '@/components/colored-btn'

const poppins = Poppins({ 
    weight: '700',
    subsets: ['latin'] 
})

const Hero: React.FC = () => {
    return (
        <div className='h-screen relative'>
            <div className='h-full flex flex-col items-start justify-center w-full lg:w-[41.5%] bg-[#37393F] opacity-90 absolute lg:py-56 px-12 xl:px-28 '>
                <div className='flex items-center gap-2 mt-20'>
                    <Square className='bg-[#40DDB6] w-3 h-3 text-[#40DDB6]' />
                    <p className='font-semibold text-base lg:text-sm xl:text-base text-white'>Welcome to Whitecollar Solution</p>
                </div>
                <div className='mt-5 w-full'>
                    <h1 className={poppins.className + ' text-white text-3xl xl:text-5xl tracking-wide font-bold'}>
                        The Best Value for <span className='text-[#40DDB6]'>Business</span> and Corporation
                    </h1>
                </div>
                <div className='mt-5 w-full'>
                    <p className='font-medium text-base lg:text-sm xl:text-base text-[#B9B9B9]'>Collaboratively administrate empowered markets plug and play networks dynamically procrastinated </p>
                </div>
                <div className='mt-8 w-full'>
                    <ColoredBtn 
                        text='Get Consulting' 
                        href='/contact'
                        className='w-44 h-16 bg-[#40DDB6] text-lg font-semibold text-black hover:bg-[#6B77E5] rounded-none'
                    />
                </div>
            </div>
            <Image src={heroImg} alt='hero-image' className='object-cover h-screen' />
        </div>
    )
}

export default Hero