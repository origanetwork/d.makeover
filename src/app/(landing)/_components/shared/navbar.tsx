"use client"
import React from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'

const MenuIcon = dynamic(() => import('./MenuIcon'), {
  ssr: false,
  loading: () => (
    <div aria-hidden className="relative h-12 w-12">
      {/* Static 4-dot grid to mirror MenuIcon's initial state (no animation) */}
      <div className="absolute top-2 left-2 h-[10px] w-[10px] rounded-full bg-white" />
      <div className="absolute top-2 right-2 h-[10px] w-[10px] rounded-full bg-white" />
      <div className="absolute bottom-2 left-2 h-[10px] w-[10px] rounded-full bg-white" />
      <div className="absolute bottom-2 right-2 h-[10px] w-[10px] rounded-full bg-white" />
    </div>
  ),
})

const Navbar: React.FC = () => {

  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <nav className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-0 py-4 flex items-center justify-between">
        <Image
          src="/landing-page/home/ddot-logo-image.png"
          alt="Logo"
          width={160}
          height={100}
          className="h-20 md:h-30 w-auto"
        />

        <MenuIcon />
      </nav>
    </header>
  )
}

export default Navbar