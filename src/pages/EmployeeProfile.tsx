"use client";

import Image from "next/image";
import { FaEdit, FaFileAlt } from "react-icons/fa";
import { PiCode } from "react-icons/pi";
import Avatar from "../../public/Image/Employee_Aavtar.png";
import { RiDownload2Line } from "react-icons/ri";
import Employee_Exp from "../../public/Image/Employee_Exp.png"
import Employee_Edu from "../../public/Image/Employee_Education.png"

import { useState } from "react";
import Navbar from "@/components/Navbar";


const EmployeeProfile = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };


  return (
    <div className="min-h-screen mt-4 bg-white text-gray-800 font-sans">
      <Navbar/>
      {/* Main Content */}
      <main className="container mx-auto mt-3 py-10 px-5 max-w-4xl bg-gradient-to-b from-gradientStart to-gradientEnd rounded-t-[120px]">
        {/* Profile Section */}
        <section className="rounded-lg p-4 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-10">
          <Image
            src={Avatar}
            alt="Avatar"
            className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto md:mx-0"
          />
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold">Steven Mathews</h1>
            <p className="flex justify-center md:justify-start items-center text-gray-500 mt-2">
              <PiCode className="mr-2 text-gray-500" />
              Python Developer | Pune, Maharashtra
            </p>
            <p className="mt-3 text-black font-semibold">
              Steven Mathews is an experienced Python Developer with a passion for
              building efficient, scalable, and robust software solutions.
            </p>
          </div>
        </section>

        {/* About Section */}
        <section className="mt-6 px-4 sm:px-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-black">About</h2>
            <button className="flex items-center space-x-2 text-blue-500 hover:underline">
              <FaEdit />
              <span>Edit</span>
            </button>
          </div>
          <p className={`mt-4 text-black font-semibold ${isExpanded ? "" : "line-clamp-3"}`}>
            Hi, I’m Steven, a dedicated Python Developer with a focus on creating high-performance applications and automating processes to 
            solve business challenges. I enjoy working on both backend and frontend development, building web apps, scripts, and data-driven projects.
            I’m always learning new tools and technologies to stay ahead in the ever-evolving tech world. Problem-solving drives me, and I love 
            combining my technical expertise with teamwork to create user-friendly solutions. Outside of coding, you’ll find me mentoring new 
            developers and contributing to open-source projects.
          </p>
          <button
            onClick={toggleReadMore}
            className="text-blue-500 text-sm font-medium hover:underline"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        </section>

        {/* Resume Section */}
        <section className="mt-6 px-4 sm:px-6 sm:w-[40%] w-[70%]">
          <h2 className="text-xl font-bold text-black mb-3">Resume</h2>
          <div className="inline-flex items-center gap-2 px-4 py-2 mt-2 border-2 border-blue-500 rounded-md bg-blue-50 text-blue-500 font-medium hover:bg-blue-500 hover:text-white transition cursor-pointer">
            <FaFileAlt className="text-xl" />
            <a href="#" className="hover:underline">
              Doc file 25 MB
            </a>
            <RiDownload2Line className="text-xl" />
          </div>
        </section>

        {/* Experience Section */}
        <section className="mt-6 p-4 sm:px-6">
          <h2 className="text-xl font-bold text-black">Experience</h2>
          <div className="mt-4 flex flex-col lg:flex-row lg:space-x-8">
            {/* Image Section */}
            <div className="mt-2 flex lg:justify-start">
              <Image
                src={Employee_Exp}
                alt="Employee Experience"
                className="w-[110px] h-[110px] rounded-lg"
              />
            </div>

            {/* Content Section */}
            <div className="mt-4 lg:mt-0 w-full lg:w-2/3">
              <h3 className="font-bold text-xl">Intern - Frontend Developer</h3>
              <p className="text-md text-black font-semibold">Funnel Technologies</p>
              <p className="text-gray-500 font-semibold">Sept 2023 - Mar 2024 | 6 months</p>
              <p className="text-gray-500 font-semibold">Pune, Maharashtra, India | Remote</p>
              <p
                className={`mt-2 text-gray-500 font-semibold ${
                  isExpanded ? "" : "line-clamp-3"
                }`}
              >
                As a Frontend Developer Intern at Funnel Technologies, I focus on building
                responsive and interactive web applications using HTML, CSS, JavaScript, and
                React. I collaborate with backend teams to integrate APIs, optimize user
                interfaces, and ensure cross-browser compatibility, enhancing user
                experiences. Working remotely from Pune, I am continuously honing my skills
                and contributing to impactful digital solutions.
              </p>
              <button
                onClick={toggleReadMore}
                className="text-blue-500 text-sm font-medium hover:underline mt-2"
              >
                {isExpanded ? "Read Less" : "Read More"}
              </button>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="mt-6 px-4 sm:px-6">
          <h2 className="text-xl font-bold text-black">Education</h2>
          <div className="mt-4 flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8">
            <div className="w-30  md:w-[98px] md:mx-0">
              <Image src={Employee_Edu} alt="Employee Education" />
            </div>
            <div>
              <h3 className="font-bold text-xl">Dune Institute</h3>
              <p className="text-sm text-black font-semibold">
                Bachelor&apos;s in Technology, Computer Science
              </p>
              <p className="text-gray-500 font-semibold mt-2">2022-2026</p>
            </div>
          </div>
        </section>

        {/* Skills & Interests Section */}
      <section className="mt-6 px-4 sm:px-6">
        <h2 className="text-xl font-bold text-black">Skills & Interests</h2>
        <div className="mt-4 flex flex-wrap gap-4">
          {["Web Development", "Software Development", "Python", "UI/UX Design"].map(skill => (
            <span
              key={skill}
              className="px-6 py-3 font-semibold border border-blue-500 text-black rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </main>
  </div>

  );
};

export default EmployeeProfile;
