import React from 'react'
import Image from 'next/image'
import { CircleCheck, Lock, Unlock } from 'lucide-react'

const bullets: { title: string; text: string }[] = [
  {
    title: 'Instant Settlement',
    text: 'Clear your gold loan and release your gold quickly without delays.',
  },
  {
    title: 'Best Value Guarantee',
    text: 'We help you recover your gold at real-time market rates.',
  },
  {
    title: 'Simple & Hassle-Free',
    text: 'Transparent documentation and a smooth release process.',
  },
  {
    title: 'Secure Transactions',
    text: '100% safe and trustworthy handling of your pledged gold.',
  },
  {
    title: 'Customer Support',
    text: 'Dedicated guidance to make your release process stress-free.',
  },
]

const DetailsSection = () => {
  return (
    <section
      aria-labelledby="release-gold-details"
      className="relative isolate bg-[#EEF6FF]"
    >
      {/* top divider to echo the brand blue */}
      <div className="h-[3px] w-full bg-brand-blue-700" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          {/* Left: content */}
          <div>
            <h2
              id="release-gold-details"
              className="font-montserrat text-3xl sm:text-4xl font-extrabold text-navy-900"
            >
              Release Your Pledged Gold
              <br />
              <span className="text-slate-700 font-semibold">with Ease</span>
            </h2>

            <ul role="list" className="mt-10 space-y-5 text-slate-800">
              {bullets.map((b) => (
                <li key={b.title} className="flex items-start gap-3 sm:gap-4">
                  <span className="mt-1 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full ring-1 ring-brand-blue-700 bg-brand-blue-700 text-brand-blue-700">
                    <CircleCheck className="h-4 w-4" strokeWidth={2} color="white" />
                  </span>
                  <p className="text-[15px] sm:text-[1.05rem] leading-7 sm:leading-8">
                    <span className="font-semibold text-gray-900">{b.title}: </span>
                    <span className="text-slate-700">{b.text}</span>
                  </p>
                </li>
              ))}
            </ul>

            <a
              href="#release-gold"
              className="mt-8 inline-flex h-11 items-center justify-center rounded-lg px-5 text-sm font-semibold text-gray-900 shadow-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 bg-gradient-to-r from-gold-600 to-gold-500"
            >
              Release Now <Unlock className="ml-2 h-4 w-4" />
            </a>
          </div>

          {/* Right: image with rounded corners */}
          <div className="relative ml-auto w-full max-w-[400px]">
            <div
              className="relative overflow-hidden aspect-square"
              style={{
                clipPath: 'inset(0% 0 0 0 round 0% 30% 0 30%)',
              }}
            >
              <Image
                src="/landing-page/service/releasepage.png"
                alt="Customer happily releasing pledged gold"
                fill
                sizes="(min-width: 1024px) 560px, 90vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DetailsSection
