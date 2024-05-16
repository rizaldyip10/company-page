import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { FileArchive, FileText } from 'lucide-react'
import React from 'react'

const FileDownload = () => {
    return (
        <div className='w-full flex flex-col py-14 px-8 gap-5 bg-[#F4F4F4]'>
            <h1 className='text-xl font-semibold'>Download</h1>
            <Separator className='bg-black' />
            <p className='text-[#7D7D7D]'>One-to-one customer service with robust deliverables.</p>
            <div className='flex flex-col gap-5'>
                <Button className='bg-[#6B77E5] flex gap-2 w-full h-16 rounded-none text-white'>
                    <FileText className='text-white' />
                    <p className='font-semibold text-lg'>Document.pdf</p>
                </Button>
                <Button className='bg-[#6B77E5] flex gap-2 w-full h-16 rounded-none text-white'>
                    <FileArchive className='text-white' />
                    <p className='font-semibold text-lg'>Document.zip</p>
                </Button>
            </div>
        </div>
    )
}

export default FileDownload