'use client'

import React from 'react'

// Simple icon set using inline SVGs for zero deps and consistent styling
const ShieldIcon = ({ className = 'h-6 w-6' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
    <path
      d="M12 3l8 4v5c0 5.25-3.5 9.75-8 11-4.5-1.25-8-5.75-8-11V7l8-4z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path d="M9.5 12.5l1.8 1.8 3.2-3.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const BeakerIcon = ({ className = 'h-5 w-5' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
    <path d="M9 3v6l-4 8a4 4 0 004 4h6a4 4 0 004-4l-4-8V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M7 13h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

const CleanIcon = ({ className = 'h-5 w-5' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
    <path d="M4 15l6-6 4 4 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="5" cy="19" r="1" fill="currentColor" />
    <circle cx="9" cy="19" r="1" fill="currentColor" />
  </svg>
)

const ScaleIcon = ({ className = 'h-5 w-5' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
    <path d="M12 4l7 4-7 4-7-4 7-4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <path d="M6 12l-3 6a4 4 0 008 0l-3-6" stroke="currentColor" strokeWidth="2" />
    <path d="M18 12l-3 6a4 4 0 008 0l-3-6" stroke="currentColor" strokeWidth="2" />
  </svg>
)

const RateIcon = ({ className = 'h-5 w-5' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
    <path d="M3 17l6-6 4 4 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const MeltingIcon = ({ className = 'h-5 w-5' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
    <path d="M12 3l8 5H4l8-5z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <path d="M6 10h12l-3 7H9l-3-7z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
  </svg>
)

const InvoiceIcon = ({ className = 'h-5 w-5' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
    <path d="M7 3h10a2 2 0 012 2v14l-4-2-4 2-4-2-4 2V5a2 2 0 012-2z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <path d="M9 8h6M9 12h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

type Row = { title: string; desc: string; icon: React.ReactNode }

const leftRows: Row[] = [
  {
    title: 'Valuation of your Gold',
    desc: 'Multilevel scientific testing for exact Gold value only',
    icon: <BeakerIcon />,
  },
  {
    title: 'Cleaning of your Gold',
    desc: 'Cleans the Gold with ultrasonic machine to get accurate weight',
    icon: <CleanIcon />,
  },
  {
    title: 'Weighing of your Gold',
    desc: 'Takes up to 3 decimals points (per gram) shown on weighing scale',
    icon: <ScaleIcon />,
  },
  { title: 'Gold Rate', desc: 'Uses competitive market rates', icon: <RateIcon /> },
  {
    title: 'Melting of your Gold',
    desc: 'Uses high quality crucibles which do not retain Gold after melting',
    icon: <MeltingIcon />,
  },
  {
    title: 'Mode of Payment / Invoicing',
    desc:
      'Up to ₹10,000 given in cash. Above ₹10,000 instantly paid via NEFT/IMPS/RTGS with invoice shared',
    icon: <InvoiceIcon />,
  },
]

const rightRows: Row[] = [
  {
    title: 'Valuation of your Gold',
    desc: 'Touchstone gives approximate Gold value',
    icon: <BeakerIcon />,
  },
  {
    title: 'Cleaning of your Gold',
    desc: 'Do not clean and deduct melting cost directly',
    icon: <CleanIcon />,
  },
  {
    title: 'Weighing of your Gold',
    desc: 'Round off to lowest number on weighing scale',
    icon: <ScaleIcon />,
  },
  { title: 'Gold Rate', desc: 'Prices may differ from the market rate', icon: <RateIcon /> },
  {
    title: 'Melting of your Gold',
    desc: 'Use low quality crucibles, retaining Gold particles after melting',
    icon: <MeltingIcon />,
  },
  {
    title: 'Mode of Payment / Invoicing',
    desc: 'Cash payment with no invoice',
    icon: <InvoiceIcon />,
  },
]

const RowItem = ({ row, tone = 'gold' }: { row: Row; tone?: 'gold' | 'gray' }) => (
  <li className="flex items-start gap-4">
    <span
      className={
        tone === 'gold'
          ? 'flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-yellow-400 to-amber-500 text-white shadow-md ring-1 ring-amber-300/60'
          : 'flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-200 text-slate-600 shadow-sm ring-1 ring-slate-300'
      }
      aria-hidden
    >
      {/* Icons inherit text color */}
      <span className="text-[0px]">
        {/* zero-width wrapper so svg centers perfectly */}
        <span className={tone === 'gold' ? 'text-white' : 'text-slate-600'}>{row.icon}</span>
      </span>
    </span>
    <div>
      <p className={tone === 'gold' ? 'font-semibold text-slate-900' : 'font-semibold text-slate-800'}>{row.title}</p>
      <p className={tone === 'gold' ? 'mt-1 text-slate-700' : 'mt-1 text-slate-600'}>{row.desc}</p>
    </div>
  </li>
)

const Card = ({
  title,
  subtitle,
  rows,
  variant,
}: {
  title: string
  subtitle: string
  rows: Row[]
  variant: 'left' | 'right'
}) => {
  const isLeft = variant === 'left'
  return (
    <article
      className={
        isLeft
          ? 'relative h-full flex flex-col rounded-2xl bg-gradient-to-b from-amber-50 to-yellow-50 p-6 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.08)] ring-1 ring-amber-100'
          : 'relative h-full flex flex-col rounded-2xl bg-white p-6 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.06)] ring-1 ring-slate-100'
      }
    >
      {/* Top badge */}
      <div
        className={
          isLeft
            ? 'mx-auto -mt-10 mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-b from-yellow-400 to-amber-500 text-white shadow-lg ring-2 ring-amber-300'
            : 'mx-auto -mt-10 mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-slate-200 text-slate-600 shadow-md ring-1 ring-slate-300'
        }
        aria-hidden
      >
        <ShieldIcon className={isLeft ? 'h-7 w-7' : 'h-7 w-7'} />
      </div>

      <header className="text-center">
        <h3 className={isLeft ? 'text-xl sm:text-2xl font-semibold text-amber-800' : 'text-xl sm:text-2xl font-semibold text-slate-800'}>
          {title}
        </h3>
        <p className={isLeft ? 'mt-1 text-base font-medium text-amber-700/90' : 'mt-1 text-base font-medium text-slate-600'}>{subtitle}</p>
      </header>

      <ul className="mt-6 space-y-5">
        {rows.map((r) => (
          <RowItem key={r.title} row={r} tone={isLeft ? 'gold' : 'gray'} />
        ))}
      </ul>
    </article>
  )
}

const WhyMidasComparison: React.FC = () => {
  return (
    <div className="relative mt-12 sm:mt-10">
      {/* Grid wrapper */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-stretch gap-6 sm:gap-8 lg:grid-cols-2">
        <div className="relative h-full pt-10 lg:pt-12">
          <Card
            variant="left"
            title="Experience the Midas Standard"
            subtitle="in Gold Valuation"
            rows={leftRows}
          />
        </div>

        {/* VS badge for mobile (between cards) */}
        <div className="flex items-center justify-center lg:hidden">
          <div className="relative z-10 -my-0 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-b from-yellow-400 to-amber-600 text-white shadow-xl ring-2 ring-amber-300">
            <span className="text-sm font-bold tracking-wide">VS</span>
          </div>
        </div>

        <div className="relative h-full pt-4 lg:pt-12">
          <Card
            variant="right"
            title="The Risk with"
            subtitle="Unorganized Buyers"
            rows={rightRows}
          />
        </div>
      </div>

      {/* Center VS badge for desktop */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-b from-yellow-400 to-amber-600 text-white shadow-2xl ring-4 ring-white/70">
            <span className="text-lg font-extrabold tracking-wide">VS</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyMidasComparison
