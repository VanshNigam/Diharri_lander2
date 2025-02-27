'use Client'

import React from 'react';
import Image from 'next/image'; 
import { FaPlus } from "react-icons/fa6";

const members = [
  {
    adminname: 'Steven Mathews',
    role: '</> Python Developer',
    location: 'Pune, Maharashtra',
    image: '/Image/Steven_Member.png',
    isAdmin: true, 
  },
  {
    name: 'Sudhish Kumar',
    role: 'UI/UX Specialist',
    location: 'Pune, Maharashtra',
    image: '/Image/Sudhish_Member.png',
  },
  {
    name: 'Cannon Grey',
    role: 'Frontend Developer',
    location: 'Pune, Maharashtra',
    image: '/Image/Cannon_Member.png',
  },
  {
    name: 'Williams Skate',
    role: 'Graphic Designer',
    location: 'Pune, Maharashtra',
    image: '/Image/Williams_Member.png',
  },
  {
    name: 'Robertson',
    role: 'Product Manager',
    location: 'Pune, Maharashtra',
    image: '/Image/Steven_Member.png',
  },
];

const Members = () => {
  return (
    <section className="bg-white p-4 max-w-3xl mx-auto">
      <div className='flex justify-between items-center'>
        <h3 className="text-lg font-bold text-gray-800">Members <span className='font-light'>(5 members)</span></h3>
        <p className='flex gap-2 items-center text-blue-500 hover:underline cursor-pointer'>Add Members <FaPlus /></p>
      </div>
      
      <ul className="mt-4 space-y-4">
        {members.map((member, index) => (
          <li
            key={index}
            className="flex items-center justify-between bg-white p-4 rounded-lg shadow"
          >
            <div className="flex items-center space-x-4">
              {/* Member Image */}
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src={member.image} 
                  alt='Member_Image'
                  width={48} 
                  height={48} 
                  className="object-cover"
                />
              </div>
              {/* Member Details */}
              <div>
              {member.isAdmin && <span className="text-blue-500 font-semibold">{member.adminname}</span>}
                <p className="text-gray-700 font-semibold">{member.name}</p>
                <p className="text-sm text-gray-600 mt-2">
                  {member.role} | {member.location}
                </p>
              </div>
            </div>
            {/* Admin Label */}
            {member.isAdmin && <span className="text-blue-500 font-semibold">Admin</span>}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Members;
