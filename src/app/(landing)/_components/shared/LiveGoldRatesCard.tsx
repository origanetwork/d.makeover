"use client"

import React from 'react'

export type LiveGoldRatesCardProps = {
  phone: string
  onPhoneChange: (value: string) => void
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  className?: string
  /**
   * If true, positions the card as a floating element (used in hero).
   * If false, renders as a normal block (used inside modals or inline sections).
   */
  floating?: boolean
}

const LiveGoldRatesCard: React.FC<LiveGoldRatesCardProps> = ({
  phone,
  onPhoneChange,
  onSubmit,
  className,
  floating = true,
}) => {
  const CardInner = (
    <div
      className="rounded-2xl p-5 shadow-2xl ring-1 ring-black/10 backdrop-blur"
      style={{
        background:
          'linear-gradient(100deg, var(--color-secondary-gold) 10%, var(--color-secondary-light-gold) 70%)',
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
          onChange={(e) => onPhoneChange(e.target.value.replace(/[^0-9]/g, ''))}
        />
        <button
          type="submit"
          className="inline-flex h-11 items-center justify-center rounded-lg bg-brand-blue-900 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
        >
          Get OTP
        </button>
      </form>
    </div>
  )

  if (floating) {
    return (
      <div className={`absolute left-1/2 bottom-[-90px] z-40 w-full max-w-4xl -translate-x-1/2 ${className ?? ''}`}>
        {CardInner}
      </div>
    )
  }

  return (
    <div className={`w-full ${className ?? ''}`}>
      {CardInner}
    </div>
  )
}

export default LiveGoldRatesCard
