import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react'
import React from 'react'

interface CircularIconProps {
    icon: LucideIcon;
    iconStyle: string;
    containerStyle: string;
}

const CircularIcon: React.FC<CircularIconProps> = ({ icon: Icon, iconStyle, containerStyle }) => {
    return (
        <div className={cn('flex justify-center items-center', containerStyle)}>
            <Icon className={iconStyle} />
        </div>
    )
}

export default CircularIcon