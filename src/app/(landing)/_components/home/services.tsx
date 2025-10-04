'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { IoMdCut } from 'react-icons/io'
import { IoWomanSharp, IoManSharp } from 'react-icons/io5'
import { IoMdColorPalette } from "react-icons/io";
import { FaRegHand } from "react-icons/fa6";
import { Sparkles } from 'lucide-react';
import { GiBeard } from "react-icons/gi";

const Services: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'women' | 'men'>('women')
    // const [currentIndex, setCurrentIndex] = useState(0)

    const womenServices = [
        {
            id: 1,
            title: 'Bridal Makeover',
            description: 'Elegant bridal makeovers for your big day.',
            image: '/landing-page/home/women-bridal.jpg',
            icon: IoMdColorPalette
        },
        {
            id: 2,
            title: 'Hair Styling',
            description: 'From subtle highlights to bold transformations.',
            image: '/landing-page/home/women-hairstyle.jpg',
            icon: IoMdCut
        },
        {
            id: 3,
            title: 'Makeup',
            description: 'Party, casual, and occasion-ready looks.',
            image: '/landing-page/home/women-makeup.jpg',
            icon: Sparkles
        },
        {
            id: 4,
            title: 'Nail Care',
            description: 'Trendy nail art, extensions, and care treatments.',
            image: '/landing-page/home/women-nail.jpg',
            icon: FaRegHand
        }
    ]

    const menServices = [
        {
            id: 1,
            title: 'Hair Cut',
            description: 'Modern and classic haircut styles for men',
            image: '/landing-page/home/men-haircut.jpg',
            icon: IoMdCut
        },
        {
            id: 2,
            title: 'Beard Styling',
            description: 'Professional beard trimming and styling',
            image: '/landing-page/home/men-beardstyle.jpg',
            icon: GiBeard
        },
        {
            id: 3,
            title: 'Hair Color',
            description: 'Hair coloring and highlighting services',
            image: '/landing-page/home/men-haircolor.jpg',
            icon: IoMdColorPalette
        },
        {
            id: 4,
            title: 'Facial',
            description: 'Rejuvenating facial treatments for men',
            image: '/landing-page/home/men-facial.jpg',
            icon: Sparkles
        }
    ]

    const currentServices = activeTab === 'women' ? womenServices : menServices

    return (
        <section id="services" className='bg-white px-4 sm:px-8 lg:px-16 py-8 md:py-14 lg:pb-10'>
            <div className="bg-brand-gold py-8 px-6 sm:px-12 lg:px-20 rounded-4xl">
                <div className="flex items-center gap-2 lg:mb-6 md:mb-4 mb-3">
                    <h1 className="font-montserrat text-xl md:text-xl lg:text-2xl font-bold text-black">OUR </h1>
                    <h1 className="font-montserrat text-xl md:text-xl lg:text-2xl font-bold text-black">SERVICES</h1>
                    <div className="h-px bg-white w-full"></div>
                </div>
                <h1 className='font-felix-titling text-brand-green-800 tracking-wider text-xl sm:text-3xl lg:text-3xl text-center lg:mb-10 md:mb-8 mb-6'>PROFESSIONAL BEAUTY AND GROOMING SERVICES TAILORED FOR EVERYONE</h1>

                {/* Tab Selection */}
                <div className='flex justify-center lg:mb-8 mb-6'>
                    <div className='flex p-3 bg-white rounded-xl gap-2'>
                        <button
                            onClick={() => {
                                setActiveTab('women')
                                // setCurrentIndex(0)
                            }}
                            className={`lg:w-44 md:w-42 w-40 lg:px-6 md:px-5 px-3 py-2 rounded-lg font-montserrat font-bold transition-all flex items-center justify-center gap-2 ${activeTab === 'women'
                                ? 'bg-brand-green-800 text-white'
                                : 'bg-white text-gray-600 hover:bg-brand-green-800/10'
                                }`}
                        >
                            <IoWomanSharp size={20} />
                            For Women
                        </button>
                        <button
                            onClick={() => {
                                setActiveTab('men')
                                // setCurrentIndex(0)
                            }}
                            className={`lg:w-44 md:w-42 w-40 lg:px-6 md:px-5 px-3 py-2 rounded-lg font-montserrat font-bold transition-all flex items-center justify-center gap-2 ${activeTab === 'men'
                                ? 'bg-brand-green-800 text-white'
                                : 'bg-white text-gray-600 hover:bg-brand-green-800/10'
                                }`}
                        >
                            <IoManSharp size={20} />
                            For Men
                        </button>
                    </div>
                </div>

                {/* Desktop Grid - 4 columns */}
                <div className='hidden lg:grid lg:grid-cols-4 lg:gap-12 mb-8'>
                    {currentServices.map((service) => {
                        const IconComponent = service.icon
                        return (
                            <div key={service.id} className='bg-white rounded-2xl shadow-lg p-6 overflow-hidden'>
                                <div className='relative h-48'>
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className='object-cover rounded-xl'
                                    />
                                </div>
                                <div className='pt-5'>
                                    <div className='flex items-center gap-3 mb-4'>
                                        <div className='p-3 bg-gradient-to-r from-brand-green-800 to-brand-green-500 text-white rounded-xl'>
                                            <IconComponent size={24} />
                                        </div>
                                        <h3 className='font-montserrat text-xl font-bold text-black/80'>
                                            {service.title}
                                        </h3>
                                    </div>
                                    <p className='font-montserrat text-md text-gray-600'>
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Tablet Grid - 2 columns */}
                <div className='hidden md:grid lg:hidden md:grid-cols-2 md:gap-6 mb-8'>
                    {currentServices.map((service) => {
                        const IconComponent = service.icon
                        return (
                            <div key={service.id} className='bg-white rounded-2xl p-5 shadow-lg overflow-hidden'>
                                <div className='relative h-48'>
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className='object-cover rounded-xl'
                                    />
                                </div>
                                <div className='pt-4'>
                                    <div className='flex items-center gap-3 mb-4'>
                                        <div className='p-3 bg-gradient-to-r from-brand-green-800 to-brand-green-500 text-white rounded-lg'>
                                            <IconComponent size={24} />
                                        </div>
                                        <h3 className='font-montserrat text-xl font-bold text-black/80'>
                                            {service.title}
                                        </h3>
                                    </div>
                                    <p className='font-montserrat text-md text-gray-600'>
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* mobile Grid - 1 columns */}
                <div className='md:hidden lg:hidden grid-cols-1 space-y-6 mb-5'>
                    {currentServices.map((service) => {
                        const IconComponent = service.icon
                        return (
                            <div key={service.id} className='bg-white rounded-2xl p-5 shadow-lg overflow-hidden'>
                                <div className='relative h-48'>
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className='object-cover rounded-xl'
                                    />
                                </div>
                                <div className='pt-4'>
                                    <div className='flex items-center gap-3 mb-4'>
                                        <div className='p-3 bg-gradient-to-r from-brand-green-800 to-brand-green-500 text-white rounded-lg'>
                                            <IconComponent size={24} />
                                        </div>
                                        <h3 className='font-montserrat text-xl font-bold text-black/80'>
                                            {service.title}
                                        </h3>
                                    </div>
                                    <p className='font-montserrat text-md text-gray-600'>
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Mobile Carousel */}
                {/* <div className='md:hidden relative'>
                    <div className='overflow-hidden'>
                        <div
                            className='flex transition-transform duration-300 ease-in-out'
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {currentServices.map((service) => {
                                const IconComponent = service.icon
                                return (
                                   
                                        <div key={service.id} className='min-w-full flex-shrink-0 bg-white rounded-2xl shadow-lg p-5 overflow-hidden'>
                                            <div className='relative h-48'>
                                                <Image
                                                    src={service.image}
                                                    alt={service.title}
                                                    fill
                                                    className='object-cover rounded-xl'
                                                />
                                            </div>
                                            <div className='pt-4'>
                                                <div className='flex items-center gap-3 mb-4'>
                                                    <div className='p-3 bg-gradient-to-r from-brand-green-800 to-brand-green-500 text-white rounded-xl'>
                                                        <IconComponent size={24} />
                                                    </div>
                                                    <h3 className='font-montserrat text-xl font-bold text-black/80'>
                                                        {service.title}
                                                    </h3>
                                                </div>
                                                <p className='font-montserrat text-md text-gray-600'>
                                                    {service.description}
                                                </p>
                                            </div>
                                        </div>
                                  
                                )
                            })}
                        </div>
                    </div>

                    <div className='flex justify-center mt-4 space-x-2'>
                        {currentServices.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? 'bg-brand-green-800' : 'bg-gray-300'
                                    }`}
                                aria-label={`Go to service ${index + 1}`}
                            />
                        ))}
                    </div>
                </div> */}
            </div>
        </section>
    )
}

export default Services