import Image from 'next/image'
import React from 'react'
import teamImg from '@/imgs/teamSection.jpg'
import ColoredBtn from '@/components/colored-btn'
import AnimationWrapper from '@/components/animation'

const TeamSection = () => {
    return (
        <AnimationWrapper classname='relative w-full flex justify-center items-center pb-10'>
            <ColoredBtn href='/team' text='Meet Our Team' className=' w-60 h-20 lg:w-[601px] lg:h-[222px] bg-[#37393F] opacity-80 rounded-none absolute' textStyle='text-xl lg:text-4xl font-bold' />
            <Image alt='team' src={teamImg} />
        </AnimationWrapper>
    )
}

export default TeamSection