'use client'

import React from 'react'
import Image from 'next/image'
import { Calendar, ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface BlogPost {
    id: number
    title: string
    excerpt: string
    image: string
    date: string
    category: string
    readTime: string
}

const BlogsSection: React.FC = () => {
    const featuredBlogs: BlogPost[] = [
        {
            id: 1,
            title: 'Top Bridal Makeup Trends for 2025',
            excerpt: 'Discover the latest bridal makeup trends that are taking over weddings this year. From natural glam to bold statements...',
            image: '/landing-page/home/bridal-6.JPG',
            date: 'March 15, 2025',
            category: 'Bridal',
            readTime: '5 min read'
        },
        {
            id: 2,
            title: 'Hair Care Tips for Healthy, Shiny Hair',
            excerpt: 'Learn essential hair care routines and tips to maintain healthy, shiny hair. Expert advice on products and treatments...',
            image: '/landing-page/home/hair-style-1.JPG',
            date: 'March 10, 2025',
            category: 'Hair Care',
            readTime: '4 min read'
        },
        {
            id: 3,
            title: 'The Ultimate Guide to Men\'s Grooming',
            excerpt: 'A comprehensive guide to modern men\'s grooming. From beard care to skincare routines, everything you need to know...',
            image: '/landing-page/home/men-haircut.jpg',
            date: 'March 5, 2025',
            category: 'Men\'s Grooming',
            readTime: '6 min read'
        }
    ]

    return (
        <section className='bg-white px-4 sm:px-8 lg:px-16 pb-14 md:pb-14 lg:pb-18 pt-4 md:pt-12 lg:pt-5'>
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="font-felix-titling text-brand-green-800 tracking-wider text-3xl sm:text-4xl lg:text-5xl mb-4">
                        LATEST FROM OUR BLOG
                    </h2>
                    <p className="font-montserrat text-gray-600 text-lg max-w-2xl mx-auto">
                        Stay updated with the latest beauty tips, trends, and expert advice
                    </p>
                </div>

                {/* Blog Cards Grid */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10'>
                    {featuredBlogs.map((blog) => (
                        <article key={blog.id} className='bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col'>
                            <div className='relative h-56 overflow-hidden'>
                                <Image
                                    src={blog.image}
                                    alt={blog.title}
                                    fill
                                    className='object-cover group-hover:scale-110 transition-transform duration-300'
                                />
                                <div className="absolute top-4 right-4 bg-brand-green-800 text-white px-3 py-1 rounded-full text-sm font-montserrat font-semibold">
                                    {blog.category}
                                </div>
                            </div>
                            <div className='p-6 flex flex-col flex-grow'>
                                <div className='flex items-center gap-4 text-sm text-gray-500 mb-3'>
                                    <div className='flex items-center gap-1'>
                                        <Calendar size={16} />
                                        <span className="font-montserrat">{blog.date}</span>
                                    </div>
                                    <span className="font-montserrat">{blog.readTime}</span>
                                </div>
                                <h3 className='font-montserrat text-xl font-bold text-brand-green-800 mb-3 line-clamp-2'>
                                    {blog.title}
                                </h3>
                                <p className='font-montserrat text-gray-600 mb-4 line-clamp-3 flex-grow'>
                                    {blog.excerpt}
                                </p>
                                <a
                                    href={`/blogs/${blog.id}`}
                                    className='inline-flex items-center gap-1 text-brand-green-800 font-montserrat font-semibold hover:gap-2 transition-all text-sm'
                                >
                                    Read More
                                    <ArrowRight size={16} />
                                </a>
                            </div>
                        </article>
                    ))}
                </div>

                {/* View All Blogs Button */}
                <div className='flex justify-center'>
                    <Link
                        href='/blogs'
                        className='inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-gradient-to-l from-gold-900 to-brand-gold-500 px-12 text-brand-green-800 font-bold hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 transition-all font-montserrat'
                    >
                        <span>View All Articles</span>
                        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="3">
                            <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default BlogsSection
