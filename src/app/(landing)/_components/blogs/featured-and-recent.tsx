"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Clock } from 'lucide-react'

/**
 * Featured (Latest) blog + Recent blogs list
 * - Left: Large card with hero image and headline
 * - Right: Vertical list of recent posts with thumbnail, meta, title, excerpt, and CTA
 */

const latest = {
  title: 'Why Transparency Matters in Gold Buying',
  excerpt:
    "At Midas Gold Point, every transaction is built on trust. Learn why transparent testing, accurate valuation, and clear pricing ensure you get the true worth of your gold.",
  image: '/landing-page/home/whoweare.png',
  href: '#',
}

const recents = [
  {
    title: 'How to Get the Best Price When Selling Your Gold',
    date: 'June 21, 2022',
    readTime: '2 minute read',
    excerpt:
      'Discover proven tips to maximize your returns when selling gold, from valuation methods to timing.',
    image: '/landing-page/home/sellgold.png',
    href: '#',
  },
  {
    title: 'Gold Bars vs. Gold Coins – Which Should You Invest In?',
    date: 'June 21, 2022',
    readTime: '2 minute read',
    excerpt:
      'Coins or bars? Find out the key differences, benefits, and which option suits your investment goals.',
    image: '/landing-page/home/gold-bar.png',
    href: '#',
  },
  {
    title: 'The Safe Way to Release Pledged Gold',
    date: 'June 21, 2022',
    readTime: '2 minute read',
    excerpt:
      'Step-by-step guide on how to release pledged gold securely without hidden costs.',
    image: '/landing-page/home/release.png',
    href: '#',
  },
]

const FeaturedAndRecent: React.FC = () => {
  return (
    <section aria-labelledby="latest-and-recent" className="relative bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-8xl px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Left: Latest Blog (spans 2 columns on md+) */}
          <article className="md:col-span-2">
            <div className="rounded-2xl border border-brand-gold shadow-[0_10px_25px_rgba(1,33,105,0.15)] overflow-hidden">
              <div className="relative aspect-[16/9]">
                <Image
                  src={latest.image}
                  alt={latest.title}
                  fill
                  sizes="(min-width: 1024px) 66vw, 100vw"
                  className="object-cover"
                  priority
                />
                {/* Overlay label */}
                <div className="absolute left-4 top-4 rounded-md border border-white/50 bg-black/30 px-3 py-1 text-white backdrop-blur-sm">
                  <span className="text-lg sm:text-xl font-semibold">Latest Blog</span>
                </div>
              </div>
              <div className="p-5 sm:p-6">
                <h2 id="latest-and-recent" className="text-2xl sm:text-3xl font-semibold text-slate-900 font-montserrat">
                  {latest.title}
                </h2>
                <p className="mt-3 text-slate-700 text-base sm:text-lg max-w-prose">{latest.excerpt}</p>
                <div className="mt-5">
                  <Link
                    href={latest.href}
                    className="inline-flex items-center gap-2 text-brand-blue-700 font-semibold hover:underline"
                    aria-label={`Read more: ${latest.title}`}
                  >
                    Read more
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
                      <path d="M10 17l5-5-5-5v10z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </article>

          {/* Right: Recent Blogs */}
          <aside className="md:col-span-1">
            <h3 className="text-2xl font-semibold text-slate-900 font-montserrat">Recent Blogs</h3>
            <ul className="mt-6 space-y-6">
              {recents.map((post) => (
                <li key={post.title} className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
                  {/* Left: Image with metadata below */}
                  <div>
                    <div className="relative w-full aspect-[4/3] overflow-hidden rounded-md ring-1 ring-black/10">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="(min-width: 768px) 42vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="mt-3 flex items-center gap-4 text-xs text-slate-600">
                      <span>{post.date}</span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {post.readTime}
                      </span>
                    </div>
                  </div>

                  {/* Right: Title, description, CTA */}
                  <div className="self-center">
                    <h4 className="text-lg sm:text-xl font-semibold text-slate-900">{post.title}</h4>
                    <p className="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed">{post.excerpt}</p>
                    <div className="mt-3">
                      <Link
                        href={post.href}
                        className="text-brand-blue-700 font-semibold hover:underline"
                        aria-label={`Read more: ${post.title}`}
                      >
                        Read more
                      </Link>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default FeaturedAndRecent
