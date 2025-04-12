'use client'
import React, { ReactNode } from "react";
import Image from "next/image";
import logo from "@/assests/svg/version 0.svg";
interface LayoutProps {
  children: ReactNode;
}

const layout: React.FC<LayoutProps> = ({ children }) => (
    <div>
      <div className="w-full flex flex-col items-center bg-[#AF1024]">
      <div className="max-w-[1440px] w-full h-lvh flex justify-center items-center ">
        <div className="max-w-[1024px] bg-white w-full rounded-2xl flex shadow-2xl h-auto m-5">
          {children}

          <div className="bg-[#AF1024] w-full flex flex-col justify-center items-center gap-6 max-[786px]:hidden py-16">
            <Image
              src={logo}
              className="max-w-[384px] max-h-[384px] w-full h-full max-[943px]:max-w-[300px] max-[943px]:max-h-[300px]"
              alt="main logo"
            />
            <div className="flex flex-col gap-4 justify-center items-center">
              <p className="text-white text-[24px] font-semibold leading-6">
                Healthcare Companion
              </p>
              <p className="text-white text-[14px] font-light leading-4">
                Did Tadashi send you to get your health checked?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );


export default layout;
