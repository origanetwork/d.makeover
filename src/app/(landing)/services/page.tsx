import React from 'react'
import Herosectiom from '../_components/Services/hero-service'
import Coreservice from '../_components/Services/core-service'
import CommitmentSection from '../_components/Services/commitment-section'

// Services page rendering the hero section
export default function Page() {
  return (
    <main className="relative min-h-screen bg-white">
      <Herosectiom />   
      {/* Core services section directly under hero */}
      <Coreservice />
      {/* Commitment section beneath core services */}
      <CommitmentSection />
    </main>
  )
}