import React from 'react'

type Props = {}

// YouTube video to embed on the page. Replace with your final ID as needed.
const YOUTUBE_VIDEO_ID = 'SFcOL6AT-Hs'

const features = [
  {
    title: 'Best Market Rates',
    desc:
      'We offer the most competitive prices in the market with transparent pricing and no hidden fees.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M3 17l6-6 4 4 7-7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 8h6v6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: '100% Secure Transactions',
    desc:
      'Your investments are protected with bank-level security and fully insured transactions.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path d="M12 3l8 4v5c0 5.25-3.5 9.75-8 11-4.5-1.25-8-5.75-8-11V7l8-4z" stroke="currentColor" strokeWidth="2" />
        <path d="M9.5 12.5l1.8 1.8 3.2-3.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Ultra-Precise Weighting',
    desc:
      'We use specialized machines designed to capture exact weight, ensuring you get what your gold is truly worth.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path d="M12 3l8 5H4l8-5z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M6 10l-3 6a5 5 0 0010 0l-3-6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M14 10l-3 6a5 5 0 0010 0l-3-6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Expert Consultation',
    desc:
      'Get personalized advice from our certified precious metals specialists with decades of experience.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path d="M16 11c1.657 0 3-1.567 3-3.5S17.657 4 16 4 13 5.567 13 7.5 14.343 11 16 11z" stroke="currentColor" strokeWidth="2" />
        <path d="M8 13c2.761 0 5-2.239 5-5S10.761 3 8 3 3 5.239 3 8s2.239 5 5 5z" stroke="currentColor" strokeWidth="2" />
        <path d="M2 21a6 6 0 0112 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M14.5 16.5a4.5 4.5 0 019 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: '24/7 Customer Support',
    desc:
      'Round-the-clock support to assist you with all your precious metals trading needs.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path d="M4 14v-1a7 7 0 1114 0v1" stroke="currentColor" strokeWidth="2" />
        <rect x="3" y="14" width="5" height="6" rx="2" stroke="currentColor" strokeWidth="2" />
        <rect x="16" y="14" width="5" height="6" rx="2" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: 'Trusted Reputation',
    desc:
      'Join thousands of satisfied customers who trust us for their precious metals investments.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path d="M12 2l2.9 5.88 6.5.95-4.7 4.58 1.1 6.49L12 17.77 6.2 19.9l1.1-6.49L2.6 8.83l6.5-.95L12 2z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    ),
  },
]

const WhyMidas: React.FC<Props> = () => {
  return (
    <section className="relative bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <h2 className="text-center font-montserrat text-[#0B3C89] tracking-[0.18em] sm:tracking-[0.22em] md:tracking-[0.28em] text-2xl sm:text-3xl md:text-4xl font-semibold">
          WHY MIDAS IS THE RIGHT PICK
        </h2>
       

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="relative overflow-hidden rounded-2xl border-2 border-[#FFCC33] p-7 sm:p-8 shadow-[0_10px_25px_rgba(1,33,105,0.25)] text-white transition-transform duration-200 hover:-translate-y-1"
              style={{
                // Base blue gradient + we add a conic highlight as a child overlay for better control
                background: 'linear-gradient(135deg, #002C6E 0%, #015CE7 100%)',
              }}
            >
              {/* angular (conic) highlight per Figma: #015CEF (15%) to #0026CE (66%) */}
              <div
                className="pointer-events-none absolute -left-0 -top-0 h-full w-full opacity-100"
                style={{
                  background:
                    'conic-gradient(from 210deg at 60% 50%, #002C6E 10deg, #015CE7 360deg, #015CE7 200deg, #002C6E 300deg)',
                  filter: 'blur(8px)',
                }}
                aria-hidden
              />

              {/* icon */}
              <div className="relative z-10 mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20 text-[#F0C94A]">
                {f.icon}
              </div>

              <h3 className="relative z-10 mt-5 text-lg font-semibold tracking-tight text-center">
                {f.title}
              </h3>
              <p className="relative z-10 mt-2 text-sm leading-relaxed text-white/80 text-center max-w-[42ch] mx-auto">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
         {/* Video intro text matching the design */}
         <p className="mt-16 text-center font-montserrat text-[#0B3C89]/90 max-w-7xl mx-auto text-base sm:text-lg md:text-xl  lg:whitespace-nowrap">
          Watch this quick video to see how you can sell, buy, or release gold with complete transparency.
        </p>

        {/* Responsive 16:9 YouTube embed with autoplay (muted for browser compliance) */}
        <div className="mt-10 flex justify-center">
          <div className="w-full max-w-4xl overflow-hidden rounded-2xl border-2 border-[#FFCC33] shadow-[0_10px_25px_rgba(1,33,105,0.25)]">
            <div className="relative w-full pt-[56.25%]">{/* 16:9 aspect ratio */}
              <iframe
                className="absolute left-0 top-0 h-full w-full"
                src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&mute=1&loop=1&playsinline=1&rel=0&modestbranding=1&controls=1`}
                title="Midas - How it works"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="autoplay; encrypted-media; picture-in-picture; fullscreen; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyMidas