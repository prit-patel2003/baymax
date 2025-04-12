'use client'
import React, { useState } from "react";
import Image from "next/image";
import mainLogo from "@/assests/svg/Frame.svg";
import Google from '@/assests/svg/Frame (1).svg'
import Apple from '@/assests/svg/Frame (2).svg'
import Facebook from '@/assests/svg/Frame (3).svg'
import Link from "next/link";

const Signup = () => {
        const [email, setEmail] = useState("");
          const [password, setPassword] = useState("");
          const [fullname, setFullName] = useState("");

        
          const handleSubmit = (e: React.FormEvent) => {
            e.preventDefault();
            console.log(email,fullname,password)
            setEmail('')
            setPassword('')
            setFullName('')
        
        
        
          };
  return (
    <div className="max-w-1/2 w-full px-12 py-12 flex flex-col max-[786px]:max-w-full">
          <div className="w-full flex gap-2">
            <Image
              src={mainLogo}
              className="max-w-[40px] max-h-[40px] w-full h-full"
              alt="main logo"
            />
            <p className="text-[#AF1024] font-bold text-[24px]">Baymax</p>
          </div>
          <div className="w-full mt-2 text-black text-[30px] font-bold">
            Create Account
          </div>
          <div className="w-full mt-4 text-[#6B7280] text-sm font-light">
          Join Baymax AI for personalized healthcare assistance
          </div>

          {/* ✅ Form using useState */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
          <div className="w-full flex flex-col gap-2">

            <label className="text-sm font-medium">Full Name:</label>
            <input
            type="text"
            value={fullname}
            onChange={(e) => setFullName(e.target.value)}
            className="border-[#ADAEBC] border px-4 py-3 rounded-xl"
            placeholder="Enter your Full Name"
            />
            </div>
            <div className="w-full flex flex-col gap-2">

            <label className="text-sm font-medium">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-[#ADAEBC] border px-4 py-3 rounded-xl"
              placeholder="Enter your email"
            />
            </div>
            <div className="w-full flex flex-col gap-2">

            <label className="text-sm font-medium">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-[#ADAEBC] border px-4 py-3 rounded-xl"
              placeholder="Enter your Password"
            />
            </div>

            <button type="submit" className="bg-[#AF1024] text-white text-md font-light px-4 py-3 rounded-xl">
              Sign Up
            </button>
          </form>
          <div className="relative my-4 flex items-center">
  <div className="w-full border-t border-[#ADAEBC] mt-2"></div>
  <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 mt-2">
    Or
  </p>
</div>

          <div className="mt-4 flex w-full items-center justify-center gap-6">
            <div className="p-2 border border-[#ADAEBC] w-auto rounded-[20px] flex justify-center items-center">
              <Image src={Google} alt='Google' className="w-[20px] h-[20px]"/>
            </div>
            <div className="p-2  border border-[#ADAEBC] w-auto rounded-[20px]">
              <Image src={Apple} alt='apple' className="w-[20px] h-[20px] pl-[1px]"/>
            </div>
            <div className="p-2 border border-[#ADAEBC] w-auto rounded-[20px]">
              <Image src={Facebook} alt='facebook' className="w-[20px] h-[20px] pl-[1px]"/>
            </div>
          </div>
          <div className="mt-5 w-full flex justify-center text-md">
          <p>Already have an account?</p>
          <Link href='/Login' className="text-[#AF1024] ml-1 font-medium">Sign in</Link>
          </div>
        </div>
  )
}
export default Signup
