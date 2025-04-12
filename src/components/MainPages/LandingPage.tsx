'use client'
import Image from 'next/image'
import React from 'react'
import { ReactTyped } from "react-typed";
import { motion } from 'framer-motion';
import LandingPageImage from '@/assests/Images/img.png'
import Link from 'next/link'
import clock from '@/assests/svg/svg.svg'
import brain from '@/assests/svg/Vector (1).svg'
import connection from '@/assests/svg/Frame (15).svg'
import heart from '@/assests/svg/svg (1).svg'
import medicine from '@/assests/svg/svg (2).svg'
import calender from '@/assests/svg/svg (3).svg'
import chat from '@/assests/svg/svg (4).svg'

const LandingPage = () => {
    const chooseBaymax = [
        { id: 1, icon: clock, title: '24/7 Availability', data: 'Access healthcare support anytime, anywhere with our AI assistant.' },
        { id: 2, icon: brain, title: 'Smart Diagnostics', data: 'Advanced AI algorithms for accurate symptom analysis and recommendations.' },
        { id: 3, icon: connection, title: 'Expert Connection', data: 'Seamless connection with healthcare professionals when needed.' },
    ]
    const services = [
        { id: 1, icon: heart, title: 'Health Monitoring', data: 'Track your vital signs and health metrics in real-time.' },
        { id: 2, icon: medicine, title: 'Medication Reminders', data: 'Never miss your medications with smart reminders.' },
        { id: 3, icon: calender, title: 'Appointment Booking', data: 'Schedule appointments with healthcare providers easily.' },
        { id: 4, icon: chat, title: '24/7 Chat Support', data: 'Get instant answers to your health-related questions.' }
    ]

    return (
        <div className="w-full flex flex-col items-center scroll-smooth">

            {/* Hero Section */}
            <div className="w-full flex justify-center bg-gradient-to-r from-[#AF1024] to-white">
                <div className="max-w-[1440px] w-full flex px-20 py-10 justify-between max-md:p-4">
                    <div className="py-10 pr-20 w-1/2 flex flex-col gap-6 max-lg:w-full max-[650px]:px-0 max-[600px]:w-full">
                        <h1 className="text-white text-[40px] font-bold leading-[50px] max-[600px]:text-[30px] max-[600px]:leading-[40px]">
                            <ReactTyped strings={["Hi My Name is Baymax Your Personal healthcare Companion"]} typeSpeed={40} />
                        </h1>
                        <p className="text-white text-md font-light max-[600px]:text-sm">
                            Experience the future of healthcare with AI-powered assistance, personalized care, and 24/7 support.
                        </p>
                        <Link href="#why-choose-baymax" className="max-w-1/3 w-full relative border-2 border-white text-white px-4 py-2 rounded-[20px] font-medium flex items-center justify-center overflow-hidden transition-all duration-300 group cursor-pointer max-[600px]:max-w-[200px]">
                            <span className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                            <span className="relative z-10 group-hover:text-[#AF1024] transition-colors duration-300">
                                Learn More
                            </span>
                        </Link>
                    </div>
                    <div className="max-w-1/2 w-full max-lg:hidden">
                        <Image src={LandingPageImage} alt="Landing-Page" />
                    </div>
                </div>
            </div>

            {/* Why Choose Baymax Section */}
            <div id="why-choose-baymax" className="p-20 w-full flex items-center justify-center max-md:p-4">
                <div className="max-w-[1440px] w-full flex flex-col items-center gap-8">
                    <p className="text-[30px] font-bold text-center">Why Choose Baymax?</p>
                    <div className="grid grid-cols-3 place-items-center max-lg:grid-cols-2 max-md:grid-cols-1">
                        {chooseBaymax.map((item) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: false, amount: 0.3 }}
                                className="flex flex-col items-center text-center gap-4 p-4"
                            >
                                <div className="bg-[#AF1024] p-4 rounded-[30px]">
                                    <Image src={item.icon} alt={item.title} />
                                </div>
                                <p className="text-lg font-semibold">{item.title}</p>
                                <p className="text-sm text-gray-600">{item.data}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Our Services Section */}
            <div className="p-20 w-full flex items-center justify-center bg-[#E5E7EB] max-md:p-4">
                <div className="max-w-[1440px] w-full flex flex-col items-center gap-8">
                    <p className="text-[30px] font-bold">Our Services</p>
                    <div className="grid grid-cols-4 justify-between gap-10 max-lg:grid-cols-2 max-md:grid-cols-1">
                        {services.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: -100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                viewport={{ once: false, amount: 0.3 }}
                                className="flex flex-col items-start text-start gap-4 p-8 bg-white rounded-xl shadow-lg"
                            >
                                <Image src={item.icon} alt={item.title} />
                                <p className="text-lg font-semibold">{item.title}</p>
                                <p className="text-sm text-gray-600">{item.data}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Call to Action Section */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                className="p-20 w-full flex items-center justify-center bg-[#AF1024] max-md:p-4"
            >
                <div className="max-w-[1440px] w-full flex flex-col items-center gap-8 text-white max-[600px]:gap-4">
                    <p className="text-[30px] font-bold text-center max-[600px]:text-[24px]">Ready to Take Control of Your Health?</p>
                    <p className="w-1/2 text-center font-light text-md max-[1060px]:w-full max-[600px]:text-sm">
                        Join thousands of users who trust Baymax for their healthcare needs. Start your journey to better health today.
                    </p>
                    <Link href="/Login" className="w-auto relative border-2 border-white text-white px-4 py-2 rounded-[20px] font-medium flex items-center justify-center overflow-hidden transition-all duration-300 group cursor-pointer">
                        <span className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                        <span className="relative z-10 group-hover:text-[#AF1024] transition-colors duration-300">
                            Get Started Now
                        </span>
                    </Link>
                </div>
            </motion.div>
        </div>
    )
}

export default LandingPage
