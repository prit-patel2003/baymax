'use client'
import Image from 'next/image';
import React, { useState } from 'react'
import leftarrow from '@/assests/svg/Frame (5).svg'
import Link from 'next/link';

const ResetPassword = () => {
              const [password, setPassword] = useState("");
              const [confirmPassword, setConfirmPassword] = useState("");
    
            
              const handleSubmit = (e: React.FormEvent) => {
                e.preventDefault();
                console.log(confirmPassword,password)
                setConfirmPassword('')
                setPassword('')
            
            
            
              };
  return (
    <div className='max-w-1/2 w-full px-12 flex flex-col items-center justify-center max-[786px]:max-w-full gap-4'>
          <div className="mt-2 text-black text-[30px] font-bold">
          Reset Password
          </div>
          <div className="text-[#6B7280] text-sm font-medium">
          Enter your new password to reset
          </div>

          {/* ✅ Form using useState */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4 w-full">
          <div className="flex flex-col gap-2">

            <label className="text-sm font-medium">New Password:</label>
            <input
            type="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-[#ADAEBC] border px-4 py-3 rounded-xl"
            placeholder="Enter your Full Name"
            />
            </div>
           
            <div className="flex flex-col gap-2">

            <label className="text-sm font-medium">Confirm Password:</label>
            <input
            type="Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="border-[#ADAEBC] border px-4 py-3 rounded-xl"
            placeholder="Enter your Full Name"
            />
            </div>

            <button type="submit" className="bg-[#AF1024] text-white text-md font-light px-4 py-3 rounded-xl">
              Reset Password
            </button>
          </form>
            <div className='flex gap-2 w-full items-center justify-center group transition-transform duration-1000'>
                <Image src={leftarrow} alt='arrow' className='block group-hover:-translate-x-2 transition-transform'/>
                <Link href='/Login' className='text-[#AF1024] font-medium'>
                Back to Login
                    </Link>
            </div>
    </div>
  )
}
export default ResetPassword