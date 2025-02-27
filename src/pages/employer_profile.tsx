"use client";

import React from 'react'
import logo from "../../public/Image/Employer_image.png"
import Employer_Profile_Data from './Employer_Profile_Data';
import Navbar from '@/components/Navbar';

function employer_profile() {
  return (
    <div className="min-h-screen mt-4 bg-white text-gray-800 font-sans">
      <Navbar/>
      <Employer_Profile_Data
        logoUrl={logo}
        companyName="AD Creatives"
        industry="Advertising and Marketing"
        location="Bengaluru, Karnataka"
        employees="10K+ employees"
        description="AD Creatives is a visionary creative agency specializing in crafting captivating advertising solutions that elevate brands. With a focus on strategic innovation, design excellence, and impactful storytelling, we transform concepts into powerful campaigns that resonate with audiences and drive results."
        overview="Our multidisciplinary team of creatives, strategists, and digital experts brings ideas to life through data-driven insights, ensuring every message cuts through the noise and inspires connection. Whether it’s branding, digital marketing, or creative content, AD Creatives is committed to pushing boundaries and making your brand stand out. Let’s make creativity work for you!"
        website="https://www.adcreations.com"
        Industry="Advertising and Marketing"
        Company_Size="10,001+ employees"
        Headquarters="Bengaluru, Karnataka"
      />
    </div>
  )
}

export default employer_profile;