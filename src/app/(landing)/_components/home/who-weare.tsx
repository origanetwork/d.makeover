import React from 'react'
import Image from 'next/image'

type Props = {}

const items = [
  {
    title: '100% Safe & Secured',
    desc:
      'Your gold is handled with utmost care, transparency, and certified security at every step.',
  },
  {
    title: 'Quick & Hassle-Free Process',
    desc:
      'Instant valuation and payment to make your gold selling experience smooth and stress-free.',
  },
  {
    title: 'multi-branch network',
    desc:
      'Access our trusted gold services at branches near you for a seamless and reliable experience everywhere.',
  },
  {
    title: 'Gold Expert & Transparency',
    desc:
      'Our experts ensure complete transparency in gold evaluation and pricing with detailed reports.',
  },
]

const WhoWeare: React.FC<Props> = (props: Props) => {
  return (
    <section className="relative bg-white/65 py-10 sm:py-20">
      {/* Background placeholder image (replace src with final asset later) */}
      <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden>
        <Image
          src="/landing-page/home/whoweare.png"
          alt=""
          fill
          priority={false}
          sizes="100vw"
          className="object-cover object-center opacity-90"
        />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <h2 className="text-center font-montserrat text-brand-blue-700 tracking-[0.18em] sm:tracking-[0.22em] md:tracking-[0.28em] text-2xl sm:text-3xl md:text-4xl font-semibold">
          WHO WE ARE
        </h2>
        <p className="mx-auto mt-3 max-w-3xl text-center text-sm sm:text-base font-semibold text-brand-blue-700">
          At Midas Gold Point, we help you unlock the best value for your old or unused gold with
          instant payment, fair evaluation, and complete transparency.
        </p>

        {/* content grid: image | two-column rows for keypoints + descriptions */}
        <div className="mt-10 grid grid-cols-1 gap-8 sm:gap-10 xl:gap-12 md:grid-cols-1 lg:grid-cols-3 items-center">
          {/* Left image */}
          <div className="order-2 md:order-1 lg:order-1">
            <div className="overflow-hidden rounded-2xl border-2 border-brand-gold shadow-[0_10px_25px_rgba(1,33,105,0.20)] aspect-[16/9] md:aspect-[16/9] lg:aspect-auto">
              <Image
                src="/landing-page/home/whoweare-2.jpg"
                alt="Gold bars stacked representing value and trust"
                width={640}
                height={840}
                priority={false}
                className="h-full w-full object-cover object-center sm:object-cover"
              />
            </div>
          </div>

          {/* Right two columns: each row pairs a keypoint (left) with its description (right) */}
          <div className="order-1 md:order-2 lg:order-2 lg:col-span-2">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 lg:gap-y-10 lg:gap-x-12">
              {items.map((item) => (
                <React.Fragment key={item.title}>
                  {/* Keypoint (left column) */}
                  <div className="flex items-center gap-4">
                    <span
                      className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full ring-1 ring-brand-blue-700/40 text-deep-gray"
                      aria-hidden
                    >
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <p className="text-deep-gray text-base sm:text-lg md:text-[24px] font-medium  font-montserrat">
                      {item.title}
                    </p>
                  </div>

                  {/* Description (right column) */}
                  <p className="text-slate-600 text-sm sm:text-md md:text-lg leading-relaxed max-w-[50ch]">
                    {item.desc}
                  </p>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhoWeare