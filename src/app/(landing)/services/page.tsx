import React from 'react'
import Navbar from '../_components/shared/navbar'
import Herosectiom from '../_components/Services/hero-service'
import Coreservice from '../_components/Services/core-service'
import DetailsSection from '../_components/Services/details-section'
import CommitmentSection from '../_components/Services/commitment-section'

// Services page rendering the hero section
export default function Page() {
  return (
    <main className="relative min-h-screen bg-white">
      <Navbar />
      <Herosectiom />   
      {/* Core services section directly under hero */}
      <Coreservice />
      {/* Commitment section beneath core services */}
      <CommitmentSection />

    </main>
  )
}