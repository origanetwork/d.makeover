'use client'

import React, { FormEvent, useMemo, useState } from 'react'
import Image from 'next/image'
import { Instagram, Phone, MapPin, Clock, Mail } from 'lucide-react'
import { FaWhatsapp, FaFacebook } from 'react-icons/fa'
import ClientOnly from '../_components/shared/ClientOnly'

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const mapQuery = "D. Makeover Studio, opposite ladies planet, near Nesto Hypermarket, Perinthalmanna, Kerala 679322"
  const mapSrc = useMemo(() => {
    const q = encodeURIComponent(mapQuery)
    return `https://www.google.com/maps?q=${q}&output=embed`
  }, [mapQuery])

  // Contact details
  const phoneNumber = "+91 9325700200"
  const whatsappNumber = "+91 9325700200"
  const email = "ddotmakeoverstudio@gmail.com"
  const address = "Kozhikkod - Palakkad Bypass Rd, near Nesto Hypermarket, Perinthalmanna, Kerala 679322"

  // URLs
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`
  const telUrl = `tel:${phoneNumber.replace(/\s/g, '')}`
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\s/g, '').replace('+', '')}`
  const emailUrl = `mailto:${email}`

  // Shop locations from the house of Dezert
  const locations = [
    {
      id: 1,
      name: 'Perinthalmanna',
      address: 'Ooty Rd Valiyangadi',
      fullAddress: 'State Highway 39, Ootty Rd, Valiyangadi, Perinthalmanna, Kerala 679322',
      image: '/landing-page/home/dezert-perinthalmanna.png',
      mapQuery: 'Dezert Perinthalmanna, Ooty Rd Valiyangadi, Kerala',
    },
    {
      id: 2,
      name: 'Thirur',
      address: 'Edappal - Thirur Rd',
      fullAddress: 'Edappal - Tirur Rd, near Indian Oil Petrol Pump Pottethappadi, Tirur, Kerala 676101',
      image: '/landing-page/home/dezert-thirur.png',
      mapQuery: 'Dezert Thirur, Edappal - Thirur Rd, Kerala',
    },
    {
      id: 3,
      name: 'Kottakal',
      address: 'NH 66 Parambilangadi',
      fullAddress: 'NH 66, Parambilangadi, Palathara Kottakal, Kerala 676501',
      image: '/landing-page/home/dezert-kottakal.png',
      mapQuery: 'Dezert Kottakal, NH 66 Parambilangadi, Kerala',
    },
  ]

  const onSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()

    if (isSubmitting) return

    setIsSubmitting(true)

    try {
      const form = e.currentTarget
      const formData = new FormData(form)
      const firstName = formData.get('firstName') as string
      const email = formData.get('email') as string
      const phone = formData.get('phone') as string
      const message = formData.get('message') as string

      // Validate fields
      if (!firstName?.trim() || !email?.trim() || !phone?.trim() || !message?.trim()) {
        alert('Please fill in all fields.')
        setIsSubmitting(false)
        return
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.')
        setIsSubmitting(false)
        return
      }

      const subject = `Contact Form Submission from ${firstName.trim()}`
      const body =
        `Name: ${firstName.trim()}%0D%0A` +
        `Email: ${email.trim()}%0D%0A` +
        `Phone: ${phone.trim()}%0D%0A` +
        `Message: ${message.trim()}%0D%0A%0D%0A` +
        `---%0D%0AThis message was sent from your website contact form.`

      const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=hishamoriga@gmail.com&su=${encodeURIComponent(subject)}&body=${body}`

      window.open(gmailLink, "_blank")

      // Reset form after short delay
      setTimeout(() => {
        form.reset()
      }, 500)

    } catch (error) {
      console.error('Error submitting form:', error)
      alert('An error occurred. Please try again or contact us directly at hishamoriga@gmail.com')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[40vh] lg:h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-green-800 to-brand-green-500"></div>
        <div className="absolute inset-0 flex items-center justify-center pt-8">
          <div className="text-center">
            <h1 className="font-felix-titling text-brand-gold-500 text-4xl md:text-6xl lg:text-7xl tracking-wider mb-4">
              CONTACT US
            </h1>
            <p className="font-montserrat text-white text-md lg:text-lg md:text-xl max-w-2xl mx-auto px-6">
              We had love to hear from you. Get in touch with us for appointments and inquiries.
            </p>
          </div>
        </div>
      </section>

      {/* Our Locations Section */}
      <div className="px-6 md:px-12 lg:px-20 py-10 md:py-16 max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="font-felix-titling text-brand-green-800 text-3xl md:text-4xl lg:text-5xl tracking-wider mb-4">
            FROM THE HOUSE OF DEZERT
          </h2>
          <p className="font-montserrat text-slate-500 text-lg md:text-xl lg:text-2xl">
            Experience luxury and elegance across our premium locations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {locations.map((location) => {
            const locationMapSrc = `https://www.google.com/maps?q=${encodeURIComponent(location.mapQuery)}&output=embed`
            const locationMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.mapQuery)}`

            return (
              <div key={location.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
                {/* Location Image */}
                <div className="relative h-64">
                  <Image
                    src={location.image}
                    alt={`${location.name} location`}
                    fill
                    className="object-cover"
                    style={{ objectPosition: 'center 5%' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="font-montserrat font-bold text-2xl mb-2">{location.name}</h3>
                    {/* <div className="flex items-center gap-2">
                      <IoLocationOutline className="w-5 h-5 flex-shrink-0" />
                      <p className="font-montserrat text-lg">{location.address}</p>
                    </div> */}
                  </div>
                </div>

                {/* Location Details */}
                <div className="p-6">
                  <div className="flex mb-4 gap-2 items-start">
                    <h4 className="font-montserrat font-semibold text-brand-green-800 mb-2 flex items-center gap-2">
                      <MapPin className="w-5 h-5" />
                    </h4>
                    <p className="font-montserrat text-gray-600 text-sm font-semibold">
                      {location.fullAddress}
                    </p>
                  </div>

                  {/* Map */}
                  <div className="rounded-lg overflow-hidden h-48 mb-4 ring-1 ring-gray-200">
                    <ClientOnly
                      fallback={
                        <div className="h-full w-full flex items-center justify-center bg-gray-100">
                          <a
                            href={locationMapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-brand-green-800 hover:text-brand-green-600 font-montserrat text-sm underline"
                          >
                            View on Google Maps
                          </a>
                        </div>
                      }
                    >
                      <iframe
                        title={`${location.name} location map`}
                        src={locationMapSrc}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-full"
                      />
                    </ClientOnly>
                  </div>

                  {/* View on Maps Button */}
                  <a
                    href={locationMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-green-800 to-brand-green-600 text-white font-montserrat font-semibold py-3 px-4 rounded-lg hover:brightness-110 transition-all"
                  >
                    <MapPin className="w-5 h-5" />
                    Get Directions
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Contact Information Cards */}
      <section className="px-6 md:px-12 lg:px-24 py-5 md:py-12 max-w-7xl mx-auto">

        {/* Main Contact Section */}
        <div className="bg-gradient-to-br from-brand-green-800 to-brand-green-600 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="font-felix-titling text-brand-gold-400 text-2xl md:text-4xl tracking-wider mb-4">
                SEND US A MESSAGE
              </h2>
              <p className="font-montserrat text-white mb-8">
                Fill out the form below and we will get back to you as soon as possible.
              </p>

              <form onSubmit={onSubmit} className="space-y-4">
                <div>
                  <label htmlFor="firstName" className="sr-only">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    placeholder="Full Name"
                    required
                    disabled={isSubmitting}
                    className="w-full rounded-lg bg-white placeholder-black/40 text-brand-green-900 font-semibold outline-none ring-1 ring-white/15 focus:ring-2 focus:ring-brand-gold-400 px-4 py-4 disabled:opacity-50 font-montserrat"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    disabled={isSubmitting}
                    className="w-full rounded-lg bg-white placeholder-black/40 text-brand-green-900 font-semibold outline-none ring-1 ring-white/15 focus:ring-2 focus:ring-brand-gold-400 px-4 py-4 disabled:opacity-50 font-montserrat"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="sr-only">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    placeholder="Phone Number"
                    required
                    disabled={isSubmitting}
                    className="w-full rounded-lg bg-white placeholder-black/40 text-brand-green-900 font-semibold outline-none ring-1 ring-white/15 focus:ring-2 focus:ring-brand-gold-400 px-4 py-4 disabled:opacity-50 font-montserrat"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    required
                    disabled={isSubmitting}
                    className="w-full rounded-lg bg-white placeholder-black/40 text-brand-green-900 font-semibold outline-none ring-1 ring-white/15 focus:ring-2 focus:ring-brand-gold-400 px-4 py-4 disabled:opacity-50 font-montserrat"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-brand-gold-500 to-brand-gold-400 hover:brightness-110 text-brand-green-900 font-bold py-4 px-6 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-montserrat text-lg shadow-lg"
                >
                  {isSubmitting ? 'Opening Email...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Map and Location */}
            <div className="space-y-6">
              <div>
                <h3 className="font-felix-titling text-brand-gold-400 text-2xl md:text-3xl tracking-wider mb-4">
                  VISIT OUR STUDIO
                </h3>
                <div className="flex items-start gap-3 text-white mb-6">
                  <MapPin className="w-6 h-6 flex-shrink-0 mt-1" />
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-montserrat hover:text-brand-green-600 transition"
                  >
                    {address}
                  </a>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-xl h-[300px] md:h-[400px] ring-2 ring-white/20">
                <ClientOnly
                  fallback={
                    <div className="h-full w-full flex items-center justify-center bg-white/10">
                      <a
                        href={mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-white bg-brand-green-900/80 hover:bg-brand-green-900 transition shadow"
                      >
                        View on Google Maps
                      </a>
                    </div>
                  }
                >
                  <iframe
                    title="Our location"
                    src={mapSrc}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </ClientOnly>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-montserrat font-bold text-white text-lg mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/d_dot_makeoverstudio/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href="https://www.facebook.com/people/D-Dot-Makeover-Studio/61577050333171/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition"
                    aria-label="Facebook"
                  >
                    <FaFacebook className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition"
                    aria-label="WhatsApp"
                  >
                    <FaWhatsapp className="w-6 h-6 text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Methods Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 mt-10">
          {/* Phone Card */}
          <div className="bg-gradient-to-br from-brand-gold-600 hover:from-brand-green-800 to-brand-gold-400 hover:to-brand-green-500 rounded-2xl p-6 text-white hover:shadow-xl transition-colors duration-300">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-montserrat font-bold text-lg mb-2">Call Us</h3>
            <a href={telUrl} className="font-montserrat hover:text-brand-green-600 transition">
              {phoneNumber}
            </a>
          </div>

          {/* WhatsApp Card */}
          <div className="bg-gradient-to-br from-brand-gold-600 hover:from-brand-green-800 to-brand-gold-400 hover:to-brand-green-500 rounded-2xl p-6 text-white hover:shadow-xl transition-colors duration-300">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
              <FaWhatsapp className="w-6 h-6" />
            </div>
            <h3 className="font-montserrat font-bold text-lg mb-2">WhatsApp</h3>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="font-montserrat hover:text-brand-green-600 transition">
              {whatsappNumber}
            </a>
          </div>

          {/* Email Card */}
          <div className="bg-gradient-to-br from-brand-gold-600 hover:from-brand-green-800 to-brand-gold-400 hover:to-brand-green-500 rounded-2xl p-6 text-white hover:shadow-xl transition-colors duration-300">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-montserrat font-bold text-lg mb-2">Email</h3>
            <a href={emailUrl} className="font-montserrat hover:text-brand-green-600 transition break-all">
              {email}
            </a>
          </div>

          {/* Hours Card */}
          <div className="bg-gradient-to-br from-brand-gold-600 hover:from-brand-green-800 to-brand-gold-400 hover:to-brand-green-500 rounded-2xl p-6 text-white hover:shadow-xl transition-colors duration-300">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-montserrat font-bold text-lg mb-2">Business Hours</h3>
            <p className="font-montserrat text-sm">Mon - Sun</p>
            <p className="font-montserrat text-sm">9:00 AM - 8:00 PM</p>
          </div>
        </div>

        {/* Why Contact Us Section */}
        <div className="mt-20 pb-10">
          <h2 className="font-felix-titling text-brand-green-800 text-3xl md:text-4xl tracking-wider text-center mb-12">
            WHY CHOOSE D. MAKEOVER STUDIO?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-brand-green-800 to-brand-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-montserrat font-bold text-xl text-brand-green-800 mb-2">Professional Service</h3>
              <p className="font-montserrat text-gray-600">
                Expert stylists with years of experience in beauty and grooming
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-brand-green-800 to-brand-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-montserrat font-bold text-xl text-brand-green-800 mb-2">Flexible Timing</h3>
              <p className="font-montserrat text-gray-600">
                Open 7 days a week to accommodate your busy schedule
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-brand-green-800 to-brand-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-montserrat font-bold text-xl text-brand-green-800 mb-2">Premium Products</h3>
              <p className="font-montserrat text-gray-600">
                We use only high-quality, trusted brands for all our services
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
