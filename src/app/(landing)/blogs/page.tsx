import React from 'react'
import HeroBlogs from '../_components/blogs/hero-blogs'
import FeaturedAndRecent from '../_components/blogs/featured-and-recent'
import GoldMarketTrends from '../_components/blogs/gold-market-trends'

// Blogs page composed similarly to About/Contact pages
export default function Page() {
  return (
    <main className="relative min-h-screen bg-white">
      <HeroBlogs />
      <FeaturedAndRecent />
      <GoldMarketTrends />
    </main>
  )
}
