'use client'
import Image from "next/image";
import React, { useState } from "react";
import shield from '@/assests/svg/Frame (4).svg' 

const Verify = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleChange = (index: number, value: string) => {
    if (!/^[0-9]?$/.test(value)) return; // Allow only numbers

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input if a number is entered
    if (value && index < otp.length - 1) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`)?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page refresh
    console.log("Entered OTP:", otp.join("")); // Log the OTP as a string
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-1/2 w-full px-12 flex flex-col items-center justify-center max-[786px]:max-w-full gap-4">
      <div className="bg-[#AF1024] rounded-full p-4">
        <Image src={shield} alt='shield'/>
      </div>
      <p className="text-black font-bold text-[24px]">Enter OTP</p>
      <p className="text-[#6B7280] text-sm font-light px-24 text-center">
        We&apos;ve sent a code to your email j***@email.com
      </p>
      <div className="flex gap-2 my-4">
        {otp.map((digit, index) => (
          <input
            key={index}
            id={`otp-${index}`}
            type="text"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className="w-12 h-12 text-center border border-gray-400 rounded-md focus:outline-none focus:border-red-500"
          />
        ))}
      </div>
      <button type="submit" className="w-[80%] bg-[#AF1024] text-white text-md font-light px-4 py-3 rounded-lg">
        Verify
      </button>
      <div className="w-full flex justify-center text-md">
        <p>Did&apos;t receive the code?</p>
        <p className="text-[#AF1024] ml-1 font-medium">Resend</p>
      </div>
      <div className="text-[#AF1024] text-xs">
      We&apos;re making sure it&apos;s really you
      </div>
    </form>
  );
};

export default Verify;
