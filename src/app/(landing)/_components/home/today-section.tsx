"use client"
import React, { useMemo, useState } from 'react'
import Image from 'next/image'

// Simple mock rates per gram (INR). In a real app, fetch live rates via API.
const GOLD_RATES: Record<string, number> = {
  '24K': 6800,
  '22K': 6200,
  '20K': 5600,
  '18K': 4800,
}

function formatINR(value: number) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value)
}

export type TodaySectionProps = {}

const TodaySection: React.FC<TodaySectionProps> = () => {
  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const [goldType, setGoldType] = useState<keyof typeof GOLD_RATES>('22K')
  const [quantity, setQuantity] = useState<string>('') // grams
  const [phone, setPhone] = useState('')
  const [touched, setTouched] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const qtyNum = Number(quantity)

  const errors = useMemo(() => {
    const e: Partial<Record<'name' | 'location' | 'quantity' | 'phone', string>> = {}
    if (!name.trim()) e.name = 'Please enter your name.'
    if (!location.trim()) e.location = 'Please enter your location.'
    if (!quantity || isNaN(qtyNum) || qtyNum <= 0) e.quantity = 'Enter a valid quantity in grams.'
    if (!/^\d{10}$/.test(phone.replace(/\D/g, ''))) e.phone = 'Enter a valid 10-digit phone number.'
    return e
  }, [name, location, quantity, phone, qtyNum])

  const isValid = Object.keys(errors).length === 0

  const estimated = useMemo(() => {
    if (!isValid) return null
    const rate = GOLD_RATES[goldType]
    const amount = rate * qtyNum
    return { rate, amount }
  }, [goldType, isValid, qtyNum])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setTouched(true)
    setSubmitted(true)
  }

  return (
    <section className="relative bg-white py-12 sm:py-10">
      <div className="mx-auto max-w-8xl px-5 sm:px-6 lg:px-8">
        {/* Banner container with blue gradient background */}
        <div
          className="relative overflow-hidden rounded-[28px] px-4 sm:px-6 lg:px-8 py-8 sm:py-10 "
          style={{
            backgroundImage:
              'linear-gradient(110deg, var(--color-primary-deep-blue) 70%, var(--color-primary-bright-blue) 100%)',
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
            {/* Left copy block (spans 2 columns on md+) */}
            <div className="md:col-span-1 text-white">
              <h3 className="font-montserrat text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-wide">
                WANT TO SELL
                <br />
                YOUR GOLD FAST
              </h3>
              <p className="mt-3 text-white/85 text-base sm:text-lg">
                Check today’s gold rate
              </p>
            </div>

            {/* Right: Glass card with form (centered in 3rd column) */}
            <div className="relative flex lg:justify-center md:justify-end w-full">
              <div className="relative w-full max-w-[380px] sm:max-w-[420px] lg:max-w-[460px] overflow-hidden rounded-2xl border border-white/35 bg-white/10 backdrop-blur-md p-4 sm:p-5 lg:p-6 shadow-[0_8px_30px_rgba(1,33,105,0.25)]"
              style={{
                backgroundImage:
                  'linear-gradient(80deg, var(--color-primary-deep-blue) 80%, var(--color-primary-bright-blue) 100% )',
              }}>
                {/* Decorative background motif inside card */}
                <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
                  <Image
                    src="/landing-page/home/gold-bar.png"
                    alt="Gold bar motif"
                    fill
                    sizes="(min-width:1024px) 40vw, 80vw"
                    className="object-cover"
                    style={{ opacity: 0.18 }}
                    priority={false}
                  />
                </div>

                <form onSubmit={handleSubmit} className="relative z-10 space-y-3">
                  {/* Name */}
                  <label className="sr-only" htmlFor="name">Name</label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onBlur={() => setTouched(true)}
                    placeholder="Name"
                    autoComplete="name"
                    className="w-full rounded-xl border border-white/60 bg-brand-blue-700/35 text-white placeholder-white/80 backdrop-blur-sm px-4 py-3 outline-none focus-visible:ring-2 focus-visible:ring-brand-gold shadow-[inset_0_2px_0_rgba(255,255,255,0.15)]"
                  />
                  {touched && errors.name && (
                    <p className="text-xs text-yellow-200/95">{errors.name}</p>
                  )}

                  {/* Location */}
                  <label className="sr-only" htmlFor="location">Location</label>
                  <input
                    id="location"
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    onBlur={() => setTouched(true)}
                    placeholder="Location"
                    autoComplete="address-level2"
                    className="w-full rounded-xl border border-white/60 bg-brand-blue-700/35 text-white placeholder-white/80 backdrop-blur-sm px-4 py-3 outline-none focus-visible:ring-2 focus-visible:ring-brand-gold shadow-[inset_0_2px_0_rgba(255,255,255,0.15)]"
                  />
                  {touched && errors.location && (
                    <p className="text-xs text-yellow-200/95">{errors.location}</p>
                  )}

                  {/* Gold Type label (visible) */}
                  <div className="pt-1">
                    <span className="block text-white/90 text-sm mb-1">Gold Type</span>
                    <div className="relative">
                      <label className="sr-only" htmlFor="goldType">Gold Type</label>
                      <select
                        id="goldType"
                        value={goldType}
                        onChange={(e) => setGoldType(e.target.value as keyof typeof GOLD_RATES)}
                        onBlur={() => setTouched(true)}
                        className="w-full appearance-none rounded-xl border border-white/60 bg-brand-blue-700/35 text-white px-4 py-3 pr-12 outline-none placeholder-white/80 backdrop-blur-sm focus-visible:ring-2 focus-visible:ring-brand-gold shadow-[inset_0_2px_0_rgba(255,255,255,0.15)]"
                      >
                        {Object.keys(GOLD_RATES).map((k) => (
                          <option key={k} value={k}>{k} Gold</option>
                        ))}
                      </select>
                      {/* Custom chevron badge */}
                      <span className="pointer-events-none absolute inset-y-0 right-2 flex items-center">
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue-700 border border-white/60 text-white">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </span>
                      </span>
                    </div>
                  </div>

                  {/* Quantity in grams */}
                  <label className="sr-only" htmlFor="quantity">Quantity (in Grams)</label>
                  <input
                    id="quantity"
                    type="number"
                    inputMode="decimal"
                    step="0.01"
                    min={0}
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    onBlur={() => setTouched(true)}
                    placeholder="Quantity (in Grams)"
                    className="w-full rounded-xl border border-white/60 bg-brand-blue-700/35 text-white placeholder-white/80 backdrop-blur-sm px-4 py-3 outline-none focus-visible:ring-2 focus-visible:ring-brand-gold shadow-[inset_0_2px_0_rgba(255,255,255,0.15)]"
                  />
                  {touched && errors.quantity && (
                    <p className="text-xs text-yellow-200/95">{errors.quantity}</p>
                  )}

                  {/* Phone number */}
                  <label className="sr-only" htmlFor="phone">Phone Number</label>
                  <input
                    id="phone"
                    type="tel"
                    inputMode="numeric"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    onBlur={() => setTouched(true)}
                    placeholder="Phone Number"
                    autoComplete="tel"
                    className="w-full rounded-xl border border-white/60 bg-brand-blue-700/35 text-white placeholder-white/80 backdrop-blur-sm px-4 py-3 outline-none focus-visible:ring-2 focus-visible:ring-brand-gold shadow-[inset_0_2px_0_rgba(255,255,255,0.15)]"
                  />
                  {touched && errors.phone && (
                    <p className="text-xs text-yellow-200/95">{errors.phone}</p>
                  )}

                  {/* CTA */}
                  <button
                    type="submit"
                    disabled={!isValid}
                    className="mt-1 inline-flex w-full items-center justify-center rounded-xl px-4 py-3.5 font-semibold text-brand-blue-700 shadow-[0_8px_18px_rgba(255,204,51,0.35)] disabled:cursor-not-allowed disabled:opacity-100 "
                    style={{
                      background: `${isValid ? 'linear-gradient(130deg, var(--color-accent-dark-golden) 10%, var(--color-accent-bright-yellow) 50%, var(--color-secondary-gold) 100%)' : 'linear-gradient(130deg, var(--color-secondary-gold) 30%, var(--color-secondary-gold) 50%, var(--color-secondary-gold) 100%)'}`
                    }}
                    aria-disabled={!isValid}
                  >
                    Check Gold Price Now
                    <svg className="ml-2 h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
                  </button>

                  {/* Result */}
                  <div className="min-h-[1.5rem] pt-1" aria-live="polite">
                    {submitted && estimated && (
                      <p className="text-white/95 text-sm">
                        Estimated value for {qtyNum}g of {goldType} gold at {formatINR(estimated.rate)}/g is
                        <span className="font-bold"> {formatINR(estimated.amount)}</span>.
                      </p>
                    )}
                    {submitted && !isValid && (
                      <p className="text-yellow-200/95 text-sm">Please fix the errors above to get an estimate.</p>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Notes for developers: dark mode uses the class strategy in Tailwind. */}
      </div>
    </section>
  )
}

export default TodaySection