'use client'

import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Instagram } from 'lucide-react'
import Image from 'next/image'

const Gallery: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isClient, setIsClient] = useState(false)

    // Replace these with your actual image paths
    const images = [
        '/landing-page/home/hair-color.JPG',
        '/landing-page/home/groom1.JPG',
        '/landing-page/home/bridal-2.JPG',
    ]

    useEffect(() => {
        setIsClient(true)
    }, [])

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        )
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        )
    }

    // Static fallback for server-side rendering
    if (!isClient) {
        return (
            <section id="gallery" className='bg-white px-4 sm:px-8 lg:px-18 py-12'>
                <div>
                    <h1 className='font-felix-titling text-brand-green-800 text-4xl sm:text-4xl lg:text-5xl text-center mb-8 sm:mb-10'>GALLERY</h1>

                    {/* Static grid for SSR - no interactive elements */}
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                        {images.map((image, index) => (
                            <div key={index} className='aspect-square overflow-hidden shadow-lg relative'>
                                <Image
                                    src={image}
                                    alt={`Gallery image ${index + 1}`}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 33vw"
                                    className='object-cover'
                                    priority={index === 0} // Prioritize first image
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section id="gallery" className='bg-white px-4 sm:px-8 lg:px-18 py-16'>

            <h1 className='font-felix-titling text-brand-green-800 tracking-wider text-4xl sm:text-4xl lg:text-5xl text-center mb-8 sm:mb-10'>GALLERY</h1>

            {/* Desktop Grid - hidden on mobile/tablet */}
            <div className='hidden lg:grid grid-cols-3 gap-6'>
                {images.map((image, index) => (
                    <div key={index} className='aspect-square overflow-hidden shadow-lg relative'>
                        <Image
                            src={image}
                            alt={`Gallery image ${index + 1}`}
                            fill
                            sizes="(max-width: 1024px) 100vw, 33vw"
                            className='object-cover hover:scale-105 transition-transform duration-300'
                        />
                    </div>
                ))}
            </div>

            {/* Mobile/Tablet Carousel - hidden on desktop */}
            <div className='lg:hidden relative'>
                <div className='overflow-hidden'>
                    <div
                        className='flex transition-transform duration-300 ease-in-out'
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {images.map((image, index) => (
                            <div key={index} className='w-full flex-shrink-0 aspect-square relative'>
                                <Image
                                    src={image}
                                    alt={`Gallery image ${index + 1}`}
                                    fill
                                    sizes="100vw"
                                    className='object-cover'
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={prevSlide}
                    className='absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all z-10'
                    aria-label='Previous image'
                >
                    <ChevronLeft size={24} className='text-brand-green-800' />
                </button>
                <button
                    onClick={nextSlide}
                    className='absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all z-10'
                    aria-label='Next image'
                >
                    <ChevronRight size={24} className='text-brand-green-800' />
                </button>

                {/* Dots Indicator */}
                <div className='flex justify-center mt-4 space-x-2'>
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? 'bg-brand-green-800' : 'bg-gray-300'
                                }`}
                            aria-label={`Go to image ${index + 1}`}
                        />
                    ))}
                </div>
            </div>



            <div className='flex flex-col lg:flex-row gap-6 mt-6'>
                {/* Follow Us */}
                <a
                    href='https://www.instagram.com/d_dot_makeoverstudio/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='aspect-square lg:w-[calc(33.333%-14px)] bg-black overflow-hidden shadow-lg relative flex-shrink-0 flex items-center justify-center group cursor-pointer transition-transform hover:scale-102'
                >
                    <div className='bg-black opacity-30 absolute inset-0 flex items-center justify-center'>
                        <Image
                            src='/landing-page/home/d-dot-logo.png'
                            alt='D-Dot Logo'
                            width={250}
                            height={250}
                            className='object-contain'
                        />
                    </div>

                    {/* Follow Us Text and Instagram Icon */}
                    <div className='relative z-10 flex flex-col items-center gap-4'>
                        <h3 className='text-white font-felix-titling text-6xl'>FOLLOW US</h3>
                        <div className='flex items-center gap-3 rounded-full px-2 py-2 bg-white text-black'>
                            <Instagram width={28} height={28} />
                        </div>
                    </div>
                </a>

                {/* Shop Image */}
                <div className='relative aspect-square lg:aspect-[2/1] lg:w-[calc(66.666%-6px)] overflow-hidden shadow-lg flex-shrink-0'>
                    <Image
                        src='/landing-page/home/studio.jpg'
                        alt='Gallery shop'
                        fill
                        sizes="(max-width: 1024px) 100vw, 66vw"
                        className='object-cover hover:scale-105 transition-transform duration-300'
                        unoptimized
                    />
                </div>
            </div>

            {/* Explore Gallery Button */}
            <div className='flex justify-center mt-10'>
                <a
                    href='/gallery'
                    className='inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-gradient-to-l from-gold-900 to-brand-gold-500 px-12 text-brand-green-800 font-bold hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 transition-all font-montserrat'
                >
                    <span>Explore Gallery</span>
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </a>
            </div>
        </section>
    )
}

export default Gallery