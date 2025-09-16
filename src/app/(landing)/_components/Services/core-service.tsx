import React from 'react'



type Service = {
  title: string
  description: string
  features: string[]
  cta: { href: string; label: string }
}

const services: Service[] = [
  {
    title: 'Buy Gold',
    description:
      'Invest in premium gold jewellery, coins, and bars with assured purity and authenticity. Our market-linked pricing ensures great value with secure storage options and transparent pricing.',
    features: [
      'Live Market-Linked Gold Rates',
      'Trusted by Modern Investors & Gold Owners',
      '100% Certified Purity & Authenticity',
    ],
    cta: { href: '#live-rate', label: 'Check Live Rate ↗' },
  },
  {
    title: 'Sell Old Gold',
    description:
      'Turn your unused gold into instant cash with free gold valuation, purity testing, and same-day transfer. Enjoy transparent pricing with zero hidden charges.',
    features: [
      'Instant Gold Valuation',
      'Best Market Value for Old Gold',
      'Transparent Pricing with No Deductions',
    ],
    cta: { href: '#sell-gold', label: 'Sell Old Gold ↗' },
  },
  {
    title: 'Release Gold',
    description:
      'Regain pledged or mortgaged gold with quick processing, competitive prices, and complete documentation support — all with transparent, fair pricing.',
    features: [
      'Quick & Hassle-Free Gold Release',
      'Transparent & Competitive Pricing',
      'Complete Document & Loan Support',
    ],
    cta: { href: '#release-gold', label: 'Release My Gold ↗' },
  },
]

const Bullet = () => (
  <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full border-2 border-brand-blue-600">
    <span className="h-2 w-2 rounded-full bg-brand-blue-600" />
  </span>
)

const ServiceCard: React.FC<Service> = ({ title, description, features, cta }) => (
  <div className="flex h-full flex-col rounded-2xl bg-white p-8 shadow-xl ring-1 ring-black/5">
    <h3 className="text-xl sm:text-2xl font-extrabold text-navy-900 font-montserrat">{title}</h3>
    <p className="mt-3 text-sm sm:text-[1.1rem] leading-6 text-slate-700">{description}</p>
    <ul role="list" className="mt-6 space-y-3 text-sm sm:text-md text-slate-900">
      {features.map((f, i) => (
        <li key={i} className="flex items-start gap-5 mb-5">
          <Bullet />
          <span>{f}</span>
        </li>
      ))}
    </ul>
    <a
      href={cta.href}
      aria-label={cta.label}
      className="mt-auto inline-flex h-11 items-center justify-center rounded-lg px-5 text-sm font-semibold text-[#1E1E1E] shadow-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 bg-gradient-to-r from-[#D4AF37] to-[#F2D267]"
    >
      {cta.label}
    </a>
  </div>
)

const Coreservice = () => {
  return (
    <section
      aria-labelledby="core-services-heading"
      className="relative isolate overflow-hidden border-t border-white/20 bg-gradient-to-tr from-[#002E74] to-[#0156D8]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <h2
          id="core-services-heading"
          className="text-center font-montserrat text-3xl sm:text-4xl md:text-5xl font-extrabold text-white"
        >
          Our Core Services
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:mt-12 md:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Coreservice