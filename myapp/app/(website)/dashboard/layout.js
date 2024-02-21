import Header from '@/components/Header'
import React from 'react'

const layout = ({children}) => {
  return (
    <div>
      <Header />
        <div className='flex flex-col min-h-screen max-w-screen-lg mx-auto p-6'>
        {children}
        </div>
    </div>
  )
}

export default layout