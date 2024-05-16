import ColoredBtn from '@/components/colored-btn'
import { Square } from 'lucide-react'
import React from 'react'
import project1 from '@/imgs/project1.webp'
import project2 from '@/imgs/project2.webp'
import project3 from '@/imgs/project3.webp'
import project4 from '@/imgs/project4.webp'
import Image from 'next/image'

const imgList = [
    {
        name: 'project1',
        img: project1
    },
    {
        name: 'project2',
        img: project2
    },
    {
        name: 'project3',
        img: project3
    },
    {
        name: 'project4',
        img: project4
    },
]

const ProjectsList = () => {
    return (
        <div className='flex flex-col w-full gap-10 py-36'>
            <div className='w-full flex flex-col px-10 xl:px-96 gap-4'>
                <div className='flex w-full items-center gap-1'>
                    <Square className='bg-[#40DDB6] w-3 h-3 text-[#40DDB6]' />
                    <p className='text-lg font-medium'>Our Projects</p>
                </div>
                <div className='flex w-full flex-col md:flex-row gap-10 md:gap-0 md:items-center justify-between'>
                    <h1 className='text-4xl font-bold'>You can check our project <br /> as inspiration.</h1>
                    <ColoredBtn text='More Works' className='h-14 w-40 bg-[#40DDB6] hover:bg-[##6B77E5] text-lg font-semibold rounded-none' href='' />
                </div>
            </div>
            <div className='w-full flex gap-10 px-10 justify-center flex-wrap'>
                {
                    imgList.map((img, index) => (
                        <Image key={index} src={img.img} alt={img.name} className='h-96 w-80' />
                    ))
                }
            </div>
        </div>
    )
}

export default ProjectsList