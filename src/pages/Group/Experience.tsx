"use client"

import Image from 'next/image';
import React, { useState } from 'react';
import Employee_Exp from "../../../public/Image/Employee_Exp.png"


const Experience = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleReadMore = () => {
      setIsExpanded(!isExpanded);
    };

    
  return (
    <section className="bg-white space-y-6 p-4 max-w-3xl mx-auto ">
          <h2 className="text-xl font-bold text-black">Experience</h2>
          <div className="mt-4 flex flex-col lg:flex-row lg:space-x-8">
            {/* Image Section */}
            <div className="mt-2 flex lg:justify-start">
              <Image
                src={Employee_Exp}
                alt="Employee Experience"
                className="w-[100px] h-[100px] rounded-lg"
              />
            </div>

            {/* Content Section */}
            <div className="mt-4 lg:mt-0 w-full lg:w-2/3">
              <h3 className="font-bold text-xl">Intern - Frontend Developer</h3>
              <p className="text-md text-grey-500 font-semibold">Funnel Technologies</p>
              <p className="text-gray-400 font-semibold">Sept 2023 - Mar 2024 | 6 months</p>
              <p className="text-gray-400 font-semibold">Pune, Maharashtra, India | Remote</p>
              <p
                className={`mt-2 text-gray-400 font-semibold ${
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
  );
};

export default Experience;
