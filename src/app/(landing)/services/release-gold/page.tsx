import React from 'react'
import HeroSection from '../../_components/Services/release-gold/Herosection'
import DetailsSection from '../../_components/Services/release-gold/details-section'

// Services page rendering the hero + details for Release Gold
export default function Page() {
  return (
    <main className="relative min-h-screen bg-white">
      <HeroSection />
      <DetailsSection />
    </main>
  )
}
