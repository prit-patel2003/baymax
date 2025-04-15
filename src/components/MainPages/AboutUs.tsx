'use client'

import React, { useState, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ReactTyped } from 'react-typed'
import ReactPlayer from 'react-player'
import { toast } from 'sonner'
import Image from 'next/image'
import play from '@/assests/svg/play.svg'

const AboutUs = () => {
  const [showTimeline, setShowTimeline] = useState(false)
  const [animationComplete, setAnimationComplete] = useState(false)
  const [lineIndex, setLineIndex] = useState(0)
  const [typedLines, setTypedLines] = useState<string[]>([])
  const [isTyping, setIsTyping] = useState(true)
  const [isClient, setIsClient] = useState(false)
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])
  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const story = [
    { day: 1, hour: 900, data: 'Master starts with my first test...', videoUrl: 'https://youtu.be/EVcuEGlj2SM' },
    { day: 7, hour: 1700, data: 'My inflatable body gets out of control...', videoUrl: 'https://youtu.be/vl3f85FzcGM' },
    { day: 33, hour: 1500, data: 'A catastrophic error shuts down the entire building but still he does not give up on me..', videoUrl: 'https://youtu.be/8yBdXaGxmuo' },
    { day: 84, hour: 900, data: 'Losing all hope one final test...', videoUrl: 'https://youtu.be/RZUAytnJHo8' },
  ]

  useEffect(() => {
    setIsClient(true)
    const timer = setTimeout(() => setAnimationComplete(true), 1800)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const currentRef = sectionRefs.current[lineIndex]
    if (currentRef) {
      currentRef.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }, [lineIndex])

  const handleTypingDone = () => {
    const line = story[lineIndex]
    const lineText = `Day ${line.day}, Hour ${line.hour}: ${line.data}`
    setTypedLines((prev) => [...prev, lineText])
    setIsTyping(false)
  }

  const handleVideoEnd = () => {
    setTimeout(() => {
      setLineIndex((prev) => prev + 1)
      setIsTyping(true)
    }, 500)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const result = await res.json()
      if (res.ok) {
        console.log('Form submitted successfully')
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        })
        setLoading(false)
        toast.success('Message sent successfully!', {
          description: '',
          duration: 3000,
          className: 'bg-green-500 text-white text-lg font-semibold',
        })
      } else {
        console.error('Submission failed:', result)
      }
    } catch (error) {
      console.error('Submission error:', error)
    }
    finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative w-full min-h-screen bg-[#111827] font-[Poppins] text-white overflow-hidden">

      {/* Loader */}
      <AnimatePresence>
        {!animationComplete && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 200 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute top-1/2 left-1/2 w-10 h-10 bg-[#111827] rounded-full z-50 transform -translate-x-1/2 -translate-y-1/2"
          />
        )}
      </AnimatePresence>

      {/* Show Play Button if user hasn't started */}
      {animationComplete && !showTimeline && (
        <div className="flex flex-col items-center justify-center min-h-screen">
        <motion.div
          animate={{ y: [0, 20, 0] }} // Moves the div up and down
          transition={{
            duration: 2, // Duration for a full cycle (up and down)
            repeat: Infinity, // Keeps the animation looping
            repeatType: 'loop', // Ensures it loops infinitely
            ease: 'easeInOut', // Smooth easing for the animation
          }}
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowTimeline(true)}
            className="bg-white text-black font-bold  w-[400px] h-[400px] rounded-[400px] shadow-lg  hover:shadow-[0_0_40px_rgba(255,255,255,0.8)] transition-all cursor-pointer max-md:h-[200px] max-md:w-[200px] max-md:text-[100px] max-sm:h-[150px] max-sm:w-[150px] max-sm:text-[75px] flex items-center justify-center"
          >
            <Image src={play} alt='play' className='w-[200px] h-[200px] max-md:w-[150px] max-md:h-[150px] max-sm:w-[75px] max-sm:h-[75px]'/>
          </motion.button>
        </motion.div>
          <p className="mt-14 text-gray-400 text-[30px] px-4 text-center max-md:text-[20px] max-sm:text-[18px]">Click to begin the Baymax story</p>
      </div>
      )}

      {/* Timeline Section */}
      {showTimeline && (
        <>
          <div className="sticky top-0 z-40 flex items-center justify-center pt-20 bg-[#111827]">
            <h1 className="text-4xl font-extrabold text-white text-center">Let&apos;s Start From The Beginning</h1>
          </div>

          <div className="relative max-w-[1440px] mx-auto px-20 mt-16 pb-24 max-[500px]:px-10">
            <div className="absolute left-[78px] top-0 w-[4px] bg-white z-0 max-[500px]:left-[38px]" style={{ height: `100%` }} />

            {story.map((line, index) => {
              const lineText = `Day ${line.day}, Hour ${line.hour}: ${line.data}`
              const isCurrent = index === lineIndex

              return (
                <div
                  key={index}
                  ref={(el) => { sectionRefs.current[index] = el }}
                  className="relative w-full flex flex-row items-start min-h-[500px] pt-24"
                >
                  <div className={`w-4 h-4 rounded-full absolute left-[-8px] top-0 z-10 ${isCurrent ? 'bg-white scale-150 shadow-[0_0_20px_8px_rgba(255,255,255,0.6)] transition-all duration-500' : 'bg-white'}`} />
                  <div className="w-8" />

                  <div className="flex flex-col items-start gap-6 w-full max-w-3xl">
                    {typedLines[index] ? (
                      <p className="text-2xl font-extrabold text-white max-lg:text-xl max-md:text-md max-sm:text-xs">{typedLines[index]}</p>
                    ) : isCurrent && isTyping ? (
                      <ReactTyped
                        strings={[lineText]}
                        typeSpeed={60}
                        showCursor={false}
                        onComplete={handleTypingDone}
                        className="text-2xl font-extrabold text-white max-lg:text-xl max-md:text-md max-sm:text-xs"
                      />
                    ) : null}

                    {isClient && isCurrent && !isTyping && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="w-full aspect-video rounded-xl overflow-hidden shadow-lg"
                      >
                        <ReactPlayer
                          url={line.videoUrl}
                          width="100%"
                          height="100%"
                          playing
                          controls={false}
                          config={{
                            youtube: {
                              playerVars: {
                                modestbranding: 1,
                                rel: 0,
                                controls: 0,
                                showinfo: 0,
                              },
                            },
                          }}
                          onEnded={handleVideoEnd}
                        />
                      </motion.div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </>
      )}

      {/* Contact Form */}{
        animationComplete &&(

      <div className={`text-white w-full flex justify-center ${showTimeline ? 'mt-40' : 'min-h-screen items-center'}`}>
        <div className="max-w-[1440px] w-full flex justify-center items-center gap-4 rounded-lg p-6">
          <div className="w-full flex flex-col gap-8 items-center max-md:gap-4">
            <p className="text-[60px] font-bold text-center max-lg:text-[50px] max-md:text-[45px] ">Get in Touch</p>
            <p className="text-[#9CA3AF] mb-10 text-center max-md:text-[18px] max-[400px]:text-[14px]">
              Have questions about Baymax? We&apos;re here to help. Send us a message and we&apos;ll respond as soon as possible.
            </p>

            <form className="w-full flex flex-col gap-6 bg-transparent p-10 rounded-xl max-[600px]:p-0" onSubmit={handleSubmit}>
              <div className="flex gap-4 max-[600px]:flex-col">
                <div className="w-full md:w-1/2 flex flex-col gap-1">
                  <label htmlFor="name" className="text-lg">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-3 rounded-lg bg-black hover:outline-none hover:ring-2 hover:ring-white transition-all duration-150"
                  />
                </div>
                <div className="w-full md:w-1/2 flex flex-col gap-1">
                  <label htmlFor="email" className="text-lg">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 rounded-lg bg-black hover:outline-none hover:ring-2 hover:ring-white transition-all duration-150"
                  />
                </div>
              </div>

              <div className="w-full flex flex-col gap-1">
                <label htmlFor="subject" className="text-lg">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg bg-black hover:outline-none hover:ring-2 hover:ring-white transition-all duration-150"
                />
              </div>

              <div className="w-full flex flex-col gap-1">
                <label htmlFor="message" className="text-lg">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={10}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg bg-black hover:outline-none hover:ring-2 hover:ring-white transition-all duration-150"
                ></textarea>
              </div>

              <div className="w-full">
              <button
  type="submit"
  disabled={loading}
  className={`w-full py-3 rounded-lg bg-white text-black font-bold text-lg transition-all duration-150 flex items-center justify-center gap-2 ${
    loading ? 'opacity-60 cursor-not-allowed' : 'bg-white cursor-pointer'
  }`}
>
  {loading ? (
    <div className='flex gap-3 items-center justify-center'>

      <div className="w-5 h-5 border-4 border-black border-t-transparent rounded-full animate-spin" />
      Send Message
    </div>
  ) : (
    'Send Message'
  )}
</button>
              </div>
            </form>
          </div>
        </div>
      </div>
        )
      }
    </div>
  )
}

export default AboutUs
