'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import whiteLogo from '@/assests/svg/Frame (6).svg'
import menu from '@/assests/svg/menu_24dp_WHITE_FILL0_wght400_GRAD0_opsz24.svg'
import redLogo from '@/assests/svg/Frame.svg'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  // Determine if we're on the 'About Us' page
  const isAboutUsPage = pathname === '/about-us'

  // Determine if we're on the Home page
  const isHomePage = pathname === '/'

  // Define the color palette based on the page
  const sidebarBackgroundColor = isAboutUsPage ? 'bg-[#111827]' : 'bg-white'
  const sidebarTextColor = isAboutUsPage ? 'text-white' : 'text-[#111827]'
  const linkHoverColor = isAboutUsPage
    ? 'hover:text-[#AF1024] hover:shadow-[0_0_8px_#fff,0_0_15px_#fff,0_0_25px_#fff]' // White glow shadow
    : 'hover:text-[#111827]'

  return (
    <div className="w-full flex justify-center relative bg-[#AF1024]">
      {/* Static Navbar for Home, no animation */}
      <div className={`max-w-[1440px] w-full px-4 py-4 flex items-center justify-between z-10 ${isHomePage ? 'bg-[#AF1024] text-white' : ''}`}>
        <Link href='/' className="flex gap-2 justify-center cursor-pointer">
          <Image src={whiteLogo} alt="white logo" />
          <p className="text-white font-bold text-[24px] pt-[7px]">Baymax</p>
        </Link>
        <div className="flex gap-7 items-center text-white font-medium text-sm max-[600px]:hidden">
          <Link href='ai-assistant' className="relative cursor-pointer group">
            <span className="inline-block transition-all duration-300 transform group-hover:-translate-y-1 group-hover:scale-125">
              AI Assistant
            </span>
          </Link>
          <p className="relative cursor-pointer group">
            <span className="inline-block transition-all duration-300 transform group-hover:-translate-y-1 group-hover:scale-125">
              Schedule Call
            </span>
          </p>
          <Link href='/about-us' className="relative cursor-pointer group">
            <span className="inline-block transition-all duration-300 transform group-hover:-translate-y-1 group-hover:scale-125">
              About Us
            </span>
          </Link>
          <Link href='/Login' className="relative border-2 border-white text-white px-4 py-2 rounded-md font-medium flex items-center justify-center overflow-hidden transition-all duration-300 group cursor-pointer">
            <span className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
            <span className="relative z-10 group-hover:text-[#AF1024] transition-colors duration-300">
              Get Started
            </span>
          </Link>
        </div>
        <div onClick={() => setOpen(true)} className="hidden max-[600px]:flex cursor-pointer">
          <Image src={menu} alt="menu" />
        </div>
      </div>

      {/* Spreading Animation for Navbar Background on About Us Page */}
      {isAboutUsPage && (
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut', delay: 0.2 }}
          className="absolute top-0 left-0 w-full h-full bg-[#111827] origin-bottom z-0"
        />
      )}

      {/* Sidebar with AnimatePresence for exit animation */}
      <AnimatePresence>
        {open && (
          <>
            {/* Transparent overlay to close the sidebar on click */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black bg-opacity-5 z-40"
              onClick={() => setOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className={`fixed top-0 right-0 w-[60%] h-full ${sidebarBackgroundColor} ${sidebarTextColor} flex flex-col items-center gap-6 pt-20 text-lg z-50 shadow-lg`}
            >
              {/* Close Button */}
              <button onClick={() => setOpen(false)} className="absolute top-5 right-5">
                <Image src={menu} alt="close" />
              </button>

              {/* Menu Items */}
              <div className="flex gap-2 justify-center mb-6 hover:cursor-pointer" onClick={() => setOpen(false)}>
                <Image src={!isAboutUsPage?redLogo:whiteLogo} alt="red logo" />
                <p className={`${sidebarTextColor} font-bold text-[24px] pt-[7px]`}>Baymax</p>
              </div>
              <Link href='/' onClick={() => setOpen(false)} className={`cursor-pointer ${linkHoverColor} hover:font-bold hover:text-[24px] transition-all`}>AI Assistant</Link>
              <Link href='/' onClick={() => setOpen(false)} className={`cursor-pointer ${linkHoverColor} hover:font-bold hover:text-[24px] transition-all`}>Schedule Call</Link>
              <Link href='/about-us' onClick={() => setOpen(false)} className={`cursor-pointer ${linkHoverColor} hover:font-bold hover:text-[24px] transition-all`}>About Us</Link>
              <Link href='/Login' onClick={() => setOpen(false)} className={`cursor-pointer ${linkHoverColor} hover:font-bold hover:text-[24px] transition-all`}>Get Started</Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Navbar
