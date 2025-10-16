'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Calendar, User, ArrowRight, Search } from 'lucide-react'

interface BlogPost {
    id: number
    title: string
    excerpt: string
    image: string
    date: string
    author: string
    category: string
    readTime: string
}

export default function BlogsPage() {
    const [selectedCategory, setSelectedCategory] = useState<string>('All')
    const [searchQuery, setSearchQuery] = useState<string>('')
    const [subscribeEmail, setSubscribeEmail] = useState<string>('')
    const [isSubscribing, setIsSubscribing] = useState<boolean>(false)

    const blogPosts: BlogPost[] = [
        {
            id: 1,
            title: 'Top Bridal Makeup Trends for 2025',
            excerpt: 'Discover the latest bridal makeup trends that are taking over weddings this year. From natural glam to bold statements, find the perfect look for your special day.',
            image: '/landing-page/home/women-bridal.jpg',
            date: 'March 15, 2025',
            author: 'D. Makeover Team',
            category: 'Bridal',
            readTime: '5 min read'
        },
        {
            id: 2,
            title: 'Hair Care Tips for Healthy, Shiny Hair',
            excerpt: 'Learn essential hair care routines and tips to maintain healthy, shiny hair. Expert advice on products, treatments, and daily care practices.',
            image: '/landing-page/home/women-hairstyle.jpg',
            date: 'March 10, 2025',
            author: 'D. Makeover Team',
            category: 'Hair Care',
            readTime: '4 min read'
        },
        {
            id: 3,
            title: 'The Ultimate Guide to Men\'s Grooming',
            excerpt: 'A comprehensive guide to modern men\'s grooming. From beard care to skincare routines, everything you need to look your best.',
            image: '/landing-page/home/men-haircut.jpg',
            date: 'March 5, 2025',
            author: 'D. Makeover Team',
            category: 'Men\'s Grooming',
            readTime: '6 min read'
        },
        {
            id: 4,
            title: 'Nail Art Trends You Need to Try',
            excerpt: 'Explore the hottest nail art trends of the season. From minimalist designs to bold patterns, get inspired for your next manicure.',
            image: '/landing-page/home/women-nail.jpg',
            date: 'February 28, 2025',
            author: 'D. Makeover Team',
            category: 'Nail Care',
            readTime: '3 min read'
        },
        {
            id: 5,
            title: 'Skincare Routine for Every Skin Type',
            excerpt: 'Find the perfect skincare routine for your skin type. Learn about products and techniques that work best for oily, dry, or combination skin.',
            image: '/landing-page/home/women-makeup.jpg',
            date: 'February 20, 2025',
            author: 'D. Makeover Team',
            category: 'Skincare',
            readTime: '5 min read'
        },
        {
            id: 6,
            title: 'Beard Styling Tips for Modern Men',
            excerpt: 'Master the art of beard styling with our expert tips. Learn how to maintain, trim, and style your beard for a polished look.',
            image: '/landing-page/home/men-beardstyle.jpg',
            date: 'February 15, 2025',
            author: 'D. Makeover Team',
            category: 'Men\'s Grooming',
            readTime: '4 min read'
        }
    ]

    const categories = ['All', 'Bridal', 'Hair Care', 'Men\'s Grooming', 'Nail Care', 'Skincare']

    const filteredPosts = blogPosts.filter(post => {
        const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
        return matchesCategory && matchesSearch
    })

    const handleSubscribe = async (e: React.FormEvent): Promise<void> => {
        e.preventDefault()

        if (isSubscribing) return

        setIsSubscribing(true)

        try {
            // Validate email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            if (!subscribeEmail.trim() || !emailRegex.test(subscribeEmail)) {
                alert('Please enter a valid email address.')
                setIsSubscribing(false)
                return
            }

            const subject = `Newsletter Subscription Request from ${subscribeEmail.trim()}`
            const body =
                `New Newsletter Subscription Request%0D%0A%0D%0A` +
                `Email: ${subscribeEmail.trim()}%0D%0A%0D%0A` +
                `The subscriber would like to receive updates about:%0D%0A` +
                `- Latest beauty tips and trends%0D%0A` +
                `- Exclusive offers and promotions%0D%0A` +
                `- New blog posts and articles%0D%0A` +
                `- Special events and announcements%0D%0A%0D%0A` +
                `---%0D%0AThis message was sent from your website blog newsletter subscription form.`

            const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=hishamoriga@gmail.com&su=${encodeURIComponent(subject)}&body=${body}`

            window.open(gmailLink, "_blank")

            // Reset email input after short delay
            setTimeout(() => {
                setSubscribeEmail('')
            }, 500)

        } catch (error) {
            console.error('Error subscribing:', error)
            alert('An error occurred. Please try again or contact us directly at hishamoriga@gmail.com')
        } finally {
            setIsSubscribing(false)
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
                            OUR BLOGS
                        </h1>
                        <p className="font-montserrat text-white text-md lg:text-lg md:text-xl max-w-2xl mx-auto px-6">
                            Beauty tips, trends, and expert advice from D. Makeover Studio
                        </p>
                    </div>
                </div>
            </section>

            {/* Search and Filter Section */}
            <section className="px-6 md:px-12 lg:px-24 py-8">
                <div className="max-w-7xl mx-auto">
                    {/* Search Bar */}
                    <div className="mb-8">
                        <div className="relative max-w-xl mx-auto">
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full px-6 py-4 pl-12 rounded-xl border-2 border-gray-200 focus:border-brand-green-800 focus:outline-none font-montserrat text-gray-400"
                            />
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        </div>
                    </div>

                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-6 py-2 rounded-full font-montserrat font-semibold transition-all ${
                                    selectedCategory === category
                                        ? 'bg-brand-green-800 text-white'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Blog Posts Grid */}
                    {filteredPosts.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                            {filteredPosts.map((post) => (
                                <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                                    <div className="relative h-64 overflow-hidden">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-300"
                                        />
                                        <div className="absolute top-4 right-4 bg-brand-green-800 text-white px-3 py-1 rounded-full text-sm font-montserrat font-semibold">
                                            {post.category}
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                                            <div className="flex items-center gap-1">
                                                <Calendar size={16} />
                                                <span className="font-montserrat">{post.date}</span>
                                            </div>
                                            <span className="font-montserrat">{post.readTime}</span>
                                        </div>
                                        <h2 className="font-montserrat text-xl font-bold text-brand-green-800 mb-3 line-clamp-2 group-hover:text-brand-green-500 transition-colors">
                                            {post.title}
                                        </h2>
                                        <p className="font-montserrat text-gray-600 mb-4 line-clamp-3">
                                            {post.excerpt}
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2 text-sm text-gray-500">
                                                <User size={16} />
                                                <span className="font-montserrat">{post.author}</span>
                                            </div>
                                            <a
                                                href={`/blogs/${post.id}`}
                                                className="flex items-center gap-1 text-brand-green-800 font-montserrat font-semibold group-hover:gap-2 transition-all"
                                            >
                                                Read More
                                                <ArrowRight size={16} />
                                            </a>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <p className="text-gray-500 font-montserrat text-lg">
                                No articles found matching your search.
                            </p>
                        </div>
                    )}
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="px-6 md:px-12 lg:px-24 pb-16">
                <div className="max-w-4xl mx-auto bg-gradient-to-r from-brand-green-800 to-brand-green-500 rounded-3xl p-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-felix-titling text-white tracking-wider mb-4">
                        STAY UPDATED
                    </h2>
                    <p className="text-white font-montserrat text-lg mb-8">
                        Subscribe to our newsletter for the latest beauty tips, trends, and exclusive offers
                    </p>
                    <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={subscribeEmail}
                            onChange={(e) => setSubscribeEmail(e.target.value)}
                            disabled={isSubscribing}
                            required
                            className="flex-1 px-6 py-3 rounded-lg font-montserrat focus:outline-none ring-2 ring-white/50 focus:ring-brand-gold-500 disabled:opacity-50 text-white"
                        />
                        <button
                            type="submit"
                            disabled={isSubscribing}
                            className="px-8 py-3 bg-gradient-to-l from-gold-900 to-brand-gold-500 text-brand-green-800 font-bold rounded-lg hover:brightness-95 transition-all font-montserrat disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubscribing ? 'Opening Email...' : 'Subscribe'}
                        </button>
                    </form>
                </div>
            </section>
        </main>
    )
}
