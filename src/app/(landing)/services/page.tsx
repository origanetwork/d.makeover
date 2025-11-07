'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import { IoMdCut } from 'react-icons/io'
import { IoWomanSharp, IoManSharp } from 'react-icons/io5'
import { IoMdColorPalette } from "react-icons/io"
import { FaRegHand } from "react-icons/fa6"
import { Sparkles } from 'lucide-react'
import { GiBeard } from "react-icons/gi"
import { FaSpa } from "react-icons/fa"
import { GiHairStrands } from "react-icons/gi"
import Link from 'next/link'
import { gsap } from 'gsap'

export default function ServicesPage() {

    const heroRef = useRef<HTMLDivElement | null>(null)
    const titleRef = useRef<HTMLHeadingElement | null>(null)
    const subtitleRef = useRef<HTMLParagraphElement | null>(null)

    const searchParams = useSearchParams()
    const tabParam = searchParams.get('tab')
    const [activeTab, setActiveTab] = useState<'women' | 'men'>('women')

    useEffect(() => {
        if (tabParam === 'women' || tabParam === 'men') {
            setActiveTab(tabParam)
        }
    }, [tabParam])

    const womenServices = [
        {
            id: 1,
            title: 'Bridal Makeover',
            description: 'Complete bridal package including makeup, hairstyling, and draping. Perfect for your special day with long-lasting results.',
            image: '/landing-page/home/bridal-6.JPG',
            icon: IoMdColorPalette,
            features: ['HD Makeup', 'Hair Styling', 'Saree Draping', 'Pre-Bridal Services']
        },
        {
            id: 2,
            title: 'Hair Styling',
            description: 'Expert haircuts, styling, coloring, and treatments. From subtle highlights to bold transformations.',
            image: '/landing-page/home/hair1.jpg',
            icon: IoMdCut,
            features: ['Haircut & Styling', 'Hair Coloring', 'Highlights', 'Hair Spa', 'Keratin Treatment']
        },
        {
            id: 3,
            title: 'Makeup Services',
            description: 'Professional makeup for all occasions. Party, casual, and event-ready looks customized for you.',
            image: '/landing-page/home/makeup-1.JPG',
            icon: Sparkles,
            features: ['Party Makeup', 'Engagement Makeup', 'Reception Makeup', 'Air Brush Makeup']
        },
        {
            id: 4,
            title: 'Nail Care',
            description: 'Trendy nail art, extensions, manicures, and pedicures. Complete nail care treatments.',
            image: '/landing-page/home/nail-art-3.JPG',
            icon: FaRegHand,
            features: ['Manicure & Pedicure', 'Nail Art', 'Nail Extensions', 'Nail Polish']
        },
        {
            id: 5,
            title: 'Facial & Skin Care',
            description: 'Rejuvenating facial treatments and skin care services for glowing, healthy skin.',
            image: '/landing-page/home/makeup-2.JPG',
            icon: FaSpa,
            features: ['Classic Facial', 'Gold Facial', 'Diamond Facial', 'Skin Treatments']
        },
        {
            id: 6,
            title: 'Hair Treatments',
            description: 'Specialized hair treatments for damaged, colored, or chemically treated hair.',
            image: '/landing-page/home/hair-style-1.JPG',
            icon: GiHairStrands,
            features: ['Hair Spa', 'Keratin Treatment', 'Smoothening', 'Rebonding']
        }
    ]

    const menServices = [
        {
            id: 1,
            title: 'Hair Cut',
            description: 'Modern and classic haircut styles for men. Expert cuts tailored to your face shape and style preference.',
            image: '/landing-page/home/men-haircut.jpg',
            icon: IoMdCut,
            features: ['Classic Cut', 'Modern Styling', 'Fade Cut', 'Buzz Cut']
        },
        {
            id: 2,
            title: 'Beard Styling',
            description: 'Professional beard trimming, shaping, and grooming. Get the perfect beard style that suits you.',
            image: '/landing-page/home/men-beardstyle.jpg',
            icon: GiBeard,
            features: ['Beard Trim', 'Beard Shaping', 'Beard Coloring', 'Shaving']
        },
        {
            id: 3,
            title: 'Hair Color',
            description: 'Professional hair coloring and highlighting services. Natural or bold colors as per your choice.',
            image: '/landing-page/home/hair-color-1.PNG',
            icon: IoMdColorPalette,
            features: ['Full Coloring', 'Highlights', 'Grey Coverage', 'Fashion Colors']
        },
        {
            id: 4,
            title: 'Facial Services',
            description: 'Rejuvenating facial treatments designed specifically for men&apos;s skin care needs.',
            image: '/landing-page/home/men-facial.jpg',
            icon: Sparkles,
            features: ['Classic Facial', 'Anti-Aging Facial', 'Deep Cleansing', 'Skin Brightening']
        },
        {
            id: 5,
            title: 'Hair Spa',
            description: 'Relaxing hair spa treatments to nourish and strengthen your hair from root to tip.',
            image: '/landing-page/home/men-haircut.jpg',
            icon: FaSpa,
            features: ['Deep Conditioning', 'Scalp Treatment', 'Hair Massage', 'Anti-Dandruff Treatment']
        },
        {
            id: 6,
            title: 'Grooming Package',
            description: 'Complete grooming services including haircut, beard styling, and facial treatments.',
            image: '/landing-page/home/grooming.JPG',
            icon: GiHairStrands,
            features: ['Hair Cut', 'Beard Styling', 'Face Cleanup', 'Head Massage']
        }
    ]

    const currentServices = activeTab === 'women' ? womenServices : menServices

    useEffect(() => {
        if (!heroRef.current || !titleRef.current || !subtitleRef.current) return

        const ctx = gsap.context(() => {
            gsap.fromTo(
                titleRef.current,
                { y: 60, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' }
            )
            gsap.fromTo(
                subtitleRef.current,
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, delay: 0.3, ease: 'power3.out' }
            )
        }, heroRef)

        return () => ctx.revert()
    }, [])

    return (
        <main className="bg-white">
            {/* Hero Section */}
            <section
                ref={heroRef}
                className="relative h-[40vh] md:h-[40vh] lg:h-[60vh] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-green-800 to-brand-green-500"></div>
                <div className="absolute inset-0 flex items-center justify-center pt-8">
                    <div className="text-center">
                        <h1
                            ref={titleRef}
                            className="font-felix-titling text-brand-gold-500 text-4xl md:text-6xl lg:text-7xl tracking-wider mb-4">
                            OUR SERVICES
                        </h1>
                        <p
                            ref={subtitleRef}
                            className="font-montserrat text-white text-md lg:text-lg md:text-xl max-w-2xl mx-auto px-6">
                            Professional beauty and grooming services tailored for everyone
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Content */}
            <section className="px-6 md:px-12 lg:px-24 py-8 md:py-12">
                {/* Tab Selection */}
                <div className='flex justify-center mb-12'>
                    <div className='flex p-3 bg-gray-100 rounded-xl gap-2'>
                        <button
                            onClick={() => setActiveTab('women')}
                            className={`lg:w-44 md:w-42 w-40 lg:px-6 md:px-5 px-3 py-3 rounded-lg font-montserrat font-bold transition-all flex items-center justify-center gap-2 ${activeTab === 'women'
                                    ? 'bg-brand-green-800 text-white'
                                    : 'bg-transparent text-gray-600 hover:bg-brand-green-800/10'
                                }`}
                        >
                            <IoWomanSharp size={20} />
                            For Women
                        </button>
                        <button
                            onClick={() => setActiveTab('men')}
                            className={`lg:w-44 md:w-42 w-40 lg:px-6 md:px-5 px-3 py-3 rounded-lg font-montserrat font-bold transition-all flex items-center justify-center gap-2 ${activeTab === 'men'
                                    ? 'bg-brand-green-800 text-white'
                                    : 'bg-transparent text-gray-600 hover:bg-brand-green-800/10'
                                }`}
                        >
                            <IoManSharp size={20} />
                            For Men
                        </button>
                    </div>
                </div>

                {/* Services Grid */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16'>
                    {currentServices.map((service) => {
                        const IconComponent = service.icon
                        return (
                            <div key={service.id} className='bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300'>
                                <div className='relative h-64'>
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className='object-cover'
                                    />
                                </div>
                                <div className='p-6'>
                                    <div className='flex items-center gap-3 mb-4'>
                                        <div className='p-3 bg-gradient-to-r from-brand-green-800 to-brand-green-500 text-white rounded-xl'>
                                            <IconComponent size={24} />
                                        </div>
                                        <h3 className='font-montserrat text-2xl font-bold text-brand-green-800'>
                                            {service.title}
                                        </h3>
                                    </div>
                                    <p className='font-montserrat text-gray-600 mb-4 leading-relaxed'>
                                        {service.description}
                                    </p>
                                    <div className='border-t border-gray-200 pt-4'>
                                        <h4 className='font-montserrat font-semibold text-brand-green-800 mb-2'>
                                            Includes:
                                        </h4>
                                        <ul className='space-y-1'>
                                            {service.features.map((feature, index) => (
                                                <li key={index} className='flex items-center gap-2 text-gray-600 text-sm'>
                                                    <svg className="w-4 h-4 text-brand-green-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Call to Action */}
                <div className="text-center bg-gradient-to-r from-brand-green-800 to-brand-green-500 rounded-3xl p-12 max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-felix-titling text-white tracking-wider mb-4">
                        BOOK YOUR APPOINTMENT TODAY
                    </h2>
                    <p className="text-white font-montserrat text-lg mb-8">
                        Experience professional beauty and grooming services at D. Makeover Studio
                    </p>
                    <Link
                        href="/#contLinkct"
                        className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-gradient-to-l from-gold-900 to-brand-gold-500 px-12 text-brand-green-800 font-bold hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 transition-all"
                        aria-label="Contact us"
                    >
                        <span>Contact Us</span>
                        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="3">
                            <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </div>
            </section>
        </main>
    )
}
