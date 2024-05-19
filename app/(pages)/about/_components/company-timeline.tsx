import SectionTitle from '@/components/section-title'
import { Calendar, Cpu, Medal } from 'lucide-react'
import React from 'react'

const CompanyTimeline = () => {
    return (
        <div className='w-full flex flex-col gap-20 justify-center px-7 lg:px-24 py-28'>
            <div className='w-full flex flex-col items-center text-center gap-2'>
                <SectionTitle title='Company Timeline' />
                <h1 className='font-bold text-4xl max-w-[600px]'>See Through Our Journey From the Start</h1>
            </div>
            <ol className="items-center sm:flex">
                <li className="relative mb-6 sm:mb-0">
                    <div className="flex items-center">
                        <div className="z-10 flex items-center justify-center w-10 h-10 md:w-14 md:h-14 bg-[#F4F4F4] rounded-full ring-0 ring-white sm:ring-8 shrink-0">
                            <Calendar className='text-[#6B77E5] w-5 h-5 md:h-7 md:w-7' />
                        </div>
                        <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                    </div>
                    <div className="mt-3 sm:pe-8">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Whitecollar Established
                        </h3>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2021</time>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                            Launched core services in financial consulting, strategic planning, and market analysis.
                        </p>
                    </div>
                </li>
                <li className="relative mb-6 sm:mb-0">
                    <div className="flex items-center">
                        <div className="z-10 flex items-center justify-center w-10 md:w-14 md:h-14 h-10 bg-[#F4F4F4] rounded-full ring-0 ring-white sm:ring-8 shrink-0">
                            <Cpu className='w-5 h-5 md:h-7 md:w-7 text-[#6B77E5]' />
                        </div>
                        <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                    </div>
                    <div className="mt-3 sm:pe-8">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            IT Transformation
                        </h3>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2022</time>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                            Introduced digital transformation and IT consulting services.
                        </p>
                    </div>
                </li>
                <li className="relative mb-6 sm:mb-0">
                    <div className="flex items-center">
                        <div className="z-10 flex items-center justify-center w-10 h-10 md:w-14 md:h-14 bg-[#F4F4F4] rounded-full ring-0 ring-white sm:ring-8 shrink-0">
                            <Medal className='w-5 h-5 md:h-7 md:w-7 text-[#6B77E5]' />
                        </div>
                        <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                    </div>
                    <div className="mt-3 sm:pe-8">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Major Milestone
                        </h3>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2023</time>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                            Received industry award for excellence in business consulting.
                        </p>
                    </div>
                </li>
            </ol>
        </div>
    )
}

export default CompanyTimeline