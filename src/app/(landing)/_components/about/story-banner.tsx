import React from 'react'

// Our Story banner with deep blue gradient and gold accents
// Server component, semantic, accessible and responsive
const StoryBanner: React.FC = () => {
  return (
    <section aria-labelledby="story-heading" className="relative isolate px-4 sm:px-6 lg:px-8">
      <div
        className="mx-auto max-w-7xl overflow-hidden rounded-3xl p-6 sm:p-8 md:p-10 shadow-[0_18px_40px_rgba(1,33,105,0.28)]"
        style={{
          backgroundImage:
            'linear-gradient(100deg, var(--color-primary-deep-blue) 10%, var(--color-primary-bright-blue) 95%)',
        }}
      >
        {/* subtle golden glow overlay */}
        <div
          className="pointer-events-none absolute inset-0 rounded-3xl opacity-80"
          style={{
            background:
              'radial-gradient(60% 40% at 30% 0%, rgba(234,210,121,0.20) 0%, rgba(214,178,76,0.10) 40%, rgba(255,255,255,0) 70%)',
            filter: 'blur(8px)',
          }}
          aria-hidden
        />

        {/* Top label with divider */}
        <div className="relative flex items-center gap-4 text-white/90">
          <span className="font-montserrat text-xs sm:text-sm font-extrabold tracking-wider uppercase">Our Story</span>
          <span className="h-px flex-1 bg-white/30" />
        </div>

        {/* Heading */}
        <h2
          id="story-heading"
          className="relative mt-4 text-center font-montserrat text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white"
        >
          <span>25 Years of </span>
          <span
            className="bg-gradient-to-r from-[#EAD279] via-[#D6B24C] to-[#B98C1D] bg-clip-text text-transparent"
          >
            Golden Trust
          </span>
        </h2>

        {/* Copy */}
        <p className="relative mx-auto mt-6 max-w-5xl text-center text-sm sm:text-base md:text-xl leading-7 sm:leading-8 text-white/85">
          For over 25 years, we have been at the forefront of the gold trading industry, building a legacy of transparency,
          reliability, and customer-first service. What began as a small vision has grown into a trusted name, serving thousands
          of clients and earning industry recognition along the way. Every milestone reflects our unwavering commitment to
          integrity and innovation — values that continue to guide us as we move forward. With a quarter-century of expertise,
          we remain dedicated to creating value, fostering trust, and setting new standards in every transaction.
        </p>
      </div>
    </section>
  )
}

export default StoryBanner
