'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import aiassistant from '@/assests/Images/ai-assistant.png'
import microphone from '@/assests/svg/Frame (16).svg'
import send from '@/assests/svg/Frame (18).svg'
import upload from '@/assests/svg/attach_file_24dp_999999_FILL0_wght400_GRAD0_opsz24.svg'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

export const AIAssistant = () => {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState<string[]>([])
  const [hasMounted, setHasMounted] = useState(false)

  const {
    transcript,
    listening,
    browserSupportsSpeechRecognition,
    resetTranscript
  } = useSpeechRecognition()

  useEffect(() => {
    setHasMounted(true)
  }, [])

  useEffect(() => {
    if (hasMounted && !listening && transcript.trim()) {
      setMessages((prev) => [...prev, transcript])
      setMessage('')
      resetTranscript()
    }
  }, [hasMounted, listening, transcript, resetTranscript])

  if (!hasMounted) return null // ⛔ Prevent SSR mismatch

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn&apos;t support speech recognition.</span>
  }

  const startListening = () =>
    SpeechRecognition.startListening({ continuous: false, language: 'en-IN' })

  const handleSend = () => {
    if (message.trim() !== '') {
      setMessages((prev) => [...prev, message])
      setMessage('')
    }
  }

  return (
    <div className='bg-[#AF1024] w-full flex justify-center items-center'>
      <div className='max-w-[1440px] w-full p-10 flex justify-center items-center'>
        <div className='w-full bg-white flex gap-4 rounded-lg shadow-lg'>
          <div className='flex flex-col gap-2 w-1/2 justify-center items-center p-6'>
            <p className='text-[#AF1024] text-[30px] font-bold'>Hello, I am Baymax</p>
            <p className='text-[#4B5563] text-lg font-medium'>Your Personal Healthcare Companion</p>
            <Image src={aiassistant} alt='aiassistant' />
          </div>

          <div className='bg-[#F3F4F6] w-1/2 p-6 rounded-lg flex flex-col gap-4'>
            <div className='bg-white rounded-lg shadow-lg p-4 h-[80%] overflow-y-auto flex flex-col gap-3'>
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className='bg-[#AF1024] text-white px-4 py-2 rounded-xl self-end max-w-[80%] text-sm animate-slideUp'
                >
                  {msg}
                </div>
              ))}
            </div>

            <div className='bg-white rounded-lg shadow-lg p-4 h-[20%] flex gap-3 w-full items-center transition-shadow duration-300'>
              <div
                className='bg-[#AF1024] p-4 flex justify-center items-center rounded-[30px] w-[50px] h-[50px] cursor-pointer hover:shadow-[0_4px_10px_0_rgba(175,16,36,0.5)] transition-shadow duration-300'
                onClick={startListening}
              >
                <Image src={microphone} alt='microphone' />
              </div>

              <input
                type='text'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder='Type your message'
                className='flex-1 bg-transparent outline-none text-[#4B5563] placeholder:text-[#9CA3AF]'
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              />

              <Image src={upload} alt='upload' className='cursor-pointer' />

              <div
                className='bg-[#AF1024] p-4 flex justify-center items-center rounded-[30px] w-[50px] h-[50px] cursor-pointer hover:shadow-[0_4px_10px_0_rgba(175,16,36,0.5)] transition-shadow duration-300'
                onClick={handleSend}
              >
                <Image src={send} alt='send' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
