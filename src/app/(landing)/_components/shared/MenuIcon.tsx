"use client"
import React, { useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { loadGSAP } from '@/lib/gsap'

interface CustomEasePlugin { create?: (name: string, definition: string) => void; get?: (name: string) => unknown }

const MenuIcon: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const menuRef = useRef<HTMLDivElement | null>(null)
  const popoverRef = useRef<HTMLDivElement | null>(null)
  const gsapRef = useRef<typeof import('gsap').gsap | null>(null)
  const easeReadyRef = useRef(false)

  // Load GSAP and register CustomEase on client
  useEffect(() => {
    let alive = true
    // Snapshot nodes for cleanup to avoid ref drift
    const initialMenuNode = menuRef.current
    const initialPopoverNode = popoverRef.current
    ;(async () => {
      const gsap = await loadGSAP()
      if (!gsap || !alive) return
      gsapRef.current = gsap
      try {
        const mod = (await import('gsap/CustomEase')) as { CustomEase?: unknown; default?: unknown }
        const CustomEase = (mod.CustomEase ?? mod.default) as CustomEasePlugin | undefined
        if (CustomEase && !easeReadyRef.current) {
          gsap.registerPlugin(CustomEase as object)
          if (!CustomEase.get?.('circleEase')) {
            CustomEase.create?.('circleEase', '0.68, -0.55, 0.265, 1.55')
          }
          easeReadyRef.current = true
        }
      } catch {}

      // Initialize components to default state
      initComponents()
    })()
    return () => {
      alive = false
      const gsap = gsapRef.current
      const menuNode = initialMenuNode
      const popoverNode = initialPopoverNode
      if (gsap && menuNode) {
        gsap.killTweensOf(menuNode.querySelectorAll('.dot'))
      }
      if (gsap && popoverNode) {
        gsap.killTweensOf(popoverNode)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const initComponents = useCallback(() => {
    const gsap = gsapRef.current
    const menuRoot = menuRef.current
    const popover = popoverRef.current
    if (!gsap || !menuRoot || !popover) return
    
    // Initialize dots to default state
    const dots = menuRoot.querySelectorAll<HTMLDivElement>('.dot')
    gsap.set(dots, {
      x: 0,
      y: 0,
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      rotation: 0,
      scale: 1,
      opacity: 1,
      transformOrigin: 'center center',
    })
    
    // Set initial popover state: hidden and scaled to menu icon size
    gsap.set(popover, {
      scale: 0,
      opacity: 0,
      transformOrigin: 'top right',
      visibility: 'hidden',
    })
  }, [])

  const activateMenu = useCallback(() => {
    const gsap = gsapRef.current
    const menuRoot = menuRef.current
    const popover = popoverRef.current
    if (!gsap || !menuRoot || !popover) return
    
    const dots = menuRoot.querySelectorAll<HTMLDivElement>('.dot')
    const ease = easeReadyRef.current ? 'circleEase' : 'power2.out'
    
    // Kill any existing tweens to prevent conflicts
    gsap.killTweensOf([dots, popover])
    setIsAnimating(true)
    
    // First, animate popover growing from menu icon size
    gsap.set(popover, { visibility: 'visible' })
    gsap.to(popover, {
      scale: 1,
      opacity: 1,
      ease,
      duration: 0.6,
    })
    
    // Then animate dots to X (close button) with slight delay
    setTimeout(() => {
      const aEl = dots[0] as HTMLDivElement
      const bEl = dots[3] as HTMLDivElement

      // Snap both to exact center
      gsap.set([aEl, bEl], {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        xPercent: -50,
        yPercent: -50,
        x: 0,
        y: 0,
      })

      // Target line size
      const W = 32
      const H = 3

      // Morph to lines rotated to make a perfect X
      gsap.to(aEl, {
        width: `${W}px`,
        height: `${H}px`,
        borderRadius: '2px',
        rotation: 45,
        scale: 1,
        transformOrigin: 'center center',
        ease,
        duration: 0.8,
        onComplete: () => setIsAnimating(false),
      })
      gsap.to(bEl, {
        width: `${W}px`,
        height: `${H}px`,
        borderRadius: '2px',
        rotation: -45,
        scale: 1,
        transformOrigin: 'center center',
        ease,
        duration: 0.8,
      })
      // Fade bottom dots
      gsap.to([dots[1], dots[2]], { opacity: 0, scale: 0.3, ease, duration: 0.6 })
    }, 100)
  }, [])

  const deactivateMenu = useCallback(() => {
    const gsap = gsapRef.current
    const menuRoot = menuRef.current
    const popover = popoverRef.current
    if (!gsap || !menuRoot || !popover) return
    
    const dots = menuRoot.querySelectorAll<HTMLDivElement>('.dot')
    const ease = easeReadyRef.current ? 'circleEase' : 'power2.out'

    // Kill any existing tweens to prevent conflicts
    gsap.killTweensOf([dots, popover])
    setIsAnimating(true)

    // First animate X back to dots
    const rect = menuRoot.getBoundingClientRect()
    const cx = rect.width / 2
    const cy = rect.height / 2
    const offset = 8 // Tailwind top-2/bottom-2 in px
    const r = 5 // final dot radius (10px / 2)

    const tlCenter = { x: offset + r, y: offset + r }
    const brCenter = { x: rect.width - offset - r, y: rect.height - offset - r }

    // Translate from center (50%/-50%) to those corner centers
    const tl = { x: tlCenter.x - cx, y: tlCenter.y - cy }
    const br = { x: brCenter.x - cx, y: brCenter.y - cy }

    // Animate lines back to circular dots at corners
    gsap.to(dots[0], {
      x: tl.x,
      y: tl.y,
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      rotation: 0,
      scale: 1,
      opacity: 1,
      transformOrigin: 'center center',
      ease,
      duration: 0.6,
    })

    gsap.to(dots[3], {
      x: br.x,
      y: br.y,
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      rotation: 0,
      scale: 1,
      opacity: 1,
      transformOrigin: 'center center',
      ease,
      duration: 0.6,
    })

    // Bring back the hidden dots
    gsap.to([dots[1], dots[2]], {
      x: 0,
      y: 0,
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      rotation: 0,
      scale: 1,
      opacity: 1,
      transformOrigin: 'center center',
      ease,
      duration: 0.6,
      stagger: 0.02,
    })

    // Then animate popover shrinking back to menu icon size
    setTimeout(() => {
      gsap.to(popover, {
        scale: 0,
        opacity: 0,
        ease,
        duration: 0.4,
        onComplete: () => {
          gsap.set(popover, { visibility: 'hidden' })
          setIsAnimating(false)
        },
      })
    }, 200)
  }, [])

  const onToggle = useCallback(() => {
    // Prevent rapid clicks during animation
    if (isAnimating) return

    setIsOpen((prev) => {
      const next = !prev
      // Play animation based on the next state
      if (next) {
        activateMenu()
      } else {
        deactivateMenu()
      }
      return next
    })
  }, [activateMenu, deactivateMenu, isAnimating])

  // Close helper for outside-click and Escape
  const closeMenu = useCallback(() => {
    if (!isOpen || isAnimating) return
    deactivateMenu()
    setIsOpen(false)
  }, [deactivateMenu, isAnimating, isOpen])

  // Close on click outside or Escape key while open
  useEffect(() => {
    if (!isOpen) return

    const handlePointerDown = (e: PointerEvent) => {
      const container = containerRef.current
      if (!container) return
      const target = e.target as Node | null
      if (target && !container.contains(target)) {
        closeMenu()
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeMenu()
      }
    }

    document.addEventListener('pointerdown', handlePointerDown, { capture: true })
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      // Use the same capture option (boolean) to remove the listener without 'any' casts
      document.removeEventListener('pointerdown', handlePointerDown, true)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, closeMenu])

  return (
    <div ref={containerRef} className="relative">
      {/* Menu Icon Button - this becomes the close button when menu is open */}
      <button
        type="button"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
        onClick={onToggle}
        className="relative h-12 w-12 flex items-center justify-center text-white hover:opacity-80 transition focus:outline-none overflow-visible z-50"
      >
        {/* 4-dot grid to X animation target */}
        <div ref={menuRef} className="relative h-12 w-12 overflow-visible" aria-hidden>
          <div className="dot absolute top-2 left-2 h-[10px] w-[10px] rounded-full bg-white" />
          <div className="dot absolute top-2 right-2 h-[10px] w-[10px] rounded-full bg-white" />
          <div className="dot absolute bottom-2 left-2 h-[10px] w-[10px] rounded-full bg-white" />
          <div className="dot absolute bottom-2 right-2 h-[10px] w-[10px] rounded-full bg-white" />
        </div>
      </button>

      {/* Navigation Popover - grows from menu icon position */}
      <div
        ref={popoverRef}
        className="absolute top-0 right-0 bg-white rounded-2xl shadow-2xl border border-gray-100 min-w-[280px] z-40"
        style={{ transformOrigin: 'top right', transform: 'scale(0)', opacity: 0, visibility: 'hidden' }}
      >
        {/* Navigation Content */}
        <div className="p-8 pt-16 pb-6">
          {/* Navigation Items */}
          <nav className="space-y-6">
            <Link
              href="/"
              className="block text-2xl font-medium text-black hover:text-gray-600 transition-colors"
              onClick={onToggle}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-2xl font-medium text-black hover:text-gray-600 transition-colors"
              onClick={onToggle}
            >
              About
            </Link>
            <Link
              href="/services"
              className="block text-2xl font-medium text-black hover:text-gray-600 transition-colors"
              onClick={onToggle}
            >
              Services
            </Link>
            <Link
              href="#contacts"
              className="block text-2xl font-medium text-black hover:text-gray-600 transition-colors"
              onClick={onToggle}
            >
              Contacts
            </Link>
          </nav>

          {/* Contact Info */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex items-center space-x-4">
              {/* Telegram Icon */}
              <button className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16l-1.61 7.548c-.12.54-.44.67-.89.42l-2.46-1.81-1.19 1.14c-.13.13-.24.24-.49.24l.17-2.42 4.45-4.02c.19-.17-.04-.27-.3-.1L9.28 13.47l-2.38-.75c-.52-.16-.53-.52.11-.77l9.28-3.58c.43-.16.81.1.67.73z"/>
                </svg>
              </button>
              
              {/* WhatsApp Icon */}
              <button className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.085"/>
                </svg>
              </button>
              
              {/* Email */}
              <span className="text-sm text-gray-600">info@midas.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuIcon
