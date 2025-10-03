"use client"
import React, { FormEvent, useMemo } from "react"
import ClientOnly from "../shared/ClientOnly"
import Image from "next/image"
import { Instagram, Phone } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";

type Props = {
  headline?: string
  subheadline?: string
  mapQuery?: string
}

const ContactSection: React.FC<Props> = ({
  headline = "GET IN TOUCH",
  subheadline = "Reach out for personalized makeovers, expert guidence, and a flawless experience",
  mapQuery = "D. Makeover Studio, opposite ladies planet, near Nesto Hypermarket, Perinthalmanna, Kerala 679322",
}: Props) => {
  const mapSrc = useMemo(() => {
    const q = encodeURIComponent(mapQuery)
    console.log("q:", q);
    // Uses the public Google Maps embed with a search query (no API key required for basic embedding)
    // Docs: https://developers.google.com/maps/documentation/embed/embedding-map
    return `https://www.google.com/maps?q=${q}&output=embed`
  }, [mapQuery])

  // Phone numbers (replace with actual numbers)
  const phoneNumber = "+919876543210"
  const whatsappNumber = "+919876543210"

  // Google Maps URL for navigation
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`

  // Tel and WhatsApp URLs
  const telUrl = `tel:${phoneNumber.replace(/\s/g, '')}`
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\s/g, '').replace('+', '')}`

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // TODO: Wire up to your backend or service (e.g., API route, Formspree, etc.)
    alert("Thanks! We'll get back to you shortly.")
  }

  return (
    <section className="relative overflow-hidden bg-[#F7F1DC]/80 py-8 lg:py-16 sm:py-20" id="contact">
      {/* Background image via next/image */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <Image
          src="/landing-page/home/contact-us-background.png"
          alt="contsact section background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      {/* Subtle top/bottom gold sheens */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-40 h-80 opacity-70 z-10"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 0%, rgba(255,214,94,0.35) 0%, rgba(255,214,94,0.0) 60%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -bottom-40 h-80 opacity-80 z-10"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 100%, rgba(255,214,94,0.35) 0%, rgba(255,214,94,0.0) 60%)",
        }}
      />

      <div className="relative z-20 mx-5 lg:mx-20">
        {/* Card */}
        <div className="rounded-3xl p-4 sm:p-5 shadow-[0_18px_40px_rgba(1,33,105,0.26)] px-6 md:px-16 lg:px-18 py-6 lg:py-6 bg-gradient-to-bl from-brand-green-500 via-brand-green-800 to-brand-green-800">
          {/* Heading */}
          <div className="text-center mb-4 md:mb-10 lg:mb-12 ">
            <h2 className="font-felix-titling text-gold-600 text-3xl sm:text-4xl md:text-5xl tracking-widest font-normal">
              {headline}
            </h2>
            <p className="mt-2 lg:mt-4 text-gold-900 font-montserrat test-sm md:text-xl lg:text-2xl font-semibold sm:text-xl">
              {subheadline}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10 lg:gap-24 lg:grid-cols-2 items-stretch">
            {/* Left: Form */}
            <div className="rounded-2xl font-montserrat">

              <form onSubmit={onSubmit} className="space-y-2 lg:space-y-4 font-montserrat">

                <div>
                  <label htmlFor="firstName" className="sr-only">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    className="w-full rounded-lg bg-white placeholder-black/30 text-brand-green-900 font-semibold outline-none ring-1 ring-white/15 focus:ring-2 focus:ring-white/40 px-4 py-2 lg:py-5"
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
                    placeholder="Email"
                    className="w-full rounded-lg bg-white placeholder-black/30 text-brand-green-900 font-semibold outline-none ring-1 ring-white/15 focus:ring-2 focus:ring-white/40  px-4 py-2 lg:py-5"
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
                    className="w-full rounded-lg bg-white placeholder-black/30 text-brand-green-900 font-semibold outline-none ring-1 ring-white/15 focus:ring-2 focus:ring-white/40 px-4 py-2 lg:py-5"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Message"
                    rows={4}
                    className="w-full rounded-lg bg-white placeholder-black/30 text-brand-green-900 font-semibold outline-none ring-1 ring-white/15 focus:ring-2 focus:ring-white/40 px-4 py-2 lg:py-5"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center bg-brand-gold-500 gap-2 rounded-lg px-5 py-3 lg:py-4 font-semibold text-brand-blue-700 shadow-[inset_0_-2px_0_rgba(0,0,0,0.12)]"
                  >
                    <span className="font-serif text-bold text-lg lg:text-2xl text-brand-green-900">Contact Us</span>
                  </button>
                  <div className="absolute transform -translate-x-1/2 w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 -mt-10 lg:-mt-14">
                    <Image
                      src="/landing-page/home/contactUs-send.png"
                      alt="Decorative vector"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </form>
            </div>

            {/* Right: Map */}
            <div className="rounded-2xl bg-white/5 h-full flex min-h-[360px] sm:min-h-[400px] md:min-h-[480px]">
              {/* Full-height wrapper so the iframe fills the entire grid cell height */}
              <div className="relative flex-1 overflow-hidden rounded-xl bg-white/10 ring-1 ring-white/15 shadow-[0_10px_25px_rgba(1,33,105,0.25)]">
                <ClientOnly
                  fallback={
                    <div className="absolute inset-0 h-full w-full flex items-center justify-center bg-white/10">
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-white bg-brand-blue-700/80 hover:bg-brand-blue-700 transition shadow"
                        aria-label={`Open ${mapQuery} on Google Maps`}
                      >
                        View {mapQuery} on Google Maps
                      </a>
                    </div>
                  }
                >
                  <iframe
                    key={mapQuery}
                    title="Our location"
                    src={mapSrc}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 h-full w-full"
                  />
                </ClientOnly>
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="mt-4 lg:mt-12 mb-4">
            <div className="flex flex-col gap-4 md:flex-row lg:flex-row md:px-5 lg:px-6 lg:justify-between md:justify-between">
              {/* Location */}
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row gap-2 items-start hover:opacity-80 transition cursor-pointer"
              >
                <IoLocationOutline className="w-14 h-14 lg:w-7 lg:h-7" />
                <div className="flex flex-col text-md lg:text-xl font-montserrat font-semibold">
                  <span className="hidden lg:block">
                    Kozhikkod - Palakkad Bypass Rd, near<br />
                    Nesto Hypermarket, Perinthalmanna
                  </span>
                  <span className="lg:hidden">
                    Kozhikkod - Palakkad Bypass Rd, near Nesto Hypermarket, Perinthalmanna
                  </span>
                </div>
              </a>

              {/* contact */}
              <div className="flex flex-col gap-2 text-md lg:text-xl font-montserrat font-semibold">
                <a
                  href={telUrl}
                  className="flex flex-row gap-2 hover:opacity-80 transition cursor-pointer"
                >
                  <Phone width={24} height={24} />
                  <span>{phoneNumber}</span>
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row gap-2 hover:opacity-80 transition cursor-pointer"
                >
                  <FaWhatsapp size={24} />
                  <span>{whatsappNumber}</span>
                </a>
              </div>

              {/* Social */}
              <div className="flex flex-row gap-2 items-center">
                <a href="#" aria-label="Facebook" className="hover:opacity-80 transition">
                  <FaFacebook size={28} fill='currentColor' />
                </a>
                <a href="https://www.instagram.com/dezertbeautysalon_perinthalmna/" aria-label="Instagram" className="hover:opacity-80 transition">
                  <Instagram width={28} height={28} />
                </a>
              </div>

            </div>
          </div>
        </div>


      </div>
    </section>
  )
}

export default ContactSection
