import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import React from 'react'

interface NavbarMobileItemsProps {
    href: string;
    label: string;
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined;
    textSize: string;
    onClose: () => void;
}

const NavbarMobileItems: React.FC<NavbarMobileItemsProps> = ({ href, label, variant, textSize, onClose }) => {
    const router = useRouter();

    const onClick = () => {
        router.push(href)
        setTimeout(() => {
          onClose()
        }, 150)
    };

  return (
    <Button onClick={onClick} variant={variant}>
        <p className={textSize}>{ label }</p>
    </Button>
  )
}

export default NavbarMobileItems