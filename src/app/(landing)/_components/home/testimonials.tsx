"use client"
import React, { useRef } from 'react'
import Image from 'next/image'

// Simple, dependency-free horizontal carousel using native scroll + buttons
// Matches the visual in the screenshot: blue banner, left intro with quotes, right slider cards

type Testimonial = {
  name: string
  role: string
  quote: string
  avatar: string
}

const DATA: Testimonial[] = [
  {
    name: 'Sreeja Menon',
    role: "Filim actress",
    quote:
      'D. Makeover Studio transformed me completely for my wedding! The team was professional, friendly, and made me feel confident every step of the way',
    avatar: '/landing-page/home/person-1.jpeg',
  },
  {
    name: 'Rahul M',
    role: 'Model',
    quote:
      "As a jewelry shop owner, a reliable partner for gold buying and selling is crucial. With Midas, we've experienced secure transactions, instant payments, and consistent fair valuation.",
    avatar: '/landing-page/home/person-2.jpeg',
  },
  {
    name: 'Devika S',
    role: 'Serial actress',
    quote:
      'Professional, honest, and fast. The live-rate valuation and clarity in every step make them our preferred partner.',
    avatar: '/landing-page/home/person-3.jpeg',
  },
]

const Testimonials: React.FC = () => {
  const trackRef = useRef<HTMLDivElement | null>(null)

  const scrollByCards = (dir: -1 | 1) => {
    const el = trackRef.current
    if (!el) return
    // Scroll roughly one card width + gap
    const card = el.querySelector('[data-card]') as HTMLElement | null
    const step = card ? card.offsetWidth + 24 : el.clientWidth * 0.8
    el.scrollBy({ left: dir * step, behavior: 'smooth' })
  }

  return (
    <section className="relative bg-gradient-to-r from-brand-green-800 via-brand-green-700 to-brand-green-600 py-12 sm:py-16" id="testimonials">
      <div className="mx-auto max-w-7xl">
        {/* Banner container */}
        <div
          className="relative px-4 sm:px-6 lg:px-8 py-10 sm:py-12 overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-stretch md:min-h-[350px] ">
            {/* Left rail: big quotes, title, controls */}
            <div className="text-white/95 relative flex flex-col items-start justify-center h-full">
              {/* Big quote mark (positioned absolutely so it doesn't affect layout) */}
              <div aria-hidden className="pointer-events-none absolute text-gold-600 -top-10 left-5 md:-top-2 md:-left-1 lg:-top-4 w-24 h-24 sm:w-28 sm:h-28 lg:w-42 lg:h-42">
                <svg width="100%" height="100%" viewBox="0 0 24 24" fill="currentColor" className="">
                <rect width="16" height="16" id="icon-bound" fill="none" />
                <path d="M0,8h5c0,3.084-1.916,5-5,5v2c4.188,0,7-2.812,7-7V1H0V8z M9,1v7h5c0,3.084-1.916,5-5,5v2c4.188,0,7-2.812,7-7V1H9z" />
                </svg>
              </div>
              <h3 className="font-montserrat text-2xl sm:text-3xl font-semibold leading-snug mt-10">
                What Our
                <br />
                Clients Say
              </h3>

              {/* Controls */}
              <div className="mt-10 flex items-start gap-3">
                <button
                  type="button"
                  onClick={() => scrollByCards(-1)}
                  aria-label="Previous testimonials"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/50 text-white hover:bg-white/10 transition cursor-pointer"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="-ml-px"><path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
                <button
                  type="button"
                  onClick={() => scrollByCards(1)}
                  aria-label="Next testimonials"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/50 text-white hover:bg-white/10 transition cursor-pointer"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-px"><path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
              </div>
            </div>

            {/* Slider moved outside container on the far right */}
          </div>
        </div>
      </div>

      {/* Full-width right-aligned slider with no padding/margins (vertically centered) */}
      <div className="relative md:absolute md:top-1/2 md:-translate-y-1/2 md:right-0 md:w-[65vw] pl-5 lg:pl-1 w-full">
        <div
          ref={trackRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory px-6"
          style={{ scrollbarWidth: 'none' }}
        >
          {DATA.map((t, idx) => (
            <article
              key={t.name + idx}
              data-card
              className="snap-start shrink-0 w-[320px] sm:w-[380px] lg:w-[500px] rounded-2xl bg-white shadow-[0_8px_18px_rgba(1,33,105,0.25)] p-4 sm:p-5 md:p-8"
            >
              <div className="flex items-center gap-3">
                <span className="relative inline-block h-20 w-20 overflow-hidden rounded-full border-2 border-brand-green-500">
                  <Image
                    src={t.avatar}
                    alt={`${t.name} avatar`}
                    width={80}
                    height={80}
                    className="h-20 w-20 object-cover"
                  />
                </span>
                <div>
                  <h4 className="text-brand-green-900 font-semibold text-lg font-montserrat leading-tight">{t.name}</h4>
                  <p className="text-slate-500 text-sm leading-tight">{t.role}</p>
                </div>
              </div>
              <p className="mt-3 font-montserrat text-slate-700 text-sm sm:text-base leading-6">
                {t.quote}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
