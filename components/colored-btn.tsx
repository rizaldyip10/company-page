"use client"

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation'
import React from 'react'

interface ColoredBtnProps {
    text: string;
    className: string;
    href: string;
    textStyle?: string;
}

const ColoredBtn: React.FC<ColoredBtnProps> = ({ 
    text, className, href , textStyle
}) => {
    const router = useRouter()
    return (
        <Button className={cn(className)} onClick={() => router.push(href)}>
            <p className={textStyle}>{ text }</p>
        </Button>
    )
}

export default ColoredBtn