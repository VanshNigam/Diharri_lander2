"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { BiSolidEdit } from "react-icons/bi";



interface ProfileCardProps {
  logoUrl: string | StaticImageData;
  companyName: string;
  industry: string;
  location: string;
  employees: string;
  description: string;
  overview: string;
  website: string;
  Industry: string;
  Company_Size: string;
  Headquarters: string;
};

const Employer_Profile_Data: React.FC<ProfileCardProps> = ({
  logoUrl,
  companyName,
  industry,
  location,
  employees,
  description,
  overview,
  website,
  Industry,
  Company_Size,
  Headquarters,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="container mx-auto mt-3 py-10 px-5 max-w-4xl bg-gradient-to-b from-gradientStart to-gradientEnd rounded-t-[120px]">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image
            src={logoUrl}
            alt={`${companyName} Logo`}
            width={180}
            height={200}
            className="rounded-full"
          />
        </div>

        {/* Company Info */}
        <div className="text-center md:text-left">
          <h1 className="text-[20px] sm:text-xl md:text-2xl font-semibold text-gray-900">
            {companyName}
          </h1>
          <p className="text-sm sm:text-base text-gray-500 mt-2">
            {industry} | {location} | {employees}
          </p>
          <p className="text-sm text-gray-700 mt-6">{description}</p>
        </div>
      </div>

      {/* Divider
      <div className="my-6 border-t border-gray-300"></div> */}

      {/* Overview Section */}
      <div className="space-y-5 space-x-10">
        <div className="flex items-center justify-between ">
          <h2 className="text-lg font-semibold text-gray-900 ml-9 mt-10">Overview</h2>
          <button className="text-sm text-blue-500 hover:underline flex items-center">
            Edit <BiSolidEdit  />
          </button>
        </div>
        <p
          className={`text-sm text-gray-700 ${
            isExpanded ? "" : "line-clamp-3"
          }`}
        >
          {overview}
        </p>
        <button
          onClick={toggleReadMore}
          className="text-blue-500 text-sm font-medium hover:underline focus:outline-none"
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      </div>

      {/* Divider */}
      <div className="my-6 border-t border-gray-300"></div>

      {/* Additional Details */}
      <div className="space-x-10">
        {/* Website */}
        <div className="space-x-10"> 
          <h3 className="text-md font-semibold text-gray-900 ml-10">Website</h3>
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:underline mt-1 block"
          >
            {website}
          </a>
        </div>

        {/* Industry */}
        <div className="mt-5">
          <h3 className="text-md font-semibold text-gray-900">Industry</h3>
          <p className="text-sm text-gray-700">{Industry}</p>
        </div>

        {/* Company Size */}
        <div className="mt-5">
          <h3 className="text-md font-semibold text-gray-900">Company Size</h3>
          <p className="text-sm text-gray-700">{Company_Size}</p>
        </div>

        {/* Headquarters */}
        <div className="mt-5">
          <h3 className="text-md font-semibold text-gray-900">Headquarters</h3>
          <p className="text-sm text-gray-700">{Headquarters}</p>
        </div>
      </div>
    </div>
  );
};

export default Employer_Profile_Data;
