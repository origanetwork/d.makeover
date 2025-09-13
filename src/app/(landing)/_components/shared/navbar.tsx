import React from 'react'
import Image from 'next/image'

type Props = {}

const Navbar: React.FC<Props> = (props: Props) => {
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
     
        <button
          aria-label="Open menu"
          className="h-12 w-12 flex items-center justify-center text-white hover:opacity-80 transition focus:outline-none"
        >
          <svg width="100" height="100" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <circle cx="6" cy="6" r="2" />
            <circle cx="14" cy="6" r="2" />
            <circle cx="6" cy="14" r="2" />
            <circle cx="14" cy="14" r="2" />
          </svg>
        </button>
      </nav>
    </header>
  )
}

export default Navbar