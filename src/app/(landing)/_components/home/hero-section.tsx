'use client'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import BottomNavbar from '../shared/bottom-navbar'
import { loadGSAP } from '@/lib/gsap'

type GsapContextLike = {
  revert: () => void
  onVisibility?: () => void
}

const HeroSection: React.FC = () => {
  // Slides: update the image srcs to real assets as they become available.
  const slides = [
    {
      headlineLine1: 'Sell, Release, or Buy Gold',
      headlineLine2: 'Quick & Transparent',
      image: '/landing-page/home/hero-image.webp',
      imageAlt: 'Gold trading made simple',
    },
    {
      headlineLine1: 'Instant Gold Loans, Fair Rates',
      headlineLine2: 'Secure & Hassle-free',
      image: '/landing-page/home/person-1.png',
      imageAlt: 'Instant gold loan',
    },
    {
      headlineLine1: 'Track Live Gold Prices',
      headlineLine2: 'Make Smart Decisions',
      image: '/landing-page/home/person-2.png',
      imageAlt: 'Live gold price tracking',
    },
  ] as const

  // Stable dependency for effects that reference slides.length
  const slidesLength = slides.length

  // SSR renders index 0 only for SEO; animations start post-hydration
  const [index, setIndex] = useState(0)
  const contentRef = useRef<HTMLDivElement | null>(null)
  const imageRef = useRef<HTMLDivElement | null>(null)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const gsapCtx = useRef<GsapContextLike | null>(null)
  const rotateRef = useRef<(() => void) | null>(null)

  // Start rotation after hydration; do not run on server
  useEffect(() => {
    let isMounted = true
    ;(async () => {
      const gsap = await loadGSAP()
      if (!gsap || !isMounted) return

      gsapCtx.current = gsap.context(() => {
        // Initial entrance for SSR-rendered first slide (subtle)
        if (contentRef.current) {
          gsap.fromTo(
            contentRef.current,
            { opacity: 0, y: 16 },
            { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
          )
        }
        if (imageRef.current) {
          gsap.fromTo(
            imageRef.current,
            { opacity: 0, scale: 0.98 },
            { opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out' }
          )
        }

        const rotate = () => {
          if (!contentRef.current || !imageRef.current) return
          const tl = gsap.timeline()
          tl.to(contentRef.current, {
            opacity: 0,
            y: -16,
            duration: 0.35,
            ease: 'power2.in',
          })
            .to(
              imageRef.current,
              { opacity: 0, scale: 0.98, duration: 0.35, ease: 'power2.in' },
              '<' // sync with content
            )
            .add(() => {
              // update slide after out-animation completes
              setIndex((prev) => (prev + 1) % slidesLength)
            })
        }
        rotateRef.current = rotate

        // helper to (re)start interval
        const startInterval = () => {
          if (intervalRef.current) return
          intervalRef.current = setInterval(() => rotateRef.current?.(), 3000)
        }

        // Rotate every 6s (can be tuned). First slide displays immediately (SSR) then animates.
        startInterval()

      })

      // Pause when tab hidden, resume when visible (registered outside gsap context)
      const onVisibility = () => {
        if (document.hidden) {
          if (intervalRef.current) {
            clearInterval(intervalRef.current)
            intervalRef.current = null
          }
        } else {
          // restart interval on visibility regain
          if (!intervalRef.current) {
            intervalRef.current = setInterval(() => rotateRef.current?.(), 2000)
          }
        }
      }
      document.addEventListener('visibilitychange', onVisibility)
      // store remover on ctx for completeness
      if (gsapCtx.current) {
        gsapCtx.current.onVisibility = onVisibility
      }
    })()

    return () => {
      isMounted = false
      if (intervalRef.current) clearInterval(intervalRef.current)
      // remove visibility listener if present
      const listener = gsapCtx.current?.onVisibility
      if (listener) {
        document.removeEventListener('visibilitychange', listener)
      }
      gsapCtx.current?.revert()
    }
  }, [slidesLength]) 

  // Animate IN whenever index changes (after state commit)
  useEffect(() => {
    ;(async () => {
      const gsap = await loadGSAP()
      if (!gsap) return
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' }
        )
      }
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { opacity: 0, scale: 0.98 },
          { opacity: 1, scale: 1, duration: 0.45, ease: 'power2.out' }
        )
      }
    })()
  }, [index])
  return (
    <section className="relative isolate overflow-hidden">
      {/* Background image using next/image */}
      <div className="absolute inset-0 -z-20 opacity-70">
        <Image
          src="/landing-page/home/background.png"
          alt="background-image"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          aria-hidden="true"
        />
      </div>
      {/* Background gradient overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-blue-900 to-brand-blue-500 opacity-90" />
      {/* Hero illustration pinned bottom-right of the section */}
      <div ref={imageRef} className="pointer-events-none absolute bottom-0 -right-30 z-0 h-[360px] sm:h-[420px] md:h-[520px] w-[360px] sm:w-[420px] md:w-[520px]">
        <Image
          src={slides[index].image}
          alt={slides[index].imageAlt}
          fill
          sizes="(min-width: 768px) 520px, 100vw"
          className="object-contain"
          aria-hidden="true"
        />
      </div>
      {/* Content */}
      <div className="relative z-10 mx-auto  md:max-w-2xl lg:max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start min-h-[90vh] py-30 sm:py-28 md:py-52">

          <div ref={contentRef} className="md:col-span-2">
            <h1 className="hero-title text-white text-3xl sm:text-5xl md:text-5xl lg:text-6xl font-extrabold leading-12 tracking-tight font-poppins px-5 sm:px-0">
              <span className="block sm:whitespace-nowrap">{slides[index].headlineLine1}</span>
              <br className="hidden sm:block" />
              {slides[index].headlineLine2}
            </h1>
          </div>
        </div>
      </div>
      {/* Bottom Navbar - centered near bottom */}
      <div className="absolute lg:left-1/2 lg:bottom-16 lg:-translate-x-1/2 md:left-1/2 md:bottom-2/7 md:-translate-x-6/8 left-1/3 bottom-1/7 -translate-x-4/9">
        <BottomNavbar className="lg:w-[520px] md:w-[420px] w-[325px] max-w-[65vw]" />
      </div>
    </section>
  )
}

export default HeroSection