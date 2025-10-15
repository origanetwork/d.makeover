'use client'

import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, Instagram } from 'lucide-react'
import Image from 'next/image'

interface Reel {
  id: number
  reelUrl: string
  thumbnail: string
  title: string
}

const ReelsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const reels: Reel[] = [
    {
      id: 1,
      reelUrl: 'https://www.instagram.com/reel/DPtZFuOk0Xg/',
      thumbnail: '/landing-page/home/women-bridal.jpg',
      title: 'Bridal Transformation'
    },
    {
      id: 2,
      reelUrl: 'https://www.instagram.com/reel/DPoHPZAEjlk/',
      thumbnail: '/landing-page/home/women-hairstyle.jpg',
      title: 'Hair Styling Magic'
    },
    {
      id: 3,
      reelUrl: 'https://www.instagram.com/reel/DPlocrmEll3/',
      thumbnail: '/landing-page/home/women-makeup.jpg',
      title: 'Makeup Artistry'
    },
    {
      id: 4,
      reelUrl: 'https://www.instagram.com/reel/DPtw9ZGkk3K/',
      thumbnail: '/landing-page/home/men-haircut.jpg',
      title: "Men's Grooming"
    }
  ]

  const nextSlide = () => setCurrentIndex((prev) => (prev === reels.length - 1 ? 0 : prev + 1))
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? reels.length - 1 : prev - 1))

  return (
    <section className="bg-white px-4 sm:px-8 lg:px-16 py-12 md:py-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="font-felix-titling text-brand-green-800 tracking-wider text-3xl sm:text-4xl lg:text-5xl mb-4">
            WATCH OUR TRANSFORMATIONS
          </h2>
          <p className="font-montserrat text-gray-600 text-lg">
            See the magic happen in our latest reels
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-6 mb-6">
          {reels.map((reel) => (
            <a
              key={reel.id}
              href={reel.reelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-[9/16] overflow-hidden rounded-2xl shadow-xl"
            >
              <Image
                src={reel.thumbnail}
                alt={reel.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 p-3 rounded-full">
                  <Instagram size={28} className="text-brand-green-800" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Tablet Grid */}
        <div className="hidden md:grid lg:hidden md:grid-cols-2 gap-6 mb-6">
          {reels.map((reel) => (
            <a
              key={reel.id}
              href={reel.reelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-[9/16] overflow-hidden rounded-2xl shadow-xl"
            >
              <Image
                src={reel.thumbnail}
                alt={reel.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 p-3 rounded-full">
                  <Instagram size={28} className="text-brand-green-800" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {reels.map((reel) => (
                <a
                  key={reel.id}
                  href={reel.reelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex-shrink-0 relative aspect-[9/16] overflow-hidden rounded-2xl"
                >
                  <Image
                    src={reel.thumbnail}
                    alt={reel.title}
                    fill
                    className="object-cover transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/90 p-3 rounded-full">
                      <Instagram size={28} className="text-brand-green-800" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all z-10"
            aria-label="Previous reel"
          >
            <ChevronLeft size={24} className="text-brand-green-800" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all z-10"
            aria-label="Next reel"
          >
            <ChevronRight size={24} className="text-brand-green-800" />
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {reels.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-brand-green-800 w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* View More */}
        <div className="flex justify-center mt-10">
          <a
            href="https://www.instagram.com/d_dot_makeoverstudio/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center gap-3 rounded-lg bg-gradient-to-r from-brand-gold-500 via-brand-green-600 to-brand-green-800 px-8 text-white font-bold hover:brightness-95 transition-all font-montserrat"
          >
            <Instagram size={24} />
            <span>View More on Instagram</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default ReelsSection
