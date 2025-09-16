"use client"
import React, { useState } from 'react'
import Image from 'next/image'

type Props = {}

// Core Services hero section for the Services page.
// - Blue gradient background with subtle abstract wave image
// - Left column with title and tagline
// - Right column person image
// - Floating contact buttons (phone, WhatsApp)
// - Gold card for live gold rates with phone input and Get OTP button
const ServiceHero: React.FC<Props> = (props: Props) => {
  const [phone, setPhone] = useState("")

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // TODO: hook this to your OTP API
    // For now, just no-op
  }

  return (
    <section aria-labelledby="services-heading" className="relative isolate overflow-visible">
      {/* Background gradient layer */}
      <div className="absolute inset-0 -z-10" 
      style={{
        backgroundImage:
        'linear-gradient(80deg, var(--color-primary-deep-blue) 40%, var(--color-primary-bright-blue) 100%)',
    }}/>

      {/* Subtle wave background image */}
      <Image
        src="/landing-page/home/background.png"
        alt=""
        priority
        fill
        sizes="100vw"
        className="absolute inset-0 -z-10 object-cover opacity-20 mix-blend-overlay select-none pointer-events-none"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid max-h-[560px] grid-cols-1 items-center gap-y-10 pt-28 pb-28 md:grid-cols-2">
          {/* Left: Heading + Tagline */}
          <div className="text-white font-montserrat">
            <h1 id="services-heading" className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              Our Services
            </h1>
            <p className="mt-4 text-2xl font-semibold leading-tight text-white/90 sm:text-5xl whitespace-nowrap">
              Transparent. Trusted. Instant
            </p>
          </div>

          {/* Right: Person image */}
          <div className="relative h-[320px] sm:h-[380px] md:h-[440px]">
            <Image
              src="/landing-page/home/person-1.png"
              alt="Happy customer"
              fill
              priority
              sizes="(min-width: 1024px) 520px, 60vw"
              className="object-contain object-bottom drop-shadow-xl"
            />
          </div>
        </div>
      </div>


      {/* Floating gold rate card */}
      <div className="absolute left-1/2 bottom-[-90px] z-40 w-full max-w-4xl -translate-x-1/2 ">
        <div className="rounded-2xl p-5 shadow-2xl ring-1 ring-black/10 backdrop-blur" 
        style={{
          background:
            "linear-gradient(100deg, var(--color-secondary-gold) 10%, var(--color-secondary-light-gold) 70%)",
        }}
        >
          <div className="text-center text-gray-900">
            <p className="text-lg font-bold">Live Gold Rates</p>
            <p className="mt-1 text-sm text-black/70">To know today&apos;s Gold Rate enter your phone number below</p>
          </div>

          <form onSubmit={onSubmit} className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-[1fr_auto] max-w-lg mx-auto">
            <label htmlFor="phone" className="sr-only">Phone Number</label>
            <input
              id="phone"
              inputMode="numeric"
              pattern="[0-9]*"
              placeholder="Phone Number"
              className="h-11 rounded-lg border-0 px-4 text-[15px] text-[#0A0A0A] ring-1 ring-black/10 placeholder:text-black/50 focus:ring-2 focus:ring-brand-blue-600 backdrop-blur-lg bg-amber-50/90"
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g, ''))}
            />
            <button
              type="submit"
              className="inline-flex h-11 items-center justify-center rounded-lg bg-brand-blue-900 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
            >
              Get OTP
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ServiceHero