import React from 'react'
import HeroSection from '../../_components/Services/sell-gold/Herosection'
import DetailsSection from '../../_components/Services/sell-gold/details-section' 

// Services page rendering the hero + details for Sell Gold
export default function Page() {
  return (
    <main className="relative min-h-screen bg-white">
      <HeroSection />
      <DetailsSection />
    </main>
  )
}
