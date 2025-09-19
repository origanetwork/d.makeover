'use client'
import React from 'react'
import WhyMidasCards from '../home/why-midas-cards'

const WhyMidas: React.FC = () => {
  return (
    <section className="relative bg-white py-10 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <h2 className="text-center font-montserrat text-brand-blue-700 tracking-[0.18em] sm:tracking-[0.22em] md:tracking-[0.28em] text-2xl sm:text-3xl md:text-4xl font-semibold">
          WHY CHOOSE US
        </h2>
        <WhyMidasCards />
      </div>
    </section>
  )
}

export default WhyMidas