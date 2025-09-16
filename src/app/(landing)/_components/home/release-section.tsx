"use client"
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { loadGSAP } from '@/lib/gsap'

type Props = {}

type Step = { title: string; content: string }

const releaseSteps: Step[] = [
  { title: '1. Bring Pledge Documents', content: 'Carry the original pledge receipt and related documents to initiate the release.' },
  { title: '2. Carry Your ID Proof', content: 'Bring a valid government ID for KYC verification to ensure a secure process.' },
  { title: '3. We Pay & Release', content: 'We clear the due amount with the pledge holder and initiate the release process.' },
  { title: '4. Purity Testing', content: 'Your gold is tested non-destructively in your presence for complete transparency.' },
  { title: '5. Live Rate Valuation', content: 'We value your gold at the current live market rate—no hidden charges.' },
  { title: '6. Cash in Hand', content: 'Get your money instantly via cash or bank transfer once you approve.' },
]

const ReleaseSection: React.FC<Props> = (props: Props) => {
  // one open at a time
  const [openIdx, setOpenIdx] = useState<number | null>(null)
  const [gsapRef, setGsapRef] = useState<any>(null)
  // Separate refs for desktop and mobile to avoid conflicts between hidden branches
  const panelsRefDesktop = useRef<Array<HTMLDivElement | null>>([])
  const panelsRefMobile = useRef<Array<HTMLDivElement | null>>([])

  // Lazy-load GSAP on client
  useEffect(() => {
    let alive = true
    ;(async () => {
      const gsap = await loadGSAP()
      if (gsap && alive) setGsapRef(gsap)
    })()
    return () => {
      alive = false
    }
  }, [])

  // Keep panels hidden initially for both layouts
  useEffect(() => {
    const hideAll = (arr: Array<HTMLDivElement | null>) => {
      arr.forEach((el) => {
        if (!el) return
        el.style.display = 'none'
        el.style.height = '0px'
        el.style.opacity = '0'
        el.style.overflow = 'hidden'
      })
    }
    hideAll(panelsRefDesktop.current)
    hideAll(panelsRefMobile.current)
  }, [])

  // Animate open/close
  useEffect(() => {
    if (!gsapRef) return
    const animatePanels = (arr: Array<HTMLDivElement | null>) => {
      arr.forEach((el, idx) => {
        if (!el) return
        gsapRef.killTweensOf(el)
        if (openIdx === idx) {
          el.style.display = 'block'
          gsapRef.fromTo(
            el,
            { height: 0, opacity: 0 },
            { height: 'auto', opacity: 1, duration: 0.45, ease: 'power2.out' }
          )
        } else {
          gsapRef.to(el, {
            height: 0,
            opacity: 0,
            duration: 0.35,
            ease: 'power1.out',
            onComplete: () => {
              if (el) el.style.display = 'none'
            },
          })
        }
      })
    }
    animatePanels(panelsRefDesktop.current)
    animatePanels(panelsRefMobile.current)
  }, [openIdx, gsapRef])

  const toggle = (idx: number) => setOpenIdx((prev) => (prev === idx ? null : idx))

  return (
    <section className="relative bg-white py-8 sm:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-center font-montserrat text-brand-blue-700 tracking-[0.18em] sm:tracking-[0.22em] md:tracking-[0.28em] text-xl sm:text-2xl md:text-3xl font-semibold">
          RELEASE YOUR PLEDGED GOLD IN 6 SIMPLE STEPS – FAST & STRESS-FREE
        </h2>

        {/* Mobile layout: list on top, gradient block on bottom */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:hidden">
          {/* List (mobile) */}
          <div>
            <ul className="space-y-4">
              {releaseSteps.map((step, idx) => {
                const isOpen = openIdx === idx
                return (
                  <li key={`m-${step.title}`} className="rounded-xl shadow-[0_8px_18px_rgba(11,60,137,0.15)]">
                    {/* Trigger button */}
                    <button
                      type="button"
                      onClick={() => toggle(idx)}
                      className="group flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-white"
                      style={{ background: 'var(--color-secondary-dark-gold)' }}
                      aria-expanded={isOpen}
                      aria-controls={`release-step-panel-m-${idx}`}
                    >
                      <span className="text-sm font-semibold">{step.title}</span>
                      <span
                        className={`ml-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue-700 text-white shadow-[inset_0_-2px_0_rgba(0,0,0,0.15)] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                        aria-hidden
                      >
                        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </button>

                    {/* Collapsible content (mobile) */}
                    <div
                      id={`release-step-panel-m-${idx}`}
                      ref={(el) => {
                        panelsRefMobile.current[idx] = el
                      }}
                      className="overflow-hidden rounded-b-xl border-x-0 border-b-2 border-brand-blue-700 bg-white"
                      aria-hidden={!isOpen}
                      style={{
                        display: isOpen ? 'block' : 'none',
                        height: isOpen ? 'auto' : 0,
                        opacity: isOpen ? 1 : 0,
                      }}
                    >
                      <div className="px-4 py-3 text-sm text-slate-700">{step.content}</div>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Gradient block (mobile) */}
          <div className="relative min-h-[260px] flex items-end justify-center">
            {/* Gradient background */}
            <div
              className="pointer-events-none absolute inset-0 z-0 rounded-[28px]"
              style={{
                background:
                  'linear-gradient(180deg, rgba(11,60,137,0) 0%, rgba(11,60,137,0.20) 45%, #002E74 100%)',
              }}
              aria-hidden
            />
            {/* Person image */}
            <div className="relative z-10 w-[68vw] max-w-[360px] aspect-[3/4]">
              <Image
                src="/landing-page/home/release-img.png"
                alt="Release gold representative"
                fill
                sizes="68vw"
                className="object-contain drop-shadow-[0_18px_28px_rgba(1,33,105,0.25)]"
                priority={false}
              />
            </div>
          </div>
        </div>

        {/* Desktop/Tablet layout: gradient left (1 col), accordion right (3 cols) */}
        <div className="mt-10 hidden md:grid grid-cols-4 gap-8 lg:gap-12">
          {/* Left: Gradient + person image */}
          <div className="relative self-start md:sticky md:top-24 min-h-[200px] md:min-h-[510px] flex flex-col">
            <div
              className="pointer-events-none absolute bottom-0 left-1/2 z-0 h-[100%] w-[100%] -translate-x-1/2 rounded-[28px]"
              style={{
                background:
                  'linear-gradient(180deg, rgba(11,60,137,0) 0%, rgba(11,60,137,0.20) 45%, #002E74 100%)',
              }}
              aria-hidden
            />
            {/* Person image at the bottom of the gradient */}
            <div className="absolute left-1/2 bottom-0 z-10 -translate-x-1/2 pointer-events-none w-[40vw] sm:w-[40vw] lg:w-[30vw] aspect-[3/4]">
              <Image
                src="/landing-page/home/release-img.png"
                alt="Release gold representative"
                fill
                sizes="(min-width:1024px) 30vw, (min-width:640px) 40vw, 40vw"
                className="object-contain drop-shadow-[0_25px_35px_rgba(1,33,105,0.25)]"
                priority={false}
              />
            </div>
          </div>

          {/* Right: Accordion list as gold bars */}
          <div className="col-span-3">
            <ul className="space-y-4 sm:space-y-5">
              {releaseSteps.map((step, idx) => {
                const isOpen = openIdx === idx
                return (
                  <li key={`d-${step.title}`} className="rounded-xl shadow-[0_8px_18px_rgba(11,60,137,0.15)]">
                    {/* Trigger button */}
                    <button
                      type="button"
                      onClick={() => toggle(idx)}
                      className="group flex w-full items-center justify-between rounded-xl px-4 sm:px-5 py-3 sm:py-3.5 text-left text-white"
                      style={{ background: 'var(--color-secondary-dark-gold)' }}
                      aria-expanded={isOpen}
                      aria-controls={`release-step-panel-d-${idx}`}
                    >
                      <span className="text-sm sm:text-base md:text-lg font-semibold">{step.title}</span>
                      <span
                        className={`ml-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#0B3C89] text-white shadow-[inset_0_-2px_0_rgba(0,0,0,0.15)] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                        aria-hidden
                      >
                        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </button>

                    {/* Collapsible content (desktop) */}
                    <div
                      id={`release-step-panel-d-${idx}`}
                      ref={(el) => {
                        panelsRefDesktop.current[idx] = el
                      }}
                      className="overflow-hidden rounded-b-xl border-x-0 border-b-2 border-[#0B3C89] bg-white"
                      aria-hidden={!isOpen}
                      style={{
                        display: isOpen ? 'block' : 'none',
                        height: isOpen ? 'auto' : 0,
                        opacity: isOpen ? 1 : 0,
                      }}
                    >
                      <div className="px-4 sm:px-5 py-3 text-sm sm:text-base text-slate-700">{step.content}</div>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReleaseSection