import React from 'react'

// Commitment section: shows three pillars beneath the Core Services
// Server component, semantic HTML, responsive, Tailwind utility-first

type Pillar = {
  title: string
  description: string
  icon: 'shield' | 'users' | 'award'
}

const pillars: Pillar[] = [
  {
    title: 'Certified Purity Checks',
    description:
      'Midas Gold Point ensures certified purity checks for every gold transaction. We use advanced testing technology for precise results.',
    icon: 'shield',
  },
  {
    title: 'Trusted by 10,000+',
    description:
      'Midas Gold Point is the trusted choice of over 10,000 happy customers. Our commitment to transparency, fair pricing, and certified purity sets us apart.',
    icon: 'users',
  },
  {
    title: 'Industry Accredited',
    description:
      'We operate with globally recognized industry accreditations. Our certified processes and standards ensure trust, safety, and transparency in every transaction.',
    icon: 'award',
  },
]

const Icon: React.FC<{ name: Pillar['icon'] }> = ({ name }) => {
  const base = 'h-8 w-8 fill-white'
  switch (name) {
    case 'shield':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className='h-10 w-10 text-gold-300' fill="none" viewBox="0 0 24 24">
        <g stroke="#D4AF37" stroke-linecap="round" stroke-width="1.5">
          <path stroke-linejoin="round" d="m9.5 12.4 1.429 1.6 3.571-4"/>
          <path d="M3 10.417c0-3.198 0-4.797.378-5.335.377-.537 1.88-1.052 4.887-2.081l.573-.196C10.405 2.268 11.188 2 12 2c.811 0 1.595.268 3.162.805l.573.196c3.007 1.029 4.51 1.544 4.887 2.081C21 5.62 21 7.22 21 10.417v1.574c0 2.505-.837 4.437-2 5.913M3.193 14c.857 4.298 4.383 6.513 6.706 7.527.721.315 1.082.473 2.101.473 1.02 0 1.38-.158 2.101-.473.579-.252 1.231-.58 1.899-.994"/>
        </g>
      </svg>
      )
    case 'users':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className='h-9 w-9 text-gold-300' fill="none"   viewBox="0 0 24 24">
  <path stroke="#D4AF37" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 15a4 4 0 0 1 4 4v2h-2m-5-10.126a4.002 4.002 0 0 0 0-7.748M5 15a4 4 0 0 0-4 4v2h16v-2a4 4 0 0 0-4-4H9M9 3a4 4 0 1 0 3.465 2"/>
</svg>
      )
    case 'award':
      return (
        <svg viewBox="-51.2 -51.2 614.40 614.40" width={50} height={50} xmlns="http://www.w3.org/2000/svg" className='text-[#D4AF37]' fill="#D4AF37"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <polygon fill="#D4AF37" points="328.375 384 332.073 458.999 256.211 406.28 179.924 459.049 183.625 384 151.586 384 146.064 496 182.756 496 256.169 445.22 329.242 496 365.936 496 360.414 384 328.375 384" className="ci-primary"></polygon> <path fill="#D4AF37" d="M415.409,154.914l-2.194-48.054L372.7,80.933,346.768,40.414l-48.055-2.2L256,16.093,213.287,38.219l-48.055,2.2L139.3,80.933,98.785,106.86l-2.194,48.054L74.464,197.628l22.127,42.715,2.2,48.053L139.3,314.323l25.928,40.52,48.055,2.195L256,379.164l42.713-22.126,48.055-2.195,25.928-40.52L413.214,288.4l2.195-48.053,22.127-42.715Zm-31.646,76.949L382,270.377l-32.475,20.78-20.78,32.475-38.515,1.76L256,343.125l-34.234-17.733-38.515-1.76-20.78-32.475L130,270.377l-1.759-38.514L110.5,197.628,128.237,163.4,130,124.88,162.471,104.1l20.78-32.474,38.515-1.76L256,52.132l34.234,17.733,38.515,1.76,20.78,32.474L382,124.88l1.759,38.515L401.5,197.628Z" className="ci-primary"></path> </g></svg>
      )
  }
}

const CommitmentSection: React.FC = () => {
  return (
    <section aria-labelledby="commitment-heading" className="relative isolate bg-amber-50/60 py-10 sm:py-12 px-2 sm:px-4">
      {/* main gold gradient card */}
      <div className="mx-auto max-w-6xl rounded-2xl shadow-xl ring-1 ring-black/10 bg-gradient-to-r from-[#B98C1D] via-[#D6B24C] to-[#EAD279] px-4 py-8 sm:px-8">
        <div className="text-center">
          <h2 id="commitment-heading" className="font-montserrat text-2xl sm:text-3xl font-extrabold text-white">Our Commitment to Excellence</h2>
          <p className="mt-2 text-sm sm:text-base text-white/90">We maintain the highest standards in the gold buying industry</p>
        </div>

        {/* three pillars */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.title} className="rounded-xl bg-gradient-to-b from-white to-amber-50 p-6 shadow-md ring-1 ring-black/10">
              <div className="mx-auto grid h-15 w-15 place-items-center rounded-full bg-[#015CE7] text-white shadow ring-4 ring-white/70">
                <Icon name={p.icon} />
              </div>
              <h3 className="mt-4 text-center font-montserrat text-lg font-extrabold text-[#0A1B3D]">{p.title}</h3>
              <p className="mt-2 text-center text-sm leading-6 text-slate-700">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CommitmentSection
