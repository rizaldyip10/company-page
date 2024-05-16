"use client";

import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

interface SideMenuProps {
    href: string;
    label: string;
}

const SideMenuItem: React.FC<SideMenuProps> = ({ href, label }) => {
    const pathname = usePathname();
    const router = useRouter();

    console.log(pathname);
    

    const isActive = pathname == href
    

    const onClick = () => {
        router.push(href)
    }

    return (
        <div 
            className={cn(
                'w-full py-4 px-5 flex justify-between items-center cursor-pointer hover:bg-[#6b77e55b]',
                isActive ? 'bg-[#6B77E5] text-white' : ""
            )} 
            onClick={onClick}
        >
            <p className='text-base'>{ label }</p>
            <ChevronRight />
        </div>
    )
}

export default SideMenuItem