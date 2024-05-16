import { Square } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

interface LinkChildrenType {
    label: string;
    href: string;
}

interface LinkSectionProps {
    title: string;
    content: LinkChildrenType[];
}

const LinkSection: React.FC<LinkSectionProps> = ({ title, content }) => {
    return (
        <div className='flex flex-col gap-3'>
            <div className='flex gap-1 items-center'>
                <Square className='w-3 h-3 text-[#6B77E5] bg-[#6B77E5]' />
                <h2 className='text-[#40DDB6] text-xl font-semibold'>{ title }</h2>
            </div>
            <div className='flex flex-col gap-2'>
                {
                    content.map((item, index) => (
                        <Link key={index} href={item.href}>
                            <p className='text-lg text-white hover:text-[#40DDB6] hover:underline'>
                                { item.label }
                            </p>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default LinkSection