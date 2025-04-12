'use client'

import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const AboutUs = () => {
  const [animationComplete, setAnimationComplete] = useState(false)
  const [currentText, setCurrentText] = useState('')
  const [lineIndex, setLineIndex] = useState(0)

  // Hardcoded story data
  const story = [
    "Day 0 at 0900 Hours: Master starts coding me, working on the basics of medical diagnostics and robot movement.",
    "Day 182 at 1300 Hours: My inflatable body is constructed, but I struggle with balance and stability during tests.",
    "Day 234 at 1500 Hours: A catastrophic error erases all my programming, leaving Master frustrated but determined to rebuild from scratch.",
    "Day 368 at 1700 Hours: Master starts coding me with a more advanced design, and I am finally given the name 'Baymax.'",
    "Day 275 at 1200 Hours: My first test in the field is a failure; my inflatable body causes minor harm instead of helping.",
    "Day 300 at 1800 Hours: My empathy module is added, allowing me to diagnose and comfort a patient successfully.",
    "Day 400 at 2000 Hours: Every test, every trial — all seemed perfect, but disappointment strikes. I wasn’t quite there yet."
  ]

  const speakText = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text)
    window.speechSynthesis.speak(utterance)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (lineIndex < story.length) {
      let currentChar = 0
      const interval = setInterval(() => {
        if (currentChar < story[lineIndex].length) {
          setCurrentText((prevText) => prevText + story[lineIndex][currentChar])
          currentChar++
        } else {
          clearInterval(interval)
          speakText(story[lineIndex]) // Speak the current line after it finishes typing
          setLineIndex((prevIndex) => prevIndex + 1) // Move to the next line
        }
      }, 50) // Typing speed

      return () => clearInterval(interval)
    }
  }, [lineIndex])

  return (
    <div className="relative w-full h-screen overflow-hidden">
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

      <div className={`absolute inset-0 z-40 flex items-center justify-center text-white transition-opacity duration-500 ${animationComplete ? 'bg-[#111827]' : 'bg-transparent'}`}>
        <h1 className="text-3xl font-bold">About Us</h1>
      </div>

      {/* Typing effect and line animation */}
      <div className="absolute bottom-10 w-full px-4 z-40 flex justify-center">
        <div className="relative flex items-center gap-2 justify-center max-w-[1440px] w-full ">
        
          <div className="text-white font-mono text-lg whitespace-pre-wrap">{currentText}</div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
