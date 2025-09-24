"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Clock } from 'lucide-react'

// Static content for now; can be wired to CMS or API later
const posts = [
  {
    title: 'Sell Old Gold Safely',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/landing-page/home/sellgold.png',
    date: 'June 21, 2022',
    readTime: '2 minute read',
    href: '#',
  },
  {
    title: 'Understanding Gold Purity',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/landing-page/home/buygold.png',
    date: 'June 21, 2022',
    readTime: '2 minute read',
    href: '#',
  },
  {
    title: 'Release Pledged Gold',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/landing-page/home/release.png',
    date: 'June 21, 2022',
    readTime: '2 minute read',
    href: '#',
  },
  {
    title: 'Gold Coins or Bars',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/landing-page/home/gold-bar.png',
    date: 'June 21, 2022',
    readTime: '2 minute read',
    href: '#',
  },
]

const GoldMarketTrends: React.FC = () => {
  return (
    <section className="relative bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-center font-montserrat text-brand-blue-700 text-3xl sm:text-4xl md:text-5xl font-extrabold">
          Gold Market Trends
        </h2>

        {/* Cards Grid */}
        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {posts.map((post) => (
            <article key={post.title} className="flex flex-col">
              {/* Image card */}
              <div className="relative overflow-hidden rounded-lg shadow-[0_8px_18px_rgba(1,33,105,0.18)] ring-1 ring-black/10">
                <div className="relative aspect-[4/5]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 100vw"
                    className="object-cover"
                    priority={false}
                  />
                  {/* Dark gradient overlay bottom to top */}
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"
                  />
                  {/* Text overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                    <h3 className="text-lg font-semibold">{post.title}</h3>
                    <p className="mt-1 text-sm text-white/85 line-clamp-3">{post.excerpt}</p>
                  </div>
                </div>
              </div>

              {/* Meta */}
              <div className="mt-3 flex items-center gap-4 text-xs text-slate-600">
                <span>{post.date}</span>
                <span className="flex items-center gap-1">
                  {/* clock icon */}
                  <Clock size={12} />
                  {post.readTime}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center md:justify-end">
          {/* decorative gradient circle behind button */}
          <div className="relative">
            <div
              aria-hidden
              className="absolute -left-10 -top-4 h-20 w-20 lg:w-120 rounded-full"
              style={{
                background:
                  'radial-gradient(circle at 30% 30%, rgba(0,92,239,0.5), rgba(0,38,206,0.25) 60%, transparent 70%)',
              }}
            />
            <Link
              href="#"
              className="relative inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-brand-blue-700 shadow-[inset_0_-2px_0_rgba(0,0,0,0.12)]"
              aria-disabled={true}
              style={{
                background:
                  'linear-gradient(100deg, var(--color-secondary-light-gold) 10%, var(--color-accent-golden) 60%, var(--color-accent-dark-golden) 100%)',
              }}
            >
              Read More Articles
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
                <path d="M10 17l5-5-5-5v10z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GoldMarketTrends
