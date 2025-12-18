'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Instagram, X } from 'lucide-react'
import { gsap } from 'gsap'


interface GalleryImage {
    id: number
    src: string
    alt: string
    category: string
}

export default function GalleryPage() {

    const heroRef = useRef<HTMLDivElement | null>(null)
    const titleRef = useRef<HTMLHeadingElement | null>(null)
    const subtitleRef = useRef<HTMLParagraphElement | null>(null)

    const [selectedCategory, setSelectedCategory] = useState<string>('All')
    const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

    const galleryImages: GalleryImage[] = [
        {
            id: 1,
            src: '/landing-page/home/bridal-6.JPG',
            alt: 'Bridal Makeover 1',
            category: 'Bridal'
        },
        {
            id: 2,
            src: '/landing-page/home/women-hairColor-1.JPG',
            alt: 'Hair Styling 1',
            category: 'Hair Styling'
        },
        {
            id: 3,
            src: '/landing-page/home/makeup-1.JPG',
            alt: 'Makeup 1',
            category: 'Makeup'
        },
        {
            id: 4,
            src: '/landing-page/home/nailart1.JPG',
            alt: 'Nail Art 1',
            category: 'Nail Art'
        },
        {
            id: 5,
            src: '/landing-page/home/groom1.JPG',
            alt: 'Men\'s Grooming 1',
            category: 'Men\'s Grooming'
        },
        {
            id: 6,
            src: '/landing-page/home/gents_beared.jpg',
            alt: 'Beard Styling 1',
            category: 'Men\'s Grooming'
        },
        {
            id: 7,
            src: '/landing-page/home/hair1.jpg',
            alt: 'Hair Styling 1',
            category: 'Hair Styling'
        },
        {
            id: 8,
            src: '/landing-page/home/facial-1.PNG',
            alt: 'Facial Treatment 1',
            category: 'Facial'
        },
        {
            id: 9,
            src: '/landing-page/home/bridal-1.JPG',
            alt: 'Bridal Makeover 2',
            category: 'Bridal'
        },
        {
            id: 10,
            src: '/landing-page/home/hair7.JPG',
            alt: 'Hair Styling 2',
            category: 'Hair Styling'
        },
        {
            id: 11,
            src: '/landing-page/home/studio-2.jpg',
            alt: 'D. Makeover Studio',
            category: 'Studio'
        },
        {
            id: 12,
            src: '/landing-page/home/hair3.jpg',
            alt: 'Hair Styling 3',
            category: 'Hair Styling'
        },
        {
            id: 13,
            src: '/landing-page/home/groom2.JPG',
            alt: 'Men\'s Grooming 2',
            category: 'Men\'s Grooming'
        }, {
            id: 14,
            src: '/landing-page/home/nailart4.JPG',
            alt: 'Nail Art 2',
            category: 'Nail Art'
        },
        {
            id: 15,
            src: '/landing-page/home/bridal-2.JPG',
            alt: 'Bridal Makeover 3',
            category: 'Bridal'
        },
        {
            id: 16,
            src: '/landing-page/home/bridal-3.JPG',
            alt: 'Bridal Makeover 4',
            category: 'Bridal'
        },
        {
            id: 17,
            src: '/landing-page/home/facial-2.PNG',
            alt: 'Facial Treatment 2',
            category: 'Facial'
        },
        {
            id: 18,
            src: '/landing-page/home/women-hairColor-2.JPG',
            alt: 'Hair Styling 4',
            category: 'Hair Styling'
        },
        {
            id: 19,
            src: '/landing-page/home/groom-3.JPG',
            alt: 'Men\'s Grooming 3',
            category: 'Men\'s Grooming'
        },
        {
            id: 20,
            src: '/landing-page/home/groom-4.JPG',
            alt: 'Men\'s Grooming 4',
            category: 'Men\'s Grooming'
        },
        {
            id: 21,
            src: '/landing-page/home/groom-5.JPG',
            alt: 'Men\'s Grooming 5',
            category: 'Men\'s Grooming'
        },
         {
            id: 22,
            src: '/landing-page/home/makeup-2.JPG',
            alt: 'Makeup 2',
            category: 'Makeup'
        },
        {
            id: 23,
            src: '/landing-page/home/facial-3.PNG',
            alt: 'Facial Treatment 3',
            category: 'Facial'
        },

    ]

    const categories = ['All', 'Bridal', 'Makeup', 'Nail Art', 'Facial', 'Studio', 'Hair Styling', 'Men\'s Grooming',]

    const filteredImages = selectedCategory === 'All'
        ? galleryImages
        : galleryImages.filter(img => img.category === selectedCategory)

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
                            GALLERY
                        </h1>
                        <p
                            ref={subtitleRef}
                            className="font-montserrat text-white text-md lg:text-lg md:text-xl max-w-2xl mx-auto px-6">
                            Explore our work and get inspired for your next makeover
                        </p>
                    </div>
                </div>
            </section>

            {/* Gallery Content */}
            <section className="px-6 md:px-12 lg:px-24 py-12 md:py-16">
                <div className="max-w-7xl mx-auto">
                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-6 py-2 rounded-full font-montserrat font-semibold transition-all ${selectedCategory === category
                                    ? 'bg-brand-green-800 text-white'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Gallery Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
                        {filteredImages.map((image) => (
                            <div
                                key={image.id}
                                className="relative aspect-square overflow-hidden rounded-xl shadow-lg cursor-pointer group"
                                onClick={() => setSelectedImage(image)}
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                                    <span className="text-white font-montserrat font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        View Image
                                    </span>
                                </div>
                                <div className="absolute top-3 left-3 bg-white/90 px-3 py-1 rounded-full text-xs font-montserrat font-semibold text-brand-green-800">
                                    {image.category}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Instagram Call to Action */}
                    <div className="bg-gradient-to-r from-brand-green-800 to-brand-green-500 rounded-3xl p-8 md:p-10 lg:p-12 text-center">
                        <div className="max-w-2xl mx-auto">
                            <div className="flex justify-center mb-6">
                                <div className="bg-white rounded-full p-4">
                                    <Instagram size={48} className="text-brand-green-800" />
                                </div>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-felix-titling text-white tracking-wider mb-4">
                                FOLLOW US ON INSTAGRAM
                            </h2>
                            <p className="text-white font-montserrat text-lg mb-8">
                                Stay updated with our latest work, beauty tips, and exclusive offers
                            </p>
                            <a
                                href="https://www.instagram.com/d_dot_makeoverstudio/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-gradient-to-l from-gold-900 to-brand-gold-500 px-8 md:px-10 lg:px-12 text-brand-green-800 font-bold hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 transition-all"
                            >
                                <Instagram size={20} />
                                <span>@d_dot_makeoverstudio</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Image Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                        onClick={() => setSelectedImage(null)}
                        aria-label="Close modal"
                    >
                        <X size={32} />
                    </button>
                    <div
                        className="relative max-w-5xl max-h-[90vh] w-full h-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            fill
                            className="object-contain"
                        />
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 px-6 py-3 rounded-full">
                            <p className="font-montserrat font-semibold text-brand-green-800">
                                {selectedImage.alt}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </main>
    )
}
