import React from 'react'
import Navbar from './_components/navbar'

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      { children }
    </div>
  )
}

export default PageLayout