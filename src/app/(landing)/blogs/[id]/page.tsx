'use client'

import React from 'react'
import Image from 'next/image'
import { Calendar, User, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'

interface BlogContent {
    id: number
    title: string
    excerpt: string
    image: string
    date: string
    author: string
    category: string
    readTime: string
    content: {
        introduction: string
        sections: {
            heading: string
            paragraphs: string[]
        }[]
        conclusion: string
    }
}

export default function BlogDetailPage() {
    const params = useParams()
    const router = useRouter()
    const blogId = parseInt(params.id as string)

    // Extended blog data with full content
    const blogData: BlogContent[] = [
        {
            id: 1,
            title: 'Top Bridal Makeup Trends for 2025',
            excerpt: 'Discover the latest bridal makeup trends that are taking over weddings this year.',
            image: '/landing-page/home/women-bridal.jpg',
            date: 'March 15, 2025',
            author: 'D. Makeover Team',
            category: 'Bridal',
            readTime: '5 min read',
            content: {
                introduction: 'Wedding season is here, and brides are looking for the perfect makeup look that combines timeless elegance with modern trends. At D. Makeover Studio, we\'ve been closely following the latest bridal makeup trends for 2025, and we\'re excited to share what\'s hot this season.',
                sections: [
                    {
                        heading: 'Natural Glam is Still Reigning',
                        paragraphs: [
                            'The natural glam look continues to dominate bridal makeup trends in 2025. Brides are opting for makeup that enhances their natural beauty rather than masking it. This trend focuses on dewy, radiant skin, subtle contouring, and soft, romantic colors.',
                            'The key to achieving this look is using lightweight, buildable products that create a "your skin but better" effect. Think luminous foundations, cream blushes, and soft, blended eyeshadows in neutral tones.'
                        ]
                    },
                    {
                        heading: 'Bold Lips Make a Statement',
                        paragraphs: [
                            'While natural makeup is popular, many brides are choosing to make a statement with bold lip colors. Deep reds, berry tones, and even bold corals are making their way into bridal looks, especially for evening ceremonies.',
                            'The trick is to keep the rest of the makeup soft and romantic, letting the lips be the focal point. This creates a stunning, memorable look that photographs beautifully.'
                        ]
                    },
                    {
                        heading: 'Sustainable and Clean Beauty',
                        paragraphs: [
                            'More brides are becoming conscious about the products used on their special day. There\'s a growing demand for clean, sustainable beauty products that are both effective and environmentally friendly.',
                            'At D. Makeover Studio, we use premium, cruelty-free products that deliver stunning results while being gentle on your skin and the environment.'
                        ]
                    },
                    {
                        heading: 'Personalized Bridal Looks',
                        paragraphs: [
                            'Every bride is unique, and 2025 is all about personalization. Rather than following a one-size-fits-all approach, brides are working with makeup artists to create looks that reflect their personality, wedding theme, and cultural heritage.',
                            'We encourage our brides to bring inspiration photos and have detailed consultations to ensure their makeup perfectly represents who they are.'
                        ]
                    }
                ],
                conclusion: 'Whether you prefer natural elegance or bold statements, the key to perfect bridal makeup is working with experienced professionals who understand your vision. At D. Makeover Studio, we specialize in creating stunning bridal looks that make you feel confident and beautiful on your special day. Book your bridal consultation today!'
            }
        },
        {
            id: 2,
            title: 'Hair Care Tips for Healthy, Shiny Hair',
            excerpt: 'Learn essential hair care routines and tips to maintain healthy, shiny hair.',
            image: '/landing-page/home/women-hairstyle.jpg',
            date: 'March 10, 2025',
            author: 'D. Makeover Team',
            category: 'Hair Care',
            readTime: '4 min read',
            content: {
                introduction: 'Beautiful, healthy hair doesn\'t happen by accident. It requires consistent care, the right products, and understanding what your hair needs. Whether you have straight, wavy, curly, or coily hair, these essential tips will help you achieve the gorgeous, shiny locks you\'ve always wanted.',
                sections: [
                    {
                        heading: 'Choose the Right Shampoo and Conditioner',
                        paragraphs: [
                            'The foundation of healthy hair starts with the right shampoo and conditioner for your hair type. If you have oily hair, look for clarifying formulas. For dry hair, opt for moisturizing products. Color-treated hair needs special care with sulfate-free formulas.',
                            'Don\'t wash your hair every day unless necessary. Over-washing can strip natural oils, leading to dryness and damage. Most hair types benefit from washing 2-3 times per week.'
                        ]
                    },
                    {
                        heading: 'Deep Conditioning is Essential',
                        paragraphs: [
                            'Once a week, treat your hair to a deep conditioning treatment or hair mask. These intensive treatments penetrate deeper than regular conditioners, repairing damage and restoring moisture.',
                            'Apply the mask from mid-length to ends, avoiding the roots if you have oily hair. Leave it on for the recommended time (usually 15-30 minutes) for maximum benefit.'
                        ]
                    },
                    {
                        heading: 'Protect from Heat Damage',
                        paragraphs: [
                            'Heat styling tools can cause significant damage if not used properly. Always use a heat protectant spray before blow-drying, straightening, or curling your hair. This creates a barrier between your hair and the heat.',
                            'When possible, air-dry your hair or use the cool setting on your blow dryer. If you must use heat, keep it at moderate temperatures and don\'t hold the tool in one place for too long.'
                        ]
                    },
                    {
                        heading: 'Regular Trims Are Important',
                        paragraphs: [
                            'Even if you\'re growing your hair out, regular trims are essential for maintaining healthy hair. Split ends can travel up the hair shaft, causing more damage. Getting a trim every 8-12 weeks keeps your hair looking fresh and healthy.',
                            'Visit D. Makeover Studio for professional haircuts and styling services. Our expert stylists can recommend the best haircut for your face shape and hair type.'
                        ]
                    }
                ],
                conclusion: 'Healthy hair is achievable with the right care routine and products. Remember to be patient – hair health improvements take time. For personalized hair care advice and professional treatments, visit D. Makeover Studio where our experts can assess your hair and create a customized care plan just for you.'
            }
        },
        {
            id: 3,
            title: 'The Ultimate Guide to Men\'s Grooming',
            excerpt: 'A comprehensive guide to modern men\'s grooming essentials.',
            image: '/landing-page/home/men-haircut.jpg',
            date: 'March 5, 2025',
            author: 'D. Makeover Team',
            category: 'Men\'s Grooming',
            readTime: '6 min read',
            content: {
                introduction: 'Modern grooming for men goes beyond a simple haircut and shave. Today\'s grooming routines include skincare, beard care, hairstyling, and overall maintenance. Whether you\'re new to grooming or looking to upgrade your routine, this comprehensive guide will help you look and feel your best.',
                sections: [
                    {
                        heading: 'Establishing a Skincare Routine',
                        paragraphs: [
                            'Men\'s skin requires just as much care as women\'s, but often gets neglected. A basic routine should include cleansing, moisturizing, and sun protection. Use a gentle cleanser twice daily to remove dirt, oil, and impurities.',
                            'Choose a moisturizer suited to your skin type – lightweight for oily skin, richer for dry skin. Always apply sunscreen during the day to protect against aging and skin damage.'
                        ]
                    },
                    {
                        heading: 'Mastering Beard Care',
                        paragraphs: [
                            'A well-maintained beard can significantly enhance your appearance. Regular trimming keeps it looking neat and defined. Use beard oil or balm daily to keep facial hair soft, manageable, and healthy.',
                            'Wash your beard 2-3 times per week with a specialized beard wash, not regular shampoo. Comb it daily to distribute oils and train the hair to grow in the right direction.'
                        ]
                    },
                    {
                        heading: 'Hair Styling Essentials',
                        paragraphs: [
                            'The right haircut makes a huge difference. Visit a professional barber or stylist every 3-4 weeks to maintain your style. Choose a cut that complements your face shape and lifestyle.',
                            'Invest in quality hair products like pomade, wax, or clay depending on your desired style. A little product goes a long way – start with a small amount and add more if needed.'
                        ]
                    },
                    {
                        heading: 'Professional Grooming Services',
                        paragraphs: [
                            'While home maintenance is important, professional grooming services provide results you can\'t achieve at home. Regular visits to D. Makeover Studio for haircuts, beard shaping, and facials will elevate your grooming game.',
                            'Our experienced team understands men\'s grooming needs and can provide personalized recommendations for products and styles that work best for you.'
                        ]
                    }
                ],
                conclusion: 'Good grooming is an investment in yourself. It boosts confidence, makes a great impression, and shows that you care about your appearance. At D. Makeover Studio, we offer comprehensive men\'s grooming services including haircuts, beard styling, facials, and more. Book your appointment today and experience professional grooming at its finest.'
            }
        },
        {
            id: 4,
            title: 'Nail Art Trends You Need to Try',
            excerpt: 'Explore the hottest nail art trends of the season.',
            image: '/landing-page/home/women-nail.jpg',
            date: 'February 28, 2025',
            author: 'D. Makeover Team',
            category: 'Nail Care',
            readTime: '3 min read',
            content: {
                introduction: 'Nail art has evolved from simple polish application to intricate designs that are true works of art. This season brings fresh, exciting trends that range from minimalist elegance to bold statements. Let\'s explore the nail art trends that are dominating 2025.',
                sections: [
                    {
                        heading: 'Minimalist Line Art',
                        paragraphs: [
                            'Less is more with minimalist line art. Delicate, thin lines create abstract designs, geometric patterns, or simple illustrations on neutral or nude base colors. This trend is perfect for those who want subtle sophistication.',
                            'The beauty of minimalist nail art is its versatility – it works for both casual and formal occasions and complements any outfit.'
                        ]
                    },
                    {
                        heading: 'Chrome and Metallic Finishes',
                        paragraphs: [
                            'Mirror-like chrome nails continue to shine bright. From silver and gold to iridescent and holographic finishes, metallic nails make a bold statement. Chrome powder creates a seamless, reflective finish that catches light beautifully.',
                            'Pair chrome accents with matte colors for a modern, high-contrast look that\'s Instagram-worthy.'
                        ]
                    },
                    {
                        heading: 'French Manicure Reimagined',
                        paragraphs: [
                            'The classic French manicure gets a modern update with colored tips, geometric shapes, and unexpected color combinations. Think black tips on nude nails, pastel rainbow tips, or asymmetric designs.',
                            'This trend maintains the elegance of the traditional French manicure while adding contemporary flair.'
                        ]
                    }
                ],
                conclusion: 'Nail art is a fun way to express your personality and style. Whether you prefer subtle elegance or bold designs, there\'s a trend for everyone. Visit D. Makeover Studio for professional nail services including manicures, pedicures, and custom nail art. Our skilled technicians stay updated with the latest trends and techniques to give you beautiful, long-lasting results.'
            }
        },
        {
            id: 5,
            title: 'Skincare Routine for Every Skin Type',
            excerpt: 'Find the perfect skincare routine for your skin type.',
            image: '/landing-page/home/women-makeup.jpg',
            date: 'February 20, 2025',
            author: 'D. Makeover Team',
            category: 'Skincare',
            readTime: '5 min read',
            content: {
                introduction: 'Understanding your skin type is the first step to achieving healthy, glowing skin. Whether you have oily, dry, combination, or sensitive skin, the right skincare routine can address your specific concerns and bring out your skin\'s natural radiance.',
                sections: [
                    {
                        heading: 'For Oily Skin',
                        paragraphs: [
                            'Oily skin needs lightweight, oil-free products that control shine without stripping moisture. Use a gel-based or foaming cleanser twice daily, followed by an alcohol-free toner to balance oil production.',
                            'Apply a lightweight, oil-free moisturizer – yes, even oily skin needs hydration! Look for products with niacinamide or salicylic acid to control oil and prevent breakouts.'
                        ]
                    },
                    {
                        heading: 'For Dry Skin',
                        paragraphs: [
                            'Dry skin craves moisture and nourishment. Use a creamy, hydrating cleanser that doesn\'t strip natural oils. Follow with a hydrating toner or essence to prep skin for better absorption.',
                            'Layer on a rich moisturizer with ingredients like hyaluronic acid, ceramides, or glycerin. Don\'t forget to apply face oil or a sleeping mask at night for extra hydration.'
                        ]
                    },
                    {
                        heading: 'For Combination Skin',
                        paragraphs: [
                            'Combination skin requires a balanced approach. Use a gentle, pH-balanced cleanser suitable for all skin types. You can use different products on different areas – lighter products on the T-zone, richer ones on dry areas.',
                            'Multi-masking is your friend! Apply a clay mask to oily areas and a hydrating mask to dry patches for targeted treatment.'
                        ]
                    },
                    {
                        heading: 'For Sensitive Skin',
                        paragraphs: [
                            'Sensitive skin needs gentle, fragrance-free products with minimal ingredients. Look for soothing ingredients like centella asiatica, chamomile, or colloidal oatmeal.',
                            'Always patch-test new products and introduce them one at a time. Avoid harsh exfoliants and opt for gentle, creamy formulas instead.'
                        ]
                    }
                ],
                conclusion: 'Consistency is key when it comes to skincare. Give new products at least 4-6 weeks to show results. For personalized skincare advice and professional treatments, visit D. Makeover Studio. Our skincare experts can assess your skin type and recommend the perfect routine and treatments for your unique needs.'
            }
        },
        {
            id: 6,
            title: 'Beard Styling Tips for Modern Men',
            excerpt: 'Master the art of beard styling with our expert tips.',
            image: '/landing-page/home/men-beardstyle.jpg',
            date: 'February 15, 2025',
            author: 'D. Makeover Team',
            category: 'Men\'s Grooming',
            readTime: '4 min read',
            content: {
                introduction: 'A well-groomed beard is a mark of modern masculinity. Whether you\'re sporting a full beard, goatee, or stubble, proper maintenance and styling are essential for looking your best. Here are expert tips to help you achieve and maintain the perfect beard.',
                sections: [
                    {
                        heading: 'Finding Your Beard Style',
                        paragraphs: [
                            'Not all beard styles suit every face shape. Oval faces can pull off most styles, while square faces benefit from rounded beards. Round faces look best with longer, angular beards that create definition.',
                            'Consider your lifestyle and maintenance commitment too. Full beards require more upkeep than stubble or short beards. Visit D. Makeover Studio for professional advice on the best beard style for your face shape.'
                        ]
                    },
                    {
                        heading: 'Daily Beard Maintenance',
                        paragraphs: [
                            'Start with a quality beard oil applied daily to keep facial hair soft and moisturized. This also prevents the itchiness that comes with beard growth and keeps the skin underneath healthy.',
                            'Use a beard comb or brush to distribute oil evenly and train hair to grow in the desired direction. This also removes dead skin and promotes healthy growth.'
                        ]
                    },
                    {
                        heading: 'Trimming and Shaping',
                        paragraphs: [
                            'Invest in a good quality trimmer with multiple length settings. Trim regularly to maintain shape, even if you\'re growing your beard out. Define your neckline (two fingers above your Adam\'s apple) and cheek lines for a polished look.',
                            'For precise shaping and difficult-to-reach areas, visit a professional barber. At D. Makeover Studio, our experts specialize in beard shaping and can create clean, defined lines that enhance your facial features.'
                        ]
                    },
                    {
                        heading: 'Beard Grooming Products',
                        paragraphs: [
                            'Essential products include beard oil, beard balm or wax for styling, and a specialized beard shampoo. Regular shampoo can be too harsh and dry out facial hair.',
                            'Use beard balm for hold and styling, especially for longer beards. It helps tame flyaways and keeps your beard looking neat throughout the day.'
                        ]
                    }
                ],
                conclusion: 'A great beard doesn\'t happen by accident – it requires regular care and the right products. For professional beard trimming, shaping, and styling services, visit D. Makeover Studio. Our experienced barbers will help you achieve and maintain the perfect beard style that suits your face and personality. Book your appointment today!'
            }
        }
    ]

    const blog = blogData.find(b => b.id === blogId)

    if (!blog) {
        return (
            <main className="bg-white min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-felix-titling text-brand-green-800 mb-4">Blog Not Found</h1>
                    <button
                        onClick={() => router.push('/blogs')}
                        className="inline-flex items-center gap-2 text-brand-green-800 font-montserrat font-semibold hover:gap-3 transition-all"
                    >
                        <ArrowLeft size={20} />
                        Back to Blogs
                    </button>
                </div>
            </main>
        )
    }

    return (
        <main className="bg-white">
            {/* Hero Section with Featured Image */}
            <section className="relative h-[40vh] md:h-[40vh] overflow-hidden">
                <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover brightness-50"
                    priority
                />
                <div className="absolute inset-0 flex items-center justify-center mt-8">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                            <span className="text-white font-montserrat font-semibold">{blog.category}</span>
                        </div>
                        <h1 className="font-felix-titling text-white text-2xl md:text-5xl lg:text-6xl tracking-wider mb-4">
                            {blog.title}
                        </h1>
                        <div className="flex items-center justify-center gap-6 text-white">
                            <div className="flex items-center gap-2">
                                <Calendar size={18} />
                                <span className="font-montserrat">{blog.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <User size={18} />
                                <span className="font-montserrat">{blog.author}</span>
                            </div>
                            <span className="font-montserrat">{blog.readTime}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <article className="px-6 md:px-12 lg:px-24 py-16 md:py-20">
                <div className="max-w-4xl mx-auto">
                    {/* Back Button */}
                    <button
                        onClick={() => router.push('/blogs')}
                        className="inline-flex items-center gap-2 text-brand-green-800 font-montserrat font-semibold hover:gap-3 transition-all mb-8"
                    >
                        <ArrowLeft size={20} />
                        Back to Blogs
                    </button>

                    {/* Introduction */}
                    <div className="mb-12">
                        <p className="text-lg md:text-xl text-gray-700 font-montserrat leading-relaxed">
                            {blog.content.introduction}
                        </p>
                    </div>

                    {/* Content Sections */}
                    {blog.content.sections.map((section, index) => (
                        <div key={index} className="mb-10">
                            <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-brand-green-800 mb-4">
                                {section.heading}
                            </h2>
                            {section.paragraphs.map((paragraph, pIndex) => (
                                <p key={pIndex} className="text-lg text-gray-700 font-montserrat leading-relaxed mb-4">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    ))}

                    {/* Conclusion */}
                    <div className="mb-12 p-6 bg-gradient-to-r from-brand-green-800/5 to-brand-green-500/5 rounded-2xl border-l-4 border-brand-green-800">
                        <p className="text-lg text-gray-700 font-montserrat leading-relaxed">
                            {blog.content.conclusion}
                        </p>
                    </div>

                    {/* Share Section */}
                    <div className="border-t border-gray-200 pt-8 mb-12">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <Share2 size={20} className="text-brand-green-800" />
                                <span className="font-montserrat font-semibold text-brand-green-800">Share this article:</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <button className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                                    <Facebook size={20} />
                                </button>
                                <button className="p-3 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition-colors">
                                    <Twitter size={20} />
                                </button>
                                <button className="p-3 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-colors">
                                    <Linkedin size={20} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="bg-gradient-to-r from-brand-green-800 to-brand-green-500 rounded-3xl p-10 text-center">
                        <h3 className="text-2xl md:text-3xl font-felix-titling text-white tracking-wider mb-4">
                            READY FOR YOUR TRANSFORMATION?
                        </h3>
                        <p className="text-white font-montserrat text-lg mb-6">
                            Book an appointment at D. Makeover Studio and experience professional beauty services
                        </p>
                        <Link
                            href="/#contLinkct"
                            className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-gradient-to-l from-gold-900 to-brand-gold-500 px-8 text-brand-green-800 font-bold hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 transition-all font-montserrat"
                        >
                            <span>Book Appointment</span>
                            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="3">
                                <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </article>
        </main>
    )
}
