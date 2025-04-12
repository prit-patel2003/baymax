
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import whiteLogo from '@/assests/svg/Frame (6).svg'
import call from '@/assests/svg/Frame (8).svg'
import facebook from '@/assests/svg/Frame (9).svg'
import instagram from '@/assests/svg/Frame (11).svg'
import linkdin from '@/assests/svg/Frame (12).svg'
import mail from '@/assests/svg/mail_24dp_WHITE_FILL0_wght400_GRAD0_opsz24.svg'
import twitter from '@/assests/svg/icons8-x.svg'

const Footer = () => {
    const copyToClipboard = (text:string) => {
        navigator.clipboard.writeText(text);
      };
    
      const openGmail = () => {
        window.open('https://mail.google.com/mail/u/0/?view=cm&fs=1&to=support@baymax.ai', '_blank');
      };
  return (
    <div className='w-full bg-[#111827] flex flex-col items-center justify-center py-10 gap-12'>
        <div className='max-w-[1440px] w-full px-4  grid grid-cols-4 justify-items-center gap-10 text-[#9CA3AF] max-[900px]:grid-cols-2 max-[550px]:grid-cols-1'>
            <div className='flex flex-col gap-4 w-full'>

        <Link href='/' className="flex gap-2 cursor-pointer">
                    <Image src={whiteLogo} alt="white logo" />
                    <p className="text-white font-bold text-[24px] pt-[7px]">Baymax</p>
                </Link>
                <p className='hover:text-white transition-all duration-300'>Your trusted AI healthcare companion, available 24/7.</p>
            </div>
            <div className='flex flex-col gap-4 w-full '>

                    <p className="text-white font-bold text-[24px] pt-[7px]">Ouick Links</p>
                <div className='flex flex-col gap-2 text-[#9CA3AF]'>
                    <Link href='/' className='hover:text-white transition-all duration-300'>Home</Link>
                    <Link href='/' className='hover:text-white transition-all duration-300'>AI Assistant</Link>
                    <Link href='/' className='hover:text-white transition-all duration-300'>Schedule Call</Link>
                    <Link href='/' className='hover:text-white transition-all duration-300'>About Us</Link>

                </div>
            </div>
            <div className='flex flex-col gap-4 w-full '>


                
                    <p className="text-white font-bold text-[24px] pt-[7px]">Services</p>
            
                <p className='hover:text-white transition-all duration-300'>Health Monitoring.</p>
                <p className='hover:text-white transition-all duration-300'>Doctor Appointments</p>
                <p className='hover:text-white transition-all duration-300'>24/7 Support</p>
                <p className='hover:text-white transition-all duration-300'>Emergency Care</p>

            </div>
            <div className='flex flex-col gap-4 w-full '>

                    <p className="text-white font-bold text-[24px] pt-[7px]">Contact Us</p>
                <div className='flex flex-col gap-2'>
                    <div className='flex gap-2 cursor-pointer'  onClick={() => {
                                            copyToClipboard('support@baymax.ai');
                                            openGmail();
                                            }}>


                    <Image src={mail} alt='mail'/>
                    <p className='hover:text-white transition-all duration-300'>

                    support@baymax.ai
                    </p>
                    </div>
                    <div>
                    <div className='flex gap-2 items-center cursor-pointer'   onClick={() => copyToClipboard('+1 (555) 123-4567')}>


                    <Image src={call} alt='mail' className='w-[18px] h-[18px] ml-1'/>
                    <p className='hover:text-white transition-all duration-300'>

                    +1 (555) 123-4567
                    </p>
                    </div>
                    
                   
                    </div>


                </div>
                <div className='flex gap-4 w-full items-center'>

                    <Image src={facebook} alt='mail'/>
                    <Image src={twitter} alt='mail' className='w-[20px] h-[20px]'/>
                    <Image src={instagram} alt='mail'/>
                    <Image src={linkdin} alt='mail'/>
                </div>
            </div>
        </div>
        <div className='text-[#9CA3AF] flex items-center'>
        © 2025 Baymax. All rights reserved.
        </div>
    </div>
  )
}
export default Footer