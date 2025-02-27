"use client";

import { FaEdit } from "react-icons/fa";
import React, { useState } from 'react';

const GroupDescription = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };



  return (
    <section className="bg-white max-w-3xl p-4 mx-auto">
      {/* Title */}
      <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-black">Description</h2>
          <button className="flex items-center space-x-2 text-blue-500 hover:underline">
            <span>Edit</span>
            <FaEdit/>
          </button>
        </div>

      {/* Description Paragraph */}
      <p className={`mt-4 text-black text-gray-700 leading-relaxed ${isExpanded ? "" : "line-clamp-3"}`}>
        Our group is a dynamic collaboration of five talented individuals, seamlessly blending technical and design skills to deliver innovative solutions. Together, we bring a diverse array of strengths:

        {/* List of Roles */}
        <ul className="space-y-4">
          <li>
            <span className=" font-semibold text-gray-800">1. UI/UX Specialist —</span>{" "}
            Expert in crafting intuitive, user-centered interfaces for web and mobile applications, focusing on enhancing user experiences through wireframing, prototyping, and usability testing.
          </li>
          <li>
            <span className="font-semibold text-gray-800">2. Front-End Developer —</span>{" "}
            Skilled in HTML, CSS, JavaScript, and modern frameworks, they create responsive and interactive interfaces that align perfectly with the design team’s vision, ensuring seamless user interactions.
          </li>
          <li>
            <span className="font-semibold text-gray-800">3. Back-End Developer —</span>{" "}
            Specializes in server-side logic, databases, and API development, ensuring robust functionality and scalability for web and mobile applications.
          </li>
          <li>
            <span className="font-semibold text-gray-800">4. Graphic Designer —</span>{" "}
            Passionate about visual storytelling, they create compelling graphics, branding materials, and infographics that communicate complex ideas with clarity and aesthetic appeal.
          </li>
          <li>
            <span className="font-semibold text-gray-800">5. Project Manager —</span>{" "}
            An organized leader who bridges the technical and design teams, managing timelines, tasks, and communication to ensure successful project delivery.
          </li>
          
        </ul>
        <p className="text-gray-700 leading-relaxed">
          Together, we are committed to innovation, user satisfaction, and delivering high-quality projects that blend creativity and technology to meet and exceed expectations.
        </p>
      </p>

      
      <button
        onClick={toggleReadMore}
        className="text-blue-500 text-sm font-medium hover:underline"
        >
          {isExpanded ? "Read Less" : "Read More"}
      </button>
      {/* Closing Paragraph */}
      
    </section>

  );
};

export default GroupDescription;
