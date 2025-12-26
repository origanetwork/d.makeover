'use client'
import React, { useRef, useState, useEffect } from 'react'
import Image from 'next/image'

// Define the structure for rotating content
interface HeroContent {
  id: string
  title: string[]
  subtitle: string
  heroImage: string
}

// Configuration for rotating content (add as many as you want)
const ROTATING_CONTENT: HeroContent[] = [
  {
    id: 'content-1',
    title: ['REDEFINING STYLE,', 'RENEWING CONFIDENCE'],
    subtitle: 'Where Beauty Meets Artistry - Discover A New You With Our Professional Makeover Services.',
    heroImage: '/landing-page/home/banner-groom1.png',
  },
  {
    id: 'content-2',
    title: ['REFINED STYLE,', 'TIMELESS CHARISMA'],
    subtitle: 'Groomed to perfection — confident, sophisticated, unmistakably you.',
    heroImage: '/landing-page/home/banner-groomm.png',
  },
  {
    id: 'content-3',
    title: ['RADIANT ELEGANCE,', 'UNFORGETTABLE MOMENTS'],
    subtitle: 'Redefine your style with a touch of sophistication and timeless charm.',
    heroImage: '/landing-page/home/banner-girl.png',
  },
]

// Rotation interval in milliseconds 
const ROTATION_INTERVAL = 3000

const HeroSection: React.FC = () => {

  const [bgLoaded, setBgLoaded] = useState(false)
  const contentRef = useRef<HTMLDivElement | null>(null)
  const imageRef = useRef<HTMLDivElement | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  // Rotate content every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % ROTATING_CONTENT.length)
    }, ROTATION_INTERVAL)

    return () => clearInterval(interval)
  }, [])

  const currentContent = ROTATING_CONTENT[currentIndex]

  return (
    <section id="home" className="relative isolate overflow-hidden h-[60vh] sm:h-[55vh] md:h-[60vh] lg:h-[85vh] xl:h-[90vh]">
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
        className="pointer-events-none absolute -bottom-4 -right-12 md:-right-0 lg:-right-0 z-0 h-[330px] sm:h-[390px] md:h-[490px] w-[330px] sm:w-[390px] md:w-[490px]"
        style={{ willChange: 'transform, opacity' }}
      >
        <Image
          src={currentContent.heroImage}
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
      <div className="relative z-10 mx-auto  md:max-w-2xl lg:max-w-7xl mt-6 md:mt-0 lg:mt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start min-h-[90vh] py-30 md:py-50 lg:py-68">

          <div
            ref={contentRef}
            className="md:col-span-2"
            style={{ willChange: 'transform, opacity' }}
          >
            <h1 className="hero-title text-white text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-normal tracking-wider font-felix-titling px-5 sm:px-0">
              <span className="block md:inline">{currentContent.title[0]}</span>
              <span className="block md:inline"> {currentContent.title[1]}</span>
            </h1>
            <h2 className='w-1/2 lg:w-full md:w-full text-white text-md sm:text-xl md:text-xl lg:text-2xl font-normal font-montserrat mt-6 mx-6 md:mx-0 lg:mx-0'>{currentContent.subtitle}</h2>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection