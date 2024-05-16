import { LucideIcon } from 'lucide-react'
import Link from 'next/link';
import React from 'react'

interface WorkCardProps {
    icon: LucideIcon;
    title: string;
    content: string;
}

const WorkCard: React.FC<WorkCardProps> = ({ icon: Icon, title, content }) => {
    return (
        <div className='relative max-w-96 h-80 flex flex-col items-center bg-[#F4F4F4]'>
            <div className='absolute -translate-y-1/2 w-[72px] h-[72px] rounded-full bg-[#40DDB6] flex justify-center items-center'>
                <Icon className='text-white w-10 h-10' />
            </div>
            <div className='flex flex-col h-full items-center justify-center text-center gap-4 px-10'>
                <h1 className='font-semibold text-2xl'>{ title }</h1>
                <p className='text-lg text-[#7D7D7D]'>{ content }</p>
                <Link href='/' className='mt-2'>
                    <p className='text-lg font-semibold text-[#6B77E5]'>Testimonial</p>
                </Link>
            </div>
        </div>
    )
}

export default WorkCard