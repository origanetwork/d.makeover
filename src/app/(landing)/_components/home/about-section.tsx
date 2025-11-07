'use client'

import React, { useRef } from 'react'
import Image from 'next/image'

const About: React.FC = () => {

    const imageRef = useRef<HTMLDivElement | null>(null)

    return (
        <section id="about" className="px-6 md:px-12 lg:px-24 bg-white pt-6 md:pt-8 lg:pt-24">
            <div className="flex flex-col-reverse lg:flex-row lg:justify-between items-center lg:items-start gap-12 max-w-7xl mx-auto">
                {/* Image Container - Fixed dimensions */}
                <div
                    ref={imageRef}
                    className="relative h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] md:h-[450px] md:w-[450px] lg:h-[600px] lg:w-[600px] lg:-mb-12 mx-auto lg:mx-0"
                    style={{ willChange: 'transform, opacity' }}
                >
                    <Image
                        src='/landing-page/home/about-bride.png'
                        alt='makeover'
                        width={500}
                        height={500}
                        placeholder="blur"
                        blurDataURL="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'><rect width='10' height='10' fill='%231b3a8a'/></svg>"
                        className="object-contain bg-gradient-to-t from-brand-gold-500 via-brand-gold-500/50 to-white shadow-lg rounded-b-lg"
                        aria-hidden="true"
                    />
                </div>

                {/* Content Section */}
                <div className="flex flex-col items-start gap-4 md:gap-6 lg:gap-8 max-w-xl pt-2 md:pt-8 lg:pt-10">
                    <h2 className="text-4xl md:text-5xl font-normal text-brand-green-800 uppercase font-felix-titling tracking-wide">
                        ABOUT US
                    </h2>

                    <p className="text-xl text-brand-green-800 leading-7 text-left font-montserrat font-normal pr-3">
                        At D. Makeover Studio, we redefine beauty with style, care, and confidence.
                        Our skilled stylists offer personalized hair, makeup, and grooming services
                        to help you look radiant and feel empowered. With premium products, hygiene
                        practices, and a client-first approach, we ensure every visit leaves you
                        refreshed and confident.
                    </p>

                    <div className="mt-5">
                        <a
                            href="/about"
                            className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-l from-gold-900 to-brand-gold-500 px-24 text-brand-green-800 font-bold hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
                            aria-label={`Know more`}
                        >
                            <span>Know More</span>
                            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="3">
                                <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About