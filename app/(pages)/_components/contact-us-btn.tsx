import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation'
import React from 'react'

interface ContactUsBtn {
    width: string;
    marginLeft?: string;
    textSize: string;
    height: string;
}

const ContactUsBtn: React.FC<ContactUsBtn> = ({ width, marginLeft, textSize, height }) => {
    const router = useRouter()
    return (
        <Button className={cn(`bg-[#6B78E5] ${width} ${height} ${marginLeft} ${textSize}`)} onClick={() => router.push('/contact')}>
            <p>Contact Us</p>
        </Button>
    )
}

export default ContactUsBtn