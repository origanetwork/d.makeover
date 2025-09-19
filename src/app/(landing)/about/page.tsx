import React from 'react'
import AboutHero from '../_components/about/hero-about'
import AboutOverview from '../_components/about/about-overview'
import StoryBanner from '../_components/about/story-banner'
import WhyMidas from '../_components/about/why-midas'

// About page rendering the hero section using the shared layout pattern
export default function Page() {
  return (
    <main className="relative min-h-screen bg-white">
      <AboutHero />
      <AboutOverview />
      <StoryBanner />
      <WhyMidas />
    </main>
  )
}
