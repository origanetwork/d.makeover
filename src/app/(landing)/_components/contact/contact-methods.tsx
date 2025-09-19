"use client"
import React from 'react'

/**
 * Contact Methods Section
 * - Matches the design: beige background, centered heading, and a 2x2 grid of cards.
 * - Each card contains an icon, title, primary text, and a subtle helper line.
 * - Mobile-first, responsive up to 2 columns on md+ screens.
 */
const items = [
  {
    title: 'Phone',
    line1: '+1 (555) 123-GOLD',
    line2: 'Call us for immediate assistance',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
        <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.11.37 2.3.57 3.58.57a1 1 0 011 1v3.5a1 1 0 01-1 1C10.85 21.01 3 13.16 3 3a1 1 0 011-1h3.5a1 1 0 011 1c0 1.28.2 2.47.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z" />
      </svg>
    ),
  },
  {
    title: 'Email',
    line1: 'info@midasgoldpoint.com',
    line2: 'Send us your inquiries anytime',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
        <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
  },
  {
    title: 'Office Address',
    line1: 'TB Road, near KSRTC Stand,',
    line2: 'Angamali',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
        <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
      </svg>
    ),
  },
  {
    title: 'Business Hours',
    line1: 'Mon - Fri: 9AM - 6PM',
    line2: 'Saturday: 10AM - 4PM',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
        <path d="M12 1a9 9 0 100 18 9 9 0 000-18zm0 2a7 7 0 110 14A7 7 0 0112 3zm.5 3h-1v5l4 2 .5-.87-3.5-1.8V6z" />
      </svg>
    ),
  },
]

const ContactMethods: React.FC = () => {
  return (
    <section className="relative bg-[#F7F1DC] py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <h2 className="font-montserrat text-brand-blue-700 text-2xl sm:text-3xl md:text-4xl tracking-[0.02em] font-semibold">
            Get in Touch
          </h2>
          <p className="mt-3 text-slate-700 font-montserrat text-base sm:text-lg">
            Multiple ways to reach us. Choose what works best for you.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
          {items.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-4 rounded-2xl bg-white px-5 py-5 shadow-[0_8px_16px_rgba(1,33,105,0.15)] ring-1 ring-black/5"
            >
              <div
                className="flex h-11 w-11 flex-none items-center justify-center rounded-full text-brand-blue-700"
                style={{
                  background:
                    'linear-gradient(100deg, var(--color-secondary-light-gold) 10%, var(--color-accent-golden) 60%, var(--color-accent-dark-golden) 100%)',
                }}
                aria-hidden
              >
                {item.icon}
              </div>
              <div className="font-montserrat">
                <p className="text-slate-900 font-semibold">{item.title}</p>
                <p className="text-slate-700 mt-1 text-sm sm:text-base">{item.line1}</p>
                <p className="text-slate-500 text-xs sm:text-sm">{item.line2}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ContactMethods
