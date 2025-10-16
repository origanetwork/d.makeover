'use client'

import React from 'react'
import { Instagram } from 'lucide-react'
import Image from 'next/image'

interface Reel {
  id: number
  reelUrl: string
  thumbnail: string
  title: string
}

const ReelsSection: React.FC = () => {
  const reels: Reel[] = [
    {
      id: 1,
      reelUrl: 'https://www.instagram.com/reel/DPoHPZAEjlk/',
      thumbnail: '/landing-page/home/thumbnail-2.png',
      title: 'Hair Styling Magic'
    },
    {
      id: 2,
      reelUrl: 'https://www.instagram.com/reel/DPtZFuOk0Xg/',
      thumbnail: '/landing-page/home/thumbnail-1.png',
      title: 'Bridal Transformation'
    },
    {
      id: 3,
      reelUrl: 'https://www.instagram.com/reel/DPLelFXEu0A/',
      thumbnail: '/landing-page/home/thumbnail-3.png',
      title: 'Makeup Artistry'
    },
    {
      id: 4,
      reelUrl: 'https://www.instagram.com/reel/DPlocrmEll3/',
      thumbnail: '/landing-page/home/thumbnail-4.png',
      title: "Men's Grooming"
    }
  ]

  return (
    <section className="bg-white px-4 sm:px-8 lg:px-16 py-10 md:py-10 lg:pt-18">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-6 md:mb-8 lg:mb-10">
          <h2 className="font-felix-titling text-brand-green-800 tracking-wider text-3xl sm:text-4xl lg:text-5xl mb-4">
            WATCH OUR TRANSFORMATIONS
          </h2>
          <p className="font-montserrat text-gray-600 text-md md:text-md lg:text-lg">
            See the magic happen in our latest reels
          </p>
        </div>

        {/* Desktop Grid - 4 reels in a row */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-6 mb-6">
          {reels.map((reel) => (
            <a
              key={reel.id}
              href={reel.reelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-[9/16] overflow-hidden rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105"
            >
              <Image
                src={reel.thumbnail}
                alt={reel.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-all" />
              <div className="absolute inset-0 flex items-center justify-center">
                {/* <div className="bg-white/90 p-3 rounded-full">
                  <Instagram size={28} className="text-brand-green-800" />
                </div> */}
              </div>
            </a>
          ))}
        </div>

        {/* Tablet Horizontal Scroll - 3 reels side-by-side */}
        <div className="hidden md:block lg:hidden mb-6">
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {reels.map((reel) => (
              <a
                key={reel.id}
                href={reel.reelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex-shrink-0 w-[calc(33.333%-12px)] aspect-[9/16] overflow-hidden rounded-2xl shadow-xl snap-start transition-transform duration-300 hover:scale-105"
              >
                <Image
                  src={reel.thumbnail}
                  alt={reel.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-all" />
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* <div className="bg-white/90 p-3 rounded-full">
                    <Instagram size={28} className="text-brand-green-800" />
                  </div> */}
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Horizontal Scroll - 3 reels Instagram-style */}
        <div className="md:hidden">
          <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory scrollbar-hide bg-white">
            {reels.map((reel) => (
              <a
                key={reel.id}
                href={reel.reelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex-shrink-0 w-[calc(33.333%-8px)] aspect-[9/16] overflow-hidden rounded-2xl shadow-xl snap-start transition-transform duration-300 active:scale-95"
              >
                <Image
                  src={reel.thumbnail}
                  alt={reel.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/5" />
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* <div className="bg-white/90 p-3 rounded-full">
                    <Instagram size={28} className="text-brand-green-800" />
                  </div> */}
                </div>
              </a>
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
