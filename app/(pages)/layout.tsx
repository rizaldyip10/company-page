import React from 'react'
import Navbar from './_components/navbar'
import Footer from './_components/footer'

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='min-h-screen'>
      <Navbar />
      <div className='w-full pt-20'>
        { children }
      </div>
      <Footer />
    </div>
  )
}

export default PageLayout