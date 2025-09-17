/**
 * Lazy GSAP loader for Next.js (App Router friendly)
 *
 * Usage (inside a Client Component only):
 *
 * 'use client'
 * import { useEffect } from 'react'
 * import { loadGSAP } from '@/lib/gsap'
 *
 * export default function MyComp() {
 *   useEffect(() => {
 *     let ctx: any
 *     ;(async () => {
 *       const gsap = await loadGSAP({ plugins: ['ScrollTrigger'] })
 *       if (!gsap) return // called during SSR – ignore
 *
 *       // Optional: use context to easily revert on unmount
 *       ctx = gsap.context(() => {
 *         gsap.from('.fade-in', { opacity: 0, y: 12, duration: 0.6, ease: 'power2.out' })
 *       })
 *     })()
 *     return () => ctx?.revert()
 *   }, [])
 *   return <div className="fade-in" />
 * }
 */

export type GSAPPluginName =
  | 'ScrollTrigger'
  | 'Draggable'
  | 'MotionPathPlugin'
  | 'ScrollToPlugin'

let gsapSingleton: typeof import('gsap').gsap | null = null
const registeredPlugins = new Set<string>()

const pluginLoaders = {
  ScrollTrigger: () => import('gsap/ScrollTrigger'),
  Draggable: () => import('gsap/Draggable'),
  MotionPathPlugin: () => import('gsap/MotionPathPlugin'),
  ScrollToPlugin: () => import('gsap/ScrollToPlugin'),
} as const

/**
 * Dynamically import GSAP (and optional plugins) only on the client.
 * Ensures single instance and avoids duplicate plugin registration.
 */
export async function loadGSAP(options?: { plugins?: GSAPPluginName[] }) {
  if (typeof window === 'undefined') {
    // Call from client-side only. Return null when invoked on the server.
    return null
  }

  if (!gsapSingleton) {
    const mod = await import('gsap')
    gsapSingleton = mod.gsap
  }

  const toLoad = options?.plugins ?? []
  for (const name of toLoad) {
    if (!registeredPlugins.has(name)) {
      // Dynamically import the plugin module and safely extract the plugin object without using 'any'
      const mod = (await pluginLoaders[name]()) as Record<string, unknown>
      const maybePlugin = (mod[name] ?? (mod as Record<string, unknown>).default) as unknown
      if (maybePlugin && (typeof maybePlugin === 'object' || typeof maybePlugin === 'function')) {
        // gsap.registerPlugin accepts plugin objects/functions; assert to object per GSAP types
        gsapSingleton!.registerPlugin(maybePlugin as object)
        registeredPlugins.add(name)
      }
    }
  }

  return gsapSingleton
}

/** Utility to detect client runtime */
export function isClient() {
  return typeof window !== 'undefined'
}
