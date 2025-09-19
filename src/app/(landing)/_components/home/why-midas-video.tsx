'use client'

import React from 'react'
import ClientOnly from '../shared/ClientOnly'
import Image from 'next/image'

// YouTube video to embed on the page. Replace with your final ID as needed.
const YOUTUBE_VIDEO_ID = 'SFcOL6AT-Hs'

const WhyMidasVideo: React.FC = () => {
  return (
    <div className="mt-10 flex justify-center">
      <div className="w-full max-w-4xl overflow-hidden rounded-2xl border-2 border-brand-gold shadow-[0_10px_25px_rgba(1,33,105,0.25)]">
        <div className="relative w-full pt-[56.25%]">{/* 16:9 aspect ratio */}
          <ClientOnly
            fallback={
              <Image
                src={`https://img.youtube.com/vi/${YOUTUBE_VIDEO_ID}/hqdefault.jpg`}
                alt="Midas - How it works (video preview)"
                className="absolute left-0 top-0 h-full w-full object-cover"
                loading="lazy"
                fill
                sizes="100vw"
                unoptimized
              />
            }
          >
            <iframe
              className="absolute left-0 top-0 h-full w-full"
              src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&mute=1&loop=1&playsinline=1&rel=0&modestbranding=1&controls=1`}
              title="Midas - How it works"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen; web-share"
              allowFullScreen
            />
          </ClientOnly>
        </div>
      </div>
    </div>
  )
}

export default WhyMidasVideo
