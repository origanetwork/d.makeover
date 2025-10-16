'use client'

import React from 'react'
import Image from 'next/image'
import { IoLocationOutline } from "react-icons/io5";

const FromTheHouse: React.FC = () => {
    return (
        <section className='bg-white px-4 sm:px-8 lg:px-24 py-8 md:py-8 lg:py-10'>
            <h1 className='font-felix-titling text-brand-green-800 tracking-wider text-4xl sm:text-4xl lg:text-5xl text-center mb-5'>FROM THE HOUSE OF DEZERT</h1>
            <p className='font-montserrat text-slate-500 text-lg md:text-xl lg:text-2xl text-center leading-6'>Experience luxury and elegance across our premium locations</p>

            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 md:gap-4 lg:gap-8 mt-12 mb-5 md:mx-14'>
                {/* Card 1 */}
                <div className='relative rounded-xl shadow-lg overflow-hidden md:h-90 lg:h-80 h-76'>
                    <Image
                        src='/landing-page/home/dezert-perinthalmanna.png'
                        alt='makeover perinthalmanna'
                        fill
                        className='object-cover object-center '
                        style={{ objectPosition: 'center 5%' }}
                    />
                    <div className='absolute inset-0 bg-black opacity-30 '></div>
                    <div className='absolute bottom-4 left-4 rounded-lg px-4 py-3'>
                        <h3 className='font-montserrat font-semibold text-2xl'>Perinthalmanna</h3>
                        <span className='flex gap-1 items-center'>
                            <IoLocationOutline className="w-5 h-5" />
                            <p className='font-montserrat text-xl'>Ooty Rd Valiyangadi</p>
                        </span>
                    </div>
                </div>

                {/* Card 2 */}
                <div className='relative rounded-xl shadow-lg overflow-hidden md:h-90 lg:h-80 h-76'>
                    <Image
                        src='/landing-page/home/dezert-thirur.png'
                        alt='Dezert Location 2'
                        fill
                        className='object-cover object-center'
                        style={{ objectPosition: 'center 5%' }}
                    />
                    <div className='absolute inset-0 bg-black opacity-30'></div>
                    <div className='absolute bottom-4 left-4 rounded-lg px-4 py-3 text-white'>
                        <h3 className='font-montserrat font-semibold text-2xl'>Thirur</h3>
                        <span className='flex gap-1 items-center'>
                            <IoLocationOutline className="w-5 h-5" />
                            <p className='font-montserrat text-xl'>Edappal - Thirur Rd</p>
                        </span>
                    </div>
                </div>

                {/* Card 3 */}
                <div className='relative rounded-xl shadow-lg overflow-hidden md:h-90 lg:h-80 h-76'>
                    <Image
                        src='/landing-page/home/dezert-kottakal.png'
                        alt='Dezert Location 3'
                        fill
                        className='object-cover object-center'
                        style={{ objectPosition: 'center 10%' }}
                    />
                    <div className='absolute inset-0 bg-black opacity-30'></div>
                    <div className='absolute bottom-4 left-4 rounded-lg px-4 py-3'>
                        <h3 className='font-montserrat font-semibold text-2xl'>Kottakal</h3>
                        <span className='flex gap-1 items-center'>
                            <IoLocationOutline className="w-5 h-5" />
                            <p className='font-montserrat text-xl'>NH 66 Parambilangadi</p>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FromTheHouse;