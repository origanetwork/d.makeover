"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import LiveGoldRatesCard from '../../shared/LiveGoldRatesCard'

/**
 * Sell Gold - Hero Section
 * Matches the provided UI: deep blue gradient + wave bg, left title/subtitle, right person image
 * Includes floating gold rate card with phone input and Get OTP button below the hero heading area
 */
const HeroSection: React.FC = () => {
  const [phone, setPhone] = useState<string>("")

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // TODO: integrate with your OTP backend flow
    console.log("Requesting OTP for:", phone)
  }

  return (
    <section aria-labelledby="sell-gold-heading" className="relative isolate overflow-visible z-10">
      {/* Background gradient layer */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'linear-gradient(80deg, var(--color-primary-deep-blue) 40%, var(--color-primary-bright-blue) 100%)',
        }}
      />

      {/* Subtle wave background image */}
      <Image
        src="/landing-page/home/background.png"
        alt=""
        priority
        fill
        sizes="100vw"
        className="absolute inset-0 z-0 object-cover opacity-20 mix-blend-overlay select-none pointer-events-none"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid max-h-[560px] grid-cols-1 items-center gap-y-10 pt-28 pb-28 md:grid-cols-2">
          {/* Left: Heading + Tagline */}
          <div className="text-white font-montserrat z-10 mt-10 sm:mt-0">
            <h1 id="sell-gold-heading" className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-[50px] whitespace-break-spaces md:whitespace-nowrap">
              Sell Your Gold with Confidence
            </h1>
            <p className="mt-4 text-lg sm:text-xl md:text-[26px] text-white/90 max-w-prose">
              Instant. Transparent. Secure. Always Fair.
            </p>
          </div>

          {/* Right: Person image */}
          <div className="relative z-0 self-end h-[320px] sm:h-[380px] md:h-[450px]">
            <Image
              src="/landing-page/about/about-hero.png"
              alt="Friendly representative"
              fill
              priority
              sizes="(min-width: 1024px) 520px, 60vw"
              className="object-contain object-bottom drop-shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* Floating gold rate card */}
      <LiveGoldRatesCard
        phone={phone}
        onPhoneChange={setPhone}
        onSubmit={onSubmit}
      />
    </section>
  )
}

export default HeroSection
