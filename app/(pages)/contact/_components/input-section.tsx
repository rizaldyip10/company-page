import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'
import React from 'react'
import * as Yup from 'yup'

const InputSection = () => {
    const schema = Yup.object().shape({
        name: Yup.string().min(3, "At least 3 characters").required("Please fill your name"),
        email: Yup.string().email("Please enter valid email").required("Please fill your email"),
        phone: Yup.number().min(11, "Please enter valid phone number").required("Please fill your number"),
        subject: Yup.string().min(3, "At least 3 characters").required("Please fill the subject")
    })
    return (
        <div className='w-full flex flex-col gap-7'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-x-9 gap-y-7'>
                <Input placeholder='Your Name' className='h-16'/>
                <Input placeholder='Email Address' className='h-16'/>
                <Input placeholder='Phone Number' className='h-16'/>
                <Input placeholder='Subject' className='h-16'/>
            </div>
            <div className='w-full'>
                <Textarea placeholder='Message...' className='h-52' />
            </div>
            <div className='flex items-center justify-center'>
                <Button className={cn('h-16 w-36 rounded-none bg-[#6B77E5] text-white')}>
                    Submit
                </Button>
            </div>
        </div>
    )
}

export default InputSection