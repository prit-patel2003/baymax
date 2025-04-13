'use client'

import React, { useState, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ReactTyped } from 'react-typed'
import ReactPlayer from 'react-player'

const AboutUs = () => {
  const [animationComplete, setAnimationComplete] = useState(false)
  const [lineIndex, setLineIndex] = useState(0)
  const [typedLines, setTypedLines] = useState<string[]>([])
  const [isTyping, setIsTyping] = useState(true)
  const [isClient, setIsClient] = useState(false)
  const [contentVisible, setContentVisible] = useState(false) // New state for content visibility
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])

  const story = [
    { day: 1, hour: 900, data: 'Master starts with my first test...', videoUrl: 'https://youtu.be/EVcuEGlj2SM' },
    { day: 7, hour: 1700, data: 'My inflatable body gets out of control...', videoUrl: 'https://youtu.be/vl3f85FzcGM' },
    { day: 33, hour: 1500, data: 'A catastrophic error shuts down the entire building but still he does not give up on me..', videoUrl: 'https://youtu.be/8yBdXaGxmuo' },
    { day: 84, hour: 900, data: 'Losing all hope one final test...', videoUrl: 'https://youtu.be/RZUAytnJHo8' },
  ]

  useEffect(() => {
    setIsClient(true)
    const timer = setTimeout(() => {
      setAnimationComplete(true)
      setContentVisible(true) // Set contentVisible to true after 1.5s
    }, 1800)
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

      {/* Header */}
     

      {/* Story */}
      {contentVisible && ( 
        // Render the content after 1.5s delay
        <>
        <div className={`sticky top-0 z-40 flex items-center justify-center pt-20 transition-opacity duration-500 ${animationComplete ? 'bg-[#111827]' : 'bg-transparent'}`}>
        <h1 className="text-4xl font-extrabold text-white text-center">Let&apos;s Start From The Beginning</h1>
      </div>
        <div className="relative max-w-[1440px] mx-auto px-20 mt-16 pb-24 max-[500px]:px-10">
          {/* Vertical Line */}
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
                {/* Dot */}
                <div className={`w-4 h-4 rounded-full absolute left-[-8px] top-0 z-10 ${isCurrent ? 'bg-white scale-150 shadow-[0_0_20px_8px_rgba(255,255,255,0.6)] transition-all duration-500' : 'bg-white'}`} />
                <div className="w-8" />

                {/* Text + Video */}
                <div className="flex flex-col items-start gap-6 w-full max-w-3xl">
                  {/* Text */}
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

                  {/* Video */}
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
    </div>
  )
}

export default AboutUs
