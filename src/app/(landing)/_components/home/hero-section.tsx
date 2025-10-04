'use client'
import React, { useRef, useState } from 'react'
import Image from 'next/image'

const HeroSection: React.FC = () => {

  const [bgLoaded, setBgLoaded] = useState(false)
  const contentRef = useRef<HTMLDivElement | null>(null)
  const imageRef = useRef<HTMLDivElement | null>(null)

  return (
    <section id="home" className="relative isolate overflow-hidden h-[60vh] sm:h-[55vh] md:h-[80vh] lg:h-[85vh] xl:h-[90vh]">
      {/* Background image using next/image (fade-in on load) */}
      <div
        className="absolute inset-0 -z-20 transition-opacity duration-700 ease-out"
        style={{ opacity: bgLoaded ? 0.7 : 0 }}
      >
        <Image
          src="/landing-page/home/background.png"
          alt="background-image"
          fill
          sizes="100vw"
          loading="lazy"
          className="object-cover object-center"
          aria-hidden="true"
          onLoadingComplete={() => setBgLoaded(true)}
        />
      </div>
      {/* Background gradient overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-green-900 to-brand-green-800 opacity-80" />
      {/* Hero illustration pinned bottom-right of the section */}
      <div
        ref={imageRef}
        className="pointer-events-none absolute -bottom-4 -right-0 z-0 h-[330px] sm:h-[390px] md:h-[490px] w-[330px] sm:w-[390px] md:w-[490px]"
        style={{ willChange: 'transform, opacity' }}
      >
        <Image
          src='/landing-page/home/hero-image.png'
          alt='makeover'
          fill
          placeholder="blur"
          blurDataURL="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'><rect width='10' height='10' fill='%231b3a8a'/></svg>"
          sizes="(min-width: 768px) 520px, 100vw"
          className="object-contain"
          aria-hidden="true"
        />
      </div>
      {/* Content */}
      <div className="relative z-10 mx-auto  md:max-w-2xl lg:max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start min-h-[90vh] py-30 sm:py-28 md:py-68">

          <div
            ref={contentRef}
            className="md:col-span-2"
            style={{ willChange: 'transform, opacity' }}
          >
            <h1 className="hero-title text-white text-3xl sm:text-4xl md:text-3xl lg:text-5xl font-normal tracking-wider font-felix-titling px-5 sm:px-0">
              <span className="block sm:whitespace-nowrap">REDEFINING STYLE, RENEWING CONFIDENCE</span>
            </h1>
            <h2 className='text-white text-md sm:text-xl md:text-xl lg:text-2xl font-normal font-montserrat mt-6 mx-6 lg:mx-0'>Where Beauty Meets Artistry - Discover A New You With Our Professional<br></br> Makeover Services.</h2>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection