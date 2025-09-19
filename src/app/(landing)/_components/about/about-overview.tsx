import React from 'react'
import Image from 'next/image'

// Reusable SVG Icon set borrowed from Services commitment section for consistency
// Allowed names: 'shield' | 'users' | 'award'
const Icon: React.FC<{ name: 'shield' | 'users' | 'award' }> = ({ name }) => {
  switch (name) {
    case 'shield':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className='h-10 w-10 text-brand-blue-700' fill="none" viewBox="0 0 24 24">
          <g stroke="currentColor" strokeLinecap="round" strokeWidth="1.5">
            <path strokeLinejoin="round" d="m9.5 12.4 1.429 1.6 3.571-4"/>
            <path d="M3 10.417c0-3.198 0-4.797.378-5.335.377-.537 1.88-1.052 4.887-2.081l.573-.196C10.405 2.268 11.188 2 12 2c.811 0 1.595.268 3.162.805l.573.196c3.007 1.029 4.51 1.544 4.887 2.081C21 5.62 21 7.22 21 10.417v1.574c0 2.505-.837 4.437-2 5.913M3.193 14c.857 4.298 4.383 6.513 6.706 7.527.721.315 1.082.473 2.101.473 1.02 0 1.38-.158 2.101-.473.579-.252 1.231-.58 1.899-.994"/>
          </g>
        </svg>
      )
    case 'users':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className='h-9 w-9 text-brand-blue-700' fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 15a4 4 0 0 1 4 4v2h-2m-5-10.126a4.002 4.002 0 0 0 0-7.748M5 15a4 4 0 0 0-4 4v2h16v-2a4 4 0 0 0-4-4H9M9 3a4 4 0 1 0 3.465 2"/>
        </svg>
      )
    case 'award':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className='h-10 w-10 text-brand-blue-700' fill="currentColor">
        <path d="M20 8v2h6.586L18 18.586l-4.293-4.293a1 1 0 0 0-1.414 0L2 24.586 3.414 26 13 16.414l4.293 4.293a1 1 0 0 0 1.414 0L28 11.414V18h2V8Z"/>
        <path fill="none" d="M0 0h32v32H0z"/>
      </svg>
      )
  }
}

const stats = [
  { value: '25+', label: 'Years of Experience' },
  { value: '10,000+', label: 'Satisfied Customers' },
  { value: '100%', label: 'Transparency' },
]

const cards: Array<{ title: string; description: string; icon: 'shield' | 'users' | 'award' }> = [
  {
    title: 'Our Vision',
    description:
      'To be the most trusted precious metals dealer, setting industry standards for transparency and customer satisfaction.',
    icon: 'shield',
  },
  {
    title: 'Our Mission',
    description:
      'Providing fair, accurate valuations and exceptional service while building lasting relationships with our clients.',
    icon: 'users',
  },
  {
    title: 'Our Values',
    description:
      'Integrity, expertise, and transparency guide every transaction, ensuring you receive the best possible experience.',
    icon: 'award',
  },
]

const AboutOverview: React.FC = () => {
  return (
    <section aria-labelledby="about-overview" className="relative isolate bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Top two-column layout: text + image */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center px-4 sm:px-6 lg:px-8">
          <div>
            <p className="font-montserrat text-3xl font-bold tracking-wider text-brand-blue-800 uppercase">About Us</p>
            <p className="mt-3 text-xl font-montserrat leading-8 text-slate-700">
              At Midas Gold Point, we are more than just a gold trading company. We are your trusted partner in every
              transaction, backed by over 25 years of expertise in the gold industry and a reputation for transparency,
              integrity, and customer-first service.
            </p>

            {/* Stats row */}
            <div className="mt-8 grid grid-cols-3 divide-x divide-gray-200 rounded-xl bg-white">
              {stats.map((s) => (
                <div key={s.label} className="px-3 sm:px-4">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0A1B3D] font-montserrat">{s.value}</div>
                  <div className="mt-1 text-xs sm:text-sm text-slate-600">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right image */}
          <div className="relative h-[260px] sm:h-[320px] md:h-[360px] lg:h-[380px] rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/10">
            <Image
              src="/landing-page/about/stackedGoldBar.png"
              alt="Stacked gold bars glowing"
              fill
              priority
              sizes="(min-width: 1024px) 590px, 100vw"
              className="object-cover object-bottom"
            />
          </div>
        </div>

        {/* Cards: Vision, Mission, Values */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.title}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-white to-amber-50 p-6 shadow-[0_10px_24px_rgba(214,178,76,0.28)] border-2 border-brand-gold"
            >
              {/* golden glow highlight overlay */}
              <div
                className="pointer-events-none absolute inset-0 opacity-80"
                style={{
                  background:
                    'radial-gradient(60% 60% at 50% 0%, rgba(234,210,121,0.35) 0%, rgba(214,178,76,0.18) 35%, rgba(255,255,255,0) 70%), conic-gradient(from 200deg at 50% 0%, rgba(234,210,121,0.15), rgba(185,140,29,0.0) 40%, rgba(185,140,29,0.15) 70%, rgba(214,178,76,0.0) 100%)',
                  filter: 'blur(10px)',
                }}
                aria-hidden
              />
              <div className="mx-auto grid place-items-center rounded-full bg-gradient-to-b from-[#B98C1D] via-[#D6B24C] to-[#EAD279] text-white shadow ring-4 ring-white/70 w-16 h-16">
                <Icon name={card.icon} />
              </div>
              <h3 className="mt-4 text-center font-montserrat text-xl font-extrabold text-[#0A1B3D]">{card.title}</h3>
              <p className="mt-2 text-center text-sm md:text-md leading-6 text-slate-700">{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutOverview
