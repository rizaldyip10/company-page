import { Check } from 'lucide-react';
import React from 'react'

interface CheckListProps {
    p: string;
    bgColor: string;
    textStyle: string;
    checkColor: string;
}

const CheckList: React.FC<CheckListProps> = ({ p, bgColor, textStyle, checkColor }) => {
    return (
        <div className='w-full flex gap-2 items-center'>
            <div className={`w-7 h-7 flex items-center justify-center rounded-full bg-[${bgColor}] text-white`}>
                <Check className={`w-5 h-5 text-[${checkColor}]`} />
            </div>
            <p className={textStyle}>{ p }</p>
        </div>
    )
}

export default CheckList