import SectionTitle from '@/components/section-title';
import { Square } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import React from 'react'
import AnimationWrapper from './animation';

interface HeroSmallProps {
    pageName: string;
    img: StaticImageData;
    title: string;
    content?: string;
}

const HeroSmall: React.FC<HeroSmallProps> = ({ pageName, img, title, content }) => {
    return (
        <div className='h-max relative w-full'>
            <div className='absolute h-[50vh] lg:h-full left-0 w-full justify-center lg:w-[41.5%] flex items-center px-10 lg:px-32 bg-[#37393F] opacity-90'>
                <AnimationWrapper classname='w-full'>
                    <div className='flex flex-col'>
                        <div className='flex gap-1 items-center'>
                            <Square className='w-3 h-3 text-[#40DDB6] bg-[#40DDB6]' />
                            <h2 className='text-white text-lg font-semibold'>{ pageName }</h2>
                        </div>
                        <h1 className='font-bold text-3xl text-white capitalize'>{ title }</h1>
                        <p className='text-sm font-medium text-[#B9B9B9]'>{ content }</p>
                    </div>
                </AnimationWrapper>
            </div>
            <Image alt={pageName} src={img} priority className='object-cover h-[50vh] w-full' />
        </div>
    )
}

export default HeroSmall