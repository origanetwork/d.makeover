"use client"
import React from 'react'
import Image from 'next/image'
import MenuIcon from './MenuIcon'

const Navbar: React.FC = () => {

  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <nav className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-0 py-4 flex items-center justify-between">
        <Image
          src="/landing-page/home/midas-logo.png"
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