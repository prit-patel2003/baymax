'use client'
import React, { useState } from "react";
import Image from "next/image";
import mainLogo from "@/assests/svg/Frame.svg";
import Google from '@/assests/svg/Frame (1).svg'
import Apple from '@/assests/svg/Frame (2).svg'
import Facebook from '@/assests/svg/Frame (3).svg'
import Link from "next/link";

const Login = () => {
    const [email, setEmail] = useState("");
      const [isChecked, setIsChecked] = useState(false);
      const [password, setPassword] = useState("");
    
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(email,isChecked,password)
        setEmail('')
        setPassword('')
        setIsChecked(false)
    
    
    
      };
    return (
        <div className="max-w-1/2 w-full px-12 py-16 flex flex-col max-[786px]:max-w-full">
          <div className="w-full flex gap-2">
            <Image
              src={mainLogo}
              className="max-w-[40px] max-h-[40px] w-full h-full"
              alt="main logo"
            />
            <p className="text-[#AF1024] font-bold text-[24px]">Baymax</p>
          </div>
          <div className="w-full mt-2 text-black text-[30px] font-bold">
            Welcome Back!
          </div>
          <div className="w-full mt-4 text-[#6B7280] text-md font-light">
            Your personal healthcare companion is here
          </div>

          {/* ✅ Form using useState */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
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
              placeholder="Enter your email"
            />
            </div>
            <div className="w-full flex justify-between">
              <div className="flex items-center gap-1.5">

            <input
                type="checkbox"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
                className="w-4 h-4"
                style={{
                  accentColor: "#AF1024", // Custom styling for checkbox color
                }}
              />
              <p className="text-[14px]">
                Remember me
              </p>
              </div>
              <Link href='/reset-password' className="text-[14px] text-[#AF1024]">Forgot Password?</Link>
           
            </div>

            <button type="submit" className="bg-[#AF1024] text-white text-md font-light px-4 py-3 rounded-xl">
              Sign In
            </button>
          </form>
          <div className="mt-5 w-full flex justify-center text-md">
          <p>Don&apos;t have an account?</p>
          <Link href='/Signup' className="text-[#AF1024] ml-1 font-medium">Sign Up</Link>
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
        </div>

     
    
);
}
export default Login;