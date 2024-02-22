import HeadingText from '@/components/HeadingText'
import Hero from '@/components/Hero'
import React from 'react'

const HomePage = () => {
  return (
    <section className="h-full pt-40">
     <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
      <HeadingText />
      <Hero  />
      </div>
    </section>
  )
}

export default HomePage