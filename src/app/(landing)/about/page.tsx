'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { gsap } from 'gsap'

export default function AboutPage() {

    const heroRef = useRef<HTMLDivElement | null>(null)
    const titleRef = useRef<HTMLHeadingElement | null>(null)
    const subtitleRef = useRef<HTMLParagraphElement | null>(null)

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
                className="relative h-[40vh] md:h-[40vh] lg:h-[60vh] overflow-hidden"
            >
                <div className="absolute inset-0 bg-gradient-to-r from-brand-green-800 to-brand-green-500"></div>
                <div className="absolute inset-0 flex items-center justify-center pt-8">
                    <div className="text-center px-6">
                        <h1
                            ref={titleRef}
                            className="font-felix-titling text-brand-gold-500 text-4xl md:text-6xl lg:text-7xl tracking-wider mb-4 opacity-0"
                        >
                            ABOUT US
                        </h1>
                        <p
                            ref={subtitleRef}
                            className="font-montserrat text-white text-md lg:text-lg md:text-xl max-w-2xl mx-auto opacity-0"
                        >
                            Professional beauty and grooming services for everyone, designed to
                            enhance your natural confidence.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="px-6 md:px-12 lg:px-24 py-12 md:py-14 lg:py-20 max-w-7xl mx-auto">
                {/* Introduction */}
                <div className="mb-16 md:mb-20">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-brand-green-800 uppercase font-felix-titling tracking-wide mb-8">
                        Welcome to D. Makeover Studio
                    </h2>
                    <p className="text-xl text-brand-green-800 leading-8 font-montserrat font-normal mb-6">
                        At D. Makeover Studio, we build upon the <span className='font-bold'>10 years of trusted excellence established by Dezert Makeover Studio.</span> 
                        Our skilled stylists continue this legacy by offering personalized hair, makeup, and grooming services to help you look radiant and feel empowered.
                    </p>
                    <p className="text-xl text-brand-green-800 leading-8 font-montserrat font-normal">
                        With premium products, rigorous hygiene practices, and a client-first approach,
                        we ensure every visit leaves you refreshed and confident.
                        Whether it is a bridal makeover, a stylish haircut, or a complete transformation,
                        we are here to bring out your best self through our inherited expertise.
                    </p>
                </div>

                {/* Our Story */}
                <div className="flex flex-col lg:flex-row gap-12 mb-16 md:mb-20">
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-normal text-brand-green-800 uppercase font-felix-titling tracking-wide mb-6">
                            Our Story
                        </h2>
                        <p className="text-lg text-brand-green-800 leading-7 font-montserrat mb-4">
                            Founded with a passion for beauty and excellence,
                            Dezert Makeover Studio was established as the first unisex salon in Perinthalmanna.
                            We started with a simple vision: to create a trusted space where everyone feels beautiful, confident, and valued.
                        </p>
                        <p className="text-lg text-brand-green-800 leading-7 font-montserrat">
                            Over the past decade, the Dezert brand has grown into a premier destination with three successful showrooms serving the Malappuram district.
                            Now, D. Makeover Studio stands proudly as our newest sister concern, expanding our legacy and continuing to provide exceptional, personalized beauty and grooming services for your special moments.
                        </p>
                    </div>
                    <div className="lg:w-1/2 relative h-[300px] md:h-[400px] lg:h-[500px]">
                        <Image
                            src='/landing-page/home/story-img.jpg'
                            alt='D. Makeover Studio Interior'
                            fill
                            className="object-cover rounded-2xl shadow-lg"
                        />
                    </div>
                </div>

                {/* Our Values */}
                <div className="mb-8 md:mb-16">
                    <h2 className="text-3xl md:text-4xl font-normal text-brand-green-800 uppercase font-felix-titling tracking-wide mb-6 md:mb-10 text-center">
                        Our Values
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-8">
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-gradient-to-r from-brand-green-800 to-brand-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-brand-green-800 font-montserrat mb-3">Excellence</h3>
                            <p className="text-brand-green-800 font-montserrat">
                                We strive for perfection in every service, ensuring top-quality results every time.
                            </p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-gradient-to-r from-brand-green-800 to-brand-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-brand-green-800 font-montserrat mb-3">Client-First</h3>
                            <p className="text-brand-green-800 font-montserrat">
                                Your satisfaction is our priority. We listen, understand, and deliver personalized services.
                            </p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-gradient-to-r from-brand-green-800 to-brand-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-brand-green-800 font-montserrat mb-3">Hygiene</h3>
                            <p className="text-brand-green-800 font-montserrat">
                                We maintain the highest standards of cleanliness and use only premium, safe products.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center">
                    <h2 className="text-2xl md:text-3xl font-normal text-brand-green-800 font-montserrat mb-6">
                        Ready to Experience the D. Makeover Difference?
                    </h2>
                    <Link
                        href="/#contact"
                        className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-gradient-to-l from-gold-900 to-brand-gold-500 px-12 text-brand-green-800 font-bold hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 transition-all"
                        aria-label="Contact us"
                    >
                        <span>Book Your Appointment</span>
                        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="3">
                            <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </div>
            </section>
        </main>
    )
}
