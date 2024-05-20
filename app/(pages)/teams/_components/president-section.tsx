import Image from 'next/image'
import React from 'react'
import presidentImage from "@/imgs/president1.webp"
import SectionTitle from '@/components/section-title'

const PresidentSection = () => {
  return (
    <div className='w-full flex justify-center items-center my-24 px-6 md:px-10 lg:px-20'>
        <div className='flex flex-col gap-10'>
            <div className='w-full flex flex-col gap-2 items-center'>
                <SectionTitle title='Whitecollar Leader' />
                <h1 className='font-semibold text-4xl'>A Word From Our CEO</h1>
            </div>
            <div className='w-full flex flex-col lg:flex-row gap-10 items-center lg:items-start'>
                <Image alt='president' src={presidentImage} priority className='w-[300px] h-[400px] md:w-[400px] md:h-[600px] object-cover' />
                <div className='w-full flex flex-col gap-5'>
                    <div className='border-l-8 border-[#40DDB6] px-6 py-6 bg-[#F4F4F4]'>
                        <p className='font-semibold text-2xl text-wrap leading-10'>&quot;At Whitecollar Solution, our best feature is our global team of highly professional and knowledgeable individuals, who, through their hard work, passion, dedication and perceptiveness, continuously drive our firm forward.&quot;</p>
                    </div>
                    <h1 className='text-xl font-semibold'>Rizaldy Iman Putra</h1>
                    <p className='-mt-2 text-[#7D7D7D]'>Chief Executive Officer</p>
                    <hr />
                    <p className='text-lg leading-8'>Rizaldy&apos;s entrepreneurial journey began in 2019 when he founded a consulting firm focused on guiding businesses in Indonesia to achieve operational excellence through Six Sigma and Lean Thinking practices.</p>
                    <p className='text-lg leading-8'>In 2021, Rizaldy founded Whitecollar Solution, an IT-based business consulting company. Under his leadership, Whitecollar has rapidly grown into a trusted business automation platform that has been used by dozens of companies. Committed to innovation and harnessing the potential of technology, Whitecollar aims to expand its offerings to create a more comprehensive and efficient platform.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PresidentSection