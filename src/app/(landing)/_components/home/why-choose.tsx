'use client'

import React, { useState, useEffect } from 'react'
import { IoMdBriefcase, IoIosCut } from "react-icons/io";
import { FiDollarSign } from "react-icons/fi";
import { IoPeopleSharp } from "react-icons/io5";

const WhyChooseUs: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isClient, setIsClient] = useState(false)

    // Replace with actual content
    const items = [
        { id: 1, title: '10+ Years Experience', description: 'With 10+ years in the beauty & grooming industry, we bring unmatched experience and trust to every service.', icon: IoIosCut },
        { id: 2, title: 'Professional Experts', description: 'Our expert stylists use the latest tools and trends to deliver flawless, lasting results.', icon: IoMdBriefcase },
        { id: 3, title: 'Affordable Prices', description: 'Enjoy premium beauty services at prices designed to be accessible without cutting corners on quality.', icon: FiDollarSign },
        { id: 4, title: 'Customer-Centric Care', description: 'We listen, understand, and tailor every service to make sure you feel valued, confident, and radiant.', icon: IoPeopleSharp },
    ]

    useEffect(() => {
        setIsClient(true)
    }, [])

    // Auto-slide effect
    useEffect(() => {
        if (!isClient) return

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === items.length - 1 ? 0 : prevIndex + 1
            )
        }, 3000) // Slide every 3 seconds

        return () => clearInterval(interval)
    }, [isClient, items.length])

    // Static render for SSR - no interactive elements
    if (!isClient) {
        return (
            <section id='why-choose' className='bg-white px-4 sm:px-8 lg:px-28 py-6 md:py-8 lg:py-10'>
                <h1 className='font-felix-titling text-brand-green-800 tracking-wider text-4xl sm:text-4xl lg:text-5xl text-center mb-8 sm:mb-10'>WHY CHOOSE US</h1>

                {/* Static grid for all screen sizes during SSR */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {items.map((item) => {
                        const IconComponent = item.icon
                        return (
                            <div
                                key={item.id}
                                className='aspect-square  rounded-lg shadow-lg px-6 py-12 relative overflow-hidden'
                                style={{
                                    background: 'conic-gradient(from 180deg at 50% 30%, #044048, #0A9BAE, #044048)'
                                }}
                            >
                                <div className='relative z-10 flex flex-col items-center justify-center text-white'>
                                    <div className='p-4 bg-brand-gold-500/30 text-brand-gold rounded-full mb-7'>
                                        <IconComponent size={40} />
                                    </div>

                                    <h3 className='font-montserrat text-xl font-semibold'>{item.title}</h3>
                                </div>
                                <p className='relative z-10 text-center text-xs text-gray-400 leading-7 mt-3'>{item.description}</p>
                            </div>
                        )
                    })}
                </div>
            </section>
        )
    }

    return (
        <section id='why-choose' className='bg-white px-4 sm:px-8 lg:px-28 py-6 md:py-8 lg:py-10'>
            <h1 className='font-felix-titling text-brand-green-800 tracking-wider text-4xl sm:text-4xl lg:text-5xl text-center mb-8 sm:mb-10'>WHY CHOOSE US</h1>

            {/* Desktop Grid - 4 columns */}
            <div className='hidden lg:grid lg:grid-cols-4 gap-6'>
                {items.map((item) => {
                    const IconComponent = item.icon
                    return (
                        <div
                            key={item.id}
                            className='aspect-square  rounded-lg shadow-lg px-6 py-12 relative overflow-hidden'
                            style={{
                                background: 'conic-gradient(from 180deg at 50% 30%, #044048, #0A9BAE, #044048)'
                            }}
                        >
                            <div className='relative z-10 flex flex-col items-center justify-center text-white'>
                                <div className='p-4 bg-brand-gold-500/30 text-brand-gold rounded-full mb-7'>
                                    <IconComponent size={40} />
                                </div>

                                <h3 className='font-montserrat text-xl font-semibold'>{item.title}</h3>
                            </div>
                            <p className='relative z-10 text-center text-xs text-gray-400 leading-7 mt-3'>{item.description}</p>
                        </div>
                    )
                })}
            </div>

            {/* Tablet Grid - 2 columns */}
            <div className='hidden md:grid lg:hidden md:grid-cols-2 gap-6'>
                {items.map((item) => {
                    const IconComponent = item.icon
                    return (
                        <div
                            key={item.id}
                            className='aspect-square  rounded-lg shadow-lg px-6 py-12 relative overflow-hidden'
                            style={{
                                background: 'conic-gradient(from 180deg at 50% 30%, #044048, #0A9BAE, #044048)'
                            }}
                        >
                            <div className='relative z-10 flex flex-col items-center justify-center text-white'>
                                <div className='p-4 bg-brand-gold-500/30 text-brand-gold rounded-full mb-7'>
                                    <IconComponent size={40} />
                                </div>

                                <h3 className='font-montserrat text-xl font-semibold'>{item.title}</h3>
                            </div>
                            <p className='relative z-10 text-center text-xs text-gray-400 leading-7 mt-3'>{item.description}</p>
                        </div>
                    )
                })}
            </div>

            {/* Mobile Carousel */}
            <div className='md:hidden relative'>
                <div className='overflow-hidden'>
                    <div
                        className='flex transition-transform duration-300 ease-in-out'
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {items.map((item) => {
                            const IconComponent = item.icon
                            return (
                                <div key={item.id} className='w-full flex-shrink-0 px-4'>
                                    <div
                                        className='aspect-square rounded-lg shadow-lg px-6 py-12 relative overflow-hidden'
                                        style={{
                                            background: 'conic-gradient(from 180deg at 50% 25%, #044048, #0A9BAE, #044048)'
                                        }}
                                    >
                                        <div className='relative z-10 flex flex-col items-center justify-center text-white'>
                                            <div className='p-4 bg-brand-gold-500/30 text-brand-gold rounded-full mb-7'>
                                                <IconComponent size={40} />
                                            </div>

                                            <h3 className='font-montserrat text-xl font-semibold'>{item.title}</h3>
                                        </div>
                                        <p className='relative z-10 text-center text-xs text-gray-400 leading-7 mt-3'>{item.description}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Dots Indicator */}
                <div className='flex justify-center mt-4 space-x-2'>
                    {items.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? 'bg-brand-green-800' : 'bg-gray-300'
                                }`}
                            aria-label={`Go to item ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs