import React from 'react'
import Image from 'next/image'

type Props = {}

type Service = {
  title: string
  desc: string
  img: string
  href?: string
}

const services: Service[] = [
  {
    title: 'Sell Your Old Gold',
    desc:
      'Get instant cash at the best market rates with certified purity checks and a transparent evaluation process.',
    img: '/landing-page/home/sellgold.png',
    href: '#sell-gold',
  },
  {
    title: 'Buy Gold Bars & Coins',
    desc:
      'Each piece comes with assured purity, transparent pricing, and secure purchase ideal for investing or gifting.',
    img: '/landing-page/home/buygold.png',
    href: '#buy-gold',
  },
  {
    title: 'Release Pledged Gold',
    desc:
      'Transparent, hassle-free paperwork and immediate cash settlement at the best rates to release your pledged gold.',
    img: '/landing-page/home/release.png',
    href: '#release-gold',
  },
]

const WhatWeDo: React.FC<Props> = (props: Props) => {
  return (
    <section className="relative py-12 sm:py-16 bg-white">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        {/* Gold rounded container matching the reference */}
        <div
          className="rounded-[28px] p-6 sm:p-8 lg:p-10 shadow-[0_15px_40px_rgba(1,33,105,0.20)]"
          style={{
            background:
              'linear-gradient(1deg, var(--color-secondary-light-gold) 10%, var(--color-accent-golden) 45%, var(--color-accent-dark-golden) 100%)',
          }}
        >
          {/* Section heading */}
          <div className="px-1">
            <div className="flex items-center gap-3 text-white/90">
              <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase">Our Services</span>
              <span className="h-px flex-1 bg-white/70" aria-hidden />
            </div>
            <h3 className="mt-2 font-montserrat text-white tracking-[0.18em] sm:tracking-[0.22em] md:tracking-[0.28em] text-2xl sm:text-3xl md:text-4xl font-semibold uppercase">
              What We Do
            </h3>
          </div>

          {/* Cards */}
          <div className="mt-6 sm:mt-8 grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-3">
            {services.map((s) => (
              <article
                key={s.title}
                className="flex flex-col rounded-2xl border-2 border-brand-gold bg-brand-blue-700 p-6 sm:p-7 text-white shadow-[0_10px_25px_rgba(1,33,105,0.25)]"
              >
                <h4 className="text-xl sm:text-2xl font-semibold">{s.title}</h4>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-white/85">
                  {s.desc}
                </p>

                {/* Thumbnail */}
                <div className="mt-4 overflow-hidden rounded-lg">
                  <div className="relative w-full aspect-[16/9]">
                    <Image
                      src={s.img}
                      alt={s.title}
                      fill
                      sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-5">
                  <a
                    href={s.href}
                    className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-brand-gold px-4 text-brand-blue-700 font-semibold shadow-[inset_0_-2px_0_rgba(0,0,0,0.12)] hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
                    aria-label={`Know more about ${s.title}`}
                    style={{
                        background:
                          'linear-gradient(100deg, var(--color-secondary-light-gold) 40%, var(--color-accent-dark-golden) 100%, var(--color-accent-dark-golden) 100%)',
                    }}
                  >
                    <span>Know More</span>
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatWeDo