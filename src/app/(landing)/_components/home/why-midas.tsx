'use client'
import React from 'react'
import WhyMidasVideo from './why-midas-video'
import WhyMidasComparison from './why-midas-comparison'

const WhyMidas: React.FC = () => {
  return (
    <section id="why-midas" className="relative bg-white py-10 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <h2 className="text-center font-montserrat text-brand-blue-700 tracking-[0.18em] sm:tracking-[0.22em] md:tracking-[0.28em] text-2xl sm:text-3xl md:text-4xl font-semibold">
          WHY MIDAS IS THE RIGHT PICK
        </h2>

        <div className="mt-10">
          <WhyMidasComparison />
        </div>
      
        <p className="md:mt-16 mt-10 text-center font-montserrat text-brand-blue-700/90 max-w-7xl mx-auto text-base sm:text-lg md:text-xl  lg:whitespace-nowrap">
          Watch this quick video to see how you can sell, buy, or release gold with complete transparency.
        </p>
        <WhyMidasVideo />
      </div>
    </section>
  )
}

export default WhyMidas