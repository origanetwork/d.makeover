import React from 'react'
import HeroSection from '../../_components/Services/buy-gold/Herosection'
import DetailsSection from '../../_components/Services/buy-gold/details-section'

// Services page rendering the hero section
export default function Page() {
  return (
    <main className="relative min-h-screen bg-white">
      <HeroSection />   
      <DetailsSection />
    </main>
  )
}