import CircularProgressBar from '@/components/circular-progress';
import React from 'react'

interface ChooseCardProps {
    title: string;
    subtitle: string;
    percentage: number;
    width: string;
    bgColor: string;
}

const ChooseCard: React.FC<ChooseCardProps> = ({ title, subtitle, percentage, width, bgColor }) => {
    return (
        <div className='max-w-72 flex flex-wrap items-center justify-center py-6 px-7 gap-2' style={{ backgroundColor: bgColor}}>
            <div>
                <CircularProgressBar width={width} progress={percentage} strokeWidth='3' textSize='xl' />
            </div>
            <div className='flex flex-col'>
                <p className='text-base'>{ title }</p>
                <h3 className='text-lg font-semibold'>{ subtitle }</h3>
            </div>
        </div>
    )
}

export default ChooseCard