'use client'
import React, { useEffect, useMemo, useState } from 'react'
import { createPortal } from 'react-dom'
import BottomNavbar from '../shared/bottom-navbar'

/**
 * SecondaryBottomNavbarController
 * - Shows a flat glassy bottom navbar when:
 *   1) Hero section is out of the viewport, AND
 *   2) Why Midas section is at least 50% in the viewport.
 * - Keeps the original hero navbar intact.
 */
const SecondaryBottomNavbarController: React.FC = () => {
  const [mounted, setMounted] = useState(false)
  const [heroOut, setHeroOut] = useState(false)

  // Always show after hero is out of viewport, regardless of which section follows
  const shouldShow = useMemo(() => heroOut, [heroOut])

  useEffect(() => {
    setMounted(true)
    const hero = document.getElementById('hero')
    if (!hero) return

    const heroObserver = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          // Show only once the hero is fully out of viewport
          setHeroOut(!e.isIntersecting)
        }
      },
      { root: null, threshold: [0] }
    )

    heroObserver.observe(hero)

    return () => {
      heroObserver.disconnect()
    }
  }, [])

  if (!mounted) return null

  return createPortal(
    <div
      className={`fixed inset-x-0 bottom-0 z-50 px-3 sm:px-4 pb-[max(0.5rem,env(safe-area-inset-bottom))] pointer-events-none`}
      aria-hidden={!shouldShow}
    >
      <div
        className={`mx-auto w-full max-w-[980px] sm:max-w-3xl md:max-w-4xl lg:max-w-3xl transition-all duration-300 ease-out pointer-events-auto ${
          shouldShow ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}
      >
        <BottomNavbar variant="flat" />
      </div>
    </div>,
    document.body
  )
}

export default SecondaryBottomNavbarController
